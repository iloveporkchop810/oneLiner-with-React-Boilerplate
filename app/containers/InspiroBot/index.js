import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectBotUrl,
} from './selectors';
// from '../App/selectors';
import { requestBotWisdom } from './actions';
// from '../App/actions';
import saga from './sagas';

const InputContainer = styled.div`
  diplay: inline-block;
  font-style: italic;
`;
const Button = styled.button`
  border: 1px solid DarkSlateGrey;
  border-radius: 1em;
  background: LightSlateGrey;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  color: DarkSlateGrey;
`;
export class InspiroBot extends React.PureComponent {
  render() {
    const { loading, error, botWisdom } = this.props;
    return (
      <InputContainer>
        CONSULT THE PHILOSOPHICAL BOT
        <Button
          onClick={() => {
            this.props.callToBot();
          }}
        >
          InspiroBot
        </Button>
        {loading ? (
          <p>Thinking hard...</p>
        ) : error ? (
          <p>BrainFart, try again...</p>
        ) : (
          <p>
            <img src={botWisdom} />
          </p>
        )}
      </InputContainer>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    callToBot: () => dispatch(requestBotWisdom()),
  };
}

const mapStateToProps = createStructuredSelector({
  botWisdom: makeSelectBotUrl(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'bot', saga });

export default compose(
  withConnect,
  withSaga,
)(InspiroBot);
