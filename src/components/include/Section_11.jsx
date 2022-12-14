import React from "react";

const Section_11 = () => {
  return (
    // <!-- REACT API WEB : section11-->
    <section style={{ background: "#31826ed3" }} className="section vr3 t_vr">
      <div className="section11_all_cont">
        <img
          className="section11_lama"
          src="src/assets/img/section11_lama.svg"
          alt=""
        />
        <div className="section11_desc_cont">
          <div className="title_wrap">
            <p className="title">
              REACT API
              <br />
              <em>SITE TYPE</em>
            </p>
            <p className="sub_ttitle">WEB</p>
          </div>
          <p>
            REACT의 장점인 컴포넌트를 적극 활용해 구성한 기본구조 웹사이트
            입니다.
            <br />
            상단에 SWIPER를 통해 자동으로 넘어가게하고
            <br />
            메뉴 클릭시 해당 섹션으로 스크롤 되게 하였습니다.
          </p>
          <div className="section_rv_button_cont">
            <a href="www.naver.com">CODE</a>
            <a href="www.naver.com">VIEW</a>
          </div>
        </div>
        <div className="section11_logo_cont">
          <img
            className="sec11_logo"
            src="src/assets/img/section11_logo.png"
            alt=""
          />
          <img
            className="sec11_bg polygon"
            src="src/assets/img/section11_logo_bg.jpg"
            alt=""
          />
        </div>
        <div style={{ background: "#31826ed3" }} className="color_bg"></div>

        <img
          className="section11_main_screenshot"
          src="src/assets/img/section11_screenshot_01.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Section_11;
