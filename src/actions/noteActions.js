import { GET_NOTES } from 'actions/types'

export const getNotes = (payload) => {
  return {
    type: GET_NOTES,
    payload
  }
}