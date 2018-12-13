import React, { PropTypes } from 'react';
import styled from 'styled-components';

import InpiroBot from '../InspiroBot/index';

const Wrapper = styled.section`
  background: black;
  margin: 20px;
  padding: 10px;
  color: white;
  text-align: center;
`
const InputBox = styled.input`
  border: 1px solid blue;
  border-radius: 3px;
  background: silver;  
  width: ${props => (props.small ? '20%' : '80%')};
  margin: 20px;
  padding: .5em;
  color: DarkSlateGrey;
`
const Button = styled.button`
  border: 1px solid DarkSlateGrey;
  border-radius: 1em;
  background: LightSlateGrey;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  color: DarkSlateGrey;
`
const H1 = styled.h1`
  font-size: 2em;
  font-weight: bold;
`
const InputContainer = styled.div`
  diplay: inline-block;
  font-style: italic;
`
class Input extends React.Component {
  // function Input(props) {
  constructor(props) {
    super(props);
    //NON-critical local state changes for temporary placeholding values, 
    //to be kept inside component's internal state
    this.state = {
      textValue: '',
      authorValue: ''
    }
    console.log(props);
  }
  
  changeLocalStateValue(e, key) {
    console.log(key);
    this.setState({
      [key]: e.target.value
    })
  }

  render () {
    return (
      <Wrapper>
        <H1>
          GIVE ME THAT CLEVER ONE LINER
        </H1>
        <InputContainer>
          Drum Roll~
          <InputBox
            id={'textValue'}
            placeholder={'Show me what you got!'}
            onChange={(e) => this.changeLocalStateValue(e, e.target.id)}
            >
          </InputBox>
        </InputContainer>
        <InputContainer>
          Credit shall be given where credit is due:
          <InputBox
            small
            id={'authorValue'}
            placeholder={'Author Name'}
            onChange={(e) => this.changeLocalStateValue(e, e.target.id)}
          >
          </InputBox>
          <Button>IMMORTALIZE</Button>
        </InputContainer>
          <InpiroBot />
      </Wrapper>
    )
  }
}

export default Input;
