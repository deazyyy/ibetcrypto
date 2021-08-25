import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import CardLive from '../../../components/Cards/Cardlive'
import CardNext from '../../../components/Cards/Cardnext'
  
const Partners:  React.FC = ()=> {
  return (
    <Div>
    <div className="container">
        <h3>Our Partners</h3>
        <div className="imgOuter">
            <img src="images/partners.png" alt="" />
            <img src="images/partners.png" alt="" />
        </div>
    </div>
    </Div>
  )
}
const Div = styled.div`
    h3{
        text-align:center;
        margin-bottom:50px;
    }
    .imgOuter{
        display:flex;
        flex-flow:wrap;
        justify-content:center;
        img{
            margin:20px;
            height:70px;
            width:auto;
        }
    }
`

export default Partners
