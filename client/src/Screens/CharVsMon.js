import React, { Component } from "react";
import { Grid, Container, Box, Typography } from "@material-ui/core/";
import MonsterCard from "../Components/MonsterCard";
import players from "../data/Player.json";
import monsters from "../data/Monster.json";
import FadeScreen from "../Screens/FadeScreen.js";
const FADE_TIMER = 6000;

class PreBattleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players,
      monsters,
      fadeState: false,
    }; 
    this.setFadeState = this.setFadeState.bind(this); 
  }
 
  componentDidMount() {
    setTimeout(this.setFadeState, FADE_TIMER);
  }

  setFadeState() {
    this.setState({fadeState: true,})
  }

  render() {
    var style1 = {
      paddingTop: "15px"

  };

  if (this.state.fadeState === false) {
  return (
    <Container maxWidth="lg">
    <Typography
      variant="h2"
      component="h2"
      style={{
        fontFamily: "Merienda, cursive",
        fontSize: "30px",
        color: "white",
        textAlign: "center",
        padding: "20px"
      }}
    ></Typography>
    <Grid
          style={style1}
          direction="row"
          alignItems="center"
          justify="flex-end"
          container
          spacing={5}
        >
          {this.state.monsters.map(Monster => (
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

        VS.

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
  
    )}
    else {
      return (
        <FadeScreen />
      )
    }
  
  }};


  //   Fade in 

  //   function fade(element) {
  //     var op = 1; // initial opacity
  //     var timer = setInterval(function () {
  //         if (op <= 0.1) {
  //             clearInterval(timer);
  
  //             element.style.display = 'none';
  //         }
  //         element.style.opacity = op;
  //         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
  //         op -= op * 0.1;
  //     }, 50);
  // }
  
  // //Display splash
  // setTimeout(function () {
  
  //     fade(document.getElementById('splash'));
  // }, 2000);



    export default PreBattleScreen;