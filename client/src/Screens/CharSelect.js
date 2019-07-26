import React, { Component } from "react";
import { Grid, Container, Box } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import MonsterCard from "../Components/MonsterCard";
import Button from "@material-ui/core/Button";
import players from "../data/Player.json";

class CharSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: -1,
      selectedPlayer: {},
    }
  }

  chooseCharacter(pId) {
    this.setState({
      selectedId: pId,
      selectedPlayer: players[pId]
    });
  }

  render() {
    const style1 = {
      paddingTop: "15px"
    };
    const { selectedId, selectedPlayer } = this.state;

    document.body.style.backgroundImage = "url('images/bluesky.jpg')";
    document.body.style.backgroundRepeat = "repeat-y";

    if (selectedId === -1) {
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
          {players.map(Player => (
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
                <Button
                  onClick={() => {
                    // this.props.chooseCharacter(Player);
                    this.chooseCharacter(Player.id)

                  }}
                >
                  {`Choose ${Player.name}`}
                </Button>
              </Box>
            </>
          ))}
        </Grid>
      </Container>
    );
    } else {
      return (
        <>
            <MonsterCard
                  key={selectedPlayer.id}
                  id={selectedPlayer.id}
                  name={selectedPlayer.name}
                  img={selectedPlayer.img}
                  health={selectedPlayer.health}
                  smallAttack={selectedPlayer.smallAttack}
                  bigAttack={selectedPlayer.bigAttack}
                  specialAttack={selectedPlayer.specialAttack}
            />
        </>
      )
    }
  }
}

export default CharSelect;
