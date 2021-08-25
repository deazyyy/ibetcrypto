import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Later from '../../assets/Icons/Later'
  
const CardLater:  React.FC = ()=> {
  return (
    <CardDiv  className="mycard">
        <header>
            <div><Later/>Later</div>
            #456
        </header>
        
        <div className="content">
            <div className="top">
                Up
            </div>
            <div className="center">
                <h3>Entry Starts</h3>
                <h4>07:45</h4>
            </div>
            <div className="bottom">
                Down 
            </div>            
        </div>
    </CardDiv>
  )
}
const CardDiv = styled.div`
width:20%;
    background:#000;
    border-radius:10px;
    margin: 0 10px;
    color:#B2B2B2;
    border:2px solid #141414;
    overflow:hidden;
    header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:18px 16px;
        background:#141414;
        color:#6D6D6D;
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

    .top, .center, .bottom{
        height:30%;
        display:flex;
        justify-content:center;
        align-items:center;
        color:#191919
    }
    .center{
        height:40%;
        background:#191919;
        display:flex;
        flex-direction:column;
        align-items:center;
        border-radius:10px;
        padding:30px 14px;
        h3{
            color:#8C8C8C;
            margin-bottom:6px;
            font-size:16px
        }
        h4{
            color:#fff;
            font-weight:700;
            font-size:18px
        }
    }
    
    .content{
        padding:0px 16px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        height:calc( 100% - 60px);
        
        
    }





    
`

export default CardLater
