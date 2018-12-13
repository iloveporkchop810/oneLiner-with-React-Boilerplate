/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const Wrapper = styled.section`
  background: black;
  margin: 20px;
  padding: 10px;
  color: white;
  text-align: center;
`;
const Image = styled.img`
  width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const H1 = styled.h1`
  font-size: 3em;
  font-weight: bold;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Image src="https://generated.inspirobot.me/a/8Reaxjz6Lo.jpg" />
      </Wrapper>
    );
  }
}
