import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import Button from 'components/Button';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectBotUrl,
} from './selectors';
import { requestBotWisdom } from './actions';
import saga from './sagas';
import reducer from './reducer';

const InputContainer = styled.div`
  diplay: inline-block;
  font-size: 1.5em;
  font-weight: bold;
`;

export class InspiroBot extends React.PureComponent {
  componentDidMount() {
    this.props.callToBot();
  }

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
          <img src={botWisdom} />
        )}
      </InputContainer>
    );
  }
}

InspiroBot.propTypes = {
  botWisdom: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  callToBot: PropTypes.func,
};

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
const withReducer = injectReducer({ key: 'bot', reducer });

export default compose(
  withConnect,
  withSaga,
  withReducer,
)(InspiroBot);
