import React, { Component } from "react";
import { Grid, Container, Box } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import MonsterCard from "../Components/MonsterCard";
import Button from "@material-ui/core/Button";
import players from "../data/Player.json";
import { bindCallback } from "rxjs";

class CharSelect extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {}

  render() {
    const style1 = {
      paddingTop: "15px"
    };

    document.body.style.backgroundImage = "url('images/bluesky.jpg')";
    document.body.style.backgroundRepeat = "repeat-y";

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
    );
  }
}

export default CharSelect;
