import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Grid } from 'semantic-ui-react'
import style, { css } from 'react-emotion'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'

import HomeAside from '../components/HomeAside'
import TaxInput from '../components/TaxInput'
import Results from '../components/Results'
import BreakDown from '../components/BreakDown'
import blueGradient from '../images/blue-gradient-middle.svg'
import greenGradient from '../images/green-gradient-front.svg'
import yellowGradient from '../images/yellow-gradient-back.svg'

import {
  theme,
  rootStyle,
  contentStyle,
  footerStyle,
  customStyle,
} from '../components/BotOptions/styles'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Grid columns={16}>
            {/* Left aside Column  */}
            <Grid.Row>
              <Grid.Column width={8}>
                <HomeAside />
              </Grid.Column>

              {/* Right, chatbot column */}
              <Grid.Column width={7} floated="right">
                <ThemeProvider theme={theme}>
                  <ChatBot
                    contentStyle={contentStyle}
                    hideHeader
                    botDelay={1000}
                    footerStyle={footerStyle}
                    style={rootStyle}
                    customStyle={customStyle}
                    width="450px"
                    steps={[
                      {
                        id: '1',
                        message: "Hey I'm Fin!",
                        trigger: '2',
                      },
                      {
                        id: '2',
                        message:
                          "I can calculate the tax you'll pay in no time at all!",
                        trigger: '3',
                      },
                      {
                        id: '3',
                        message: 'Start by entering your gross salary below!',
                        delay: 2000,
                        trigger: 'taxInput',
                      },
                      {
                        id: 'taxInput',
                        component: <TaxInput />,
                        waitAction: true,
                        trigger: '5',
                      },
                      {
                        id: '5',
                        message: 'Sweet!',
                        delay: 800,
                        trigger: '6',
                      },
                      {
                        id: '6',
                        message: 'hmmm...🧐',
                        trigger: 'results',
                        delay: 3000,
                      },
                      {
                        id: 'results',
                        component: <Results />,
                        asMessage: true,
                        trigger: '8',
                      },
                      {
                        id: '8',
                        message: 'Do you want a complete breakdown?',
                        delay: 1000,
                        trigger: '9',
                      },
                      {
                        id: '9',
                        options: [
                          { value: 'yes', label: 'Yes', trigger: 'breakdown' },
                          { value: 'no', label: 'No', trigger: 'options' },
                          {
                            value: 'Change my salary',
                            label: 'I want to change my salary',
                            trigger: '3',
                          },
                        ],
                      },
                    
                      {
                        id: 'options',
                        message: 'options',
                      },
                    ]}
                  />
                </ThemeProvider>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        {/* Footer gradients setup */}

        {/* Yellow  */}
        <div
          className={css`
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
          `}
        />

        {/* Blue  */}
        <div
          className={css`
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
          `}
        />

        {/* Green */}

        <div
          className={css`
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
          `}
        />
      </div>
    )
  }
}

export default IndexPage
