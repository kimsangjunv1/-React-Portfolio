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
              API의 사용원리를 이해하기 위해 제작하게 되었습니다.
              <br />
              언스플래시에서 제공하는 OpenAPI를 이용해
              <br />
              useEffect 훅을 사용하여 렌더링 이후 api를 호출하도록 하여
              <br />
              랜덤으로 이미지를 가져온 후, 검색시 해당 키워드에 해당하는
              이미지가 나오도록 하였습니다.
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
              <li>
                <ul>
                  <li>API</li>
                  <li>Unsplash</li>
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
