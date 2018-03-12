import { GET_INCOME_TAX } from '../actions/index';

export const reducer_tax = (state = [], action) => {
  switch (action.type) {
    case GET_INCOME_TAX:
      return action.value;

    default:
      return state;
  }
};
