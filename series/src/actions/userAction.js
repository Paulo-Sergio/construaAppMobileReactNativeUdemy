const USER_LOGIN = 'USER_LOGIN'
const userLogin = user => {
  return {
    type: USER_LOGIN,
    payload: user
  }
}

const USER_LOGOUT = 'USER_LOGOUT'
const userLogout = () => {
  return {
    type: USER_LOGOUT
  }
}