import { USER_LOGIN, USER_LOGOUT } from '../actions'

export default function userReducer(state = null, action) {

  switch (action.type) {
    case USER_LOGIN:
      return action.payload

    case USER_LOGOUT:
      return null

    default:
      return state
  }
}