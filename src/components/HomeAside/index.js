import React from 'react';
import {Header, Statistic} from 'semantic-ui-react';
import styled, {css} from 'react-emotion';

const HeaderText = styled.h1`
  font-size: 3.5rem;
  line-height: 4rem;
  color: #005ced;
`

const HomeAside = () => {
  return (
    <div className={css`
      padding: 50px 0 0 0;
    `}>
      <HeaderText>Calculate your tax, <br /> in one conversation</HeaderText>
      <Header as="h3">And see what you really have to spend each month!</Header>

      <Statistic label="Sent to the govenor" value="£12,600,222" size="tiny" />
    </div>
  )
}

export default HomeAside;
