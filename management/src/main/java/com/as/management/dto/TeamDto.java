package com.as.management.dto;

import com.as.management.domain.PlayerType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TeamDto {

    private String name;

    private Integer rank;

}
