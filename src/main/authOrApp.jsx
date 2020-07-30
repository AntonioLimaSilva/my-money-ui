import '../common/template/dependencies'

import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from './app'
import Auth from '../user/auth'
import { validateToken, login } from '../user/auth-actions'

class AuthOrApp extends Component {

    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render() {
        const { user, validToken } = this.props.auth

        if (user && validToken) {
            axios.defaults.headers.common['authorization'] = user.token
            return <App>{ this.props.children }</App>
        } else if (!user && !validToken) {
            return <Auth onSubmit={ this.props.login }></Auth>
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken, login }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)