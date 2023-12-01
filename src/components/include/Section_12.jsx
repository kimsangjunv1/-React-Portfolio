import React from "react";

import section12_lama from "./../../assets/img/section12_lama.svg";
import section10_logo from "./../../assets/img/section10_logo.png";
import section12_logo_bg from "./../../assets/img/section12_logo_bg.jpg";
import section12_screenshot_01 from "./../../assets/img/section12_screenshot_01.png";

const Section_12 = () => {
  return (
    // <!-- VUE API UNSPLASH : section12-->
    <section style={{ background: "#31826ed3" }} className="section vr4 t_vr">
      <div className="section12_all_cont">
        <img className="section12_lama" src={section12_lama} alt="" />
        <div className="section12_desc_cont">
          <div className="title_wrap">
            <p className="title">
              SHOWCASE
              <br />
              <em>WEBSITE</em>
            </p>
            <p className="sub_ttitle">VUE</p>
          </div>
          <p>
            Axios를 사용해 RESTful API를 활용하여
            <br />
            Unsplash에서 제공하는 api로
            <br />
            검색한 사진들을 보여주도록 하였으며
            <br />
            <br />
            SPA를 구현하였으며 Swiper를 이용해 슬라이드 섹션도 제작해두었습니다.
          </p>
          <div className="section_rv_button_cont">
            <a href="https://github.com/kimsangjunv1/vue_api">CODE</a>
            <a href="https://vueapi11.netlify.app/">VIEW</a>
          </div>
        </div>
        <div className="section12_logo_cont">
          <img className="sec12_logo" src={section10_logo} alt="" />
          <img
            className="sec12_bg polygon_reverse"
            src={section12_logo_bg}
            alt=""
          />
        </div>
        <div style={{ background: "#000000d4" }} className="color_bg"></div>

        <img
          className="section12_main_screenshot"
          src={section12_screenshot_01}
          alt=""
        />
      </div>
    </section>
  );
};

export default Section_12;
