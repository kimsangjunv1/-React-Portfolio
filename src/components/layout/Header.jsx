import React from "react";
import { Link } from "react-router-dom";

import Logo from "./../../assets/img/logo.svg";

const Header = (test) => {
  return (
    <header id="header">
      <a href="#main">
        <img src={Logo} alt="헤더 로고" />
        KIMSANGJUN
      </a>
      <div className="menu_cont">
        <a href="#javascript">Javascript</a>
        <a href="#game">Game</a>
        <a href="#reference">Reference</a>
        <a href="#site">Site</a>
        <a href="#project">Project</a>
        <a href="#vue&react">Vue/React</a>
      </div>
    </header>
  );
};

export default Header;
