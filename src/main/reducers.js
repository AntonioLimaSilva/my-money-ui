import { combineReducers } from 'redux'
import dashboardReducer from '../dashboard/dashboard-reducer'
import tabReducer from '../common/tab/tab-reducer'
import billingCycleReducer from '../billing-cycles/billing-cycle-reducer'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import authReducer from '../user/auth-reducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: authReducer
})

export default rootReducer