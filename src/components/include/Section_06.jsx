import React from "react";
import section5p5_light from "./../../assets/img/section5p5_light.svg";
import section5p5_screenshot_01 from "./../../assets/img/section5p5_screenshot_01.jpg";
import section5p5_screenshot_02 from "./../../assets/img/section5p5_screenshot_02.jpg";
import section5p5_screenshot_03 from "./../../assets/img/section5p5_screenshot_03.jpg";

const Section_06 = () => {
  return (
    // <!-- 섹션 6 : 사이트 기본구조 소개 -->
    <section id="site" className="section custom_color_dark point2">
      <div>
        <div className="section6p5_static">
          <p className="section6p5_title">
            SITE <em>TYPE</em>
          </p>
        </div>
        <div className="light ir">light</div>
        <img className="light_on_top" src={section5p5_light} alt="" />
        <div className="site_type">
          <img
            className="screenshot s5p5_1"
            src={section5p5_screenshot_01}
            alt=""
          />
          <div className="site_type_01_desc">
            <h2>site type 01</h2>
            <p>
              Swiper를 통해 슬라이드가 가능한 기본 사이트 유형을
              제작해보았습니다
              <br />
              그리고 상단의 메뉴를 클릭할시 각 섹션으로 이동하도록 하였으며
              <br />
              올라갈때 애니메이션이 뚝 끊기는 느낌이 없도록
              <br />
              이동시 prevendDefault()를 통해 바로 가버리는 이벤트를 막았습니다.
            </p>
            <div className="section6p5_button_cont">
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/site/site1/index.html">
                CODE
              </a>
              <a href="http://vvv0032.dothome.co.kr/site/site1/index.html">
                VIEW
              </a>
            </div>
          </div>
        </div>
        <div className="site_type">
          <img
            className="screenshot s5p5_4"
            src={section5p5_screenshot_02}
            alt=""
          />
          <div className="site_type_02_desc">
            <h2>site type 02</h2>
            <p>
              Swiper를 통해 전체화면을 가진 슬라이드가 가능한 웹페이지 구조를
              제작하였습니다
              <br />
              올라갈때 애니메이션이 뚝 끊기는 느낌이 없도록
              <br />
              이동시 preventDefault()를 통해 바로 가버리는 이벤트를 막았습니다.
            </p>
            <div className="section6p5_button_cont">
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/site/site5/index.html">
                CODE
              </a>
              <a href="http://vvv0032.dothome.co.kr/site/site5/index.html">
                VIEW
              </a>
            </div>
          </div>
        </div>
        <div className="site_type">
          <img
            className="screenshot s5p5_7"
            src={section5p5_screenshot_03}
            alt=""
          />
          <div className="site_type_03_desc">
            <h2>site type 03</h2>
            <p>
              Swiper를 통해 전체화면을 가진 슬라이드가 가능한 웹페이지 구조를
              제작하였습니다
              <br />
              3D 이모티콘을 불규칙한 간격으로 한 슬라이드가 나올때마다 등장하게
              하였으며,
              <br />
              기본적인 웹페이지 구조를 작성하였습니다.
            </p>
            <div className="section6p5_button_cont">
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/site/site2/index.html">
                CODE
              </a>
              <a href="http://vvv0032.dothome.co.kr/site/site2/index.html">
                VIEW
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="ball_cont">
        <div className="ball ball_1 ir">ball</div>
        <div className="ball ball_2 ir">ball</div>
        <div className="ball ball_3 ir">ball</div>
        <div className="ball ball_4 ir">ball</div>
        <div className="ball ball_5 ir">ball</div>
        <div className="ball ball_6 ir">ball</div>
        <div className="ball ball_7 ir">ball</div>
        <div className="ball ball_8 ir">ball</div>
        <div className="ball ball_9 ir">ball</div>
        <div className="ball ball_10 ir">ball</div>
        <div className="ball ball_11 ir">ball</div>
        <div className="ball ball_12 ir">ball</div>
        <div className="ball ball_13 ir">ball</div>
        <div className="ball ball_14 ir">ball</div>
        <div className="ball ball_15 ir">ball</div>
        <div className="ball ball_16 ir">ball</div>
        <div className="ball ball_17 ir">ball</div>
        <div className="ball ball_18 ir">ball</div>
        <div className="ball ball_19 ir">ball</div>
        <div className="ball ball_20 ir">ball</div>
      </div>
      <svg
        id="linesvg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 869 3002"
        xmlSpace="preserve"
      >
        <path
          id="motionPath"
          className="st0"
          d="M167.225,-405.89099 C164.603,-398.65299 104.231,-143.03899 262.045,-62.15999 465.309,42.01201 849.658,-73.74299 844.16,135.06701 835.835,451.19401 37.915,155.25001 41.953,528.31601 45.931,896.24901 831.76,583.29201 831.698,897.30501 831.626,1260.47601 80.153,838.99401 83.114,1179.94101 86.191,1534.35201 829.403,1132.75801 831.84,1487.94701 833.08575,1669.58011 614.981,1730.18 418.3078,1746.43668 116.077,1771.418 150.31,1991.163 150.31,1991.163 "
        />
        <g id="motionSVG">
          <svg
            id="tractor"
            width="132"
            height="146"
            viewBox="0 0 132 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.5439 49.7915C112.374 32.5878 113.47 32.364 109.597 29.0471"
              stroke="#68677A"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M71.1814 5.39111C81.8539 3.77989 48.5392 29.2659 59.5379 35.7102"
              stroke="#68677A"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M102.539 91.9551C124.382 88.7743 125.337 89.3563 124.76 84.2901"
              stroke="#68677A"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <rect
              width="105"
              height="92"
              rx="46"
              transform="matrix(-0.0837961 0.996483 0.996483 0.0837961 13.5615 28.2759)"
              fill="#F4F4F4"
              stroke="#F4F4F4"
              strokeWidth="17"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1 15"
            />
            <rect
              width="97.3032"
              height="92"
              rx="46"
              transform="matrix(-0.0837961 0.996483 0.996483 0.0837961 13.5625 35.8911)"
              fill="white"
              stroke="white"
              strokeWidth="17"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1 15"
            />
            <path
              d="M67.3047 67.9517C68.9651 67.5547 68.718 64.5234 67.2136 64.5498"
              stroke="#202033"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M65.0459 57.7563C66.2927 55.7993 65.7927 52.2993 64.5413 51.358"
              stroke="#202033"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M63.0459 78.7563C64.2927 76.7993 63.7927 73.2993 62.5413 72.358"
              stroke="#202033"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M92.0818 89.5073C82.5818 106.507 78.0818 98.5073 70.6826 113.725"
              stroke="#202033"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </g>
      </svg>
    </section>
  );
};

export default Section_06;
