import { combineReducers } from 'redux'
import { reducer_salary } from './reducer_salary'
import { reducer_schedule } from './reducer_schedule'
import { reducer_tax } from './reducer_tax'

const rootReducer = combineReducers({
  salary: reducer_salary,
  schedule: reducer_schedule,
  tax: reducer_tax,
})

export default rootReducer
