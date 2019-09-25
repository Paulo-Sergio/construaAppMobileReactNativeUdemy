import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import TodoListItem from './TodoListItem'
import { toggleTodo, setEditingTodo } from '../actions'

const TodoList = (props) => (
  <View>
    {props.todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onPressTodo={() => props.toggleTodo(todo.id)}
        onLongPressTodo={() => props.setEditingTodo(todo)}
      />
    ))}
  </View>
)

const styles = StyleSheet.create({

})

const mapStateToProps = state => ({
  todos: state.todoListReducer
})
export default connect(mapStateToProps, { toggleTodo, setEditingTodo })(TodoList)