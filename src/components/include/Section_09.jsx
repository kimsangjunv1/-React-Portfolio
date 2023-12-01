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
        <img className="section9_lama" src={section9_lama} alt="" />
        <div className="section9_desc_cont">
          <div className="title_wrap">
            <p className="title">
              POPULAR MOVIE
              <br />
              <em>WEBSITE</em>
            </p>
            <p className="sub_ttitle">REACT</p>
          </div>
          <p>
            Axios를 사용해 RESTful API를 활용하여
            <br />
            TMDB에서 제공하는 api를 이용해 검색
            <br />
            가능한 영화 목록 웹사이트를 만들었습니다.
            <br />
            <br />
            영화 목록들을 검색하고 검색한 결과를 보여주는 사이트를 만들었습니다.
          </p>
          <div className="section_rv_button_cont">
            <a href="https://github.com/kimsangjunv1/react_api">CODE</a>
            <a href="https://reactapi11.netlify.app/movie">VIEW</a>
          </div>
        </div>
        <div className="section9_logo_cont">
          <img className="sec8_logo" src={section9_logo} alt="" />
          <img className="sec8_bg polygon" src={section9_logo_bg} alt="" />
        </div>
        <div style={{ background: "#01160ce3" }} className="color_bg"></div>
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
