import { INFOS } from '../constants'

const stopLoading = (error) => ({ loading: false, error })

const defaultState = { ...stopLoading(false), json: undefined }

const infos = (state = defaultState, action) => {
  switch (action.type) {
    case INFOS.LOADING:
      return { ...state, loading: true }
    case INFOS.LOADED_SUCCESS:
      return { json: action.json, ...stopLoading(false) }
    case INFOS.LOADED_ERROR:
      return { ...state, ...stopLoading(true) }
    default:
      return state
  }
}

export default infos
