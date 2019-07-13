package com.as.management.controller;

import com.as.management.dto.TeamDto;
import com.as.management.service.TeamService;
import com.as.management.views.View;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class TeamController extends BaseController {

    @Autowired
    private TeamService teamService;

    @PostMapping("/team")
    public ResponseEntity postTeam(@RequestBody TeamDto team) {
        teamService.postTeam(team);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/team")
    @JsonView(View.TeamView.class)
    public ResponseEntity getTeam() {
        return ResponseEntity.ok(teamService.getTeams());
    }

    @PutMapping("/team/{team-id}")
    public ResponseEntity updateTeam(@PathVariable("team-id") String teamId, @RequestBody TeamDto teamDto) {
        teamService.updateTeam(Long.valueOf(teamId), teamDto);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/team/{team-id}")
    public ResponseEntity deleteTeam(@PathVariable("team-id") String teamId) {
        teamService.deleteTeam(Long.valueOf(teamId));
        return ResponseEntity.ok().build();
    }
}
