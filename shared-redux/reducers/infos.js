import { INFOS } from '../constants'

const defaultState = { loading: 0, json: undefined }

const infos = (state = defaultState, action) => {
  switch (action.type) {
    case INFOS.LOADING:
      return { ...state, loading: 1 }
    case INFOS.LOADED_SUCCESS:
      return { json: action.json, loading: 0 }
    case INFOS.LOADED_ERROR:
      return { ...state, loading: -1 }
    default:
      return state
  }
}

export default infos
