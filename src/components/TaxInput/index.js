import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Input, Button } from 'semantic-ui-react';

import { salaryChange, setSalarySchedule } from '../../actions/index';

class TaxInput extends Component {
  render() {

    const buttons = ['year', 'month', 'day', 'year'];

    return (
      <div>
        <Input
          placeholder="Type your gross salary here..."
          type="number" />

          <div>
            {buttons.map(b => (
              <Button value={b}>{b}</Button>
            ))}
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({ salary, schedule }) => {
  return { salary, schedule };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ salaryChange, setSalarySchedule }, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TaxInput);
