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
              POPULAR MOIVE
              <br />
              <em>WEBSITE</em>
            </p>
            <p className="sub_ttitle">VUE</p>
          </div>
          <p>
            TMDB에서 제공하는 api를 이용해 검색
            <br />
            가능한 영화 목록 웹사이트를 만들었습니다.
            <br />
            <br />
            검색하면 검색어와 관련된 영화들의 목록의 response를 통해
            <br />
            하단에 영화 포스터, 평점, 제목등을
            <br />
            목록으로 보여주는 사이트를 만들었습니다.
          </p>
          <div className="section_rv_button_cont">
            <a href="https://github.com/kimsangjunv1/vue_api">CODE</a>
            <a href="https://vueapi11.netlify.app/">VIEW</a>
          </div>
        </div>
        <div className="section13_logo_cont">
          <img className="sec13_logo" src={section13_logo} alt="" />
          <img className="sec13_bg polygon" src={section13_logo_bg} alt="" />
        </div>
        <div style={{ background: "#01160ce3" }} className="color_bg"></div>

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
