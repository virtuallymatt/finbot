import { SALARY_CHANGE } from '../actions/index';

export const reducer_salary = (state = [], action) => {
  switch (action.type) {
    case SALARY_CHANGE:
      return action.value;

    default:
      return state;
  }
};
