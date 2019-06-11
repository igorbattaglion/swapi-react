import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Creators as PeopleActions } from '../../store/ducks/people'
import { Creators as FilmsActions } from '../../store/ducks/films'
import { Creators as PlanetsActions } from '../../store/ducks/planets'
import { Creators as SpeciesActions } from '../../store/ducks/species'
import { Creators as StarshipsActions } from '../../store/ducks/starships'
import { Creators as VehiclesActions } from '../../store/ducks/vehicles'
import { Creators as LoginActions } from '../../store/ducks/login'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import logo from '../../assets/images/Star_Wars_Logo.svg'

import './styles.css'

// import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { CardContent, CardActions } from '@material-ui/core';



class Search extends Component{

  constructor(props){
    super(props)
    this.state = {
      people: [],
      redirect: ''
    }
  }

  componentDidMount(){
      if(!this.props.login.data.user){
          this.setState({ redirect: '/' })
      }

  }

  getPeople(){
    this.props.getPeopleRequest()
  }

  getFilms(){
    this.props.getFilmsRequest()
  }

  getPlanets(){
    this.props.getPlanetsRequest()
  }

  getSpecies(){
    this.props.getSpeciesRequest()
  }
  
  getStarships(){
    this.props.getStarshipsRequest()
  }

  getVehicles(){
    this.props.getVehiclesRequest()
  }

  render(){

    console.log(this.props)

    if(this.state.redirect){
      return <Redirect to={this.state.redirect} />
    }
    return (
      <Container id={"search"} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={"paper"}>
        <img alt="logo" src={logo} />
          <Typography component="h1" variant="h5">
            SEARCH
          </Typography>
          <form className={"form"} noValidate>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={"submit"}
              onClick={()=> this.getPeople()}
            >
              People
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={"submit"}
              onClick={()=> this.getFilms()}
            >
              Films
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={"submit"}
              onClick={()=> this.getPlanets()}
            >
              Planets
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={"submit"}
              onClick={()=> this.getSpecies()}
            >
              Species
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={"submit"}
              onClick={()=> this.getStarships()}
            >
              Starships
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={"submit"}
              onClick={()=> this.getVehicles()}
            >
              Vehicles
            </Button>
          </form>
        </div>
        <div className={"cards"}>
            {this.props.people.data.results &&
                this.props.people.data.results.map((value, key) =>{
                    return(
                        <Card key={key} className={"card"}>
                            <CardContent>
                                <Typography className={'title'} variant="h5" component="h2">
                                    {value.name}
                                </Typography>
                                <Typography className={"secondary"} color="textSecondary">
                                    Gender: {value.gender}
                                </Typography>
                                <Typography className={"secondary"} color="textSecondary">
                                    Height: {value.height} cm
                                </Typography>
                                <Typography className={"secondary"} color="textSecondary">
                                    Hair color: {value.hair_color}
                                </Typography>

                            </CardContent>

                            <CardActions>
                                <Button size="small"> More details</Button>
                            </CardActions>

                        </Card>
                    )
                })
            }
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  people: state.people,
  films: state.films,
  planets: state.planets,
  species: state.species,
  starships: state.starships,
  vehicles: state.vehicles,
  login: state.login
})

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, PeopleActions, FilmsActions, PlanetsActions, SpeciesActions, StarshipsActions, VehiclesActions, LoginActions), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)