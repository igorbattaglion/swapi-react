import { call, put } from 'redux-saga/effects'
import apis from '../../services/apis'

import { Creators as PlanetsActions } from '../ducks/planets'

export function* getPlanets(action){
  try{
    const response = yield call(apis.getPlanets)
    
    yield put(PlanetsActions.getPlanetsSuccess(response.data))
  }catch(err){
  }
}
