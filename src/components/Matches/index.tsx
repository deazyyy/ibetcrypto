
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Row from "../Row";



const Bet: React.FC = () => {
  return (
    <div className="rowOuter">
        <h3 className="heading">All Sports</h3>
        <Row status="active" />
        <Row colorvalue="green" />
        <Row />
        <Row />
        <Row />
        <Row />
    </div>
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
