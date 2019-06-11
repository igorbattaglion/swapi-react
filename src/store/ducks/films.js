export const Types = {
    GET_REQUEST: 'films/GET_REQUEST',
    GET_SUCCESS: 'films/GET_SUCCESS'
  }
  
  const INITIAL_STATE = {
    data: {},
    loading: false,
  }
  
  export default function films(state = INITIAL_STATE, action){
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
    getFilmsRequest: data => ({
      type: Types.GET_REQUEST,
      payload: { data }
    }),
  
    getFilmsSuccess: (data) => ({
      type: Types.GET_SUCCESS,
      payload: { data }
    }),
  
  }
  