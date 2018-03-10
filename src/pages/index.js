import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Grid} from 'semantic-ui-react';
import style, {css} from 'react-emotion';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

import HomeAside from '../components/HomeAside'
import blueGradient from '../images/blue-gradient-middle.svg';
import greenGradient from '../images/green-gradient-front.svg';
import yellowGradient from '../images/yellow-gradient-back.svg';

import { theme, rootStyle, contentStyle, footerStyle } from '../components/BotOptions/styles'

class IndexPage extends Component {

  render() {
    return (
      <div>
        <Container>
          <Grid columns={16}>

            {/* Left aside Column  */}
            <Grid.Row>
              <Grid.Column width={8}><HomeAside /></Grid.Column>

            {/* Right, chatbot column */}
            <Grid.Column>
              <ThemeProvider theme={theme}>
              <ChatBot
                contentStyle={contentStyle}
                hideHeader
                botDelay={1000}
                footerStyle={footerStyle}
                style={rootStyle}
                width="450px"
                steps={[
                  {
                    id: '1',
                    message: 'Hey I\'m Fin!',
                    trigger: '2',
                  },
                  {
                    id:'2',
                    message: 'I can calculate the tax you\'ll pay in no time at all!',
                    trigger: 'taxInput'
                  },
                  {
                    id: 'taxInput',
                    message: 'component will go here',
                    trigger: '4'
                  },
                  {
                    id: '4',
                    message: 'Sweet!',
                    trigger: 'results'
                  },
                  {
                    id: 'results',
                    message: 'Here\'s your results. How depressing.'
                  }
                ]}
               />
             </ThemeProvider>

            </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>



        {/* Footer gradients setup */}

        {/* Yellow  */}
        <div className={css`
          background-image: url(${yellowGradient});
          background-repeat: none;
          background-position: bottom;
          height: 441px;
          width: 100%;
          position: absolute;
          bottom: 0;
          top: auto;
          right: 0;
          left: 0;
          z-index: 2;
          opacity: 0.5;
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
          opacity: 0.9;

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
          opacity: 0.8;

        `}></div>

      </div>
    )
  }
}

export default IndexPage
