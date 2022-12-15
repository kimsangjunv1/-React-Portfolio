import React from "react";

import section10_lama from "./../../assets/img/section10_lama.svg";
import section10_logo from "./../../assets/img/section10_logo.png";
import section10_logo_bg from "./../../assets/img/section10_logo_bg.jpg";
import section10_screenshot_01 from "./../../assets/img/section10_screenshot_01.png";

const Section_10 = () => {
  return (
    // <!-- REACT API UNSPLASH : section10-->
    <section style={{ background: "#d93860d6" }} className="section vr2 t_vr">
      <div className="section10_all_cont">
        <img className="section10_lama" src={section10_lama} alt="" />
        <div className="section10_desc_cont">
          <div className="title_wrap">
            <p className="title">
              REACT API
              <br />
              <em>PICTURE</em>
            </p>
            <p className="sub_ttitle">UNSPLASH</p>
          </div>
          <p>
            unsplash에서 사진 목록과 관련사진을 검색 가능하도록 작업하였으며,
            <br />
            상단에 swiper를 통한 슬라이드 기능도 구현하였습니다.
          </p>
          <div className="section_rv_button_cont">
            <a href="https://github.com/kimsangjunv1/react_api">CODE</a>
            <a href="https://reactapi11.netlify.app/unsplash">VIEW</a>
          </div>
        </div>
        <div className="section10_logo_cont">
          <img className="sec10_logo" src={section10_logo} alt="" />
          <img
            className="sec10_bg polygon_reverse"
            src={section10_logo_bg}
            alt=""
          />
        </div>
        <div style={{ background: "#d93860d6" }} className="color_bg"></div>

        <img
          className="section10_main_screenshot"
          src={section10_screenshot_01}
          alt=""
        />
      </div>
    </section>
  );
};

export default Section_10;
