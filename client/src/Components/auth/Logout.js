import React, { Component } from 'react';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  }

  render() {
    return (
      <>
        <Link onClick={this.props.logout} to='/'>
          Logout
        </Link>
      </>
    )
  }
}

export default connect(
  null,
  { logout }
)(Logout);