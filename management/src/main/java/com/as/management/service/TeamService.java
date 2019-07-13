package com.as.management.service;

import com.as.management.domain.Team;
import com.as.management.dto.TeamDto;
import com.as.management.repo.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;

    public void postTeam(TeamDto team) {
        teamRepository.save(new Team(team));
    }

    public List<Team> getTeams() {
        return teamRepository.findAll();
    }

    public Team getTeamById(Long id) {
        Optional<Team> team = teamRepository.findById(id);
        if(team.isPresent())
           return team.get();
        throw new RuntimeException(String.format("Team is not found for the id %s ", id ));
    }

    public void  updateTeam(Long id, TeamDto teamDto) {
        Optional<Team> team = teamRepository.findById(id);
        if(!team.isPresent())
            throw new RuntimeException(String.format("Invalid Team Id %s", id ));
        Team fetchedTeam = team.get();
        teamRepository.save(fetchedTeam.updateTeam(teamDto));
    }

    public void deleteTeam(Long id) {
        teamRepository.deleteById(id);
    }
}
