import { call, put } from 'redux-saga/effects'
import apis from '../../services/apis'

import { Creators as SpeciesActions } from '../ducks/species'

export function* getSpecies(action){
  try{
    const response = yield call(apis.getSpecies)
    
    yield put(SpeciesActions.getSpeciesSuccess(response.data))
  }catch(err){
  }
}
