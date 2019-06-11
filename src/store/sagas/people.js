import { call, put } from 'redux-saga/effects'
import apis from '../../services/apis'

import { Creators as PeopleActions } from '../ducks/people'

export function* getPeople(action){
  try{
    const response = yield call(apis.getPeople)
    
    yield put(PeopleActions.getPeopleSuccess(response.data))
  }catch(err){
  }
}
