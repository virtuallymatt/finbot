export const SALARY_CHANGE = 'SALARY_CHANGE'
export const SET_SCHEDULE = 'SET_SCHEDULE'
export const GET_INCOME_TAX = 'GET_INCOME_TAX'

export function salaryChange(value) {
  return {
    type: SALARY_CHANGE,
    value,
  }
}

export function setSalarySchedule(value) {
  return {
    type: SET_SCHEDULE,
    value,
  }
}

export function getIncomeTax(value) {
  return {
    type: GET_INCOME_TAX,
    value,
  }
}
