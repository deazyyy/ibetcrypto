import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Next from '../../assets/Icons/Next'


interface CardValueProps {
    comp?: string
  }


  
const CardNext:  React.FC<CardValueProps> = ({comp})=> {

  return (
    <CardDiv className={`${comp} mycard`}>
        <header>
            <div><Next/>Next</div>
            #456
        </header>
        
        <div className="content">
            <div className="top">
                <h3>Prize Pool</h3>
                <div className="val">
                    $425.554 <span>BNB</span>
                </div>
            </div>
            <div className="up">
                <div>
                    <h4>Up</h4>
                    <div>1.37x Payout</div>
                </div>
                <div className="btn">
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.43605 12L11.5639 12C13.4343 12 14.6065 10.0893 13.6713 8.57726L11.3893 4.84979L9.10735 1.13403C8.17212 -0.378054 5.82782 -0.378054 4.89259 1.13403L2.61063 4.84979L0.328668 8.57726C-0.606561 10.0893 0.565593 12 2.43605 12Z" fill="rgba(0,0,0,0.6)"/>
                    </svg>
                </div>
            </div>
            <div className="down">
                <div>
                    <h4>Down</h4>
                    <div>1.37x Payout</div>
                </div>
                <div className="btn">
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.43605 12L11.5639 12C13.4343 12 14.6065 10.0893 13.6713 8.57726L11.3893 4.84979L9.10735 1.13403C8.17212 -0.378054 5.82782 -0.378054 4.89259 1.13403L2.61063 4.84979L0.328668 8.57726C-0.606561 10.0893 0.565593 12 2.43605 12Z" fill="rgba(0,0,0,0.6)"/>
                    </svg>
                </div>
            </div>
            
        </div>
    </CardDiv>
  )
}
const CardDiv = styled.div`
    width:20%;
    background:rgba(196, 196, 196, 0.1);;
    border-radius:10px;
    margin: 0 10px;
    color:#B2B2B2;
    // border:2px solid transparent;
    overflow:hidden;
    
    header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:18px 16px;
        background:#0C0C0C;
        color:#6D6D6D;
        position:relative;
        
        div{
            font-weight:700;
            font-size:17px;
            color:#5D5D5D;
            display:flex;
            justify-content:space-between;
            align-items:center;
            svg{
                margin-right:8px;
                height:16px;
                margin-top:-2px
            }
        }
    }
    
    .content{
        padding:13px 16px;
        // display:flex;
        // flex-direction:column;
        // justify-content:space-between;
        .top{
            text-align:left;
            h3{
                margin:0;
                font-size:15px;
                color:#898989;
                font-weight:500;
            }
            .val{
                font-size:24px;
                margin-top:6px;
                color:#fff;
                font-weight:600;
                span{
                    font-size:17px
                }
            }
            margin-bottom:13px;
        }
        .btn{
            width:40px;
            height:40px;
            background: linear-gradient(0deg, #80A877, #80A877), linear-gradient(133.62deg, #BB9D3A 2.22%, #B5963A 3.92%, #A78539 4.94%, #9D7A38 6.21%, #987338 8%, #967138 12.95%, #9B763A 19.45%, #A9863F 27.62%, #C0A047 36.68%, #E0C352 46.32%, #EDD156 49.64%, #967930 65.45%, #9A7D31 72.1%, #A68936 78.85%, #BB9C3D 85.64%, #D7B746 92.43%, #DCBC48 93.5%);
            background-blend-mode: hue, normal;
            border: 1px solid rgba(125, 225, 100, 0.8);
            box-sizing: border-box;
            border-radius: 5px;
            display:flex;
            justify-content:center;
            align-items:center;
            svg{
                transform:scale(1)
            }
        }
        .up{
            padding:14px;
            display:flex;
            justify-content:space-between;
            background:#21321D;
            border-radius:10px;
            margin-top:0px;
            h4{
                font-size:18px;
                color:#fff;
            }
            div{
                color:#69DC4E;
                font-size:14px;
                font-weight:600;
            }
        }
        .down{
            padding:14px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            background:#37201C;
            border-radius:10px;
            margin-top:20px;
            h4{
                font-size:18px;
                color:#fff;
            }
            div{
                color:#EB5B45;
                font-size:14px;
                font-weight:600;
            }
            .btn{
                width:40px;
                height:40px;
                background: linear-gradient(0deg, rgba(255, 0, 0, 0.14), rgba(255, 0, 0, 0.14)), linear-gradient(0deg, #FF2100, #FF2100), linear-gradient(225deg, #BB9D3A 2.27%, #B5963A 3.93%, #A78539 4.93%, #9D7A38 6.17%, #987338 7.91%, #967138 12.74%, #9B763A 19.08%, #A9863F 27.05%, #C0A047 35.89%, #E0C352 45.29%, #EDD156 48.53%, #967930 63.94%, #9A7D31 70.43%, #A68936 77.01%, #BB9C3D 83.64%, #D7B746 90.26%, #DCBC48 91.31%);
                background-blend-mode: normal, hue, normal;
                border: 1px solid rgba(255, 108, 108, 0.53);
                box-sizing: border-box;
                border-radius: 5px;
                display:flex;
                justify-content:center;
                align-items:center;
                svg{
                    transform:scale(1)rotate(180deg)
                }
            }
        }
        
    }


    &.home{
        header{
            background:transparent;
            &::before {
                content: "";
                position:absolute;
                height: 100%;
                width: 100%;
                right:0%;
                top: 0%;
                background: linear-gradient(90deg, #BB9D3A 0%, #B5963A 1.81%, #A78539 2.89%, #9D7A38 4.23%, #987338 6.12%, #967138 11.37%, #9B763A 18.26%, #A9863F 26.92%, #C0A047 36.52%, #E0C352 46.73%, #EDD156 50.25%, #967930 67%, #9A7D31 74.05%, #A68936 81.2%, #BB9C3D 88.4%, #D7B746 95.59%, #DCBC48 96.73%);
                opacity: 0.2;
                z-index: -1;
            }
        }
    }


    
`

export default CardNext
