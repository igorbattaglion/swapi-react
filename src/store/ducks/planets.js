export const Types = {
    GET_REQUEST: 'planets/GET_REQUEST',
    GET_SUCCESS: 'planets/GET_SUCCESS'
  }
  
  const INITIAL_STATE = {
    data: {},
    loading: false,
  }
  
  export default function planets(state = INITIAL_STATE, action){
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
    getPlanetsRequest: data => ({
      type: Types.GET_REQUEST,
      payload: { data }
    }),
  
    getPlanetsSuccess: (data) => ({
      type: Types.GET_SUCCESS,
      payload: { data }
    }),
  
  }
  