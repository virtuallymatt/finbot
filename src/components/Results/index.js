import React, { Component } from 'react'
import { connect } from 'react-redux'

class Results extends Component {
  renderTaxResult() {
    const { salary, schedule, tax } = this.props
    const { taxTotal, incomeToTax } = tax
    const netIncome = incomeToTax - taxTotal

    console.log(this.props)

    return taxTotal === 0 ? (
      <p>Look's like you're paying no tax!</p>
    ) : (
      <p>
        Look's like you'll be left with £<strong>{netIncome}</strong> per year after
        paying £<strong>{taxTotal}</strong> to the govenor.
      </p>
    )
  }

  render() {
    return <div>{this.renderTaxResult()}</div>
  }
}

const mapStateToProps = ({ salary, schedule, tax }) => {
  return { salary, schedule, tax }
}

export default connect(mapStateToProps, null)(Results)
