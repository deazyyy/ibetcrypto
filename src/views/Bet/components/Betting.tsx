import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Betting: React.FC = () => {
  const [activenm, setActivenm] = useState("btn1");
  function isActive(name: String) {
    return activenm == name;
  }

  return (
    <BetDiv>
      <div className="left">
        <div className="namebx">
          <img src="images/usr.png" alt="" />
          <h4>Name Surname</h4>
          <button
            onClick={() => setActivenm("btn1")}
            className={isActive("btn1") ? "gradientbtn active" : `gradientbtn`}
          >
            Select
          </button>
        </div>
        <div className="center">
          <h6>Total Bet</h6>
          <h4>0.345667</h4>
          <div className="versus">
            <div>1.5X</div>
            <span>VS</span>
            <div>1.5X</div>
          </div>
        </div>
        <div className="namebx">
          <img src="images/usr2.png" alt="" />
          <h4>Name Surname</h4>
          <button
            onClick={() => setActivenm("btn2")}
            className={isActive("btn2") ? "gradientbtn active" : `gradientbtn`}
          >
            Select
          </button>
        </div>
      </div>
      <div className="right">
        <div className="header">
          <h6>Place Bet</h6>
          <h5>
            0.3454 <span className="gradtext">BNB</span>
          </h5>
        </div>
        <div className="ipouter">
          <input type="text" />
          <span className="gradtext">BNB</span>
        </div>
        <div className="iptoptions">
          <div className="row">
            <button>10</button>
            <button>10</button>
            <button>10</button>
            <button>10</button>
          </div>
          <button className="maxbtn">Max</button>
        </div>
        <div className="gradientbtn gradbtn">Confirm Bet</div>
      </div>
    </BetDiv>
  );
};

const BetDiv = styled.div`
  background:rgba(196, 196, 196, 0.1);
  border-radius:8px;
  margin-bottom:40px;
  display:flex;
  .right{
    width:35%;
    // display:flex;
    // justify-content:space-between;
    padding:40px 70px;
    .header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      width:100%;
      h6{
        color:rgba(237, 237, 237, 0.2);
        margin:0
      }
      h5{
        font-size:17px;
        margin:0
      }
    }

    .ipouter{
      position:relative;
      margin-top:30px;
      input{
        background:rgba(0,0,0,0.5);
        border: 1px solid rgba(255, 255, 255, 0.26);
        border-radius: 8px;
        outline:0;
        padding:8px 8px;
        width: 100%;
        color:#fff;
        &:focus{
          border: 1px solid rgba(255, 255, 255, 0.26) !important;
        }
      
      }
      .gradtext{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        right:12px;
      }    
    }

    .iptoptions{
      .row{
        margin:0 -6px;
        display:flex;
        justify-content:space-between;
        margin:16px 0;
        button{
          outline:0;
          border:0;
          background: rgba(89, 89, 89, 0.2);
          color:rgba(255,255,255,0.5);
          width:calc(25% - 10px);
          padding: 7px;
          border-radius:7px;
        }
      }
      .maxbtn{
        background:transparent;
        border: 1px solid rgba(89, 89, 89, 0.2);
        color:rgba(255,255,255,0.5);
        border-radius: 8px;
        outline:0;
        padding:10px 8px;
        width: 100%;
      }
    }
    .gradbtn{
      color:#000;
      text-align:center;
      font-weight:600;
      display: flex;
      justify-content: center;
      margin-top:30px;
      &::before {
        display:none;
      }
    }
  }
  .left{
    width:65%;
    display:flex;
    justify-content:space-between;
    padding:40px 70px;
    border-right: 1px dashed rgba(255,255,255,0.2);
    
    .center{
      width:30%;
      max-width:240px;
      margin: 19px 0;
      h6{
        text-align:center;
        font-weight:400;
        color:rgba(255,255,255,0.4);
        font-size:14px;
        margin-bottom:16px;
      }
      h4{
        text-align:center;
        font-size:22px;
      }
      .versus{
        display:flex;
        justify-content:space-between;
        margin-top:114px;
        div{
          color: #EDD156;
        }
        span{
          color:rgba(255,255,255,0.34);
        }
      }
    }
    .namebx{
      margin: 19px 0;
      text-align:center;
      // img{
      //   <width:14></width:14>0px;
      // }
      h4{
        font-size:20px;
        margin: 10px 0 16px
      }
      .gradientbtn{
        outline:0;
        color:#fff;
        border:0;
        margin:auto;
        margin-top:24px;
        &.active{
          color:#000;
          font-weight:600;
          &::before {
            display:none;
          }
        }
      }
    }
  }
`;

const CardSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4%;
`;

export default Betting;
