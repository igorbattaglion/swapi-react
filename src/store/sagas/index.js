import { all, takeLatest } from 'redux-saga/effects'
import { Types as PeopleTypes } from '../ducks/people'
import { getPeople } from './people'
import { Types as LoginTypes } from '../ducks/login'
import { getLogin } from './login'
import { Types as SignupTypes } from '../ducks/signup'
import { signup } from './signup'
import { Types as FilmsTypes } from '../ducks/films'
import { getFilms } from './films'
import { Types as PlanetsTypes } from '../ducks/planets'
import { getPlanets } from './planets'
import { Types as SpeciesTypes } from '../ducks/species'
import { getSpecies } from './species'
import { Types as StarshipsTypes } from '../ducks/starships'
import { getStarships } from './starships'
import { Types as VehiclesTypes } from '../ducks/vehicles'
import { getVehicles } from './vehicles'


export default function* rootSaga(){
    yield all([
        takeLatest(PeopleTypes.GET_REQUEST, getPeople),
        takeLatest(LoginTypes.GET_REQUEST, getLogin),
        takeLatest(SignupTypes.GET_REQUEST, signup),
        takeLatest(FilmsTypes.GET_REQUEST, getFilms),
        takeLatest(PlanetsTypes.GET_REQUEST, getPlanets),
        takeLatest(SpeciesTypes.GET_REQUEST, getSpecies),
        takeLatest(StarshipsTypes.GET_REQUEST, getStarships),
        takeLatest(VehiclesTypes.GET_REQUEST, getVehicles)
      ])
}