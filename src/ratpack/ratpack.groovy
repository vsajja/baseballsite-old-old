import com.zaxxer.hikari.HikariConfig
import groovy.json.JsonBuilder
import jooq.generated.tables.pojos.MlbPlayer
import org.baseballsite.services.BaseballService
import org.baseballsite.services.MlbStatsAPIService
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import ratpack.groovy.sql.SqlModule
import ratpack.handling.RequestLogger
import ratpack.hikari.HikariModule
import org.baseballsite.postgres.PostgresConfig
import org.baseballsite.postgres.PostgresModule
import groovy.json.JsonSlurper

import static ratpack.groovy.Groovy.ratpack

final Logger log = LoggerFactory.getLogger(this.class)

ratpack {
    serverConfig {
        props("db.properties")
        require("/postgres", PostgresConfig)
    }

    bindings {
        module HikariModule, { HikariConfig config ->
            config.setMaximumPoolSize(2)
            config.dataSource = new PostgresModule().dataSource(serverConfig.get('/postgres', PostgresConfig))
        }
        module SqlModule

        bind BaseballService
        bind MlbStatsAPIService
    }

    handlers { BaseballService baseballService, MlbStatsAPIService mlbStatsAPIService ->
        all RequestLogger.ncsa(log)

        all {
            String forwardedProto = 'X-Forwarded-Proto'
            if (request.headers.contains(forwardedProto)
                    && request.headers.get(forwardedProto) != 'https') {
                redirect(301, "https://${request.headers.get('Host')}${request.rawUri}")
            } else {
                next()
            }
        }

        all {
            response.headers.add('Access-Control-Allow-Origin', '*')
            response.headers.add('Access-Control-Allow-Headers', 'Authorization, origin, x-requested-with, content-type')
            response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            next()
        }

        get('update/mlb/teams') {
            def mlbTeams = mlbStatsAPIService.getMlbTeams()

            mlbTeams.each { team ->
                baseballService.insertMlbTeam(team)
            }

            render 'finished'
        }

        get('update/mlb/roster') {
            def mlbTeams = mlbStatsAPIService.getMlbTeams()

            mlbTeams.each { team ->
                List<MlbPlayer> roster = mlbStatsAPIService.getRoster(team.getTeamId())
                roster.each { MlbPlayer mlbPlayer ->
                    baseballService.insertMlbPlayer(mlbPlayer)
                }
            }

            render 'finished'
        }

        get('leaders') {
            String jsonStr = "http://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting,pitching".toURL().text

            def result = new JsonSlurper().parseText(jsonStr)

            def leagueLeaders = result['stats'][0]['splits'].collect {
                def playerName = it['player']['fullName']
                def mlbPlayerId = it['player']['id']
                def position = it['position']['abbreviation']

                def rank = it['rank']

                def gamesPlayed = it['stat']['gamesPlayed']
                def hits = it['stat']['hits']
                def atBats = it['stat']['atBats'].toString()
                def runs = it['stat']['runs']
                def homeRuns = it['stat']['homeRuns']
                def rbi = it['stat']['rbi']
                def stolenBases = it['stat']['stolenBases']
                def avg = it['stat']['avg']
                def obp = it['stat']['obp']
                def slug = it['stat']['slg']
                def ops = it['stat']['ops']

                println "$rank $playerName"
                println "${gamesPlayed}G ${hits}/${atBats}AB ${runs}R ${homeRuns}HR ${rbi}RBI ${stolenBases}SB ${avg}AVG ${obp} OBP ${slug} SLG ${ops} OPS"

                return [
                        'playerName' : playerName,
                        'mlbPlayerId': mlbPlayerId,
                        'position'   : position,
                        'rank'       : rank,
                        'gamesPlayed': gamesPlayed,
                        'hits'       : hits,
                        'atBats'     : atBats,
                        'runs'       : runs,
                        'homeRuns'   : homeRuns,
                        'rbi'        : rbi,
                        'stolenBases': stolenBases,
                        'avg'        : avg,
                        'obp'        : obp,
                        'slug'       : slug,
                        'ops'        : ops
                ]
            }

            render new JsonBuilder(leagueLeaders).toPrettyString()
        }

        files {
            dir 'dist'
            indexFiles 'index.html'
        }
    }
}