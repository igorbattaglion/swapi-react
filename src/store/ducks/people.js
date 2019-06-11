export const Types = {
    GET_REQUEST: 'people/GET_REQUEST',
    GET_SUCCESS: 'people/GET_SUCCESS'
  }
  
  const INITIAL_STATE = {
    data: {},
    loading: false,
  }
  
  export default function people(state = INITIAL_STATE, action){
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
    getPeopleRequest: data => ({
      type: Types.GET_REQUEST,
      payload: { data }
    }),
  
    getPeopleSuccess: (data) => ({
      type: Types.GET_SUCCESS,
      payload: { data }
    }),
  
  }
  