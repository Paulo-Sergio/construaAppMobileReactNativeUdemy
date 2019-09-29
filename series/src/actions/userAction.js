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

export const tryLogin = ({ email, password }) => {
  /*const loginUserSuccess = user => {
    this.setState({ message: 'Sucesso!' })
    this.props.navigation.navigate('Main')
  }

  const loginUserFailed = error => {
    this.setState({ message: this.getMessageByErroCode(error.code) })
  }*/

  return (dispatch) => {
    
  }

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log('usuario autenticado!', user)
      loginUserSuccess()
    })
    .catch(error => {
      console.log('falhou!', error)
      if (error.code === 'auth/user-not-found') {
        Alert.alert(
          'Usuário não encontrado',
          'Deseja criar um cadastro com as informações inseridas?',
          [{
            text: 'Não',
            onPress: () => console.log('Usuário não quer criar'),
            style: 'cancel' // IOS
          }, {
            text: 'Sim',
            onPress: () => {
              firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess())
                .catch(error => loginUserFailed())
            }
          }],
          { cancelable: false }
        )
      } else {
        loginUserFailed(error)
      }
    })
    .finally(() => {
      this.setState({ isLoading: false })
    })
}