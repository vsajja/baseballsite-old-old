import com.zaxxer.hikari.HikariConfig
import groovy.json.JsonSlurper
import jooq.generated.tables.pojos.MlbTeam
import org.baseballsite.services.BaseballService
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import ratpack.groovy.sql.SqlModule
import ratpack.handling.RequestLogger
import ratpack.hikari.HikariModule
import org.baseballsite.postgres.PostgresConfig
import org.baseballsite.postgres.PostgresModule

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
    }

    handlers { BaseballService baseballService ->
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
            def MLB_STATS_API_BASE_URL = 'https://statsapi.mlb.com/api/v1'

            def MLB_SPORT_CODE = 1

            // league ids
            def int AL = 103
            def int NL = 104

            // AL division ids
            def AL_EAST = 201
            def AL_CENTRAL = 202
            def AL_WEST = 200

            def NL_EAST = 204
            def NL_CENTRAL = 205
            def NL_WEST = 203

            def LEAGUE_LEVELS = [
                    'Independent Leagues',
                    'Winter Leagues',
                    'Rookie Advanced',
                    'Class A Short Season',
                    'Class A',
                    'Class A Advanced',
                    'Double-A',
                    'Triple-A',
                    'Major League Baseball'
            ]


            String jsonStr = "$MLB_STATS_API_BASE_URL/teams?sportCode=${MLB_SPORT_CODE}".toURL().text
            def teamsObj = new JsonSlurper().parseText(jsonStr)
            def teams = teamsObj['teams'].findAll {
                it['league'] &&
                        it['division'] &&
                        it['sport'] &&
                        it['sport']['name'] != 'National Basketball Association'
            }.collect { team ->
                println team.toString()
                def mlbTeam = new MlbTeam()
                mlbTeam.setName(team['name'])
                mlbTeam.setCode(team['abbreviation'].toString().toUpperCase())
                mlbTeam.setDivision(team['division']['name'])
                mlbTeam.setLeague(team['league']['name'])
                mlbTeam.setLevel(team['sport']['name'])
                mlbTeam.setFirstYearOfPlay(Integer.parseInt(team['firstYearOfPlay']))
                mlbTeam.setDivisionId(team['division']['id'])
                mlbTeam.setLeagueId(team['league']['id'])
                mlbTeam.setSportId(team['sport']['id'])
                mlbTeam.setTeamId(team['id'])

                return mlbTeam
            }

            def mlbTeams = teams.findAll { it.level == 'Major League Baseball' }
            def alTeams = teams.findAll { it.league == 'American League' }
            def nlTeams = teams.findAll { it.league == 'National League' }
            def torontoBlueJays = teams.findAll { it.name == 'Toronto Blue Jays' }

            assert teams.size() > 30
//            assert teams.collect { it.level }.containsAll(LEAGUE_LEVELS)

            assert mlbTeams.size() == 30
            assert alTeams.size() == 15
            assert nlTeams.size() == 15

            mlbTeams.each {team ->
                baseballService.insertMlbTeam(team)
            }

            render 'finished'
        }

        files {
            dir 'dist'
            indexFiles 'index.html'
        }
    }
}