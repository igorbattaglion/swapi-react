import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Creators as SignupActions } from '../../store/ducks/signup'
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
    if(this.props.signup.data.user){
        this.setState({redirect: '/?success=true'})
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const data = {
      name:e.target.email.name,
      email: e.target.email.value,
      password: e.target.password.value
    }

    this.props.getSignupRequest(data)
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
            Sign up
          </Typography>
          <form onSubmit={this.onSubmit} className={"form"} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={"submit"}
            >
              Sign up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
            { this.props.signup.error.errors &&
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
                message="Signup error, please verify all fields."
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
  signup: state.signup
})

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, SignupActions), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)