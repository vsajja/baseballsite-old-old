/*
 * This file is generated by jOOQ.
 */
package jooq.generated;


import javax.annotation.Generated;

import jooq.generated.tables.MlbTeam;

import org.jooq.Index;
import org.jooq.OrderField;
import org.jooq.impl.Internal;


/**
 * A class modelling indexes of tables of the <code>public</code> schema.
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.12.3"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Indexes {

    // -------------------------------------------------------------------------
    // INDEX definitions
    // -------------------------------------------------------------------------

    public static final Index MLB_TEAM_PKEY = Indexes0.MLB_TEAM_PKEY;

    // -------------------------------------------------------------------------
    // [#1459] distribute members to avoid static initialisers > 64kb
    // -------------------------------------------------------------------------

    private static class Indexes0 {
        public static Index MLB_TEAM_PKEY = Internal.createIndex("mlb_team_pkey", MlbTeam.MLB_TEAM, new OrderField[] { MlbTeam.MLB_TEAM.ID }, true);
    }
}
