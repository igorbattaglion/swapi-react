import { combineReducers } from 'redux'
import people from './people'
import films from './films'
import login from './login'
import signup from './signup'
import planets from './planets'
import species from './species'
import starships from './starships'
import vehicles from './vehicles'

export default combineReducers({
    people,
    login,
    signup,
    films,
    planets,
    species,
    starships,
    vehicles
})