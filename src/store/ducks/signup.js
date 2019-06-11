export const Types = {
    GET_REQUEST: 'signup/GET_REQUEST',
    GET_SUCCESS: 'signup/GET_SUCCESS',
    GET_FAILURE: 'login/GET_FAILURE',
  }
  
  const INITIAL_STATE = {
    data: {},
    loading: false,
    error: []
  }
  
  export default function signup(state = INITIAL_STATE, action){
    switch (action.type){
      case Types.GET_REQUEST:
        return { ...state, loading: true, error:[] }
      case Types.GET_SUCCESS:
        return { ...state, loading: false, data: action.payload.data }
      case Types.GET_FAILURE:
        return { ...state, error: action.payload.error, loading: false, isAuthenticated: false }
      default:
        return state
    }
  }
  
  export const Creators = {
    getSignupRequest: data => ({
      type: Types.GET_REQUEST,
      payload: { data }
    }),
  
    getSignupSuccess: (data) => ({
      type: Types.GET_SUCCESS,
      payload: { data }
    }),

    getSignupFailure: error => ({
        type: Types.GET_FAILURE,
        payload: { error }
      })
  
  }
  