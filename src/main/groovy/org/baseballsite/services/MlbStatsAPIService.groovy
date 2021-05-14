package org.baseballsite.services

import groovy.json.JsonSlurper
import jooq.generated.tables.pojos.MlbTeam
import org.slf4j.Logger
import org.slf4j.LoggerFactory

class MlbStatsAPIService {
    final Logger log = LoggerFactory.getLogger(this.class)

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

    List<MlbTeam> getMlbTeams() {
        String jsonStr = "$MLB_STATS_API_BASE_URL/teams?sportCode=${MLB_SPORT_CODE}".toURL().text
        def teamsObj = new JsonSlurper().parseText(jsonStr)
        def mlbTeams = teamsObj['teams'].findAll {
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
        }.findAll { it.level == 'Major League Baseball' }

        assert mlbTeams.size() == 30

        return mlbTeams
    }
}
