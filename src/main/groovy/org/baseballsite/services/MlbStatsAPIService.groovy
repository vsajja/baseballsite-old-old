package org.baseballsite.services

import groovy.json.JsonBuilder
import groovy.json.JsonSlurper
import jooq.generated.tables.pojos.MlbPlayer
import jooq.generated.tables.pojos.MlbTeam
import org.slf4j.Logger
import org.slf4j.LoggerFactory

import java.sql.Timestamp
import java.text.SimpleDateFormat

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

            getStandings()

            return mlbTeam
        }.findAll { it.level == 'Major League Baseball' }

        assert mlbTeams.size() == 30

        return mlbTeams
    }

    def getMlbStandings() {
        def season = 2021
        String jsonStr = "$MLB_STATS_API_BASE_URL/standings?leagueId=${AL},${NL}&season=${season}".toURL().text

        def standings = new JsonSlurper().parseText(jsonStr)

        def alEastStandings = divisionStandings(standings['records']['teamRecords'][1])
        def alCentralStandings = divisionStandings(standings['records']['teamRecords'][2])
        def alWestStandings = divisionStandings(standings['records']['teamRecords'][0])

        def nlEastStandings = divisionStandings(standings['records']['teamRecords'][5])
        def nlCentralStandings = divisionStandings(standings['records']['teamRecords'][3])
        def nlWestStandings = divisionStandings(standings['records']['teamRecords'][4])

        return [
            'AL East' : alEastStandings,
            'AL Central' : alCentralStandings,
            'AL West' : alWestStandings,

            'NL East' : nlEastStandings,
            'NL Central' : nlCentralStandings,
            'NL West' : nlWestStandings,
        ]
    }

    def divisionStandings = {
        return it.collect {
            return [
                'teamId': it['team']['id'],
                'name': it['team']['name'],
                'wins': it['leagueRecord']['wins'],
                'losses': it['leagueRecord']['losses'],
                'winPct': it['leagueRecord']['pct'],
                'gamesBack': it['gamesBack'],
                'wildCardGamesBack': it['wildCardGamesBack'],

                'runsScored': it['runsScored'],
                'runsAllowed': it['runsAllowed'],
                'runDifferential': it['runDifferential'],

                'L10': it['streak']['streakCode']
            ]
        }
    }

    List<MlbPlayer> getRoster(Integer mlbTeamId) {
        def jsonStr = "$MLB_STATS_API_BASE_URL/teams/${mlbTeamId}/roster?rosterType=40Man".toURL().text
        def jsonObj = new JsonSlurper().parseText(jsonStr)
        def players = jsonObj.roster

        def roster = []

        roster.addAll(players.collect { player ->
            Integer mlbPlayerId = player['person']['id']
            Integer jerseyNumber = player['jerseyNumber'] != '' ? Integer.parseInt(player['jerseyNumber']) : null
            String playerLink = player['person']['link']

            // use the playerLink to get more player details
            def playerInfo = new JsonSlurper().parseText(
                    "https://statsapi.mlb.com/${playerLink}".toURL().text
            )

            String nameFirst = playerInfo['people']['useName'][0]
            String nameLast = playerInfo['people']['lastName'][0]
            Timestamp birthDate = new SimpleDateFormat('YYYY-MM-DD').parse(
                    playerInfo['people']['birthDate'][0]
            ).toTimestamp()
            Integer age = playerInfo['people']['currentAge'][0]

            String birthCity = playerInfo['people']['birthCity'][0]
            String birthCountry = playerInfo['people']['birthCountry'][0]
            Integer heightFt = Integer.parseInt((playerInfo['people']['height'][0].split(' ')[0] - "'").trim())
            Integer heightInches = Integer.parseInt(playerInfo['people']['height'][0].split(' ')[1] - "\"".trim())
            Integer weight = playerInfo['people']['weight'][0]
            String position = playerInfo['people']['primaryPosition']['abbreviation'][0]
            Timestamp mlbDebutDate = playerInfo['people']['mlbDebutDate'][0] != null ? new SimpleDateFormat('YYYY-MM-DD').parse(
                    playerInfo['people']['mlbDebutDate'][0]
            ).toTimestamp() : null

            String pitchHand = playerInfo['people']['pitchHand']['code'][0]
            String bats = playerInfo['people']['batSide']['code'][0]

            MlbPlayer mlbPlayer = new MlbPlayer()
            mlbPlayer.setNameFirst(nameFirst)
            mlbPlayer.setNameLast(nameLast)
            mlbPlayer.setMlbTeamId(mlbTeamId)
            mlbPlayer.setMlbPlayerId(mlbPlayerId)
            mlbPlayer.setBirthCity(birthCity)
            mlbPlayer.setBirthDate(birthDate)
            mlbPlayer.setBirthCountry(birthCountry)
            mlbPlayer.setAge(age)
            mlbPlayer.setJerseyNumber(jerseyNumber)
            mlbPlayer.setPosition(position)
            mlbPlayer.setHeightFt(heightFt)
            mlbPlayer.setHeightInches(heightInches)
            mlbPlayer.setMlbDebutDate(mlbDebutDate)
            mlbPlayer.setThrows(pitchHand)
            mlbPlayer.setBats(bats)
            mlbPlayer.setWeight(weight)

            return mlbPlayer
        })

        return roster
    }
}
