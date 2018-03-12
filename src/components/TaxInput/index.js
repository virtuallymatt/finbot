import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Input, Button } from 'semantic-ui-react'

import { taxSettings } from './taxSettings'

import {
  salaryChange,
  setSalarySchedule,
  getIncomeTax,
} from '../../actions/index'

class TaxInput extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const props = this.props

    const incomeToTax = this.getIncome(e.target.value, props.salary)
    const tax = this.getTaxBreakDown(incomeToTax)
    props.getIncomeTax(tax)
    this.props.setSalarySchedule(e.target.value)
    props.triggerNextStep()
  }

  // Generate all taxes
  getTaxBreakDown(income) {
    let rate_0 = this.getTax(taxSettings.rate_0, income)
    let rate_20 = this.getTax(taxSettings.rate_20, rate_0.carry)
    let rate_40 = this.getTax(taxSettings.rate_40, rate_20.carry)
    let rate_45 = this.getTax(taxSettings.rate_45, rate_40.carry)

    return {
      taxTotal: rate_0.tax + rate_20.tax + rate_40.tax + rate_45.tax,
    }
  }

  // Calculate tax for a rate
  getTax(rate, income, props) {
    let taxRateDifference = rate.end === -1 ? income : rate.end - rate.start
    let totalMinusDifference = income - taxRateDifference
    let carry = totalMinusDifference > 0 ? totalMinusDifference : 0

    if (income > 0) {
      if (income >= taxRateDifference) {
        return {
          tax: taxRateDifference * rate.rate,
          carry: carry,
        }
      }
      return {
        tax: income * rate.rate,
        carry: carry,
      }
    }
    return {
      tax: 0,
      carry: carry,
    }
  }

  // Calculate year income based on schedule
  getIncome(schedule, salary) {
    switch (schedule) {
      case 'year':
        return salary
        break

      case 'month':
        return salary * 12
        break

      case 'week':
        return salary * 52
        break

      case 'day':
        return salary * 365
        break
    }
  }

  render() {
    const buttons = ['year', 'month', 'day', 'year']
    const salaryChange = this.props.salaryChange
    return (
      <div>
        <Input
          placeholder="Type your gross salary here"
          onChange={e => salaryChange(e.target.value)}
          type="number"
          value={this.props.salary}
        />

        <div>
          {buttons.map(b => (
            <Button value={b} onClick={this.handleSubmit}>
              {b}
            </Button>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ salary, schedule, tax }) => {
  return { salary, schedule, tax }
}

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(
      { salaryChange, setSalarySchedule, getIncomeTax },
      dispatch
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaxInput)
