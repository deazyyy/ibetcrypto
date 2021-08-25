import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Matches from '../../components/Matches'
import Betting from "./components/Betting";
import Info from "../../assets/Icons/Info";



const Bet: React.FC = () => {
  return (
    <BetDiv className="container">
      <Betting/>
      <Matches/>
    </BetDiv>
  );
};

const BetDiv = styled.div`
 .rowOuter{
    .heading{
      font-size:22px;
      margin-bottom:20px;
    }
 }
`;

const CardSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4%;
`;


export default Bet;
