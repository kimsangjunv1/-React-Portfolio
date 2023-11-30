import React, { useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Loading from "../layout/Loading.jsx";

import { AnimatePresence } from "framer-motion";
import imagesLoaded from "imagesloaded";

// import MainCont from "../include/MainCont";

import MouseComponents from "../common/MouseComponents.jsx";

// 섹션
import Section_01 from "../include/Section_01.jsx";
import Section_02 from "../include/Section_02.jsx";
import Section_03 from "../include/Section_03.jsx";
import Section_03_5 from "../include/Section_03_5.jsx";
import Section_04 from "../include/Section_04.jsx";
import Section_05 from "../include/Section_05.jsx";
import Section_05_5 from "../include/Section_05_5.jsx";
import Section_06 from "../include/Section_06.jsx";
import Section_06_5 from "../include/Section_06_5.jsx";
import Section_07 from "../include/Section_07.jsx";
import Section_09 from "../include/Section_09.jsx";
import Section_10 from "../include/Section_10.jsx";
import Section_11 from "../include/Section_11.jsx";
import Section_12 from "../include/Section_12.jsx";
import Section_13 from "../include/Section_13.jsx";
import Section_14 from "../include/Section_14.jsx";
import Section_15 from "../include/Section_15.jsx";
import Section_16 from "../include/Section_16.jsx";

import PopupComponents from "../common/PopupComponents.jsx";

import DescFixed from "../layout/DescFixed.jsx";
import ImgLoader from "../include/ImgLoader.jsx";

const test = () => {
  alert("테스트 알람");
};

const Main = () => {
  const [scrolled, setScrolled] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  // 스크롤
  window.onscroll = function () {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((winScroll / height) * 100);
  };
  // 이미지 로딩
  imagesLoaded("body", function () {
    setIsLoaded(true);
  });
  return (
    <>
      <AnimatePresence>{isLoaded ? "" : <Loading />}</AnimatePresence>

      <Header />
      <Contents>
        {/* <PopupComponents
					desc={
						"현재 포트폴리오는 학원에 다닐때 만들었던 포트폴리오 입니다, 최근 새로 내용을 정리해 포트폴리오를 만들었습니다."
					}
				/> */}
        {/* <ImgLoader /> */}
        <DescFixed scrolled={scrolled} />
        <Section_01 />
        <Section_02 />
        <Section_03 />
        <Section_03_5 />
        <Section_04 />
        {/* <Section_05 /> */}
        <Section_05_5 />
        <Section_06 />
        <Section_06_5 />
        {/* <Section_07 /> */}
        <Section_09 />
        <Section_10 />
        <Section_11 />
        <Section_12 />
        <Section_13 />
        <Section_14 />
        <Section_15 />
        <Section_16 />
        <MouseComponents />
      </Contents>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
