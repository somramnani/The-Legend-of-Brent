import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box/Box'
import Typography from '@material-ui/core/Typography'

//A background component that we can style to hold the cards during battle.
class BattlePanel extends React.Component {
  render() {
    return(
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box boxShadow={3}>
            <Typography component="div" style={{backgroundColor: '#333', height: '100vh', width: '100vw' }} />
          </Box>
        </Container>
      </>
    )
  }
}

export default BattlePanel;