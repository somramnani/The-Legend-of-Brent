import React, { Component } from "react";
import { Grid, Container, Box } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import MonsterCard from "../Components/MonsterCard";
import Button from "@material-ui/core/Button";
import players from "../data/Player.json";
import monster from "../data/Monster.json";
import SpringButton from "../Components/SpringButton";

class BattleScreen extends Component {
  constructor(props) {
    super(props);
    this.activePlayers = [];
    this.state = { shake: false, rubberBand: false, wobble: false, }
  }

  render() {
    
    const style1 = {
      paddingTop: "15px"
    };
    const activePlayers = [players[this.props.selectedId]];
    console.log(activePlayers);
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
          {activePlayers.map(Player => (
            <>
              <Box>
                <MonsterCard
                  key={this.props.globalState.character.id}
                  id={this.props.globalState.character.id}
                  class={this.props.globalState.character.class}
                  name={this.props.globalState.character.name}
                  img={this.props.globalState.character.img}
                  health={this.props.globalState.character.health}
                  smallAttack={this.props.globalState.character.smallAttack}
                  bigAttack={this.props.globalState.character.bigAttack}
                  specialAttack={this.props.globalState.character.specialAttack}
                />
                <Grid container direction="column" justify="space-between">
                  <Box>
                    <Typography>
                      <SpringButton
                        size="medium"
                        color="primary"
                        variant="contained"
                        onClick={() => { this.props.handleAttackMonster(this.props.globalState.character.smallAttack)}}>

                        Small Attack
                      </SpringButton>
                    </Typography>

                    <Typography>
                      <SpringButton
                        size="medium"
                        color="primary"
                        variant="contained"
                        onClick={() => { this.props.handleAttackMonster(this.props.globalState.character.bigAttack)}}>
                        Big Attack
                      </SpringButton>
                    </Typography>

                    <Typography>
                      <SpringButton
                        size="medium"
                        color="primary"
                        variant="contained"
                        onClick={() => { this.props.handleAttackMonster(this.props.globalState.character.specialAttack)}}>
                        Special Attack
                      </SpringButton>
                    </Typography>
                  </Box>
                </Grid>

              </Box>
            </>
          ))}

          {
            this.props.globalState.monster  && (
            <Box>
            <MonsterCard
              key={this.props.globalState.monster.id}
              id={this.props.globalState.monster.id}
              class={this.props.globalState.monster.class}
              name={this.props.globalState.monster.name}
              img={this.props.globalState.monster.img}
              health={this.props.globalState.monster.health}
              smallAttack={this.props.globalState.monster.smallAttack}
              bigAttack={this.props.globalState.monster.bigAttack}
              specialAttack={this.props.globalState.monster.specialAttack}
            />
            
          </Box>)
          }
          

          {monster.map(Monster => (
            <>
              {/* <Box>
                <MonsterCard
                  key={Monster.id}
                  id={Monster.id}
                  class={Monster.class}
                  name={Monster.name}
                  img={Monster.img}
                  health={Monster.health}
                  smallAttack={Monster.smallAttack}
                  bigAttack={Monster.bigAttack}
                  specialAttack={Monster.specialAttack}
                />

              </Box> */}
              <Typography>
                {/* <Button
                  size="medium"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    let newHealth = this.health - 20;
                    console.log(newHealth);
                  }}
                >
                  Small Attack
                </Button> */}
              </Typography>
            </>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default BattleScreen;
