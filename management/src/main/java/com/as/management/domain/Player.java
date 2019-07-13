package com.as.management.domain;

import com.as.management.dto.PlayerDetail;
import com.as.management.dto.PlayerDto;
import com.as.management.views.View;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "player")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(View.PlayerView.class)
    private Long id;

    @JsonView(View.PlayerView.class)
    private String name;

    @Enumerated(EnumType.STRING)
    @JsonView(View.PlayerView.class)
    private PlayerType playerType;

    @ManyToOne
    @JoinColumn(name = "teamId")
    @JsonView(View.PlayerView.class)
    private Team team;

    public Player(PlayerDetail playerDetail, Team team) {
        this.name = playerDetail.getName();
        this.playerType = PlayerType.getPlayerTypeFromName(playerDetail.getPlayerType());
        this.team = team;
    }

    public Player updatePlayerDetail(PlayerDetail player, Team team) {
        this.playerType = PlayerType.getPlayerTypeFromName(player.getPlayerType());
        this.name = player.getName();
        this.team = team;
        return this;
    }
}
