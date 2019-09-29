import React from 'react'
import { StyleSheet, View, TextInput, Text, Button, ActivityIndicator, Alert } from 'react-native'
import firebase from 'firebase'
import { connect } from 'react-redux'

import FormRow from '../components/FormRow'
import { tryLogin } from '../actions'

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
			isLoading: false,
			message: ''
		}
	}

	componentDidMount() {
		// Your web app's Firebase configuration
		const firebaseConfig = {
			apiKey: "AIzaSyBy5WEBhwA6ElSaqYtFbz9rAmFAAqguF90",
			authDomain: "series-a1162.firebaseapp.com",
			databaseURL: "https://series-a1162.firebaseio.com",
			projectId: "series-a1162",
			storageBucket: "",
			messagingSenderId: "947368847848",
			appId: "1:947368847848:web:f1a1a90b9060ca4a"
		}
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig)
	}

	onChangeEmail(email) {
		this.setState({ email })
	}

	onChangePassword(password) {
		this.setState({ password })
	}

	tryLogin() {
		this.setState({ isLoading: true, message: '' })
		const { email, password } = this.state

		this.props.tryLogin({ email, password })
	}

	getMessageByErroCode(errorCode) {
		switch (errorCode) {
			case 'auth/wrong-password':
				return 'Senha incorreta'
			case 'auth/user-not-found':
				return 'Usuário não encontrado'
			default:
				return 'Erro desconhecido'
		}
	}

	renderButton() {
		if (this.state.isLoading) {
			return <ActivityIndicator />
		}

		return (
			<Button
				title="Entrar"
				onPress={() => this.tryLogin()}
			/>
		)
	}

	renderMessage() {
		const { message } = this.state

		if (!message) {
			return null
		}

		return (
			<View>
				<Text>{message}</Text>
			</View>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<FormRow first>
					<TextInput
						style={styles.input}
						placeholder="user@mail.com"
						value={this.state.email}
						onChangeText={value => this.onChangeEmail(value)}
					/>
				</FormRow>
				<FormRow last>
					<TextInput
						style={styles.input}
						placeholder="******"
						secureTextEntry
						value={this.state.password}
						onChangeText={value => this.onChangePassword(value)}
					/>
				</FormRow>

				{this.renderButton()}
				{this.renderMessage()}
			</View>
		)
	}
}

export default connect(null, { tryLogin })(LoginPage)

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10
	},
	input: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5
	}
})