import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import CardLive from '../../components/Cards/Cardlive'
import CardNext from '../../components/Cards/Cardnext'
import CardLater from '../../components/Cards/Cardlater'
import Info from "../../assets/Icons/Info";
import Replay from "../../assets/Icons/Replay";
import Chart from './components/Chart'



const Home: React.FC = () => {
const [shown, setShown] = useState(false)
  return (
    <HomeDiv className="container">
      <Chart/>
        <div className="header wow fadeInDown" data-wow-duration="0.9s" data-wow-delay="0.0s">
          <div className="val">
            <img src="images/bitcoin.png" alt="" />
            $45.967
          </div>
          <div className="controls">
            <div className="arrleft gradientbtn">
                  <i className="fas fa-arrow-left"></i>
            </div>
            <div className="rect"></div>
            <div className="arrright gradientbtn">
                  <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          <div className="right">
            <div className="runtime">02:45</div>
            <div className="time">5 <span>m</span></div>
            <div className="bx ">
              <Replay/>
            </div>
            <div className="bx active">
              <Info/>
            </div>
          </div>
        </div>
        <CardSection>
            <CardLive colorvalue="red"/>
            <CardLive colorvalue="green" />
            <CardLive colorvalue="red" status="active"/>
            <CardNext/>
            <CardLater/>
        </CardSection>
    </HomeDiv>
  )
}




const HomeDiv = styled.div`
    .header{
      display:flex;
      justify-content:space-between;  
      margin-top:50px; 
      margin-bottom:40px; 
      position:relative;
      .val{
        position:relative;
        background:rgba(196, 196, 196, 0.1);
        border-radius:100px;
        padding:14px 20px 14px 70px;
        font-weight:600;
        img{
          position:absolute;
          left:0;
          top:0;
          height:100%;
          width:auto;
          transform:scale(1.1)
        }
      }
      .controls{
        display:flex;
        align-items:Center;
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        .gradientbtn{
          height:38px;
          width:38px;
          padding:0;
          border-radius:50%;
          cursor:pointer;
          transition:all 0.3s ease;
          &:hover{
            transform:Scale(1.1);
          }
          &::before{
            height: calc(100% - 2px);
            width: calc(100% - 2px);
            border-radius:50%;
          }
        }
        .rect{
          margin: 0 26px;
          height:40px;
            width:26px;
            position:Relative;
            background: linear-gradient(165.89deg, #BB9D3A 6.66%, #B5963A 6.97%, #A78539 7.99%, #9D7A38 9.27%, #987338 11.06%, #967138 16.02%, #9B763A 22.55%, #A9863F 30.75%, #C0A047 39.83%, #E0C352 49.5%, #EDD156 52.83%, #967930 68.69%, #9A7D31 75.36%, #A68936 82.13%, #BB9C3D 88.95%, #D7B746 95.75%, #DCBC48 96.83%);
            border-radius: 3px;
            &::before {
              content: "";
              position:absolute;
              height: 100%;
              width: 100%;
              right:0%;
              top: 0%;
              background: linear-gradient(165.89deg, #BB9D3A 6.66%, #B5963A 6.97%, #A78539 7.99%, #9D7A38 9.27%, #987338 11.06%, #967138 16.02%, #9B763A 22.55%, #A9863F 30.75%, #C0A047 39.83%, #E0C352 49.5%, #EDD156 52.83%, #967930 68.69%, #9A7D31 75.36%, #A68936 82.13%, #BB9C3D 88.95%, #D7B746 95.75%, #DCBC48 96.83%);
              border-radius: 5px;
              opacity:0.3;
              z-index: -1;
              transform:rotate(25deg);
              transform-origin: right bottom;
          }
        }
      }
      .right{
        display:flex;
        justify-content:space-between;  
        align-items:center;
       
        .runtime{
          margin-right:8px;
        }
        .time{
          span{
            color:#7F7F7F
          }
        }
        .bx{
          position:relative;
          width:40px;
          height:40px;
          display:flex;
          justify-content:center;
          align-items:center;
          border-radius:6px;
          overflow:hidden;
          margin-left:10px;
          svg{
            transform:scale(0.9);
          }
          &.active{
            &::before {
              opacity:1
            }
          }
          &::before {
            content: "";
            position:absolute;
            height: 100%;
            width: 100%;
            right:0%;
            top: 0%;
            background: linear-gradient(133.62deg, #BB9D3A 2.22%, #B5963A 3.92%, #A78539 4.94%, #9D7A38 6.21%, #987338 8%, #967138 12.95%, #9B763A 19.45%, #A9863F 27.62%, #C0A047 36.68%, #E0C352 46.32%, #EDD156 49.64%, #967930 65.45%, #9A7D31 72.1%, #A68936 78.85%, #BB9C3D 85.64%, #D7B746 92.43%, #DCBC48 93.5%);
            border-radius: 3px;
            opacity:0.2;
            z-index: -1;
        }
        }
      }
    }

    @media screen and (max-width:1440px){
      .header{
        flex-direction:column;
        align-items: center;
        .controls{
          position:relative;
          margin:34px auto 24px;
          left:0;
          transform:translate(0)
        }
      }
    }
`

const CardSection = styled.div`
    display:flex;
    justify-content:space-between;
    flex-flow:wrap;
    // padding:0 4%;
    .mycard{
      margin-top:20px;
      margin-bottom:20px;
    }
    @media screen and (max-width:1440px){
      justify-content:center;
    }
`




export default Home
