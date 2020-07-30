const INITIAL_STATE = {
    summary: {
        totalCredit: 0,
        totalDebit: 0
    },
    summaryShared: {
        subTotalDebit: 0
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'BILLING_SUMMAY_FETCHED':
            return { ...state, summary: action.payload.data }
        case 'BILLING_SUMMAY_SHARED_FETCHED':
            return { ...state, summaryShared: action.payload.data }
        default:
            return state
    }
}