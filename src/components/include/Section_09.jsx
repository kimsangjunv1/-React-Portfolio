import React from "react";

import section9_lama from "./../../assets/img/section9_lama.svg";
import section9_logo from "./../../assets/img/section9_logo.png";
import section9_logo_bg from "./../../assets/img/section9_logo_bg.jpg";
import section9_screenshot_01 from "./../../assets/img/section9_screenshot_01.png";

const Section_09 = () => {
  return (
    // <!-- REACT API TMDB : section9 -->
    <section
      id="vue&react"
      style={{ background: "#00244dd4" }}
      className="section vr1 t_vr"
    >
      <div className="section9_all_cont">
        {/* <img className="section9_lama" src={section9_lama} alt="" /> */}
        <div className="section9_desc_cont">
          <div className="title_container">
            <p className="title">TMDB API</p>
            <p className="description">
              Axios를 사용해 RESTful API를 활용하여
              <br />
              TMDB에서 제공하는 api를 이용해 검색
              <br />
              가능한 영화 목록 웹사이트를 만들었습니다.
              <br />
              <br />
              영화 목록들을 검색하고 검색한 결과를 보여주는 사이트를
              만들었습니다.
            </p>
          </div>
          <div className="info_container">
            <ul>
              {/* <li>
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
              </li> */}
              <li>
                <ul>
                  <li>사용기술</li>
                  <li>React</li>
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
            <a href="https://github.com/kimsangjunv1/react_api">깃허브</a>
            <a href="https://reactapi11.netlify.app">미리보기</a>
            {/* <a href="https://reactapi11.netlify.app/movie">피그마</a> */}
          </div>
        </div>
        <div className="section9_logo_cont">
          <img className="sec8_logo" src={section9_logo} alt="" />
          <img className="sec8_bg polygon" src={section9_logo_bg} alt="" />
        </div>
        <div style={{ background: "#03140Ce0" }} className="color_bg"></div>
        <img
          className="section9_main_screenshot"
          src={section9_screenshot_01}
          alt=""
        />
      </div>
    </section>
  );
};

export default Section_09;
