import { call, put } from 'redux-saga/effects'
import apis from '../../services/apis'

import { Creators as VehiclesActions } from '../ducks/vehicles'

export function* getVehicles(action){
  try{
    const response = yield call(apis.getVehicles)
    
    yield put(VehiclesActions.getVehiclesSuccess(response.data))
  }catch(err){
  }
}
