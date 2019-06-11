export const Types = {
    GET_REQUEST: 'vehicles/GET_REQUEST',
    GET_SUCCESS: 'vehicles/GET_SUCCESS'
  }
  
  const INITIAL_STATE = {
    data: {},
    loading: false,
  }
  
  export default function vehicles(state = INITIAL_STATE, action){
    switch (action.type){
      case Types.GET_REQUEST:
        return { ...state, loading: true }
      case Types.GET_SUCCESS:
        return { ...state, loading: false, data: action.payload.data }
      default:
        return state
    }
  }
  
  export const Creators = {
    getVehiclesRequest: data => ({
      type: Types.GET_REQUEST,
      payload: { data }
    }),
  
    getVehiclesSuccess: (data) => ({
      type: Types.GET_SUCCESS,
      payload: { data }
    }),
  
  }
  