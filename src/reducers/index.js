import { combineReducers } from 'redux';
import {reducer_salary} from './reducer_salary';
import {reducer_schedule} from './reducer_schedule';

const rootReducer = combineReducers({
  tax: reducer_tax,
  schedule: reducer_schedule
});

export default rootReducer;
