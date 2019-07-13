package com.as.management.domain;

import com.as.management.dto.TeamDto;
import com.as.management.views.View;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "team")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView({View.TeamView.class, View.PlayerView.class})
    private Long id;

    @JsonView({View.TeamView.class, View.PlayerView.class})
    private String name;

    @JsonView(View.TeamView.class)
    private Integer rank;

    @OneToMany(mappedBy = "team", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Player> parent;

    public Team(TeamDto teamDto) {
        this.name = teamDto.getName();
        this.rank = teamDto.getRank();
    }

    public Team updateTeam(TeamDto teamDto) {
        this.name = teamDto.getName();
        this.rank = teamDto.getRank();
        return this;
    }
}
