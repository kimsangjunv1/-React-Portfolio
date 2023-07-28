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
            PERSONAL <em>PROJECT</em>
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
            <h2>PICK</h2>
            <div className="project_type">
              <span>팀 프로젝트</span>
              <span>담당 : 디자인 100% / 프론트 60% / 퍼블리싱 80%</span>
            </div>
            <p>
              <strong>
                뮤직플레이어 Pick은 날씨에 따라
                <br />
                음악을 추천해주는 사이트 입니다
              </strong>
              <br />
              <br />
              Axios를 사용해 RESTful API를 활용해서 각 컴포넌트 별로 props를
              <br />
              넘겨주고 컴포넌트간의 가공된 데이터를 받을 수 있도록 Redux
              <br />
              Toolkit을 통해 관리하였습니다.
              <br />
              <br />
              메인화면 첫번째 섹션에 어떤 음악들이 추천되었는지 두번째 섹션에
              <br />
              주간 날씨가 어떤지 세번째 섹션에는 각 음악들의 순위와 아티스트들을
              <br />
              보여주도록 하였으며
              <br />
              <br />
              각 아티스트가 어떤 음악을 녹음했는지 발매 정보를 각
              <br />
              아티스트별로 클릭을 했을때 보여주고 해당 음원들을 눌렀을때
              <br />
              실제로 재생되도록 하였습니다.
            </p>
            <div className="section6p5_button_cont">
              <a href="https://github.com/kimsangjunv1/-React-Pick-Music-Player">
                CODE
              </a>
              <a href="https://react-pick.netlify.app">VIEW</a>
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
            <h2>Sumz</h2>
            <div className="project_type">
              <span>개인 프로젝트</span>
            </div>
            <p>
              <strong>
                Sumz는 우리가 일상 생활에서 보는 뉴스 본문들을
                <br />
                요약해주는 사이트입니다.
              </strong>
              <br />
              <br />
              화면 가운데에 본인이 요약을 원하는 뉴스 기사나 본문을 가지고 있는
              <br />
              링크를 넣고 엔터를 누르면 하단에 요약된 문단이 나오고 요약된
              <br />
              문단의 기록을 볼 수 있도록 input 하단에 기록들을 배치하였습니다.
            </p>
            <div className="section6p5_button_cont">
              <a href="https://github.com/kimsangjunv1/-React-OpenAI-Summarizer-website">
                CODE
              </a>
              <a href="https://react-sumz.netlify.app/">VIEW</a>
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
            <h2>Car Hub</h2>
            <div className="project_type">
              <span>개인 프로젝트</span>
            </div>
            <p>
              <strong>
                Car Hub는 제조사별 차량들의 모습과
                <br />
                상세 정보를 알 수 있는 사이트 입니다.
              </strong>
              <br />
              <br />
              Axios를 사용해 RESTful API를 활용해서 각 컴포넌트 별로 props를
              <br />
              넘겨주고 타입스크립트를 활용함으로써 각 props와 가공받아야 할
              <br />
              데이터들의 타입이 제대로 지켜질 수 있도록 하였으며
              <br />
              <br />
              제조사 및 차량별로 검색 가능하도록 필터링을 거쳐 하단에 각
              <br />
              제조사별 차량들의 모습이 나오고 제조사별 차량을 누르면 상세정보가
              <br />
              나오도록 하였습니다.
            </p>
            <div className="section6p5_button_cont">
              <a href="https://github.com/kimsangjunv1/-React-Car-Showcase">
                CODE
              </a>
              <a href="#">VIEW(수정중)</a>
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
