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
        {/* <img className="section10_lama" src={section10_lama} alt="" /> */}
        <div className="section10_desc_cont">
          <div className="title_container">
            <p className="title">언스플레시 API</p>
            <p className="description">
              Axios를 사용해 RESTful API를 활용하여
              <br />
              Unsplash에서 제공하는 api로
              <br />
              검색한 사진들을 보여주도록 하였으며
              <br />
              <br />
              swiper 라이브러리를 통해 상단에 사진들을
              <br />
              스와이프 해볼수있도록 하였습니다.
            </p>
          </div>
          <div className="info_container">
            <ul>
              {/* <li>
                <ul>
                  <li>타입</li>
                  <li>반응형 웹</li>
                </ul>
              </li> */}
              {/* <li>
                <ul>
                  <li>페이지</li>
                  <li>반응형 웹</li>
                </ul>
              </li> */}
              {/* <li>
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
            <a href="https://github.com/kimsangjunv1/react_api/">깃허브</a>
            <a href="study-api.netlify.app/unsplash">미리보기</a>
            {/* <a href="">피그마</a> */}
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
        <div style={{ background: "#000000d4" }} className="color_bg"></div>

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
