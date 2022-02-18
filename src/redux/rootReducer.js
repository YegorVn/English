import {combineReducers} from 'redux'
import EssaysReducer from './reducers/EssaysReducer'

const rootReducer = combineReducers({essays: EssaysReducer})

export default rootReducer