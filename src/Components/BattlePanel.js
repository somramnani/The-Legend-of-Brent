import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box/Box'

//A background component that we can style to hold the cards during battle.
class BattlePanel extends React.Component {
  render() {
    return(
      <>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box component="div" boxShadow={3} style={{backgroundColor: '#333', height: '50vh' }} />
        </Container>
      </>
    )
  }
}

export default BattlePanel;