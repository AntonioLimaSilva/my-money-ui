import axios from 'axios'

import env from '../env/enviroment'

export const getSummary = () => {
    const response = axios.get(`${env.URL_AUTH}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMAY_FETCHED',
        payload: response
    }
}

export const getSummaryShared = () => {
    const response = axios.get(`${env.URL_AUTH}/billingCycles/summary-shared`)
    return {
        type: 'BILLING_SUMMAY_SHARED_FETCHED',
        payload: response
    }
}