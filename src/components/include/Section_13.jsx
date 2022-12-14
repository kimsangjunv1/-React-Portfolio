import React from "react";

const Section_13 = () => {
  return (
    // <!-- VUE API MOVIE : section13-->
    <section style={{ background: "#3ec4d0cd" }} className="section vr5 t_vr">
      <div className="section13_all_cont">
        <img
          className="section13_lama"
          src="src/assets/img/section13_lama.svg"
          alt=""
        />
        <div className="section13_desc_cont">
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
            <a href="https://github.com/kimsangjunv1/vue_api">CODE</a>
            <a href="https://vueapi11.netlify.app/movie">VIEW</a>
          </div>
        </div>
        <div className="section13_logo_cont">
          <img
            className="sec13_logo"
            src="src/assets/img/section13_logo.png"
            alt=""
          />
          <img
            className="sec13_bg polygon"
            src="src/assets/img/section13_logo_bg.jpg"
            alt=""
          />
        </div>
        <div style={{ background: "#055d63c7" }} className="color_bg"></div>

        <img
          className="section13_main_screenshot"
          src="src/assets/img/section13_screenshot_01.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Section_13;
