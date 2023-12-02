import React from "react";

import ruler from "./../../assets/img/ruler.svg";

const Section_15 = () => {
  return (
    // <!-- section15 -->
    // <section style={{ background: "#f6f6fb" }} className="section vr7">
    <section className="section vr7" style={{ display: "none" }}>
      <div className="section15_flex_cont">
        <div className="section15_all_cont">
          <h2>Worklist</h2>
          <div className="section15_list_cont">
            {/* <ul>
              <li>모두 보기</li>
              <div>
                <ul>
                  <li>작업물 보기</li>
                  <li>모든 작업물을 볼 수 있도록 한곳에 정리하였습니다</li>
                  <li>
                    <a href="http://vvv0032.dothome.co.kr/codingclass">
                      전체보기
                    </a>
                  </li>
                </ul>
              </div>
            </ul> */}
            {/* <ul>
              <li>
                HTML
                <br />
                CSS
                <br />
                JS
              </li>
              <div>
                <ul>
                  <li>자바스크립트</li>
                  <li>
                    addEventListener() 및 setInterval() 과 같은 함수들을 활용해
                    구현해본 예제 입니다.
                  </li>
                  <li>
                    <a href="http://vvv0032.dothome.co.kr/javascript/effect/searchEffect01.html">
                      서치
                    </a>
                    <a href="http://vvv0032.dothome.co.kr/javascript/effect/quizEffect01.html">
                      퀴즈
                    </a>
                    <a href="http://vvv0032.dothome.co.kr/javascript/effect/sliderEffect01.html">
                      슬라이드
                    </a>
                    <a href="http://vvv0032.dothome.co.kr/javascript/effect/mouseEffect01.html">
                      마우스
                    </a>
                    <a href="http://vvv0032.dothome.co.kr/javascript/effect/parallaxEffect01.html">
                      패럴렉스
                    </a>
                    <a href="http://vvv0032.dothome.co.kr/javascript/effect/gameEffect01.html">
                      게임
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>각 용어 정리</li>
                  <li>
                    태그, 속성, 함수 등 각 용어들이 어떤 쓰임새로 쓰이는지 따로
                    정리해놓은 페이지를 모아놓았습니다.
                  </li>
                  <li>
                    <a href="http://vvv0032.dothome.co.kr/javascript/index.html">
                      JAVASCRIPT
                    </a>
                    <a href="http://vvv0032.dothome.co.kr/css/index.html">
                      CSS
                    </a>
                    <a href="http://vvv0032.dothome.co.kr/html/alphabet.html">
                      HTML
                    </a>
                  </li>
                </ul>
              </div>
            </ul> */}
            <ul>
              <li>PHP</li>
              <div>
                <ul>
                  <li>블로그</li>
                  <li>
                    PHP에 대한 이해도를 높이기 위한 목적으로 만들어본
                    사이트입니다. 회원가입 / 글쓰기 / 수정 / 삭제 / 댓글과 같은
                    활동이 가능하며 프로필 사진을 넣을 수 있도록 작업하였습니다.
                  </li>
                  <li>
                    <a href="http://vvv0032.dothome.co.kr/phpClass/main/main.php">
                      보기
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
            <ul>
              <li>
                React
                <br />
                Vue
              </li>
              <div>
                <ul>
                  <li>REACT</li>
                  <li>
                    REACT의 기본문법 및 DOM구조를 이해하고, 컴포넌트를 분리하는
                    방법을 학습하여 API사이트를 제작 해보았습니다.
                  </li>
                  <li>
                    <a href="https://reactapi11.netlify.app/">기본구조</a>
                    <a href="https://reactapi11.netlify.app/">Unsplash API</a>
                    <a href="https://reactapi11.netlify.app/">TMDB API</a>
                  </li>
                </ul>
                <ul>
                  <li>VUE</li>
                  <li>
                    VUE의 기본문법 및 DOM구조를 이해하고, 컴포넌트를 분리하는
                    방법을 학습하여 API사이트를 제작 해보았습니다.
                  </li>
                  <li>
                    <a href="https://vueapi11.netlify.app/">기본구조</a>
                    <a href="https://reactapi11.netlify.app/">Unsplash API</a>
                    <a href="https://reactapi11.netlify.app/">TMDB API</a>
                  </li>
                </ul>
              </div>
            </ul>
            <ul className="project">
              <li>
                PHP
                <br />
                프로젝트
              </li>
              <div>
                <ul>
                  <li>'꾸다'</li>
                  <li>
                    다이어리 꾸미기가 20대 사이에서 유행하고 있지만 높은 진입
                    장벽탓에 어려워 하는 이들을 위하여 꿈을 꾸게 해주겠는다는
                    의미를 생각하며 이름을 [꾸다]라고 지어 제작해보았습니다.
                    글[수정,생성,삭제], 댓글[생성,수정,삭제], 다이어리 만들기
                    다이어리 작성, 프로필 사진[생성,삭제]가 가능합니다.
                  </li>
                  <li>
                    <a href="http://vvv0032.dothome.co.kr/Diary/PHP/main/main.php">
                      보기
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
            <ul className="project">
              <li>
                React
                <br />
                프로젝트
              </li>
              <div>
                <ul>
                  <li>Pick</li>
                  <li>
                    오늘의 날씨에 따라 노래를 추천해주고, 주간 날씨 및 각
                    노래들의 순위와 아티스트들에 대한 정보를 확인 해볼 수 있는
                    뮤직플레이어 웹 사이트 입니다.
                  </li>
                  <li>
                    <a href="https://react-pick.netlify.app/">보기</a>
                  </li>
                </ul>
                <ul>
                  <li>Sumz</li>
                  <li>
                    Sumz는 우리가 일상 생활에서 보는 뉴스 본문들을 요약해주는
                    사이트입니다.
                  </li>
                  <li>
                    <a href="https://react-sumz.netlify.app/">보기</a>
                  </li>
                </ul>
                <ul>
                  <li>Car Hub</li>
                  <li>
                    Car Hub는 제조사별 차량들의 모습과 상세 정보를 알 수 있는
                    사이트 입니다.
                    <br />
                    Axios를 사용해 RESTful API를 활용해서 각 컴포넌트 별로
                    props를 넘겨주고 타입스크립트를 활용함으로써 각 props와
                    가공받아야 할 데이터들의 타입이 제대로 지켜질 수 있도록
                    하였습니댜.
                  </li>
                  <li>
                    <a href="#">보기(수정중)</a>
                  </li>
                </ul>
                <ul>
                  <li>Tech Tube</li>
                  <li>
                    REACT를 사용하여 RAPID API를 이용해 유튜브를 다시 디자인해
                    구현하였습니다
                    <br />
                    좌측에 좋아하는 유튜버들과 우측에 해당 영상 유튜버 영상
                    목록을 띄워주었고 댓글/영상/채널정보/조회수/좋아요 수 등등을
                    불러옵니다.
                  </li>
                  <li>
                    <a href="https://react-techtube.netlify.app/">보기</a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_15;
