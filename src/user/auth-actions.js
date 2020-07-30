import axios from 'axios'

import { toastr } from 'react-redux-toastr'

const BASE_URL_OAPI = 'http://localhost:3003/open-api'
const BASE_URL_AUTH = 'http://localhost:3003/api'

export const login = (values) => {
    return submit(values, `${BASE_URL_OAPI}/login`)
}

export const signup = (values) => {
    return submit(values, `${BASE_URL_AUTH}/signup`)
}

export const submit = (values, url) => {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch( { type: 'USER_FETCHED', payload: resp.data })
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error))
            })
    }
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${BASE_URL_OAPI}/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}