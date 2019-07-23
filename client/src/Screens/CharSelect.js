import React, { Component } from "react";

import { Grid, Container } from "@material-ui/core/";

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

    document.body.style.backgroundImage = "url(images/bluesky.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "120%";

    return (
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          style={{
            fontFamily: "Merienda, cursive",
            color: "white",
            textAlign: "center",
            padding: "20px"
          }}
        >
          Pick Your Character
        </Typography>
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
              health={Player.health}
              smallAttack={Player.smallAttack}
              bigAttack={Player.bigAttack}
              specialAttack={Player.specialAttack}
            />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default CharSelect;
