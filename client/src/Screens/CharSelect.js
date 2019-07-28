import React, { Component } from "react";
import { Grid, Container, Box } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import MonsterCard from "../Components/MonsterCard";
import Button from "@material-ui/core/Button";
import players from "../data/Player.json";
import BattleScreen from "./Battle";

import { Redirect } from 'react-router-dom'


import TitleBar from "../Components/TitleBar";

class CharSelect extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selectedId: -1,
    //   selectedPlayer: {}
    // };
  }

  // chooseCharacter(pId) {
  //   this.setState({
  //     selectedId: pId - 1,
  //     selectedPlayer: players[pId - 1]
  //   });
  // }

  render() {
    const style1 = {
      paddingTop: "15px"
    };
    // const { selectedId, selectedPlayer } = this.state;

    document.body.style.backgroundImage = "url('images/bluesky.jpg')";
    document.body.style.backgroundRepeat = "repeat-y";

      if (this.props.globalState.character) {
        return <Redirect to='/BattleScreen' />
      }

    // if (selectedId === -1) {
      return (
        <>
          <TitleBar />
          <Container maxWidth="lg">
            <Grid
              style={style1}
              direction="row"
              alignItems="center"
              justify="flex-end"
              container
              spacing={5}
            >
              {players.map(Player => (
                <>
                  <Box>
                    <MonsterCard
                      key={Player.id}
                      id={Player.id}
                      class={Player.class}
                      name={Player.name}
                      img={Player.img}
                      health={Player.health}
                      smallAttack={Player.smallAttack}
                      bigAttack={Player.bigAttack}
                      specialAttack={Player.specialAttack}
                    />
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      onClick={() => {
                        // this.props.chooseCharacter(Player);
                        this.props.chooseCharacter(Player);

                      }}
                    >
                      {`Choose ${Player.name}`}
                    </Button>
                  </Box>
                </>
              ))}
            </Grid>
          </Container>
        </>
      );
  }
}




export default CharSelect;

/*
        <>
          <TitleBar />
          <MonsterCard
            key={selectedPlayer.id}
            id={selectedPlayer.id}
            name={selectedPlayer.name}
            class={selectedPlayer.class}
            img={selectedPlayer.img}
            health={selectedPlayer.health}
            smallAttack={selectedPlayer.smallAttack}
            bigAttack={selectedPlayer.bigAttack}
            specialAttack={selectedPlayer.specialAttack}
          />
        </>

