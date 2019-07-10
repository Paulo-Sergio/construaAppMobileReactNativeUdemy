import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { connect } from 'react-redux'

import Input from './Input'
import { addTodo } from '../actions'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  onChangeText(text) {
    this.setState({ text })
  }

  onPress() {
    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={text => this.onChangeText(text)}
            value={this.state.text}
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

export default connect(null, { addTodo })(TodoForm)