import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.section`
  background: Silver;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
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

const NavBar = () => (
  <HeaderContainer>
    <div>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
    <div>
      <Link to="/input">
        <Button>Input Page</Button>
      </Link>
    </div>
    <div>
      <Link to="/output">
        <Button>Output Page</Button>
      </Link>
    </div>
  </HeaderContainer>
);

export default NavBar;
