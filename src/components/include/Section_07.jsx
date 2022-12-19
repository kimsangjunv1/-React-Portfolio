import React from "react";

import section7_screenshot_01_test from "./../../assets/img/section7_screenshot_01_test.gif";
import section6p5_screenshot_02 from "./../../assets/img/section6p5_screenshot_02.gif";
import section6p5_screenshot_04 from "./../../assets/img/section6p5_screenshot_04.gif";
import section6p5_screenshot_07 from "./../../assets/img/section6p5_screenshot_07.gif";
import section6p5_screenshot_08 from "./../../assets/img/section6p5_screenshot_08.gif";
import section6p5_screenshot_09 from "./../../assets/img/section6p5_screenshot_09.gif";

const Section_07 = () => {
  return (
    // <!-- 섹션 7 : 모든 프로젝트 -->
    <section id="project" className="section bg_change_purple point3">
      <div>
        <div className="section6p7_static">
          <p className="section6p7_title">
            ALL <em>PROJECT</em>
          </p>
        </div>
        <div className="light ir">light</div>
        <div className="site_type">
          <div className="screenshot_cont">
            <img
              className="screenshot s6p5_1"
              src={section7_screenshot_01_test}
              alt=""
            />
          </div>
          <img
            className="screenshot s6p5_2"
            src={section6p5_screenshot_02}
            alt=""
          />
          <div className="site_type_04_desc">
            <h2>YOUTUBE</h2>
            <p>
              REACT를 사용하여 RAPID API를 이용해 유튜브를 다시 디자인해
              구현하였습니다
              <br />
              좌측에 좋아하는 유튜버들과 우측에 해당 영상 유튜버 영상 목록을
              띄워주었고
              <br />
              댓글/영상/채널정보/조회수/좋아요 수 등등을 불러옵니다.
            </p>
            {/* <div className="level_cont_project">
              <p>!</p>
              <p>
                기여도 : 60% | useEffect 사용시 배열을 적지 않으면 api를
                불러올때 무한으로 불러온다는것을 몰랐어서 어려웠었던 기억이
                있습니다.
              </p>
            </div> */}
            <div className="section6p5_button_cont">
              <a href="https://github.com/kimsangjunv1/react_youtube">CODE</a>
              <a href="https://reactapiyt.netlify.app/">VIEW</a>
            </div>
          </div>
        </div>
        <div className="site_type">
          <img
            className="screenshot s6p5_4"
            src={section6p5_screenshot_04}
            alt=""
          />
          <div className="site_type_05_desc">
            <h2>GGUDA</h2>
            <p>
              PHP로 만든 사이트 입니다.
              <br />
              GET/POST 방식을 적절히 섞어 로그인/회원가입 등을 구현하였으며,
              <br />
              SESSION에 있는 데이터를 이용해 사용자가 등록한 프로필
              이미지/다이어리 색상 등을 가져올 수 있도록 하였습니다
            </p>
            {/* <div className="level_cont_project">
              <p>!</p>
              <p>
                기여도 : 60% | useEffect 사용시 배열을 적지 않으면 api를
                불러올때 무한으로 불러온다는것을 몰랐어서 어려웠었던 기억이
                있습니다.
              </p>
            </div> */}
            <div className="section6p5_button_cont">
              <a href="https://github.com/kimsangjunv1/Diary">CODE</a>
              <a href="http://vvv0032.dothome.co.kr/Diary/PHP/main/main.php">
                VIEW
              </a>
            </div>
          </div>
        </div>
        <div className="site_type">
          <img
            className="screenshot s6p5_7"
            src={section6p5_screenshot_09}
            alt=""
          />
          <div className="site_type_06_desc">
            <h2>PHP BLOG</h2>
            <p>
              PHP를 이용해 SESSION과 GET/POST 방식을 이용해
              <br />
              로그인/로그아웃/게시물 작성/댓글 작성 등등의 기능을 추가한 개발
              블로그를 제작했습니다.
            </p>
            <div className="section6p5_button_cont">
              <a href="https://github.com/kimsangjunv1/phpClass">CODE</a>
              <a href="http://vvv0032.dothome.co.kr/phpClass/main/main.php">
                VIEW
              </a>
            </div>
          </div>
        </div>
        <div className="site_type">
          <img
            className="screenshot s6p5_10"
            src={section6p5_screenshot_07}
            alt=""
          />
          <img
            className="screenshot s6p5_11"
            src={section6p5_screenshot_08}
            alt=""
          />
          <div className="site_type_07_desc">
            <h2>TISTORY BLOG</h2>
            <p>
              자바스크립트/HTML/CSS/프로그래머스 등등과 관련된 공부한 내용들을
              블로그에 정리하였으며
              <br />
              <br />
              블로그 스킨 제작시 티스토리 블로그를 window.innerWidth를 응용해
              마우스에 따라
              <br />
              이모티콘이 불규칙한 차이를 두고 따라오도록 하였으며
              <br />
              <br />
              Math.random()을 통해 각 아이콘들의 회전 각도, 크기, 위치등을
              불규칙적으로
              <br />
              생성하도록 하였습니다.
            </p>
            <div className="section6p5_button_cont">
              {/* <!-- <a href="www.naver.com">CODE</a> --> */}
              <a href="https://kimsangjun.tistory.com/">VIEW</a>
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
        id="linesvg2"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 869 3002"
        xmlSpace="preserve"
      >
        <path
          id="motionPath2"
          className="st0"
          d="M167.225,-403.62099 C164.603,-396.38299 119.822,-259.879 276.208,29.711 727.733,865.833 454.402,855.295 436.65,773.699 420.073,697.503 590.043,644.41 479.872,966.493 421.66,1136.673 410.512,1195.246 445.191,1295.957 483.171,1406.265 412.591,1449.072 446.979,1622.156 534.741,2063.89 420.595,2259.622 420.595,2259.622 "
        />
        <g id="motionSVG2">
          <svg
            id="tractor2"
            width="148"
            height="163"
            viewBox="0 0 148 163"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56.7845 37.6048C58.9426 24.2784 69.8392 16.4193 73.5859 8.92187"
              stroke="#202033"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M143.113 46.1199C137.162 54.1095 124.419 50.9721 116.508 62.2266"
              stroke="#202033"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <rect
              width="105"
              height="92"
              rx="46"
              transform="matrix(-0.987139 -0.159865 -0.159865 0.987139 128.711 44.1855)"
              fill="#F4F4F4"
              stroke="#F4F4F4"
              strokeWidth="17"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1 15"
            />
            <rect
              width="80"
              height="68"
              rx="34"
              transform="matrix(-0.987139 -0.159865 -0.159865 0.987139 116.867 42.2671)"
              fill="white"
              stroke="white"
              strokeWidth="17"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1 15"
            />
            <rect
              x="66.2637"
              y="51.8433"
              width="6"
              height="6"
              rx="3"
              transform="rotate(-113.328 66.2637 51.8433)"
              fill="#343440"
            />
            <rect
              x="86.6035"
              y="57.4346"
              width="6"
              height="6"
              rx="3"
              transform="rotate(-113.328 86.6035 57.4346)"
              fill="#343440"
            />
            <path
              d="M71.9551 53.7363C74.1736 54.7762 78.6322 55.7939 81.0192 56.6873"
              stroke="#202033"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M81.2648 58.7908C80.437 57.6435 81.2522 55.7496 82.8123 55.4962"
              stroke="#202033"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M22.125 109.292C7.65096 116.15 8.29386 130.946 3.67837 128.17"
              stroke="#202033"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M65.2677 126.107C50.7937 132.966 57.6089 153.431 52.9934 150.655"
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

export default Section_07;
