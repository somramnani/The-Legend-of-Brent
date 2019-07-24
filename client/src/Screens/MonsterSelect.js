import React, { Component } from "react";
import { Grid, Container, Box, Typography } from "@material-ui/core/";
import MonsterCard from "../Components/MonsterCard";
import players from "../data/Monster.json";
import { bindCallback } from "rxjs";

class MonsterScreen extends Component {
  state = {
    players
  };

  render() {
    var style1 = {
      paddingTop: "15px"
    };

    document.body.style.backgroundImage = "url(images/tinder.jpg)";
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
          Pick Your Opponent
        </Typography>
        <Grid
          style={style1}
          direction="row"
          alignItems="center"
          justify="flex-end"
          container
          spacing={5}
        >
          {this.state.players.map(Monster => (
            <MonsterCard
              key={Monster.id}
              id={Monster.id}
              name={Monster.name}
              img={Monster.img}
              health={Monster.health}
              smallAttack={Monster.smallAttack}
              bigAttack={Monster.bigAttack}
              specialAttack={Monster.specialAttack}
            />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default MonsterScreen;
