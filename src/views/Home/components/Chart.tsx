// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Chart from 'react-apexcharts'


const Chartmain: React.FC = () => {

 const options= {
  xaxis: {
    categories: ["00:00","01:00","02:00", "03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00"],
    lines: {
      show: true
    },
    labels: {
      style: {
          colors: "#666666",
          fontSize: '12px',
      },
    },
    axisBorder: {
        show: false,
        offsetY: 10
    },
    
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    opposite: true,
    labels: {
      style: {
          colors: "#666666",
          fontSize: '12px',
      },
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: '#111311',
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  colors: ['#69DC4E',],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0,
      opacityFrom:0.5,
      opacityTo: 0,
      stops: [0, 90, 100]
    }
  },
}
const series= [{
  name: 'series-1',
  data: [30, 40, 25, 50, 49, 21,10, 70, 49,0, 21, 70, 51]
}]
  return (
    <ChartOuter>
      <div className="pricelive">
        <h4>
          045.234
          <small>BNB</small>
          <span className="up">
          <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M3.13397 0.500001C3.51887 -0.166666 4.48113 -0.166667 4.86603 0.5L7.4641 5C7.849 5.66667 7.36788 6.5 6.59808 6.5H1.40192C0.632124 6.5 0.150998 5.66667 0.535898 5L3.13397 0.500001Z" fill="#69DC4E"/>
          </svg>
            $0.344
            </span>
        </h4>
        <h6>$44.56</h6>
      </div>
      <Chart options={options} series={series} type="area" width="100%" height={600}/>
    </ChartOuter>
  );
};


const ChartOuter = styled.div`
.pricelive{
  h4{
    font-weight:700;
    small{
      margin-left:6px;
      font-weight:700;
    }
  }
  h6{
    color:#808080
  }
  .up{
    font-weight:500;
    font-size:16px;
    background:#10210C;
    color: #69DC4E;
    border-radius: 7px;
    padding:7px 14px;
    margin-left:10px;
    svg{
      transform:scale(1.5);
      margin-right:8px;
      margin-bottom:2px;
    }
  }
}
position:relative;
&::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0%;
  bottom: 0px;
  background: radial-gradient(50% 50% at 50% 50%, #69DC4E 0%, rgba(105, 220, 78, 0) 100%);
  opacity: 0.11;
  filter: blur(200px);
  z-index: -1;
}
`



export default Chartmain;
