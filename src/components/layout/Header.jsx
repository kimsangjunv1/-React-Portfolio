import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "./../../assets/img/logo.svg";

const Header = () => {
  const headerBox = useRef(null);

  const [nowScroll, setNowScroll] = useState(true);

  const [menuState, setMenuState] = useState(false);

  const [lastScroll, setLastScroll] = useState(0);
  const [offsetTop, setOffsetTop] = useState(headerBox.current?.offsetTop);
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    // document.querySelector(".scroll_progress").style.width = scrolled + "%";

    const checkTop = () => {
      if (offsetTop >= window.scrollY) {
        // if (offsetTop >= window.scrollY) {
        // 안닿았을때
        // headerBox.current.style.position = "sticky";
      } else {
        // 닿았을때

        let scrollTop =
          window.pageYOffset ||
          window.scrollY ||
          document.documentElement.scrollTop;

        // console.log(scrollTop < lastScroll);

        if (scrollTop < lastScroll) {
          //현재 스크롤 값이 이전 스크롤 값보다 작다면
          headerBox.current.style.top = "0px";
          // headerBox.current.style.position = "fixed";
        } else {
          headerBox.current.style.top = "-85px";
        }
        setLastScroll(scrollTop); // 지금 현재 스크롤 값을 이전 스크롤 값에 넣은 뒤
      }
    };

    window.addEventListener("scroll", checkTop);
  });

  useEffect(() => {
    setOffsetTop(headerBox.current?.offsetTop);
  }, []);
  return (
    <header id="header" ref={headerBox}>
      <div className="header_inner">
        <a href="#main">
          <img src={Logo} alt="헤더 로고" />
          <div>
            <p>
              <i>2023</i> 프론트엔드
            </p>
            <p>
              <i>김상준</i> 포트-폴리오
            </p>
          </div>
        </a>
        <div className="menu_cont">
          <a href="#javascript">기술</a>
          <a href="#game">게임</a>
          <a href="#reference">레퍼런스</a>
          <a href="#site">사이트</a>
          <a href="#project">프로젝트</a>
          <a href="#vue&react">뷰/리액트</a>
        </div>
        <button className="mobile_btn">메뉴</button>
        <div className="menu_cont mobile">
          <a href="#javascript">기술</a>
          <a href="#game">게임</a>
          <a href="#reference">레퍼런스</a>
          <a href="#site">사이트</a>
          <a href="#project">프로젝트</a>
          <a href="#vue&react">뷰/리액트</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
