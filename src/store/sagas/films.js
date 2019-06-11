import { call, put } from 'redux-saga/effects'
import apis from '../../services/apis'

import { Creators as FilmsActions } from '../ducks/films'

export function* getFilms(action){
  try{
    const response = yield call(apis.getFilms)
    
    yield put(FilmsActions.getFilmsSuccess(response.data))
  }catch(err){
  }
}
