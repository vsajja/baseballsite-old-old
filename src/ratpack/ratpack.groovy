import com.zaxxer.hikari.HikariConfig
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