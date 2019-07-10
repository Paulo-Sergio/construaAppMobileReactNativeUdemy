import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import TodoForm from './components/TodoForm'
import reducers from './reducers'

// criar nossa store
const store = createStore(reducers)

export default class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoForm />
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