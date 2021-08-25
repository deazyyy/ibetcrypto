import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
  
const MakePred:  React.FC = ()=> {
  return (
    <Div className="container mt-0">
        <div className="left">
            <h1>Make your Prediciton</h1>
            <p>Before going further with the withdrawal, pleasecheck carefully the target address.Be aware that if you confirm an incorrect address, we won't be able to assist you to recover your assets.</p>
            <div className="gradientbtn">
                Make Your Prediction
            </div>
        </div>

        <div className="right">
            <h6>Total Bet</h6>
            <h4>0.3456</h4>
            <div className="main">
                <div className="namebx">
                    <img src="images/usr.png" alt="" />
                    <h5>Name Surname</h5>
                    <div className="times">1.5X</div>
                </div>
                <div className="versus">VS</div>
                <div className="namebx">
                    <img src="images/usr2.png" alt="" />
                    <h5>Name Surname</h5>
                    <div className="times">1.5X</div>
                </div>
            </div>
        </div>
    </Div>
  )
}
  
const Div = styled.div`
    &.container{
        padding: 0 12%;
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


    
`

export default MakePred
