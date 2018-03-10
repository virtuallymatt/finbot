import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Grid} from 'semantic-ui-react';




class IndexPage extends Component {

  render() {
    return (
      <div>
        <Container>
          <Grid columns="2">
            <Grid.Row>
              <Grid.Column>left col</Grid.Column>
            <Grid.Column> bot</Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default IndexPage
