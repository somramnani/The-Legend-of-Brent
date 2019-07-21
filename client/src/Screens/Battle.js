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
        console.log('special attack was clicked');
    }

    render() {

        return (
            <>
                <Container>
                    <Box>
                        <MonsterCard>
                            <Player>
                                <Button onClick={this.smallAttack()}>
                                    Small Attack
                                </Button>
        
                                <Button onClick={this.bigAttack()}>
                                    Big Attack
                                </Button>

                                <Button onClick={this.specialAttack()}>
                                    Special Attack
                                </Button>
                            </Player>
                        {/* player is above, monster is below */}
                            <Monster>
                                <Button onClick={this.smallAttack()}>
                                    Small Attack
                                </Button>
        
                                <Button onClick={this.bigAttack()}>
                                 Big Attack
                                </Button>

                                <Button onClick={this.specialAttack()}>
                                    Special Attack
                                </Button>
                            </Monster>
                        </MonsterCard>
                    </Box>
                </Container>
        </>
    )
    }
}
export default BattleScreen;