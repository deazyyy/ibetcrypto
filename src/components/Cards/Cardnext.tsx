import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Next from "../../assets/Icons/Next";
import Cardflip from "./Cardflip";
import ReactCardFlip from "react-card-flip";

interface CardValueProps {
  comp?: string;
}

const CardNext: React.FC<CardValueProps> = ({ comp }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isup, setIsup] = useState(true);
  function flipclicked(type:String){
    if(type == "down"){
        setIsup(false)
    }
    setIsFlipped(!isFlipped)
  }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <CardDiv
        className={`${comp} mycard`}
      >
        <header>
          <div>
            <Next />
            Next
          </div>
          #456
        </header>
        <div className="content">
          <div className="top">
            <h3>Prize Pool</h3>
            <div className="val">
              $42.554,21 <span>BTC</span>
            </div>
          </div>
          <div className="up" >
            <div>
              <h4>Up</h4>
              <div>1.37x Payout</div>
            </div>
            <div className="btn" onClick={()=> flipclicked("up")}>
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.43605 12L11.5639 12C13.4343 12 14.6065 10.0893 13.6713 8.57726L11.3893 4.84979L9.10735 1.13403C8.17212 -0.378054 5.82782 -0.378054 4.89259 1.13403L2.61063 4.84979L0.328668 8.57726C-0.606561 10.0893 0.565593 12 2.43605 12Z"
                  fill="rgba(0,0,0,0.6)"
                />
              </svg>
            </div>
          </div>
          <div className="down">
            <div>
              <h4>Down</h4>
              <div>1.37x Payout</div>
            </div>
            <div className="btn" onClick={()=> flipclicked("down")}>
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.43605 12L11.5639 12C13.4343 12 14.6065 10.0893 13.6713 8.57726L11.3893 4.84979L9.10735 1.13403C8.17212 -0.378054 5.82782 -0.378054 4.89259 1.13403L2.61063 4.84979L0.328668 8.57726C-0.606561 10.0893 0.565593 12 2.43605 12Z"
                  fill="rgba(0,0,0,0.6)"
                />
              </svg>
            </div>
          </div>
        </div>
      </CardDiv>
      {isup?<Cardflip setIsFlipped={setIsFlipped} />:<Cardflip setIsFlipped={setIsFlipped} type="down" />}
    </ReactCardFlip>
  );
};

const CardDiv = styled.div`
  width: 20%;
  background: rgba(196, 196, 196, 0.1);
  border-radius: 10px;
  margin: 0 10px;
  color: #b2b2b2;
  // border:2px solid transparent;
  overflow: hidden;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 16px;
    background: #0c0c0c;
    color: #6d6d6d;
    position: relative;

    div {
      font-weight: 700;
      font-size: 17px;
      color: #5d5d5d;
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg {
        margin-right: 8px;
        height: 16px;
        margin-top: -2px;
      }
    }
  }

  .content {
    padding: 13px 16px;
    // display:flex;
    // flex-direction:column;
    // justify-content:space-between;
    .top {
      text-align: left;
      h3 {
        margin: 0;
        font-size: 15px;
        color: #898989;
        font-weight: 500;
      }
      .val {
        font-size: 24px;
        margin-top: 6px;
        color: #fff;
        font-weight: 600;
        span {
          font-size: 17px;
        }
      }
      margin-bottom: 13px;
    }
    .btn {
      width: 40px;
      height: 40px;
      background: linear-gradient(0deg, #80a877, #80a877),
        linear-gradient(
          133.62deg,
          #bb9d3a 2.22%,
          #b5963a 3.92%,
          #a78539 4.94%,
          #9d7a38 6.21%,
          #987338 8%,
          #967138 12.95%,
          #9b763a 19.45%,
          #a9863f 27.62%,
          #c0a047 36.68%,
          #e0c352 46.32%,
          #edd156 49.64%,
          #967930 65.45%,
          #9a7d31 72.1%,
          #a68936 78.85%,
          #bb9c3d 85.64%,
          #d7b746 92.43%,
          #dcbc48 93.5%
        );
      background-blend-mode: hue, normal;
      border: 1px solid rgba(125, 225, 100, 0.8);
      box-sizing: border-box;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        transform: scale(1);
      }
    }
    .up {
      padding: 14px;
      display: flex;
      justify-content: space-between;
      background: #21321d;
      border-radius: 10px;
      margin-top: 0px;
      h4 {
        font-size: 18px;
        color: #fff;
      }
      div {
        color: #69dc4e;
        font-size: 14px;
        font-weight: 600;
      }
    }
    .down {
      padding: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #37201c;
      border-radius: 10px;
      margin-top: 20px;
      h4 {
        font-size: 18px;
        color: #fff;
      }
      div {
        color: #eb5b45;
        font-size: 14px;
        font-weight: 600;
      }
      .btn {
        width: 40px;
        height: 40px;
        background: linear-gradient(
            0deg,
            rgba(255, 0, 0, 0.14),
            rgba(255, 0, 0, 0.14)
          ),
          linear-gradient(0deg, #ff2100, #ff2100),
          linear-gradient(
            225deg,
            #bb9d3a 2.27%,
            #b5963a 3.93%,
            #a78539 4.93%,
            #9d7a38 6.17%,
            #987338 7.91%,
            #967138 12.74%,
            #9b763a 19.08%,
            #a9863f 27.05%,
            #c0a047 35.89%,
            #e0c352 45.29%,
            #edd156 48.53%,
            #967930 63.94%,
            #9a7d31 70.43%,
            #a68936 77.01%,
            #bb9c3d 83.64%,
            #d7b746 90.26%,
            #dcbc48 91.31%
          );
        background-blend-mode: normal, hue, normal;
        border: 1px solid rgba(255, 108, 108, 0.53);
        box-sizing: border-box;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          transform: scale(1) rotate(180deg);
        }
      }
    }
  }

  &.home {
    header {
      background: transparent;
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
        opacity: 0.2;
        z-index: -1;
      }
    }
  }
`;

export default CardNext;
