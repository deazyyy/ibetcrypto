import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Locked from '../../assets/Icons/Locked'
import LiveIcon from '../../assets/Icons/LiveIcon'



interface CardValueProps {
    colorvalue?: string,
    status?: string,
    comp?: string
  }

  
const CardLive:  React.FC<CardValueProps> = ({colorvalue, status ,comp})=> {

  return (
    <CardDiv className={`${colorvalue} ${status} ${comp} mycard`}>
        <header>
            <div>
                {status== "active"? <LiveIcon/>:<Locked/>}
                Live
            </div>
            #456
        </header>
        
        <div className="content">
            <div className="top">
                <h3>Up</h3>
                <div className="val">
                    1.37x Payout
                </div>
            </div>
            <div className="greenborder"></div>
            <div className="payoutbx">
                <div className="values">
                    <h5>1.37x Payout</h5>
                    <div className="price">
                        <h4>
                            $436.554
                        </h4>
                        <span>$0.344</span>
                    </div>
                </div>
                <div className="infos">
                    <div className="row">
                        Locked Price:
                        <b>$543.3</b>
                    </div>
                    <div className="row">
                        Locked Price:
                        <b>$543.3</b>
                    </div>
                </div>
            </div>
            <div className="redborder"></div>
            <div className="bottom">
                <h3>Down</h3>
                <div className="val">
                    1.37x Payout
                </div>
            </div>
        </div>
    </CardDiv>
  )
}
const CardDiv = styled.div`
    width:20%;
    background:rgba(196, 196, 196, 0.1);
    border-radius:10px;
    margin: 0 10px;
    color:#B2B2B2;
    overflow:hidden;
    header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:18px 16px;
        background:rgba(0, 0, 0, 0.4);
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
        .top{
            h3{
                margin:0;
                font-size:18px;
                color:#898989;
                font-weight:700;
            }
            .val{
                font-size:14px;
                margin-top:6px;
                color:#5A5A5A;
                font-weight:600;
            }
            margin-bottom:13px;
            text-align:center;
        }
        .bottom{
            h3{
                margin:0;
                font-size:18px;
                color:#898989;
                font-weight:700;
            }
            .val{
                font-size:14px;
                margin-top:6px;
                color:#5A5A5A;
                font-weight:600;
            }
            margin-top:14px;
            text-align:center;
        }
        .greenborder{
            width:100%;
            height:2px;
            background:green;
            margin:5px 0;
            opacity:0;
            border-radius:8px;   
        }
        .redborder{
            width:100%;
            height:2px;
            background:#F05E47;
            margin:5px 0;
            opacity:0;
            border-radius:8px;   
        }
        .payoutbx{
            background: rgba(255, 255, 255, 0.1);
box-shadow: 0px 13px 8px rgba(0, 0, 0, 0.06);
            margin:0;         
            border-radius:8px;   
            .values{
                padding:18px;
                border-bottom:2px dotted #272727;
                h5{
                    font-weight:500;
                    font-size:15px;
                    color:#909090
                }
                .price{
                    display:flex;
                    // justify-content:space-between;
                    align-items:center;
                    h4{
                        margin:0;
                        color:#fff;
                    }
                    span{
                        margin-left:14px;
                        border-radius:6px;
                        padding:3px 8px;
                        font-weight:500;
                        font-size:15px
                    }
                }
            }
            .infos{
                padding: 10px 18px;
                .row{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    font-size:16px;
                    color:#B2B2B2;
                    margin: 6px 0;
                    font-size:15px;
                    b{
                        color:#fff;
                    }
                }
            }
        }
    }





    opacity:0.7;
    &.green{
        .top{
            h3{
                color:#B2B2B2;
            }
            .val{
                color:#69DC4E;
            }
        }
        .greenborder{
            opacity:1;
        }
        .payoutbx{
            .price{
                span{
                    color:#69DC4E;
                    background:#2D3E29;
                }
            }
        }
    }
    &.red{
        .bottom{
            h3{
                color:#B2B2B2;
            }
            .val{
                color:#F05E47;
            }
        }
        .redborder{
            opacity:1;
        }
        .payoutbx{
            .price{
                span{
                    color:#F05E47;
                    background:#4B3430;
                }
            }
        }
    }

    &.active{
        opacity:1;
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

export default CardLive
