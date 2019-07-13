package com.as.management.repo;

import com.as.management.domain.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

    @Query("select player from Player player join player.team  t where t.id = :teamId")
    List<Player> findByTeamId(@Param("teamId") Long teamId);


}
