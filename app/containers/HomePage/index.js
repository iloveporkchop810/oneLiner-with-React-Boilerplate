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
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Wrapper from 'components/Wrapper';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import messages from './messages';
import saga from './sagas';
import { retrieveFromDB } from '../App/actions';
import { makeSelectOneLiners } from '../App/selectors';

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
class HomePage extends React.PureComponent {
  componentDidMount() {
    if (this.props.oneLiner.size === 0) {
      this.props.getAllOneLiners();
    }
  }

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

HomePage.propTypes = {
  oneLiner: PropTypes.object,
  getAllOneLiners: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getAllOneLiners: () => dispatch(retrieveFromDB()),
  };
}

const withConnect = connect(
  createStructuredSelector({
    oneLiner: makeSelectOneLiners(),
  }),
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'output', saga });

export default compose(
  withConnect,
  withSaga,
)(HomePage);
