import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import reducers from './reducers'

// extensão devtools para debugar aplicação com redux
import devToolsEnhancer from 'remote-redux-devtools'

// criar nossa store
const store = createStore(reducers, devToolsEnhancer())

export default class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoForm />
          <TodoList />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  }
})