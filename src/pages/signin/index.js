import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Creators as LoginActions } from '../../store/ducks/login'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import './styles.css'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import clsx from 'clsx'


function MySnackbarContentWrapper(props) {
  const variantIcon = {
    success: CheckCircleIcon,
    error: ErrorIcon,
  };
  // const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(variant, className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={"message"}>
          <Icon className={clsx("icon", "iconVariant")} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
          <CloseIcon className={"icon"} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

class SignIn extends Component{

  constructor(props){
    super(props)
    this.state = {
      people: [],
      redirect: '',
      errors: '',
      open: true
    }
  }

  componentDidMount(){
    // this.props.getPeopleRequest()
  }

  componentDidUpdate(){
    if(this.props.login.data.user){
      this.setState({redirect: '/search'})
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    this.props.getLoginRequest(data)
    this.setState({open: true})
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  }
  

  render(){

    if(this.state.redirect){
      return <Redirect to={this.state.redirect} />
    }

    return (
      <Container id={"signin"} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={"paper"}>
          <Avatar className={"avatar"}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={this.onSubmit} className={"form"} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={"submit"}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            { this.props.login.error.errors &&
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={this.state.open}
              autoHideDuration={6000}
              onClose={this.handleClose}
            >
              <MySnackbarContentWrapper
                variant="error"
                className={"margin"}
                message="Login failed: Invalid email or password!"
                onClose={this.handleClose}
              />
            </Snackbar>
            }
            { this.props.location.search === "?success=true" &&
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={this.state.open}
              autoHideDuration={6000}
              onClose={this.handleClose}
            >
              <MySnackbarContentWrapper
                variant="success"
                className={"margin"}
                message="Account created!"
                onClose={this.handleClose}
              />
            </Snackbar>
            }
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
})

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, LoginActions), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)