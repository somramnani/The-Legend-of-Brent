import React, { Component } from "react";
import { Grid, Container, Box } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import MonsterCard from "../Components/MonsterCard";
import Button from "@material-ui/core/Button";
import TitleBar from "../Components/TitleBar";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
// import players from "../data/Player.json";
// import monster from "../data/Monster.json";
// import SpringButton from "../Components/SpringButton";
// import { shake, rubberBand, wobble } from "animate.css";

const ATTACK_LENGTH = 150

class BattleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shake: false,
      monsterShake: false,
      rubberBand: false,
      wobble: false
    }
  }

  componentDidUpdate(prevProps) {
    const { monster, character } = this.props.globalState;
    const prevMonster = prevProps.globalState.monster;
    const prevCharacter = prevProps.globalState.character;
    if (monster && character) { // means battle is going on
      if (character.health !== prevCharacter.health) {
        console.log('character health changed')
        // shake true to trigger animation, after ATTACK_LENGTH,
        // card goes back to normal state
        this.setState({shake: true}, () => {
          setTimeout(() => this.setState({ shake: false }), ATTACK_LENGTH);
        });
      }
      if (monster.health !== prevMonster.health) {
        console.log('monster health changed');
        this.setState({monsterShake: true}, () => {
          setTimeout(() => this.setState({ monsterShake: false }), ATTACK_LENGTH);
        });
      }
    }
  }

  componentWillUnmount() {
    this.setState({
      shake: false,
      monsterShake: false,
    })
  }

  render() {
    const style1 = {
      paddingTop: "15px"
    };
    const { character, monster } = this.props.globalState;
    const { shake, monsterShake } = this.state;

    document.body.style.backgroundImage = "url('images/battle.jpg')";
    document.body.style.backgroundRepeat = "repeat-y";
    document.body.style.backgroundPosition = "center ";

    return (
      <>
        <TitleBar />
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
                  shake={shake}
                />
                <Grid container direction="column" justify="space-between">
                  <Box>
                    <Typography>
                      <Button
                        size="medium"
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          this.props.handleSmallAttackMonster(character.smallAttack);
                          this.setState({shakeMonster: true});
                        }}
                      >
                        Small Attack
                      </Button>
                      <Button
                        size="medium"
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          this.props.handleSmallAttackMonster(character.bigAttack);
                          this.setState({shakeMonster: true});
                        }}
                      >
                        Big Attack
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
                shake={monsterShake}
              />
            </Box>
          )}
        </Grid>
        </Container>
        </>
    );
  }
}

export default BattleScreen;
