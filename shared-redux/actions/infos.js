import { INFOS, URL } from '../constants'

export const getPackage = () => async (dispatch, getState) => {
  if (getState().infos.loading) return
  dispatch({ type: INFOS.LOADING })

  try {
    const res = await fetch(URL.GET_PACKAGE)
    const json = await res.json()
    dispatch({ type: INFOS.LOADED_SUCCESS, json })
  } catch (e) {
    console.warn(e)
    dispatch({ type: INFOS.LOADED_ERROR })
  }
}
