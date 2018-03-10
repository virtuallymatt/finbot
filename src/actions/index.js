export const SALARY_CHANGE = 'SALARY_CHANGE';
export const SET_SCHEDULE = 'SET_SCHEDULE';

export function salaryChange(value) {
  return {
    type: SALARY_CHANGE,
    value
  };
}

export function setSalarySchedule(value) {
  return {
    type: SET_SALARY_SCHEDULE,
    value
  };
}
