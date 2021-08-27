import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Flower from '../../assets/Icons/Flower'



interface CardValueProps {
    colorvalue?: string,
    status?: string
  }

  
const Row:  React.FC<CardValueProps> = ({colorvalue, status })=> {

  return (
    <RowOuter className={`${colorvalue} ${status} wow fadeInDown`}   data-wow-duration="0.5s" data-wow-delay="0.4s">
        <div className="left">
            <div>
                <h5></h5>
                <div className="time">
                    00:12:10:05
                </div>
            </div>
            <div>
                <Flower/>13
            </div>
        </div>
        <div className="center">
            <span>Total Bet</span>
            <b className="val">0.343234</b>
            <b className="grad">BTC</b>
        </div>

        <div className="right">
            <div className="namebx rightrow">
                <h5>Arizona Cardinals/h5>
                {colorvalue == "green"?<div className="amt">3.456</div>:``}
            </div>
            <div className="versus rightrow">
                <div className={`${colorvalue} times`}>
                    1.5X
                </div>
                <span>VS</span>
                <div className="times">
                    3X
                </div>
            </div>
            <div className="namebx namebxlst rightrow">
                <h5>Baltimore Ravens</h5>
            </div>
        </div>
    </RowOuter>
  )
}
const RowOuter = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-radius:6px;
    padding:18px 24px;
    background-image:url('/images/rowbg.png');
    background-repeat: no-repeat;
    background-position: left;
    background-size: auto 100%;
    margin-bottom:16px;
    position:relative;
    overflow:hidden;
    &::before {
        content: "";
        position:absolute;
        height: 100%;
        width: 100%;
        left:0;
        top: 0;
        background:rgba(196, 196, 196, 0.1);
        z-index: -1;
      }
    .right{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:50%;
        .namebx{
            h5{
                font-size:15px;
                margin-bottom:3px;
                line-height: 1;
                font-weight:500;
            }
            .amt{
                color:#919191;
                font-size:14px;
            }
            &.namebxlst{
                text-align:right
            }
        }
        .rightrow{
            width:33%;
        }
        .versus{
            display:flex;
            align-items:center;
            justify-content:space-between;
            width:25%;
            font-size:14px;
            span{
                color: rgba(237, 237, 237, 0.3);
                font-size:16px;
                margin: 0 16px;
            }
            .times{
                color: #EDD156;
                border: 1px solid rgba(255,255,255,0.1);
                border-radius:6px;
                padding: 4px;
                min-width:60px;
                text-align:center;
            }
        }
    }
    .center{
        display:flex;
        align-items:center;
        border-right:2px solid rgba(255,255,255,0.1);
        border-left:2px solid rgba(255,255,255,0.1);
        padding: 0 20px;
        margin:0 20px;
        span{
            color:rgba(255,255,255,0.4)
        }
        .val{
            margin:0 6px;
        }
        .grad{
            background: -webkit-linear-gradient(#AC8940, #E2C651, #D7B746);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    .left{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:30%;
        h5{
            font-size:16px;
            margin-bottom:4px;
            line-height: 1;
        }
        .time{
            color:#919191;
            font-size:14px;
        }
        svg{
            margin-right:10px;
            path{
                fill:rgba(255,255,255,0.4);
            }
        } 
    }


    &.green{
        .left{
            svg{
                path{
                    fill:rgba(89, 219, 141, 0.7);
                }
            } 
        }
        .right{
            .amt{
                color:#59DB8D
            }
            .times{
                &.green{
                    color: #59DB8D;
                    border: 1px solid #306444;
                }
            }
        }
    }


    &.active{
        &::before {
            background: linear-gradient(90deg, #BB9D3A 0%, #B5963A 1.81%, #A78539 2.89%, #9D7A38 4.23%, #987338 6.12%, #967138 11.37%, #9B763A 18.26%, #A9863F 26.92%, #C0A047 36.52%, #E0C352 46.73%, #EDD156 50.25%, #967930 67%, #9A7D31 74.05%, #A68936 81.2%, #BB9C3D 88.4%, #D7B746 95.59%, #DCBC48 96.73%), #C4C4C4;
            opacity: 0.2;
          }
          .left{
              .time{
                color:rgba(255, 234, 140, 0.7)
              }
          }
          .center{
              span{
                  color:rgba(255, 234, 140, 0.7)
              }
          }
    }
    @media screen and (max-width:1300px){
        flex-flow:wrap;
        .right{
            width:100%;  
            margin-top:20px; 
            .versus{
                width:40%;
            }         
        }       
        .center{
            margin-right:0;
            border-right:0;
            padding-right:0;
        } 
    }


    @media screen and (max-width:620px){
        flex-flow:wrap;
        .left{
            width:100%;
        }
        .right{
            width:100%;  
            margin-top:0px; 
            .versus{
                width:40%;
            }         
        }       
        .center{
            width:100%;
            margin:20px 0;
            border-right:0;
            border-left:0;
            padding:0;
            width:100%;
            border-top:2px solid rgba(255,255,255,0.1);
            border-bottom:2px solid rgba(255,255,255,0.1);
            padding:10px 0;
        } 
    }


    @media screen and (max-width:550px){
        

        .right{
            flex-direction:column;
            padding:0;
            text-align:center;
            .versus {
                margin:20px 0;
                width:100%;
            }
            .namebx{
                width:100%;
                
                h5{
                    text-align:center;
                }
            }
        }
      }
       
`

export default Row
