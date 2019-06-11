import { call, put } from 'redux-saga/effects'
import apis from '../../services/apis'


import { Creators as LoginActions } from '../ducks/login'

export function* getLogin(action){
  try{
    const response = yield call(apis.login, action.payload.data)
    yield put(LoginActions.getLoginSuccess(response.data))    
    
  }catch(err){
    yield put(LoginActions.getLoginFailure(err.response.data))
  }
}