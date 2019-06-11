import { call, put } from 'redux-saga/effects'
import apis from '../../services/apis'

import { Creators as SignupActions } from '../ducks/signup'

export function* signup(action){
  try{
    const response = yield call(apis.signup, action.payload.data)
    
    yield put(SignupActions.getSignupSuccess(response.data))
  }catch(err){
    yield put(SignupActions.getSignupFailure(err.response.data))
  }
}
