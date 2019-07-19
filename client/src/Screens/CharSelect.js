import React, { Component } from 'react';
import { Grid, Container, Box }  from '@material-ui/core/'
import MonsterCard from '../Components/MonsterCard'
import players from '../data/Player.json'

class CharSelect extends Component {

state = {
  players
}

render() {

  return (
    <Container maxWidth="lg">
      <Grid direction="row" alignItems="center" justify="flex-end">
        {this.state.players.map(Player => (
          <MonsterCard
            key={Player.id}
            id={Player.id}
            name={Player.name}
            img={Player.img}
            attackSpeed={Player.attackSpeed}
            attackPower={Player.attackPower}
          />
        ))}
      </Grid>
    </Container>
    )
  }
}

export default CharSelect;