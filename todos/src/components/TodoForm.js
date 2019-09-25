import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { connect } from 'react-redux'

import Input from './Input'
import { addTodo, setTodoText, updateTodo } from '../actions'

class TodoForm extends React.Component {

  onChangeText(text) {
    this.props.setTodoText(text)
  }

  onPress() {
    if (this.props.todo.id) {
      this.props.updateTodo(this.props.todo)
    } else {
      this.props.addTodo(this.props.todo.text)
    }

  }

  render() {
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={text => this.onChangeText(text)}
            value={this.props.todo.text}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title={this.props.todo.id ? "save" : "add"}
            onPress={() => this.onPress()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 4
  },
  buttonContainer: {
    flex: 1
  }
})

const mapStateToProps = state => ({
  todo: state.editingTodoReducer
})

export default connect(mapStateToProps, { addTodo, setTodoText, updateTodo })(TodoForm)