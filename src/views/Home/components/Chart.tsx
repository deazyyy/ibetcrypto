// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
// const convertDate = timestamp => moment(new Date(timestamp * 1000)).format('MMM YY\'');
//   const convertValue = (value) =>  `${Math.floor(value/10e2)}M`;
// import {Line, ComposedChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const Chart: React.FC = () => {
  //   const [data, setShown] = useState([])

  //   useEffect(() => {
  //     axios
  //     .get(
  //       "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=50&aggregate=3&e=Kraken"
  //     )
  //     .then(res => {
  //       setShown(res.data["Data"])
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  //   });
  // return (
  //   <ComposedChart width={800} height={300} data={data} margin={{top: 25, right: 30, left: 20, bottom: 5}}>
  //     <defs>
  //       <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
  //         <stop offset="5%" stopColor="#129a74" stopOpacity={0.1}/>
  //         <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
  //       </linearGradient>
  //     </defs>
  //     {/* <XAxis dataKey="time" tickFormatter={convertDate} />
  //     <YAxis tickFormatter={convertValue}/> */}
  //     <XAxis dataKey="time"  />
  //     <YAxis />
  //     <Tooltip/>
  //     <CartesianGrid vertical={false} stroke="#DDD" />

  //     <Line type="monotone" unit="M" strokeLinecap="round" strokeWidth={2}
  //       style={{ strokeDasharray: `40% 60%` }}
  //       dataKey="close"
  //       stroke="#006991"
  //       dot={false}
  //       legendType="none"
  //     />
  //     <Area type="monotone" dataKey="close" stroke={false} strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
  //   </ComposedChart>
  // );

  // const script = document.createElement("script");

  // script.src = "https://s3.tradingview.com/tv.js";
  // script.async = true;

  // document.body.appendChild(script);

 useEffect(() => {
  new TradingView.MediumWidget({
    symbols: [
      ["Apple", "AAPL"],
      ["Microsoft", "MSFT"],
    ],
    chartOnly: false,
    width: "100%",
    height: "700px",
    locale: "in",
    colorTheme: "dark",
    gridLineColor: "rgba(240, 243, 250, 0)",
    trendLineColor: "rgba(106, 220, 78, 0.6)",
    fontColor: "#787B86",
    underLineColor: "rgba(106, 220, 78, 0.09)",
    underLineBottomColor: "rgba(0, 255, 0, 0.28)",
    isTransparent: false,
    autosize: true,
    showFloatingTooltip: false,
    container_id: "tradingview_f2122",
  });

 }, [])
  return (
    <div class="tradingview-widget-container">
      <div id="tradingview_f2122"></div>
    </div>
  );
};

export default Chart;
