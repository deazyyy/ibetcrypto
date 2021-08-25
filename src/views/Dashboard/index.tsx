import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Row from "../../components/Row";
import Info from "../../assets/Icons/Info";



const Dashboard: React.FC = () => {
  const [activenm, setActivenm] = useState("ic1");
  function isActive(name: String) {
    return activenm == name;
  }

  return (
    <DashDiv className="container">
      <header>
        <div className="left">
          <li
            onClick={() => setActivenm("ic1")}
            className={isActive("ic1") ? "active" : ``}
          >
            <img src="images/ic/ic1.png" alt="" />
          </li>
          <li
            onClick={() => setActivenm("ic2")}
            className={isActive("ic2") ? "active" : ``}
          >
            <img src="images/ic/ic2.png" alt="" />
          </li>
          <li
            onClick={() => setActivenm("ic3")}
            className={isActive("ic3") ? "active" : ``}
          >
            <img src="images/ic/ic3.png" alt="" />
          </li>
          <li
            onClick={() => setActivenm("ic4")}
            className={isActive("ic4") ? "active" : ``}
          >
            <img src="images/ic/ic4.png" alt="" />
          </li>
          <li
            onClick={() => setActivenm("ic5")}
            className={isActive("ic5") ? "active" : ``}
          >
            <img src="images/ic/ic5.png" alt="" />
          </li>
          <li
            onClick={() => setActivenm("ic6")}
            className={isActive("ic6") ? "active" : ``}
          >
            <img src="images/ic/ic.png" alt="" />
          </li>
          <li
            onClick={() => setActivenm("ic7")}
            className={isActive("ic7") ? "active" : ``}
          >
            <img src="images/ic/ic7.png" alt="" />
          </li>
          <li
            onClick={() => setActivenm("ic8")}
            className={isActive("ic8") ? "active" : ``}
          >
            <img src="images/ic/ic8.png" alt="" />
          </li>
          <li
            onClick={() => setActivenm("ic9")}
            className={isActive("ic9") ? "active" : ``}
          >
            <img src="images/ic/ic9.png" alt="" />
          </li>
          <li
            onClick={() => setActivenm("ic10")}
            className={isActive("ic10") ? "active" : ``}
          >
            <img src="images/ic/ic6.png" alt="" />
          </li>
          <li
            onClick={() => setActivenm("ic11")}
            className={isActive("ic11") ? "active" : ``}
          >
            <img src="images/ic/ic10.png" alt="" />
          </li>
          <li
            onClick={() => setActivenm("ic12")}
            className={isActive("ic12") ? "active" : ``}
          >
            <img src="images/ic/ic11.png" alt="" />
          </li>
          <li
            onClick={() => setActivenm("all")}
            className={isActive("all") ? "active" : ``}
          >
            All
          </li>
        </div>
        <div className="right">
          <div className="toggle">
            <label className="switch">
              <input type="checkbox" /> <div></div>
            </label>
            <span>Show Betted On</span>
          </div>

          <div className="info">
            <Info />
          </div>
        </div>
      </header>
      <Row status="active" />
      <Row colorvalue="green" />
      <Row />
      <Row />
      <Row />
      <Row />
    </DashDiv>
  );
};

const DashDiv = styled.div`
  header {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      border-bottom: 1px solid #191919;
      li {
        margin-right: 40px;
        list-style-type: none;
        padding: 0 6px 16px;
        cursor: pointer;
        opacity: 0.5;
        position: relative;
        display: flex;
        justify-content: center;
        :last-child{
          margin-right:0
        }
        img {
          height: 22px;
          width: auto;
        }
        &::before {
          content: "";
          position: absolute;
          height: 3px;
          width: 0;
          bottom: 0;
          background: transparent;
          transition: width 0.3s ease, background-color 0.2s ease;
          transform: translateY(50%);
        }
        &:hover:before {
          width: 100%;
          background: linear-gradient(
            90deg,
            #bb9d3a 1.48%,
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
        }
        &.active {
          &::before {
            width: 100%;
            background: linear-gradient(
              90deg,
              #bb9d3a 1.48%,
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
          }
          opacity: 1;
        }
      }
    }

    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: -14px;
      .switch input {
        position: absolute;
        opacity: 0;
      }
      label {
        margin: 0;
        margin-right: 10px;
      }

      .switch {
        display: inline-block;
        font-size: 20px; /* 1 */
        height: 14px;
        width: 2em;
        background: rgba(196, 196, 196, 0.2);
        border-radius: 1em;
        cursor: pointer;
      }

      .switch div {
        height: 1em;
        width: 1em;
        border-radius: 1em;
        background: linear-gradient(
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
        border: 1px solid #ebcf56;
        box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
        transition: all 300ms;
        transform: translateY(-3px);
      }

      .switch input:checked + div {
        transform: translate3d(100%, 0, 0) translateY(-3px);
      }

      .toggle {
        display: flex;
        align-items: center;
        span {
          font-size: 15px;
          fonnt-weight: 400;
        }
      }

      .info {
        background: linear-gradient(
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
        border: 1px solid #ebcf56;
        width: 38px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 40px;
        border-radius:6px;
        cursor:pointer;
        svg{
          transform:scale(0.8)
        }
      }
    }
  }


  @media screen and (max-width:1400px){
    header{
      flex-direction:column;
      .left{
        flex-flow:wrap;
        justify-content: center;
        li{
          margin-bottom:24px;
        }
      }
      .right{
        margin-top:30px;
        margin-bottom:20px;
      }
    }
  }
`;

const CardSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4%;
`;


export default Dashboard;
