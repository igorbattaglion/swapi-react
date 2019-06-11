export const Types = {
    GET_REQUEST: 'login/GET_REQUEST',
    GET_SUCCESS: 'login/GET_SUCCESS',
    GET_LOGOUT: 'login/GET_LOGOUT',
    GET_FAILURE: 'login/GET_FAILURE',
  }
  
  const INITIAL_STATE = {
    data: [],
    isAuthenticated: false,
    loading: false,
    error: []
  }
  
  export default function login(state = INITIAL_STATE, action){
    switch (action.type){
      case Types.GET_REQUEST:
        return { ...state, loading: true, error:[] }
      case Types.GET_SUCCESS:
        return { ...state, loading: false, data: action.payload.data, isAuthenticated: true }
      case Types.GET_LOGOUT:
        return { ...state, data: [], loading: false, isAuthenticated: false }
      case Types.GET_FAILURE:
        return { ...state, error: action.payload.error, loading: false, isAuthenticated: false }
      default:
        return state
    }
  }
  
  export const Creators = {
    getLoginRequest: data => ({
      type: Types.GET_REQUEST,
      payload: { data }
    }),
  
    getLoginSuccess: data => ({
      type: Types.GET_SUCCESS,
      payload: { data }
    }),
  
    getLogout: data => ({
      type: Types.GET_LOGOUT
    }),
  
    getLoginFailure: error => ({
      type: Types.GET_FAILURE,
      payload: { error }
    })
  }
  