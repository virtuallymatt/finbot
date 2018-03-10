import React from 'react';
import {Header} from 'semantic-ui-react';
import {css} from 'react-emotion';


const HomeAside = () => {
  return (
    <div classname={css`
      padding-top: 50px;
    `}>
      <Header as="h1">Calculate your tax, <br /> in one conversation</Header>
      <Header as="h3">And see what you really have to spend each month!</Header>
    </div>
  )
}

export default HomeAside;
