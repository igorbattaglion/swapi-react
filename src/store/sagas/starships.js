import { call, put } from 'redux-saga/effects'
import apis from '../../services/apis'

import { Creators as StarshipsActions } from '../ducks/starships'

export function* getStarships(action){
  try{
    const response = yield call(apis.getStarships)
    
    yield put(StarshipsActions.getStarshipsSuccess(response.data))
  }catch(err){
  }
}
