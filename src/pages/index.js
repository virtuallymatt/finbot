import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Grid} from 'semantic-ui-react';
import style, {css} from 'react-emotion';

import blueGradient from '../images/blue-gradient-middle.svg';
import greenGradient from '../images/green-gradient-front.svg';
import yellowGradient from '../images/yellow-gradient-back.svg';



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



        {/* Footer gradients setup */}

        {/* Yellow  */}
        <div className={css`
          background-image: url(${yellowGradient});
          background-repeat: none;
          background-position: bottom;
          height: 442px;
          width: 100%;
          position: absolute;
          bottom: 0;
          top: auto;
          right: 0;
          left: 0;
          z-index: 2;
        `}></div>

        {/* Blue  */}
        <div className={css`
          background-image: url(${blueGradient});
          background-repeat: none;
          background-position: bottom;
          height: 440px;
          width: 100%;
          position: absolute;
          bottom: 0;
          top: auto;
          right: 0;
          left: 0;
          z-index: 2;
        `}></div>

        {/* Green */}

        <div className={css`
          background-image: url(${greenGradient});
          background-repeat: none;
          background-position: bottom;
          height: 230px;
          width: 100%;
          position: absolute;
          bottom: 0;
          top: auto;
          right: 0;
          left: 0;
          z-index: 2;
        `}></div>

      </div>
    )
  }
}

export default IndexPage
