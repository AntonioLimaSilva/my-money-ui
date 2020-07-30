import './auth.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from './auth-actions'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import Messages from '../message/messages'
import Input from '../common/form/inputAuth'

class Auth extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { handleSubmit } = this.props

        return (
            <div className="login-box">
                <div className="login-logo"><b>Sistema</b> de controle financeiro</div>
                <div className="login-box-body">
                    <p className="login-box-msg">Bem vindo!</p>
                    <form onSubmit={handleSubmit}>
                        <Field component={Input} type="email" name="email"
                            placeholder="E-mail" icon='envelope' />
                        <Field component={Input} type="password" name="password"
                            placeholder="Senha" icon='lock' />
                        <Row>
                            <Grid cols="4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">
                                    Entrar
                                </button>
                            </Grid>
                        </Row>
                    </form>
                </div>
                <Messages />
            </div>
        )
    }
}

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login },dispatch)

export default connect(null, mapDispatchToProps)(Auth)