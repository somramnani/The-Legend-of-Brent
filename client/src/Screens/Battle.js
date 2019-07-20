import React, { Component } from 'react';
import { Container, Box, Button } from 'react';
import MonsterCard from '../Components/MonsterCard';
import Monster from '../data/Monster.json'
import Player from '../data/Player.json'

class BattleScreen extends Component {
    smallAttack() {
        console.log("small attack was clicked");
    }

    bigAttack() {
        console.log("big attack was clicked");

    }

    specialAttack() {

    };
    render() {

        return (
            <>
                <MonsterCard>
            <button onClick={this.smallAttack}>
                Small Attack
    </button>
        
            <button onClick={this.bigAttack}>
                Big Attack
    </button>
                </MonsterCard>
        </>
    )
    }

}
export default BattleScreen;