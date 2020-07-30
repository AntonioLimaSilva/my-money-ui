import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export const getSummary = () => {
    const response = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMAY_FETCHED',
        payload: response
    }
}

export const getSummaryShared = () => {
    const response = axios.get(`${BASE_URL}/billingCycles/summary-shared`)
    return {
        type: 'BILLING_SUMMAY_SHARED_FETCHED',
        payload: response
    }
}