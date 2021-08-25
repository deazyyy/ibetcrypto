// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);
  const [isconnected, setIsconnected] = useState(true);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const [activenm, setActivenm] = useState("home");
  function isActive(name: String) {
    return activenm == name;
  }
  function onlinkclick(name: String) {
    setActivenm(name);
    if(click){
      handleClick()
    }
  }

  return (
    <Nav className="wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.5s">
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar " onClick={(e) => e.stopPropagation()}>
        <div className="nav-container container">
          <Link exact to="/" className="nav-logo">
            <img src="images/logo.svg" alt="" />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className={isActive("home") ? "nav-item active" : `nav-item`}>
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={() => onlinkclick("home")}
                
                className="nav-links"
              >
                Home
              </Link>
            </li>
            <li className={isActive("chart") ? "nav-item active" : `nav-item`}>
              <Link
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={() => onlinkclick("chart")}
                
                className="nav-links"
              >
                Chart
              </Link>
            </li>
            <li className={isActive("pred") ? "nav-item active" : `nav-item`}>
              <Link
                exact
                to="/bet"
                activeClassName="active"
                onClick={() => onlinkclick("pred")}
                className={isActive("pred") ? "nav-links active" : `nav-links`}
                className="nav-links"
              >
                Predictions
              </Link>
            </li>
            <li className="nav-item" className={isActive("match") ? "nav-item active" : `nav-item`}>
              <Link
                exact
                to="/matches"
                activeClassName="active"
                onClick={() => onlinkclick("match")}
                className="nav-links"
              >
                Matches
              </Link>
            </li>
            <li className="nav-item socialIcons">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
            </li>
            <li className="nav-item connectbtn">
              {
                isconnected ? <div className="gradientbtn" onClick={() => setIsconnected(false)}> <img src="images/metamask.svg" alt="" /> Connect</div> :
                <div className="isconnected">
                  <h5>0.34564 <b className="gradtext">BNB</b></h5><div className="gradientbtn"> jb3jk13nb14v57</div>
                </div>
              }
              
             
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </Nav>
  );
};


const Nav = styled.nav`
  .navbar {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 20;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 80px;
    padding: 0;
  }

  .nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .main-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    height: 100%;
    // transition:all 1s ease
  }

  .nav-logo {
    color: #f5b921;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    flex-grow: 1;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    text-align: center;
    margin-bottom: 0;
    height: 100%;
    transition: all 0.5s ease;
  }

  .nav-links {
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    padding: 0 10px;
    border-bottom: 3px solid transparent;
    font-size: 16px;
    &.active {
      color: red;
    }
  }
  .fa-code {
    margin-left: 1rem;
  }

  .nav-item {
    line-height: 40px;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    &:hover:after {
      width: 100%;
      background: linear-gradient(
        90deg,
        #bb9d3a 1.48%,
        #b5963a 1.81%,
        #a78539 2.89%,
        #9d7a38 4.23%,
        #987338 6.12%,
        #967138 11.37%,
        #9b763a 18.26%,
        #a9863f 26.92%,
        #c0a047 36.52%,
        #e0c352 46.73%,
        #edd156 50.25%,
        #967930 67%,
        #9a7d31 74.05%,
        #a68936 81.2%,
        #bb9c3d 88.4%,
        #d7b746 95.59%,
        #dcbc48 96.73%
      );
    }
    &.socialIcons {
      i {
        margin: 0 10px;
        color: #4c4c4c;
        cursor: pointer;
        transition: all 0.4s ease;
        &:hover {
          color: #fff;
        }
      }
      &:after {
        display: none !important;
      }
    }
    &.active{
      .nav-links{
        color:#fff;
      }
      &:after {
        display: block !important;
        width: 100%;
      background: linear-gradient(
        90deg,
        #bb9d3a 1.48%,
        #b5963a 1.81%,
        #a78539 2.89%,
        #9d7a38 4.23%,
        #987338 6.12%,
        #967138 11.37%,
        #9b763a 18.26%,
        #a9863f 26.92%,
        #c0a047 36.52%,
        #e0c352 46.73%,
        #edd156 50.25%,
        #967930 67%,
        #9a7d31 74.05%,
        #a68936 81.2%,
        #bb9c3d 88.4%,
        #d7b746 95.59%,
        #dcbc48 96.73%
      );
      }
    }
  }

  .nav-item:after {
    content: "";
    position: absolute;
    height: 3px;
    width: 0;
    bottom: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
    transform: translateY(50%);
  }

  .nav-item .active {
    color: #ffdd40;
    border: 1px solid #ffdd40;
  }

  .nav-icon {
    display: none;
  }

  .connectbtn {
    margin: 0;
    cursor: pointer;
    img{
      margin-right:6px;
      height:20px;
    }
    &:after {
      display: none !important;
    }

    .isconnected{
      display:flex;
      align-items:center;
      h5{
        margin:0;
        font-size:16px;
        margin-right:14px;
      }
      .gradientbtn{
        white-space: nowrap;
        overflow: hidden;
        display:block;
        max-width: 150px;
        text-overflow: ellipsis;
  
      }
    }
  }

  @media screen and (max-width: 960px) {
    .main-container{
      background-color: rgba(0,0,0,1);
      z-index: 10;
    }
    .connectbtn{
      justify-content: center;
      margin-top:30px
    }
    .socialIcons{
      justify-content: center; 
      margin-top:40px
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      // border-top: 1px solid #fff;
      position: absolute;
      top: 80px;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      // background: rgba(255,255,255,0.1);
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
      transition: all 0.5s ease;
    }
    .nav-item {
      color: #fff;
    }
    .nav-item .active {
      color: red;
      border: none;
    }
    .nav-links {
      padding: 1.5rem;
      width: 100%;
      display: table;
    }

    .nav-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #EBCF55;
    }
  }
`;


export default Navbar;
