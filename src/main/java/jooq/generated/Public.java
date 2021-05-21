/*
 * This file is generated by jOOQ.
 */
package jooq.generated;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Generated;

import jooq.generated.tables.MlbPlayer;
import jooq.generated.tables.MlbTeam;

import org.jooq.Catalog;
import org.jooq.Sequence;
import org.jooq.Table;
import org.jooq.impl.SchemaImpl;


/**
 * This class is generated by jOOQ.
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.12.3"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Public extends SchemaImpl {

    private static final long serialVersionUID = 1569967487;

    /**
     * The reference instance of <code>public</code>
     */
    public static final Public PUBLIC = new Public();

    /**
     * The table <code>public.mlb_player</code>.
     */
    public final MlbPlayer MLB_PLAYER = jooq.generated.tables.MlbPlayer.MLB_PLAYER;

    /**
     * The table <code>public.mlb_team</code>.
     */
    public final MlbTeam MLB_TEAM = jooq.generated.tables.MlbTeam.MLB_TEAM;

    /**
     * No further instances allowed
     */
    private Public() {
        super("public", null);
    }


    @Override
    public Catalog getCatalog() {
        return DefaultCatalog.DEFAULT_CATALOG;
    }

    @Override
    public final List<Sequence<?>> getSequences() {
        List result = new ArrayList();
        result.addAll(getSequences0());
        return result;
    }

    private final List<Sequence<?>> getSequences0() {
        return Arrays.<Sequence<?>>asList(
            Sequences.MLB_PLAYER_ID_SEQ,
            Sequences.MLB_TEAM_ID_SEQ);
    }

    @Override
    public final List<Table<?>> getTables() {
        List result = new ArrayList();
        result.addAll(getTables0());
        return result;
    }

    private final List<Table<?>> getTables0() {
        return Arrays.<Table<?>>asList(
            MlbPlayer.MLB_PLAYER,
            MlbTeam.MLB_TEAM);
    }
}
