import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Cardflip from "../../components/Cards/Cardflip";
import CardLive from "../../components/Cards/Cardlive";
import CardNext from "../../components/Cards/Cardnext";
import CardLater from "../../components/Cards/Cardlater";
import Info from "../../assets/Icons/Info";
import Replay from "../../assets/Icons/Replay";
import Chartmain from "./components/Chart";
import Slider from "react-slick";

const Home: React.FC = () => {
  const slider = useRef(null);
  
  var settings = {
    autoplay: false,
    infinite: false,
    dots: false,
    draggable:false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function next(){
    console.log(slider)
    if(slider)
    // @ts-ignore
      slider.current.slickNext()
  }
  function prev(){
    console.log(slider)
    if(slider)
    // @ts-ignore
      slider.current.slickPrev()
  }
  return (
    <HomeDiv className="container">
      <Chartmain />
      <div
        className="header wow fadeInDown"
        data-wow-duration="0.9s"
        data-wow-delay="0.8s"
      >
        <div className="val">
          <img src="images/bitcoin.png" alt="" />
          $45.967
        </div>
        <div className="controls">
          <div className="prev gradientbtn" onClick={()=>prev()}>
            <i className="fas fa-arrow-left"></i>
          </div>
          <div className="rect"></div>
          <div className="next gradientbtn" onClick={()=>next()}>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
        <div className="right">
          <div className="runtime">02:45</div>
          <div className="time">
            5 <span>m</span>
          </div>
          <div className="bx ">
            <Replay />
          </div>
          <div className="bx active">
            <Info />
          </div>
        </div>
      </div>
      <Slider ref={slider}  {...settings} className="wow fadeInDown" data-wow-duration="0.9s" data-wow-delay="1s">
        <div>
          <CardNext/>
        </div>
        <div>
          <CardLive colorvalue="red" />
        </div>
        <div>
          <CardLive colorvalue="green" status="active"/>
        </div>
        <div>
          <CardLive colorvalue="red"status="active" />
        </div>
        <div>
          <CardLive colorvalue="green" />
        </div>
        <div>
          <CardLive colorvalue="green" />
        </div>
        <div>
          <CardLive colorvalue="green" />
        </div>
        <div>
          <CardLive colorvalue="red" />
        </div>
        <div>
          <CardLive colorvalue="green" />
        </div>
        <div>
          <CardLive colorvalue="green" />
        </div>
        <div>
        <CardLive colorvalue="red" status="active"/>
        </div>
      
        <div>
          <CardLater/>
        </div>
      </Slider>
  
    </HomeDiv>
  );
};

const HomeDiv = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 40px;
    position: relative;
    .val {
      position: relative;
      background: rgba(196, 196, 196, 0.1);
      border-radius: 100px;
      padding: 14px 20px 14px 70px;
      font-weight: 600;
      img {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: auto;
        transform: scale(1.1);
      }
    }
    .controls {
      display: flex;
      align-items: Center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .gradientbtn {
        height: 38px;
        width: 38px;
        padding: 0;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          transform: Scale(1.1);
        }
        &::before {
          height: calc(100% - 2px);
          width: calc(100% - 2px);
          border-radius: 50%;
        }
      }
      .rect {
        margin: 0 26px;
        height: 40px;
        width: 26px;
        position: Relative;
        background: linear-gradient(
          165.89deg,
          #bb9d3a 6.66%,
          #b5963a 6.97%,
          #a78539 7.99%,
          #9d7a38 9.27%,
          #987338 11.06%,
          #967138 16.02%,
          #9b763a 22.55%,
          #a9863f 30.75%,
          #c0a047 39.83%,
          #e0c352 49.5%,
          #edd156 52.83%,
          #967930 68.69%,
          #9a7d31 75.36%,
          #a68936 82.13%,
          #bb9c3d 88.95%,
          #d7b746 95.75%,
          #dcbc48 96.83%
        );
        border-radius: 3px;
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          right: 0%;
          top: 0%;
          background: linear-gradient(
            165.89deg,
            #bb9d3a 6.66%,
            #b5963a 6.97%,
            #a78539 7.99%,
            #9d7a38 9.27%,
            #987338 11.06%,
            #967138 16.02%,
            #9b763a 22.55%,
            #a9863f 30.75%,
            #c0a047 39.83%,
            #e0c352 49.5%,
            #edd156 52.83%,
            #967930 68.69%,
            #9a7d31 75.36%,
            #a68936 82.13%,
            #bb9c3d 88.95%,
            #d7b746 95.75%,
            #dcbc48 96.83%
          );
          border-radius: 5px;
          opacity: 0.3;
          z-index: -1;
          transform: rotate(25deg);
          transform-origin: right bottom;
        }
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .runtime {
        margin-right: 8px;
      }
      .time {
        span {
          color: #7f7f7f;
        }
      }
      .bx {
        position: relative;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        overflow: hidden;
        margin-left: 10px;
        svg {
          transform: scale(0.9);
        }
        &.active {
          &::before {
            opacity: 1;
          }
        }
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          right: 0%;
          top: 0%;
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
          border-radius: 3px;
          opacity: 0.2;
          z-index: -1;
        }
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .header {
      flex-direction: column;
      align-items: center;
      .controls {
        position: relative;
        margin: 34px auto 24px;
        left: 0;
        transform: translate(0);
      }
    }
  }
`;


export default Home;
