import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';

import styled from 'styled-components';
import Wrapper from 'components/Wrapper';
import Button from 'components/Button';
import H2 from 'components/H2';
import saga from './sagas';
import { deleteFromDB, grabkey } from '../App/actions';
import {
  makeSelectOneLiners,
  makeSelectLoading,
  makeSelectError,
  makeSelectSuccess,
} from '../App/selectors';

const H1 = styled.h1`
  font-size: 1em;
  font-style: italic;
`;

const H3 = styled.h1`
  font-size: 3em;
  font-weight: bold;
`;

export class Output extends React.PureComponent {
  render() {
    const { oneLiner } = this.props;

    return (
      <Wrapper>
        <div>
          {oneLiner ? (
            oneLiner.map((lineObj, i) => (
              <div key={i}>
                <div>
                  <H2>"{lineObj.userInput}"</H2>
                  <H1>- {lineObj.author}</H1>
                </div>
                <div>
                  <Button onClick={() => this.props.onDelete(i)}>Delete</Button>
                  {/* <Button>Edit</Button> */}
                </div>
              </div>
            ))
          ) : (
            <H3>Got Nothing to Show Yet</H3>
          )}
        </div>
      </Wrapper>
    );
  }
}

Output.propTypes = {
  oneLiner: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  success: PropTypes.bool,
  onDelete: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onDelete: i => {
      dispatch(grabkey(i));
      dispatch(deleteFromDB());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  oneLiner: makeSelectOneLiners(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  success: makeSelectSuccess(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'delete', saga });

export default compose(
  withConnect,
  withSaga,
)(Output);
