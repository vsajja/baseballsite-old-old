/*
 * This file is generated by jOOQ.
 */
package jooq.generated.tables.pojos;


import java.io.Serializable;
import java.sql.Timestamp;

import javax.annotation.Generated;


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
public class MlbPlayer implements Serializable {

    private static final long serialVersionUID = -2044056166;

    private Integer   id;
    private String    nameFirst;
    private String    nameLast;
    private Integer   mlbTeamId;
    private Integer   mlbPlayerId;
    private String    birthCity;
    private Timestamp birthDate;
    private String    birthCountry;
    private Integer   age;
    private Integer   jerseyNumber;
    private String    position;
    private Integer   heightFt;
    private Integer   heightInches;
    private Timestamp mlbDebutDate;
    private String    throws_;
    private String    bats;
    private Integer   weight;

    public MlbPlayer() {}

    public MlbPlayer(MlbPlayer value) {
        this.id = value.id;
        this.nameFirst = value.nameFirst;
        this.nameLast = value.nameLast;
        this.mlbTeamId = value.mlbTeamId;
        this.mlbPlayerId = value.mlbPlayerId;
        this.birthCity = value.birthCity;
        this.birthDate = value.birthDate;
        this.birthCountry = value.birthCountry;
        this.age = value.age;
        this.jerseyNumber = value.jerseyNumber;
        this.position = value.position;
        this.heightFt = value.heightFt;
        this.heightInches = value.heightInches;
        this.mlbDebutDate = value.mlbDebutDate;
        this.throws_ = value.throws_;
        this.bats = value.bats;
        this.weight = value.weight;
    }

    public MlbPlayer(
        Integer   id,
        String    nameFirst,
        String    nameLast,
        Integer   mlbTeamId,
        Integer   mlbPlayerId,
        String    birthCity,
        Timestamp birthDate,
        String    birthCountry,
        Integer   age,
        Integer   jerseyNumber,
        String    position,
        Integer   heightFt,
        Integer   heightInches,
        Timestamp mlbDebutDate,
        String    throws_,
        String    bats,
        Integer   weight
    ) {
        this.id = id;
        this.nameFirst = nameFirst;
        this.nameLast = nameLast;
        this.mlbTeamId = mlbTeamId;
        this.mlbPlayerId = mlbPlayerId;
        this.birthCity = birthCity;
        this.birthDate = birthDate;
        this.birthCountry = birthCountry;
        this.age = age;
        this.jerseyNumber = jerseyNumber;
        this.position = position;
        this.heightFt = heightFt;
        this.heightInches = heightInches;
        this.mlbDebutDate = mlbDebutDate;
        this.throws_ = throws_;
        this.bats = bats;
        this.weight = weight;
    }

    public Integer getId() {
        return this.id;
    }

    public MlbPlayer setId(Integer id) {
        this.id = id;
        return this;
    }

    public String getNameFirst() {
        return this.nameFirst;
    }

    public MlbPlayer setNameFirst(String nameFirst) {
        this.nameFirst = nameFirst;
        return this;
    }

    public String getNameLast() {
        return this.nameLast;
    }

    public MlbPlayer setNameLast(String nameLast) {
        this.nameLast = nameLast;
        return this;
    }

    public Integer getMlbTeamId() {
        return this.mlbTeamId;
    }

    public MlbPlayer setMlbTeamId(Integer mlbTeamId) {
        this.mlbTeamId = mlbTeamId;
        return this;
    }

    public Integer getMlbPlayerId() {
        return this.mlbPlayerId;
    }

    public MlbPlayer setMlbPlayerId(Integer mlbPlayerId) {
        this.mlbPlayerId = mlbPlayerId;
        return this;
    }

    public String getBirthCity() {
        return this.birthCity;
    }

    public MlbPlayer setBirthCity(String birthCity) {
        this.birthCity = birthCity;
        return this;
    }

    public Timestamp getBirthDate() {
        return this.birthDate;
    }

    public MlbPlayer setBirthDate(Timestamp birthDate) {
        this.birthDate = birthDate;
        return this;
    }

    public String getBirthCountry() {
        return this.birthCountry;
    }

    public MlbPlayer setBirthCountry(String birthCountry) {
        this.birthCountry = birthCountry;
        return this;
    }

    public Integer getAge() {
        return this.age;
    }

    public MlbPlayer setAge(Integer age) {
        this.age = age;
        return this;
    }

    public Integer getJerseyNumber() {
        return this.jerseyNumber;
    }

    public MlbPlayer setJerseyNumber(Integer jerseyNumber) {
        this.jerseyNumber = jerseyNumber;
        return this;
    }

    public String getPosition() {
        return this.position;
    }

    public MlbPlayer setPosition(String position) {
        this.position = position;
        return this;
    }

    public Integer getHeightFt() {
        return this.heightFt;
    }

    public MlbPlayer setHeightFt(Integer heightFt) {
        this.heightFt = heightFt;
        return this;
    }

    public Integer getHeightInches() {
        return this.heightInches;
    }

    public MlbPlayer setHeightInches(Integer heightInches) {
        this.heightInches = heightInches;
        return this;
    }

    public Timestamp getMlbDebutDate() {
        return this.mlbDebutDate;
    }

    public MlbPlayer setMlbDebutDate(Timestamp mlbDebutDate) {
        this.mlbDebutDate = mlbDebutDate;
        return this;
    }

