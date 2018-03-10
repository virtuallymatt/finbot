import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';


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


export default TaxInput;
