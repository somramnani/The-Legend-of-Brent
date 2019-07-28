import React, { Component } from "react";
import { Grid, Container, Box } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import MonsterCard from "../Components/MonsterCard";
import Button from "@material-ui/core/Button";
import players from "../data/Player.json";
import monsters from "../data/Monster.json";
import { createStyles, makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(
//   createStyles({
//     card: {
//       width: 500,
//       margin: 60
//     },
//     media: {
//       height: 700
//     }
//   })
// );
// const classes = useStyles();

class BattleScreen extends Component {
  constructor(props) {
    super(props);
    this.activePlayers = [];
    // this.state = {
    //   players
    // }
  }
  render() {
    const style1 = {
      paddingTop: "15px"
    };
    // const { selectedPlayer } = this.props;
    const activePlayers = [players[this.props.selectedId]];
    const monster = [monsters[Math.floor(Math.random() * monsters.length)]];
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
                <Grid container direction="column" justify="space-between">
                  <Box>
                    <Typography>
                      <Button size="medium" color="primary" variant="contained">
                        Big Attack
                      </Button>
                    </Typography>
                    <Typography>
                      <Button size="medium" color="primary" variant="contained">
                        Special Attack
                      </Button>
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </>
          ))}

          {monster.map(Monster => (
            <>
              <Box>
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
              </Box>
              <Typography>
                <Button
                  size="medium"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    let newHealth = this.health - 20;
                    console.log(newHealth);
                  }}
                >
                  Small Attack
                </Button>
              </Typography>
            </>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default BattleScreen;
