export const Types = {
    GET_REQUEST: 'species/GET_REQUEST',
    GET_SUCCESS: 'species/GET_SUCCESS'
  }
  
  const INITIAL_STATE = {
    data: {},
    loading: false,
  }
  
  export default function species(state = INITIAL_STATE, action){
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
    getSpeciesRequest: data => ({
      type: Types.GET_REQUEST,
      payload: { data }
    }),
  
    getSpeciesSuccess: (data) => ({
      type: Types.GET_SUCCESS,
      payload: { data }
    }),
  
  }
  