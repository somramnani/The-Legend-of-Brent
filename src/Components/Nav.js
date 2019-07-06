import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <>
        <Link to='/'>Home</Link>
        <Link to='/Characters'>Back to Character Selection</Link>
      </>
    )
  }
}

export default Nav