// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Next from "../../assets/Icons/Next";
import ReactSlider from "react-slider";

interface CardValueProps {
  comp?: string;
  type?: string;
  setIsFlipped: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.2);
  font-size:14px;
  border-radius: 50%;
  cursor: grab;
  border:0;
  outline:none !important;
  margin-top:20px;
  position:relative;
  transform:translateX(-10px);
  &::before {
    content: "";
    position:absolute;
    height: 16px;
    width: 16px;
    left:50%;
    transform:translateX(-50%);
    top: -24px;
    background: #E1C452;
    transition: width 0.7s ease, background-color 0.5s ease;
    z-index: -1;
    border-radius: 50%;;
  }
`;

const Thumb = (props, state) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);
const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 8px;
  margin:14px auto 50px;
  width:calc(100% - 20px)
`;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) =>
    props.index === 2 ? "#222222" : props.index === 1 ? "#0A0A0A" : "#222222"};
//   border-radius: 10px;

`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const Cardflip: React.FC<CardValueProps> = ({ comp ,type,setIsFlipped}) => {
  const [activenm, setActivenm] = useState("10");
  function isActive(name: String) {
    return activenm == name;
  }

  return (
    <CardDiv
      className={`${comp} ${type} mycard`}
    >
      <header>
        <div >
            <i  onClick={()=>setIsFlipped(false)} className="fas fa-arrow-left"></i>
          Set Position
        </div>
        <span><i className={type =="down" ?"fas fa-arrow-down":"fas fa-arrow-up"}></i>{type =="down" ?"Down":"Up"}</span>
      </header>

      <div className="content">
        <div className="top">
          <div className="info">
            <h5>Commit</h5>
            <b className="gradtext">BNB</b>
          </div>
          <input type="text" />
          <div className="rembal">Balance: 0.0000343</div>
        </div>
        <div className="slider">
          {/* @ts-ignore */}
          <StyledSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            renderTrack={Track}
            renderThumb={Thumb}
          />
          <div className="iptoptions">
            <div className="row">
              <button
                className={isActive("10") ? "active" : ``}
                onClick={() => setActivenm("10")}
              >
                10%
              </button>
              <button
                className={isActive("20") ? "active" : ``}
                onClick={() => setActivenm("20")}
              >
                20%
              </button>
              <button
                className={isActive("50") ? "active" : ``}
                onClick={() => setActivenm("50")}
              >
                50%
              </button>
              <button
                className={isActive("75") ? "active" : ``}
                onClick={() => setActivenm("75")}
              >
                75%
              </button>
              <button
                className={isActive("max") ? "active" : ``}
                onClick={() => setActivenm("max")}
              >
                Max
              </button>
            </div>
          </div>
        </div>
        <button className="gradientbtn gradbtn">Enter an amount</button>
        <div className="warning">Lorem Ipsum</div>
      </div>
    </CardDiv>
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
    .fa-arrow-left{
        cursor:pointer;
        margin-right:8px
    }
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
    span{
        color:#69DC4E;
        background:#2D3E29;
        padding:3px 14px;
        font-size:14px;
        border-radius:6px;
        i{
            margin-right:8px;
            font-size:12px;
        }
    }
  }

  .content {
    padding: 13px 16px;
    // display:flex;
    // flex-direction:column;
    // justify-content:space-between;
    .top {
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h5 {
          margin: 0;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.3);
        }
        margin-bottom: 8px;
      }
      input {
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.26);
        border-radius: 8px;
        outline: 0;
        padding: 8px 8px;
        width: 100%;
        color: #fff;
        &:focus {
          border: 1px solid rgba(255, 255, 255, 0.26) !important;
        }
      }
      .rembal {
        text-align: right;
        color: rgba(255, 255, 255, 0.26);
        font-size: 12px;
        margin-top: 4px;
      }
    }

    .slider {
      .iptoptions {
        .row {
          margin: 0 -6px;
          display: flex;
          justify-content: space-between;
          margin: 16px 0;
          button {
            outline: 0;
            border: 0;
            background: rgba(89, 89, 89, 0.2);
            color: rgba(255, 255, 255, 0.5);
            // width:calc(25% - 10px);
            padding: 7px 9px;
            border-radius: 7px;
            font-size: 12px;
            margin: 0 3px;
            &.active {
              background: rgba(89, 89, 89, 0.7);
            }
          }
        }
      }
    }

    .gradbtn {
      color: #000;
      width: 100%;
      &:before {
        display: none !important;
      }
    }

    .warning {
      font-size: 12px;
      margin-top: 8px;
      color: rgba(237, 237, 237, 0.2);
    }
  }

  &.down {
    header{
        span{
            color:#F05E47;
            background:#4B3430;
        }
    }
  }
`;

export default Cardflip;
