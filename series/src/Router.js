import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginPage from './pages/LoginPage'
import SeriesPage from './pages/SeriesPage'

const AppNavigator = createStackNavigator({
  'Login' : {
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem vindo!'
    }
  },
  'Main': {
    screen: SeriesPage,
  }
}, {
  defaultNavigationOptions: {
    title: "Séries!",
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#6CA2F7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    },
    headerTitleStyle: {
      color: '#FFF',
      fontSize: 30
    }
  }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer