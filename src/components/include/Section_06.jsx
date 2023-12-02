import React from "react";
import section5p5_light from "./../../assets/img/section5p5_light.svg";
import section5p5_screenshot_01 from "./../../assets/img/section5p5_screenshot_01.jpg";
import section5p5_screenshot_02 from "./../../assets/img/section5p5_screenshot_02.jpg";
import section5p5_screenshot_03 from "./../../assets/img/section5p5_screenshot_03.jpg";

const Section_06 = () => {
  return (
    // <!-- 섹션 6 : 사이트 기본구조 소개 -->
    <section id="site" className="section point2">
      <div>
        <div className="section6p5_static">
          <p className="section6p5_title">프로젝트</p>
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
              <span>개인 프로젝트</span>
              <span>담당 : 디자인 100% / 프론트 100% / 퍼블리싱 100%</span>
            </div>
            <div className="info_container">
              <ul>
                <li>
                  <ul>
                    <li>설명</li>
                    <li>
                      사용자에게 날씨별로 음악의 듣기/아티스트 정보/앨범정보를
                      제공해주는
                      <br />웹 사이트 'PiCK' 입니다,
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>회고록</li>
                    <li>
                      각 페이지별,컴포넌트별로 나누다보니
                      재생기록/플레이리스트/정보 등의 상태값을 넘겨주는것이
                      복잡해지는 문제에 부딪혀
                      <br />
                      ReduxToolKit을 사용해 페이지별 상태관리를 용이하게
                      하였습니다.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>참여도</li>
                    <li>100% 개인작업</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>기술스택</li>
                    <li>React,Redux Tool Kit</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>API</li>
                    <li>야후 날씨, 샤잠 뮤직</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="section6p5_button_cont">
              <a href="https://github.com/kimsangjunv1/-React-Pick-Music-Player">
                깃허브
              </a>
              <a href="https://react-pick.netlify.app">미리보기</a>
              <a href="https://react-pick.netlify.app">피그마</a>
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
            <h2>PlayGround</h2>
            <div className="project_type">
              <span>개인 프로젝트</span>
              <span>담당 : 디자인 100% / 프론트 100% / 퍼블리싱 100%</span>
            </div>
            {/* <p>
              <strong>
                기존 유튜브를 재디자인 후 드랍박스의 기능을 추가한 <br />
                웹사이트 'PlayGround' 입니다,
              </strong>
            </p> */}
            <div className="info_container">
              <ul>
                <li>
                  <ul>
                    <li>설명</li>
                    <li>
                      기존 유튜브를 재디자인 후 드랍박스의 기능을 추가한 <br />
                      웹사이트 'PlayGround' 입니다,
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>회고록</li>
                    <li>
                      원하는 영상을 드랍박스구역에 드래그&드롭 하여 저장하다보니
                      이미 똑같은 영상이 존재함에도 또 다시 담기는 문제와
                      박스에서 삭제시 같이 삭제되는 문제가 발생하였습니다.
                      <br />
                      그래서 저장되어있는 정보를 map을 통해 각 비디오 id 값을
                      담은 변수에 includes를 통해 지금 넣으려는 비디오의 id가
                      없을 경우에만 저장되도록 하여 해결하였습니다.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>참여도</li>
                    <li>100% 개인작업</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>기술스택</li>
                    <li>React,Zustand</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>API</li>
                    <li>유튜브</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="section6p5_button_cont">
              <a href="https://github.com/kimsangjunv1/-React-OpenAI-Summarizer-website">
                깃허브
              </a>
              <a href="https://react-sumz.netlify.app/">미리보기</a>
              <a href="https://react-sumz.netlify.app/">피그마</a>
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
            <h2>꾸다</h2>
            <div className="project_type">
              <span>팀 프로젝트</span>
              <span>담당 : 디자인 80% / 프론트 60% / 퍼블리싱 50%</span>
            </div>
            <div className="info_container">
              <ul>
                <li>
                  <ul>
                    <li>설명</li>
                    <li>
                      본인이 꾸며보고 싶었던 다이어리를 간단하게 꾸며 보고
                      <br />
                      사용자들끼리 내용도 공유할 수 있도록 만든 웹사이트 '꾸다'
                      입니다.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>회고록</li>
                    <li>
                      각 페이지별,컴포넌트별로 나누다보니
                      재생기록/플레이리스트/정보 등의 상태값을 넘겨주는것이
                      복잡해지는 문제에 부딪혀
                      <br />
                      ReduxToolKit을 사용해 페이지별 상태관리를 용이하게
                      하였습니다.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>참여도</li>
                    <li>100% 개인작업</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>기술스택</li>
                    <li>React,Redux Tool Kit</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>API</li>
                    <li>야후 날씨, 샤잠 뮤직</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="section6p5_button_cont">
              <a href="https://github.com/kimsangjunv1/-React-Car-Showcase">
                깃허브
              </a>
              <a href="#">미리보기(수정중)</a>
              <a href="#">피그마</a>
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
          {/* <svg
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
          </svg> */}
          <svg
            id="tractor"
            width="262"
            height="284"
            viewBox="0 0 262 284"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M108.459 127.023C104.455 127.148 105.523 131.236 107.088 133.124C107.35 133.441 106.707 133.238 106.284 133.399C104.75 133.984 104.387 135.407 104.302 136.927C104.213 138.523 103.993 141.057 104.478 142.573C105.286 145.102 101.742 145.982 101.833 148.9C101.887 150.628 103.252 152.558 104.785 153.43C106.445 154.375 105.501 154.613 104.283 155.382C102.343 156.606 103.127 161.146 104.628 162.428C105.117 162.846 108.161 164.405 108.125 164.442C107.123 165.509 103.947 165.878 103.565 167.395C102.863 170.176 101.482 175.578 106.032 175.437C108.349 175.364 103.241 177.444 102.515 177.794C101.086 178.483 101.148 181.034 101.187 182.301C101.243 184.088 101.932 185.566 103.561 186.318C105.234 187.09 105.33 186.641 103.89 187.869C102.838 188.766 102.065 195.656 104.416 195.721C105.728 195.757 106.014 194.589 105.533 196.498C105.309 197.386 104.405 198.473 105.647 199.18"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M111.532 117.372C112.063 116.146 112.231 115.102 113.708 115.056C115.596 114.998 116.525 115.295 116.454 113.004C116.347 109.571 117.46 103.891 122.118 106.364C124.331 107.538 121.659 107.64 124.11 106.177C127.619 104.082 132.743 104.533 136.657 103.975C138.9 103.655 137.994 105.323 139.923 104.56C141.777 103.827 143.332 103.008 145.391 103.672C146.941 104.171 147.525 108.32 148.688 108.284C151.283 108.203 154.177 106.906 156.881 107.654C157.875 107.929 159.602 108.81 159.639 109.973C159.69 111.617 162.716 111.84 163.897 112.369C168.774 114.553 163.444 116.02 166.207 118.355C167.673 119.594 171.312 124.104 168.564 125.838C166.614 127.068 167.337 126.736 168.193 127.973C169.109 129.297 170.431 130.125 171.27 131.531C172.312 133.275 173.428 135.032 172.284 137.026C171.508 138.381 170.888 138.343 171.845 139.975C173.145 142.19 173.576 142.391 173.66 145.102C173.732 147.412 172.054 148.985 170.163 150.114C168.732 150.968 174.06 157.94 174.144 160.638C174.187 162.029 174.129 163.232 173.103 164.323C172.761 164.687 171.593 164.872 171.51 165.31C171.228 166.796 172.744 167.934 173.468 169.027C174.454 170.514 174.494 171.868 174.547 173.584C174.625 176.099 168.719 174.11 170.473 177.114C171.677 179.177 178.749 186.421 172.275 186.863C170.778 186.965 171.511 188.362 172.501 189.104C173.072 189.533 172.985 192.012 172.29 191.359"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M134.343 96.6657C134.343 88.5234 135.142 79.8292 134.177 71.718C133.84 68.8883 134.343 66.2246 134.343 63.4268"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M114.724 55.9093C122.986 56.608 131.022 58.5132 138.571 60.0033C143.462 60.9688 148.422 61.8705 153.361 62.7896"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M114.724 62.1879C122.986 61.4891 131.022 59.584 138.571 58.0939C143.462 57.1284 148.422 56.2267 153.361 55.3076"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M107.061 52.8334C109.097 49.0249 129.189 43.4838 147.738 46.2742C163.512 48.6471 173.145 51.7776 165.882 56.2941"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M158.927 40.8419C160.426 39.6742 168.488 41.1061 174.27 45.6247"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M90.5786 65.8978C90.6642 67.7962 96.9892 72.9969 104.18 74.4591"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M160.181 66.1133C157.921 69.51 137.534 73.4255 119.187 69.7362C103.584 66.5988 94.1573 63.1296 101.677 59.392"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M106.979 105.668C106.833 100.977 106.127 95.2061 110.201 91.8285C113.399 89.1774 114.508 94.7562 114.578 97.0006"
              stroke="#10C06B"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M157.418 96.9521C157.64 94.161 160.434 90.4198 163.16 92.8388C165.479 94.8958 166.926 97.4009 165.963 100.62"
              stroke="#10C06B"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M132.315 126.738C132.293 127.73 132.009 128.673 132.04 129.671"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M143.992 126.008C143.68 126.775 143.315 127.754 143.341 128.588"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M136.383 133.669C137.017 134.376 137.847 135.471 138.399 136.339C138.903 137.133 140.005 134.492 140.515 133.919"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M138.488 138.358C138.521 139.389 138.321 141.449 137.883 142.398"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M173.521 199.56C175.857 201.82 177.704 204.175 177.849 207.588C177.869 208.049 177.786 209.567 177.31 209.834C176.837 210.099 175.247 209.777 175.015 210.104C174.432 210.93 176.719 213.863 176.28 215.24C175.879 216.496 174.895 219.223 173.632 217.414"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M174.067 222.254C175.094 224.06 175.672 225.235 175.833 227.219C175.874 227.72 176.069 229.484 175.392 229.723C175.057 229.842 174.006 229.175 174.132 229.533C174.651 230.998 174.812 232.531 175.177 234.038C175.377 234.864 175.795 237.072 175.375 237.844C175.315 237.955 174.687 237.97 174.552 238.01C174.146 238.13 173.195 237.44 173.291 237.853C173.432 238.459 174.135 239.107 174.351 239.759C174.628 240.597 174.574 241.712 174.602 242.588C174.645 243.882 174.691 244.987 173.38 245.401C172.142 245.792 169.496 246.586 170.167 248.051"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M168.066 247.399C168.591 248.523 168.801 249.078 168.325 250.314C168.045 251.041 167.863 252.109 167.241 252.742C166.959 253.029 166.084 253.031 165.663 253.216C165.043 253.488 163.31 254.624 162.645 253.833C162.442 253.592 162.66 254.396 162.59 254.672C162.427 255.311 162.003 255.981 161.573 256.552C160.831 257.539 160.599 257.801 159.04 257.927C158.47 257.973 157.786 258.211 157.376 257.831C157.03 257.509 154.539 260.906 154.134 261.37C153.654 261.921 152.66 261.862 151.81 261.619C150.38 261.211 149.977 260.804 149.676 259.626C149.614 259.379 148.211 260.392 148.115 260.452C147.069 261.097 145.813 261.603 144.535 261.989C143.819 262.205 142.795 262.032 142.099 261.79C141.454 261.565 140.408 261.184 140.197 260.684C139.88 259.932 137.769 261.577 137.226 261.832C136.233 262.298 135.425 262.476 134.327 262.602C133.054 262.749 133.096 262.014 132.772 261.247"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M128.251 259.955C125.066 261.776 122.734 261.742 119.529 259.905C119.011 259.608 117.531 259.123 117.47 258.584C117.399 257.954 118.123 256.702 117.821 256.2C117.177 255.127 113.071 256.358 111.792 255.074C111.198 254.478 112.019 253.736 110.954 253.586C109.629 253.398 108.877 253.7 107.921 252.861C107.24 252.263 106.519 251.195 106.841 250.409C107.233 249.453 105.227 249.941 104.396 249.585C103.145 249.051 102.509 248.016 101.929 247.143C101.374 246.308 101.628 246.071 101.871 245.307C101.925 245.139 99.6703 244.598 99.3227 244.265C98.5874 243.559 98.2681 242.699 98.59 241.85C98.7999 241.296 99.3618 240.641 99.2736 240.069C99.2283 239.775 99.3554 239.196 99.5044 238.916C99.7889 238.38 98.4137 238.286 97.7255 238.024C95.9593 237.351 96.5471 235.195 97.3091 234.213"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M99.3794 198.213C97.5776 200.616 96.9113 202.722 97.8765 205.734C98.2106 206.776 99.8207 207.663 98.841 208.366C97.3425 209.441 95.9513 210.598 96.2268 212.526C96.3828 213.618 96.1567 214.712 96.2361 215.808C96.314 216.884 96.9046 217.097 97.5839 217.83C98.8443 219.19 97.3593 219.724 96.1556 220.933C94.2546 222.841 93.2396 224.415 92.3436 226.815C92.0443 227.616 93.062 229.202 93.8442 229.232C95.0811 229.279 96.4855 229.446 97.6027 228.887"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M164.275 185.407C162.233 185.552 159.889 184.687 157.966 185.8C157.369 186.146 156.708 186.617 156.406 187.47C156.191 188.078 155.994 188.985 156.209 189.636C156.338 190.03 155.497 188.771 155.422 188.659C154.033 186.577 151.996 187.533 150.838 189.633C150.241 190.715 149.601 191.872 149.153 193.094C149.105 193.225 149.184 193.656 149.124 193.535C148.82 192.91 148.401 192.27 147.964 191.837C146.434 190.32 144.124 190.678 142.934 192.827C141.83 194.821 141.678 196.382 142.166 198.626C142.487 200.1 143.173 200.483 142.315 201.526C141.39 202.652 141.053 204.252 141.961 205.476C142.54 206.256 142.933 207.276 143.648 207.832C144.123 208.202 144.578 208.564 145.007 209.039C145.596 209.691 146.201 209.554 146.737 209.971C147.325 210.429 147.693 211.432 148.241 211.986C149.425 213.183 151.056 214.163 152.503 213.961C153.347 213.843 155.032 212.813 155.776 213.392C156.879 214.25 158.267 215.576 159.621 214.91C160.12 214.664 160.5 214.548 160.767 213.845C160.891 213.518 161.588 214.382 161.95 214.021"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M144.401 217.46C143.083 218.141 143.622 219.908 144.158 221.149C144.356 221.608 145.291 222.415 144.916 222.352C144.376 222.261 143.889 223.061 143.555 223.529C142.543 224.945 142.816 225.716 143.636 227.155C144.583 228.815 146.292 231.207 147.939 230.884C148.788 230.718 148.438 230.916 148.428 232.094C148.42 233.169 148.904 233.491 149.494 233.951C150.412 234.665 151.228 235.028 152.269 235.364C152.792 235.533 154.494 236.36 155.064 235.898C156.199 234.981 156.047 236.865 157.039 236.673C157.972 236.492 159.259 236.248 160.17 236.292"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M123.506 184.676C124.216 184.386 125.795 185.111 126.438 185.435C128.448 186.449 131.315 187.681 132.499 189.696C132.79 190.191 133.227 191.868 133.495 191.772C134.855 191.287 136.455 191.876 137.602 192.622C140.385 194.431 141.129 198.024 140.154 200.912C139.802 201.953 139.244 203.019 138.126 203.339C137.418 203.542 136.747 203.569 136.011 203.594C135.587 203.609 135.16 203.638 134.736 203.625C134.68 203.623 134.056 203.533 134.076 203.57C135.803 206.746 131.548 209.811 128.909 210.189C126.704 210.505 124.081 209.675 121.915 209.302C120.786 209.108 121.27 209.496 120.722 210.034C119.869 210.871 117.183 211.12 116.092 211.242C114.36 211.435 112.637 211.791 110.875 211.642C110.607 211.619 108.549 211.003 108.448 211.139C108.056 211.664 107.881 212.534 107.834 213.18C107.777 213.953 107.377 214.147 106.798 213.743"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M134.86 214.891C135.88 216.766 135.447 219.905 134.806 221.863C134.332 223.313 129.839 223.851 129.86 224.469C129.896 225.524 130.087 226.627 129.899 227.679C129.651 229.063 127.668 229.909 126.559 230.406C124.724 231.228 122.527 231.58 120.53 231.629C119.679 231.65 118.063 231.712 117.3 231.297C116.747 230.996 115.915 232.091 115.496 232.427C114.16 233.496 112.581 233.429 110.923 233.405C109.939 233.391 108.977 233.154 108.073 233.099C107.139 233.042 107.526 232.083 106.342 232.78C105.012 233.564 104.13 234.214 102.502 233.824C101.676 233.626 100.769 232.594 100.057 232.618"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </g>
      </svg>
    </section>
  );
};

export default Section_06;
