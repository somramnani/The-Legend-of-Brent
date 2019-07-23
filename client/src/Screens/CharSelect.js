import React, { Component } from "react";
import { Grid, Container, Box } from "@material-ui/core/";
import MonsterCard from "../Components/MonsterCard";
import Button from '@material-ui/core/Button'
import players from "../data/Player.json";
import { bindCallback } from "rxjs";

class CharSelect extends Component {
  state = {
    selectedPlayer: {
      charName: '',
      isSelected: false
    },
    players
  };

  handleClick() {

  }

  render() {
    const style1 = {
      paddingTop: "15px"
    };

  document.body.style.backgroundColor = "#f5f5f5";

  return (
    <Container 
      maxWidth="lg"
      >
    <Grid
      style={style1}
      direction="row"
      alignItems="center"
      justify="flex-end"
      container
      spacing={5}
    >
    {this.state.players.map(Player => (
      <>
      <Box>
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
      </Box>
      </>
    ))}
    </Grid>
    </Container>
    );
  }
}

export default CharSelect;