    public String getThrows() {
        return this.throws_;
    }

    public MlbPlayer setThrows(String throws_) {
        this.throws_ = throws_;
        return this;
    }

    public String getBats() {
        return this.bats;
    }

    public MlbPlayer setBats(String bats) {
        this.bats = bats;
        return this;
    }

    public Integer getWeight() {
        return this.weight;
    }

    public MlbPlayer setWeight(Integer weight) {
        this.weight = weight;
        return this;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        final MlbPlayer other = (MlbPlayer) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        }
        else if (!id.equals(other.id))
            return false;
        if (nameFirst == null) {
            if (other.nameFirst != null)
                return false;
        }
        else if (!nameFirst.equals(other.nameFirst))
            return false;
        if (nameLast == null) {
            if (other.nameLast != null)
                return false;
        }
        else if (!nameLast.equals(other.nameLast))
            return false;
        if (mlbTeamId == null) {
            if (other.mlbTeamId != null)
                return false;
        }
        else if (!mlbTeamId.equals(other.mlbTeamId))
            return false;
        if (mlbPlayerId == null) {
            if (other.mlbPlayerId != null)
                return false;
        }
        else if (!mlbPlayerId.equals(other.mlbPlayerId))
            return false;
        if (birthCity == null) {
            if (other.birthCity != null)
                return false;
        }
        else if (!birthCity.equals(other.birthCity))
            return false;
        if (birthDate == null) {
            if (other.birthDate != null)
                return false;
        }
        else if (!birthDate.equals(other.birthDate))
            return false;
        if (birthCountry == null) {
            if (other.birthCountry != null)
                return false;
        }
        else if (!birthCountry.equals(other.birthCountry))
            return false;
        if (age == null) {
            if (other.age != null)
                return false;
        }
        else if (!age.equals(other.age))
            return false;
        if (jerseyNumber == null) {
            if (other.jerseyNumber != null)
                return false;
        }
        else if (!jerseyNumber.equals(other.jerseyNumber))
            return false;
        if (position == null) {
            if (other.position != null)
                return false;
        }
        else if (!position.equals(other.position))
            return false;
        if (heightFt == null) {
            if (other.heightFt != null)
                return false;
        }
        else if (!heightFt.equals(other.heightFt))
            return false;
        if (heightInches == null) {
            if (other.heightInches != null)
                return false;
        }
        else if (!heightInches.equals(other.heightInches))
            return false;
        if (mlbDebutDate == null) {
            if (other.mlbDebutDate != null)
                return false;
        }
        else if (!mlbDebutDate.equals(other.mlbDebutDate))
            return false;
        if (throws_ == null) {
            if (other.throws_ != null)
                return false;
        }
        else if (!throws_.equals(other.throws_))
            return false;
        if (bats == null) {
            if (other.bats != null)
                return false;
        }
        else if (!bats.equals(other.bats))
            return false;
        if (weight == null) {
            if (other.weight != null)
                return false;
        }
        else if (!weight.equals(other.weight))
            return false;
        return true;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((this.id == null) ? 0 : this.id.hashCode());
        result = prime * result + ((this.nameFirst == null) ? 0 : this.nameFirst.hashCode());
        result = prime * result + ((this.nameLast == null) ? 0 : this.nameLast.hashCode());
        result = prime * result + ((this.mlbTeamId == null) ? 0 : this.mlbTeamId.hashCode());
        result = prime * result + ((this.mlbPlayerId == null) ? 0 : this.mlbPlayerId.hashCode());
        result = prime * result + ((this.birthCity == null) ? 0 : this.birthCity.hashCode());
        result = prime * result + ((this.birthDate == null) ? 0 : this.birthDate.hashCode());
        result = prime * result + ((this.birthCountry == null) ? 0 : this.birthCountry.hashCode());
        result = prime * result + ((this.age == null) ? 0 : this.age.hashCode());
        result = prime * result + ((this.jerseyNumber == null) ? 0 : this.jerseyNumber.hashCode());
        result = prime * result + ((this.position == null) ? 0 : this.position.hashCode());
        result = prime * result + ((this.heightFt == null) ? 0 : this.heightFt.hashCode());
        result = prime * result + ((this.heightInches == null) ? 0 : this.heightInches.hashCode());
        result = prime * result + ((this.mlbDebutDate == null) ? 0 : this.mlbDebutDate.hashCode());
        result = prime * result + ((this.throws_ == null) ? 0 : this.throws_.hashCode());
        result = prime * result + ((this.bats == null) ? 0 : this.bats.hashCode());
        result = prime * result + ((this.weight == null) ? 0 : this.weight.hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("MlbPlayer (");

        sb.append(id);
        sb.append(", ").append(nameFirst);
        sb.append(", ").append(nameLast);
        sb.append(", ").append(mlbTeamId);
        sb.append(", ").append(mlbPlayerId);
        sb.append(", ").append(birthCity);
        sb.append(", ").append(birthDate);
        sb.append(", ").append(birthCountry);
        sb.append(", ").append(age);
        sb.append(", ").append(jerseyNumber);
        sb.append(", ").append(position);
        sb.append(", ").append(heightFt);
        sb.append(", ").append(heightInches);
        sb.append(", ").append(mlbDebutDate);
        sb.append(", ").append(throws_);
        sb.append(", ").append(bats);
        sb.append(", ").append(weight);

        sb.append(")");
        return sb.toString();
    }
}
