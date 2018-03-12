import React from 'react';
import {Header, Statistic} from 'semantic-ui-react';
import styled, {css} from 'react-emotion';

const HeaderText = styled.h1`
  font-size: 3.5rem;
  line-height: 4rem;
  color: #081E42;
`

const HomeAside = () => {
  return (
    <div className={css`
      padding: 70px 0 0 0;
    `}>
      <HeaderText>Calculate your tax, <br /> in one conversation</HeaderText>
      <Header as="h3" className={css`&&&{color:#40506D`}>And see what you really have to spend each month!</Header>

      <Statistic label="Sent to the govenor" value="£12,600,222" size="tiny" className={css`padding-top:20px`} />
    </div>
  )
}

export default HomeAside;
