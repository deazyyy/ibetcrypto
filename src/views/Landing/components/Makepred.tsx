import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
  
const MakePred:  React.FC = ()=> {
  return (
    <Div className="container mt-0 wow fadeInDown" >
        <video autoPlay muted loop id="myVideo">
            <source src="images/ibetbg.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        <div className="bgOvverlay" />
        <div className="left wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.8s">
            <h1>Crypto In. Crypto out. 24/7 never closes</h1>
            <p>The world’s first ever blockchain based live prediction pools driven by the binance smart chain has arrived. All the sports and crypto live prediction pools you can handle. Connect your wallet and call the shots. Your in control with the lowest transaction fees in the industry at 3%! Go head to head and play against your friends with crypto only at ibetcrypto.io.</p>
            <div className="gradientbtn">
                Make Your Prediction
            </div>
        </div>

        <div className="right wow fadeInRight" data-wow-duration="0.9s" data-wow-delay="0.8s">
            <h6>Total Bet</h6>
            <h4>0.3456</h4>
            <div className="main">
                <div className="namebx">
                    <img src="images/usr.png" alt="" />
                    <h5>Jamie Campbell</h5>
                    <div className="times">1.5X</div>
                </div>
                <div className="versus">VS</div>
                <div className="namebx">
                    <img src="images/usr2.png" alt="" />
                    <h5>Chris Leben</h5>
                    <div className="times">1.5X</div>
                </div>
            </div>
        </div>
    </Div>
  )
}
  
const Div = styled.div`
#myVideo{
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
    z-index:-3
}
.bgOvverlay{
    position: absolute;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,0.75);
    min-width: 100%; 
    min-height: 100%;
    z-index:-2
}
    &.container{
        padding: 0 12%;
        margin-bottom: 0 !important;
        &::before {
            content: "";
            position:absolute;
            height: 40%;
            width: 70%;
            right:0%;
            top: 24%;
            background: radial-gradient(50% 50% at 50% 50%, #EDD156 0%, rgba(181, 150, 58, 0) 100%);
            opacity: 0.2;
            filter: blur(200px);
            z-index: -1;
            border-radius: 6px;
        }
    }
    display:flex;
    align-items:center;
    margin-top::-80px;
    min-height:calc( 100vh - 160px );
   
    .right{
        text-align:center;
        position:relative;
        width:60%;
        h6{
            color:rgba(255,255,255,0.4);
            font-weight:400;
            font-size:13px;
        }
        h5{
            font-weight:600;
            font-size:17px;
            margin:10px 0 14px;
        }
        h4{
            font-weight:600;
            font-size:24px;
            margin:12px 0  28px;
        }
        .main{
            display:flex;
            justify-content: center;
            padding:10px 60px 30px;
            position:relative;
            justify-content: center;
            width: fit-content;
            margin:auto;
            &::before {
                content: "";
                position:absolute;
                height: calc(100% - 60px);
                width: 100%;
                left:0;
                bottom: 0;
                background: rgba(196, 196, 196, 0.1);
                z-index: -1;
                border-radius: 6px;
              }
              &::after {
                content: "";
                position:absolute;
                height: 26px;
                width: calc(100% - 40px );
                left:50%;
                transform:translateX(-50%);
                bottom: -26px;
                background: rgba(196, 196, 196, 0.5);
                opacity: 0.1;
                z-index: -2;
                border-bottom-right-radius: 6px;
                border-bottom-left-radius: 6px;
              }
            .versus{
                color:rgba(255,255,255,0.4);
                font-size:14px;
                margin:50px;
                margin-top:150px;
            }
        }
        .namebx{
            img{
                width:140px;
            }
            .times{
                color:#EBCF55;
                border:1px solid #EBCF55;
                border-radius:6px;
                padding: 4px 16px;
                width:fit-content;
                font-size:13px;
                margin:auto;
            }
        }
    }
    .left{
        width:40%;
        padding:10px 60px;
        h1{
            font-size:50px;
        }
        p{
            color:#696865;
            margin:30px 0 40px;
            font-size:15px;
        }
        .gradientbtn{
            width:fit-content;
            color:#000;
            font-weight:600;
            &::before{display:none;}
        }
    }

    @media screen and (min-width:2100px){
        .right .main{
            padding:10px 100px 60px
        }
        .namebx{
            img{
                width:200px !important
            }
        }
      }


    @media screen and (max-width:1300px){
      h1{
          font-size:30px
      }
      flex-direction:column;
      .left{
          width:100%;
          text-align:center;
          margin-bottom:60px;
          .gradientbtn{
            margin-left:auto;
            margin-right:auto;
          }
          
      }
      .right{
            width:100%;
        }
      
    }


    @media screen and (max-width:700px){
        h1{
            font-size:32px;
        }
        .main{
            flex-direction:column;
            width:100% !important; 
        }
        .versus{
            margin-top:50px !important;
        }
        .right{
            flex-direction:column;
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
                font-size:32px;
            }
        }
      }


    
`

export default MakePred
