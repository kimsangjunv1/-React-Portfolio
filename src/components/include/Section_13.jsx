import React from "react";

import section13_lama from "./../../assets/img/section13_lama.svg";
import section13_logo from "./../../assets/img/section13_logo.png";
import section13_logo_bg from "./../../assets/img/section13_logo_bg.jpg";
import section13_screenshot_01 from "./../../assets/img/section13_screenshot_01.png";

const Section_13 = () => {
  return (
    // <!-- VUE API MOVIE : section13-->
    <section style={{ background: "#3ec4d0cd" }} className="section vr5 t_vr">
      <div className="section13_all_cont">
        <img className="section13_lama" src={section13_lama} alt="" />
        <div className="section13_desc_cont">
          <div className="title_wrap">
            <p className="title">
              VUE API
              <br />
              <em>MOVIE</em>
            </p>
            <p className="sub_ttitle">TMDB</p>
          </div>
          <p>
            Vue를 이용해 TMDB에서 제공하는 api를 이용해
            <br />
            SPA를 구현하였으며 Swiper를 이용해 슬라이드 섹션도 제작해두었습니다.
          </p>
          <div className="section_rv_button_cont">
            <a href="https://github.com/kimsangjunv1/vue_api">CODE</a>
            <a href="https://vueapi11.netlify.app/movie">VIEW</a>
          </div>
        </div>
        <div className="section13_logo_cont">
          <img className="sec13_logo" src={section13_logo} alt="" />
          <img className="sec13_bg polygon" src={section13_logo_bg} alt="" />
        </div>
        <div style={{ background: "#055d63c7" }} className="color_bg"></div>

        <img
          className="section13_main_screenshot"
          src={section13_screenshot_01}
          alt=""
        />
      </div>
    </section>
  );
};

export default Section_13;
