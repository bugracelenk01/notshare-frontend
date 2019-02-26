import { GET_NOTES } from 'actions/types'

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {

  case GET_NOTES:
    return { ...state, ...action.payload }

  default:
    return state
  }
}