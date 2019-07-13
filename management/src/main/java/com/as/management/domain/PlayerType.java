package com.as.management.domain;

import java.util.stream.Stream;

public enum PlayerType {
    ALLROUNDER, BATSMAN, BOWLER;

    public static PlayerType getPlayerTypeFromName(String name) {
        return Stream.of(PlayerType.values())
                .filter(playerType -> playerType.name().equalsIgnoreCase(name))
                .findFirst().orElseThrow((() -> new IllegalArgumentException(String.format("Invalid  Alias - %s", name))));
    }
}
