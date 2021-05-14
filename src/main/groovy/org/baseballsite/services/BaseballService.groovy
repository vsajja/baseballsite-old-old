package org.baseballsite.services

import com.google.inject.Inject
import groovy.json.JsonSlurper
import jooq.generated.tables.daos.MlbTeamDao
import jooq.generated.tables.pojos.MlbTeam

import javax.sql.DataSource
import org.slf4j.Logger
import org.slf4j.LoggerFactory

import org.jooq.DSLContext
import org.jooq.SQLDialect
import org.jooq.impl.DSL
import org.jooq.impl.DefaultConfiguration

import static jooq.generated.Tables.*;

class BaseballService {
    final Logger log = LoggerFactory.getLogger(this.class)

    DSLContext database

    MlbTeamDao mlbTeamDao

    @Inject
    BaseballService(DataSource dataSource) {
        database = DSL.using(new DefaultConfiguration()
                .set(dataSource)
                .set(SQLDialect.POSTGRES)
        )
        mlbTeamDao = new MlbTeamDao(database.configuration())
    }

    def insertMlbTeam(MlbTeam mlbTeam) {
        MlbTeam team = mlbTeamDao.fetchOne(MLB_TEAM.TEAM_ID, mlbTeam.getTeamId())

        // insert
        if (team == null) {
            println "Inserting: ${mlbTeam.toString()}"
            mlbTeamDao.insert(mlbTeam)
        } else {
            // update
            println "Updating: ${mlbTeam.toString()}"
            mlbTeam.setId(team.getId())
            mlbTeamDao.update(mlbTeam)
        }
    }
}
