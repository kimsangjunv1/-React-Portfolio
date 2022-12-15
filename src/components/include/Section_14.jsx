import React from "react";

import section14_lama from "./../../assets/img/section14_lama.svg";
import section14_logo from "./../../assets/img/section14_logo.png";
import section14_logo_bg from "./../../assets/img/section14_logo_bg.jpg";
import section14_screenshot_01 from "./../../assets/img/section14_screenshot_01.png";

const Section_14 = () => {
  return (
    // <!-- VUE API WEB : section14-->
    <section style={{ background: "#4d38d9dc" }} className="section vr6 t_vr">
      <div className="section14_all_cont">
        <img className="section14_lama" src={section14_lama} alt="" />
        <div className="section14_desc_cont">
          <div className="title_wrap">
            <p className="title">
              VUE API
              <br />
              <em>MOVIE</em>
            </p>
            <p className="sub_ttitle">TMDB</p>
          </div>
          <p>USEEFFECT와 USESTATE</p>
          <div className="section_rv_button_cont">
            <a href="www.naver.com">CODE</a>
            <a href="www.naver.com">VIEW</a>
          </div>
        </div>
        <div className="section14_logo_cont">
          <img className="sec14_logo" src={section14_logo} alt="" />
          <img
            className="sec14_bg polygon_reverse"
            src={section14_logo_bg}
            alt=""
          />
        </div>
        <div style={{ background: "#55239dd4" }} className="color_bg"></div>

        <img
          className="section14_main_screenshot"
          src={section14_screenshot_01}
          alt=""
        />
      </div>
    </section>
  );
};

export default Section_14;
