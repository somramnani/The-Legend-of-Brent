import React, { Component } from "react";
import { Grid, Container, Box } from "@material-ui/core/";
import MonsterCard from "../Components/MonsterCard";
import players from "../data/Player.json";
import { bindCallback } from "rxjs";

class CharSelect extends Component {
  state = {
    players
  };

  render() {
    var style1 = {
      paddingTop: "15px"
    };

    return (
      <Container maxWidth="lg">
        <Grid
          style={style1}
          direction="row"
          alignItems="center"
          justify="flex-end"
          container
          spacing={5}
        >
          {this.state.players.map(Player => (
            <MonsterCard
              key={Player.id}
              id={Player.id}
              name={Player.name}
              img={Player.img}
              health = {Player.health}
              smallAttack={Player.smallAttack}
              specialAttack={Player.specialAttack}
            />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default CharSelect;
