import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Divvy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const Daty = styled.span`
  margin-left: 25px;
  flex: 1;
`;

const Tempy = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Times = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Header = () => {
  return (
    <Divvy className="header">
      <Daty className="date">SMARCH 32, 2018</Daty>
      <Times>Lambda Times</Times>
      <Tempy className="temp">98°</Tempy>
    </Divvy>
  )
}

export default Header;