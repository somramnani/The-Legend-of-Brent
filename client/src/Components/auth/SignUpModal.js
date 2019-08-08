import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { __values } from "tslib";
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errorActions';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class SignUpModal extends Component {
    state = {
      dialog: false,
      name: "",
      password: "",
      email: "",
      msg: null
    };
  
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if(error !== prevProps.error) {
      if(error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if (this.state.dialog) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.password]: event.target.value,
      [event.target.email]: event.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = this.state;

    const newUser = {
      name,
      email,
      password
    };

    this.props.register(newUser);
  };

  toggle = () => {
    this.props.clearErrors();
    this.setState({
      dialog: !this.state.dialog
    });
  };

  render() {
    
    return (
      <>
      <Button variant="outlined" color="primary" onClick={this.toggle}>
        Sign Up
      </Button>
      <Dialog 
        open={this.state.dialog}
        onBackdropClick={this.toggle}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Join The Battle!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sign Up For Your Free Account Today And Receive A T-Shirt Signed By Legend of Brent creator, Som Ramnani!
            { this.state.msg ? ( <p> {this.state.msg} </p> ) : null }
          </DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="Name"
            type="name"
            name="name"
            onChange={this.changeHandler}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            id="email"
            label="Email Address"
            type="email"
            name="email"
            onChange={this.changeHandler}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            id="password"
            label="Password"
            name="password"
            type="password"
            onChange={this.changeHandler}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button fullWidth onClick={this.onSubmit} color="secondary" variant="contained">
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(SignUpModal);
