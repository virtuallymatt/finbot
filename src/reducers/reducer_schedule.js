import { SET_SCHEDULE } from '../actions/index';

export const reducer_schedule = (state = [], action) => {
  switch (action.type) {
    case SET_SCHEDULE:
      return action.value;
    default:
      return state;
  }
};
