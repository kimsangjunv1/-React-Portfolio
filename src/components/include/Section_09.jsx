import React from "react";

const Section_09 = () => {
  return (
    // <!-- REACT API TMDB : section9 -->
    <section
      id="vue&react"
      style={{ background: "#00244dd4" }}
      className="section vr1 t_vr"
    >
      <div className="section9_all_cont">
        <img
          className="section9_lama"
          src="src/assets/img/section9_lama.svg"
          alt=""
        />
        <div className="section9_desc_cont">
          <div className="title_wrap">
            <p className="title">
              REACT API
              <br />
              <em>MOVIE</em>
            </p>
            <p className="sub_ttitle">TMDB</p>
          </div>
          <p>
            USEEFFECT와 USESTATE를 활용하여
            <br />
            영화 목록 및 검색기능을 추가하였습니다.
          </p>
          <div className="section_rv_button_cont">
            <a href="https://github.com/kimsangjunv1/react_api">CODE</a>
            <a href="https://reactapi11.netlify.app/movie">VIEW</a>
          </div>
        </div>
        <div className="section9_logo_cont">
          <img
            className="sec8_logo"
            src="src/assets/img/section9_logo.png"
            alt=""
          />
          <img
            className="sec8_bg polygon"
            src="src/assets/img/section9_logo_bg.jpg"
            alt=""
          />
        </div>
        <div style={{ background: "#231d54c7" }} className="color_bg"></div>
        <img
          className="section9_main_screenshot"
          src="src/assets/img/section9_screenshot_01.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Section_09;
