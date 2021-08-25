import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CardLive from "../../../components/Cards/Cardlive";
import CardNext from "../../../components/Cards/Cardnext";

const Pred: React.FC = () => {
  return (
    <Div>
      <div className="container">
        <div className="left wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.6s">
          <h1>
            Predict <br /> Future
          </h1>
          <p>
            Before going further with the withdrawal, pleasecheck carefully the
            target address.Be aware that if you confirm an incorrect address, we
            won't be able to assist you to recover your assets.
          </p>
          <div className="gradientbtn">Make Your Prediction</div>
        </div>

        <div className="right wow fadeInRight" data-wow-duration="0.9s" data-wow-delay="0.6s">
          <CardLive status="active" colorvalue="red" comp="home" />
          <CardNext comp="home" />
        </div>
      </div>
    </Div>
  );
};
const Div = styled.div`
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  .container {
    display: flex;
    align-items: center;
    padding: 0 12%;
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      right: 0%;
      top: 0%;
      background: linear-gradient(
        90deg,
        #bb9d3a 0%,
        #b5963a 1.81%,
        #a78539 2.89%,
        #9d7a38 4.23%,
        #987338 6.12%,
        #967138 11.37%,
        #9b763a 18.26%,
        #a9863f 26.92%,
        #c0a047 36.52%,
        #e0c352 46.73%,
        #edd156 50.25%,
        #967930 67%,
        #9a7d31 74.05%,
        #a68936 81.2%,
        #bb9c3d 88.4%,
        #d7b746 95.59%,
        #dcbc48 96.73%
      );
      opacity: 0.065;
      z-index: -1;
    }
  }

  // min-height:calc( 80vh - 100px );
  .right {
    // text-align:center;
    position: relative;
    width: 60%;
    display: flex;
    justify-content: center;
  }
  .left {
    width: 40%;
    padding: 10px 60px;
    h1 {
      font-size: 50px;
    }
    p {
      color: #696865;
      margin: 30px 0 40px;
      font-size: 15px;
    }
    .gradientbtn {
      width: fit-content;
      color: #000;
      font-weight: 600;
      &::before {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1300px) {
    h1 {
      font-size: 30px;
    }
    .container {
      flex-direction: column;
    }
    .left {
      width: 100%;
      text-align: center;
      margin-bottom: 60px;
      .gradientbtn {
        margin-left: auto;
        margin-right: auto;
      }
    }
    .right {
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    .main {
      flex-direction: column;
      width: 100% !important;
    }
    .right {
      flex-direction: column;
      .mycard{
          margin:0 auto 30px !important;
      }
    }
  }

  @media screen and (max-width:550px){
        

    .right{
        flex-direction:column;
        padding:0;
    }
    .left{
        padding:0;
        h1{
            font-size:26px;
        }
    }
  }
`;

export default Pred;
