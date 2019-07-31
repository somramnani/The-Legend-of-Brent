import React, { Component } from "react";
import { Grid, Container, Box } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import MonsterCard from "../Components/MonsterCard";
import Button from "@material-ui/core/Button";
// import players from "../data/Player.json";
// import monster from "../data/Monster.json";
// import SpringButton from "../Components/SpringButton";

class BattleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { shake: false, rubberBand: false, wobble: false}
  }

   render() {
    const style1 = {
      paddingTop: "15px"
    };
    const { character, monster } = this.props.globalState;

    document.body.style.backgroundImage = "url('images/battle.jpg')";
    document.body.style.backgroundRepeat = "repeat-y";
    document.body.style.backgroundPosition = "center ";

    return (
      <Container maxWidth="lg">
        <Grid
          style={style1}
          direction="row"
          alignItems="space-evenly"
          justify="center"
          container
          spacing={5}
        >
            <>
            {
              character && (
              <Box>
                <MonsterCard
                  key={character.id}
                  id={character.id}
                  class={character.class}
                  name={character.name}
                  img={character.img}
                  health={character.health}
                  smallAttack={character.smallAttack}
                  bigAttack={character.bigAttack}
                  specialAttack={character.specialAttack}
                />
                <Grid container direction="column" justify="space-between">
                  <Box>
                    <Typography>

                      <Button
                        size="medium"
                        color="primary"
                        variant="contained"
                        onClick={() => this.props.handleSmallAttackMonster(character.smallAttack)}
                      >

                        Small Attack
                      </Button>
                    </Typography>
                  </Box>
                </Grid>
              </Box>
              )
            }
          </>
          {
            monster && (
            <Box>
              <MonsterCard
                key={monster.id}
                id={monster.id}
                class={monster.class}
                name={monster.name}
                img={monster.img}
                health={monster.health}
                smallAttack={monster.smallAttack}
                bigAttack={monster.bigAttack}
                specialAttack={monster.specialAttack}
              />
            </Box>
          )}
        </Grid>
      </Container>
    );
  }
}

export default BattleScreen;
