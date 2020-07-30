import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tab-actions'

const BASE_URL = 'http://localhost:3003/api'

const INITIAL_VALUES = { debits: [{}] }

export const getBillingCycles = () => {
    const response = axios.get(`${BASE_URL}/billingCycles`)

    return {
        type: 'BILLING_CYCLE_SEARCHED',
        payload: response
    }
}

export const add = (values) => {
    return submit(values, 'post')
}

export const update = (values) => {
    return submit(values, 'put')
}

export const remove = (values) => {
    return submit(values, 'delete')
}

// exemplos de multiplas chamadas de actions
export const showUpdate = (bc) => ([
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', bc)
])

export const showDelete = (bc) => ([
    showTabs('tabRemove'),
    selectTab('tabRemove'),
    initialize('billingCycleForm', bc)
])

//initialize => é um action creator do redux
export const init = () => ([
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getBillingCycles(),
    initialize('billingCycleForm', INITIAL_VALUES)
])

 /**
  *  é possível acessar os métodos do http (post, put, delete, get) de forma dinamica 
  *  usando a sintaxe axios[method]
  * */ 
const submit = (values, method) => {
    return dispatch => {
        const id = values._id ? values._id : ''
       
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
        .then(_ => {
            toastr.success('Sucesso', 'Operação realizada com sucesso!')
            dispatch(init())
        }).catch(err => {
            err.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }
}