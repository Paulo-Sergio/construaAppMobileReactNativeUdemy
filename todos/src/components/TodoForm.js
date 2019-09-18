import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { connect } from 'react-redux'

import Input from './Input'
import { addTodo, setTodoText } from '../actions'

class TodoForm extends React.Component {

  onChangeText(text) {
    this.props.setTodoText
    this.setState({ text })
  }

  onPress() {
    this.props.addTodo(this.state.text)
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
            title="add"
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

export default connect(mapStateToProps, { addTodo, setTodoText })(TodoForm)