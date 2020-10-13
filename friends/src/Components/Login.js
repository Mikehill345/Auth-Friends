import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'


class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        },
        error:''
    };


    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then((res) => {
                window.localStorage.setItem('token', res.data.payload)
                this.props.history.push('/friendslist')
            })
            .catch((err) => {
                this.setState({
                    error: err.response.data.error})
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
                <p>{this.state.error}</p>

            </div >
        )
    }
}
export default Login
