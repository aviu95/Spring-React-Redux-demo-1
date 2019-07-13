package com.as.management.service;

import com.as.management.domain.Player;
import com.as.management.domain.Team;
import com.as.management.dto.PlayerDetail;
import com.as.management.dto.PlayerDto;
import com.as.management.repo.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private TeamService teamService;

    public void postPlayers(PlayerDto playerDto) {
        Team team = teamService.getTeamById(playerDto.getTeamId());
        List<Player> playerList = playerDto.getPlayerDetails()
                .stream()
                .map(playerDetail -> new Player(playerDetail, team))
                .collect(Collectors.toList());
        playerRepository.saveAll(playerList);
    }

    public List<Player> getPlayersByTeam() {
        return playerRepository.findAll();
       /* Map<Team, List<Player>> collect = all.stream()
                .collect(Collectors.groupingBy(Player::getTeam));*/
    }

    public void deletePlayerById(Long playerId) {
        playerRepository.deleteById(playerId);
    }

    public void updatePlayerDetail(Long playerId, PlayerDto playerDto) {
        PlayerDetail playerDetails = playerDto.getPlayerDetails().get(0);
        Optional<Player> playersByTeam = playerRepository.findById(playerId);
        if(playersByTeam.isPresent()) {
            Player player = playersByTeam.get();
            playerRepository.save(player.updatePlayerDetail(playerDetails, teamService.getTeamById(playerDto.getTeamId())));
            return;
        }
        throw new RuntimeException("No Player is found");
    }
}
