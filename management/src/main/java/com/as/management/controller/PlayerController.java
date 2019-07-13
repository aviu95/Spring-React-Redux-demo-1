package com.as.management.controller;

import com.as.management.dto.PlayerDto;
import com.as.management.service.PlayerService;
import com.as.management.views.View;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class PlayerController extends BaseController {

    @Autowired
    private PlayerService playerService;

    @PostMapping("/player")
    public ResponseEntity postPlayer(@RequestBody PlayerDto playerDto) {
        playerService.postPlayers(playerDto);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/player")
    @JsonView(View.PlayerView.class)
    public ResponseEntity getPlayersByTeam() {
        return ResponseEntity.ok(playerService.getPlayersByTeam());
    }

    @PutMapping("/player/{player-id}")
    public ResponseEntity updatePlayerDetail(@RequestBody PlayerDto playerDto, @PathVariable("player-id") String playerId) {
        playerService.updatePlayerDetail(Long.valueOf(playerId), playerDto);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/player/{player-id}")
    public ResponseEntity deletePlayer(@PathVariable("player-id") String playerId) {
        playerService.deletePlayerById(Long.valueOf(playerId));
        return ResponseEntity.ok().build();
    }

}
