import React from "react";

import section11_lama from "./../../assets/img/section11_lama.svg";
import section11_logo from "./../../assets/img/section14_logo.png";
import section11_logo_bg from "./../../assets/img/section11_logo_bg.jpg";
import section11_screenshot_01 from "./../../assets/img/section11_screenshot_01.png";

const Section_11 = () => {
  return (
    // <!-- REACT API WEB : section11-->
    <section style={{ background: "#31826ed3" }} className="section vr3 t_vr">
      <div className="section11_all_cont">
        {/* <img className="section11_lama" src={section11_lama} alt="" /> */}
        <div className="section11_desc_cont">
          <div className="title_container">
            <p className="title">맥</p>
            <p className="description">
              REACT의 장점인 컴포넌트를 적극 활용해 구성한 기본구조 웹사이트
              입니다.
              <br />
              <br />
              상단에 SWIPER를 통해 자동으로 넘어가게하고
              <br />
              메뉴 클릭시 해당 섹션으로 스크롤 되게 하였습니다.
            </p>
          </div>
          <div className="info_container">
            <ul>
              <li>
                <ul>
                  <li>타입</li>
                  <li>반응형 웹</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>페이지</li>
                  <li>반응형 웹</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>참여도</li>
                  <li>100% 개인작업</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>기술스택</li>
                  <li>NextJS, React, Redux Tool Kit</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>라이브러리</li>
                  <li>SwiperJS</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="section_rv_button_cont">
            <a href="www.naver.com">깃허브</a>
            <a href="www.naver.com">미리보기</a>
            <a href="w">피그마</a>
          </div>
        </div>
        <div className="section11_logo_cont">
          <img className="sec11_logo" src={section11_logo} alt="" />
          <img className="sec11_bg polygon" src={section11_logo_bg} alt="" />
        </div>
        <div style={{ background: "#03140Ce0" }} className="color_bg"></div>

        <img
          className="section11_main_screenshot"
          src={section11_screenshot_01}
          alt=""
        />
      </div>
    </section>
  );
};

export default Section_11;
