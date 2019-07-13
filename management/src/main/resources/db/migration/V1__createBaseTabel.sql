create table team (
  id SERIAL primary key ,
  name text,
  rank INTEGER
);

create table player (
  id SERIAL primary key,
  name text,
  player_type text,
  team_id INTEGER
);

alter table player add constraint team_player_fk foreign key (team_id) references team(id);
