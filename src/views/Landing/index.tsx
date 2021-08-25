import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import MakePred from './components/Makepred'
import Pred from './components/Pred'
import Matches from '../../components/Matches'
import Partners from './components/Partners'

const HomeDiv = styled.div`
  .container{
    margin:60px 0;
    .heading{
      text-align:center;
      margin-bottom:30px;
    }
  }
`

const CardSection = styled.div`
    display:flex;
    justify-content:space-between;
    // padding:0 4%;
`


const Landing: React.FC = () => {
const [shown, setShown] = useState(false)
  return (
    <HomeDiv >
        <MakePred/>
        <Pred/>
        <div className="container">
          <Matches/>
        </div>
        <Partners/>
    </HomeDiv>
  )
}

export default Landing
