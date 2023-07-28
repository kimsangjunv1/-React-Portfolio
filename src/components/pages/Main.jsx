import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
// import MainCont from "../include/MainCont";

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

import DescFixed from "../layout/DescFixed.jsx";
import ImgLoader from "../include/ImgLoader.jsx";

const test = () => {
  alert("테스트 알람");
};

const Main = () => {
  return (
    <>
      <Header gwayeon={() => test()} />
      <Contents>
        <ImgLoader />
        <DescFixed />
        <Section_01 />
        <Section_02 />
        <Section_03 />
        <Section_03_5 />
        <Section_04 />
        <Section_05 />
        <Section_05_5 />
        <Section_06 />
        <Section_06_5 />
        <Section_07 />
        <Section_09 />
        <Section_10 />
        <Section_11 />
        <Section_12 />
        <Section_13 />
        <Section_14 />
        <Section_15 />
        <Section_16 />
      </Contents>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
