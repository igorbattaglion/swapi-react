export const Types = {
    GET_REQUEST: 'starships/GET_REQUEST',
    GET_SUCCESS: 'starships/GET_SUCCESS'
  }
  
  const INITIAL_STATE = {
    data: {},
    loading: false,
  }
  
  export default function starships(state = INITIAL_STATE, action){
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
    getStarshipsRequest: data => ({
      type: Types.GET_REQUEST,
      payload: { data }
    }),
  
    getStarshipsSuccess: (data) => ({
      type: Types.GET_SUCCESS,
      payload: { data }
    }),
  
  }
  