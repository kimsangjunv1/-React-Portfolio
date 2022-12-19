import React from "react";

import ruler from "./../../assets/img/ruler.svg";

const Section_15 = () => {
  return (
    // <!-- section15 -->
    <section style={{ background: "#f6f6fb" }} className="section vr7">
      <div className="section15_flex_cont">
        <div className="section15_all_cont">
          <div className="section15_main_title">
            <img src={ruler} alt="" />
            <h2>Worklist</h2>
          </div>

          <div className="section15_list_cont">
            <ul>
              <li>모든 작업물 보기</li>
              <li>작업물 보기</li>
              <li>모든 작업물을 볼 수 있도록 한곳에 정리하였습니다</li>
              <li>
                <a href="http://vvv0032.dothome.co.kr/">보기</a>
              </li>
            </ul>
            <ul>
              <li>레퍼런스</li>
              <li>자바스크립트・HTML・CSS</li>
              <li>
                자바스크립트 사용시 사용될 모든 용어들에 대해 정리한 사이트
                입니다
              </li>
              <li>
                <a href="http://vvv0032.dothome.co.kr/javascript/index.html">
                  JAVASCRIPT
                </a>
                <a href="http://vvv0032.dothome.co.kr/css/index.html">CSS</a>
                <a href="http://vvv0032.dothome.co.kr/html/alphabet.html">
                  HTML
                </a>
              </li>
            </ul>
            <ul>
              <li>사이트</li>
              <li>사이트 유형 01 - 03</li>
              <li>
                스와이퍼의 사용과 함께 슬라이드 유형을 가진 각각의 웹사이트
                레이아웃을 마크업 하였습니다.
              </li>
              <li>
                <a href="http://vvv0032.dothome.co.kr/site/site1/index.html">
                  01
                </a>
                <a href="http://vvv0032.dothome.co.kr/site/site5/index.html">
                  02
                </a>
                <a href="http://vvv0032.dothome.co.kr/site/site1/index.html">
                  03
                </a>
                {/* <a href="#">04</a>
                <a href="#">05</a> */}
              </li>
            </ul>
            <ul>
              <li>레퍼런스</li>
              <li>JS 이펙트</li>
              <li>
                각각 자바스크립트가 가진 명령어들의 특징을 살린 기능들을 각각의
                섹션으로 나누어 구현해두었습니다!
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
              <li>프로젝트</li>
              <li>PHP 블로그</li>
              <li>
                PHP에 대한 이해도를 높이기 위한 목적으로 만들어본 사이트입니다.
                회원가입 / 글쓰기 / 수정 / 삭제 / 댓글과 같은 활동이 가능하며
                프로필 사진을 넣을 수 있도록 작업하였습니다.
              </li>
              <li>
                <a href="#">보기</a>
              </li>
            </ul>
            <ul>
              <li>프로젝트</li>
              <li>PHP '꾸다'</li>
              <li>
                다이어리 꾸미기가 20대 사이에서 유행하고 있지만 높은 진입
                장벽탓에 어려워 하는 이들을 위하여 꿈을 꾸게 해주겠는다는 의미를
                생각하며 이름을 [꾸다]라고 지어 제작해보았습니다.
                글[수정,생성,삭제], 댓글[생성,수정,삭제], 다이어리 만들기
                다이어리 작성, 프로필 사진[생성,삭제]가 가능합니다.
              </li>
              <li>
                <a href="#">보기</a>
              </li>
            </ul>
            <ul>
              <li>프로젝트</li>
              <li>REACT 유튜브</li>
              <li>
                REACT를 사용하여 RAPID API를 이용해 유튜브를 다시 디자인해
                구현하였습니다 좌측에 좋아하는 유튜버들과 우측에 해당 영상
                유튜버 영상 목록을 띄워주었고 댓글/영상/채널정보/조회수/좋아요
                수 등등을 불러옵니다.
              </li>
              <li>
                <a href="#">보기</a>
              </li>
            </ul>
            {/* <ul>
              <li>프로젝트</li>
              <li>REACT 'Pick'</li>
              <li>뮤직플레이어 설명 적어야함</li>
              <li>
                <a href="#">보기</a>
              </li>
            </ul> */}
            <ul>
              <li>사이트</li>
              <li>REACT / VUE</li>
              <li>
                VUE와 REACT의 기본문법 및 DOM구조를 이해하고, 컴포넌트를
                분리하는 방법을 학습하여 API사이트를 제작 해보았습니다.
              </li>
              <li>
                <p>
                  <a href="#">VUE : API</a>
                  <a href="#">VUE : 사이트 유형</a>
                </p>
                <p>
                  <a href="#">REACT : API</a>
                  <a href="#">REACT : 사이트 유형</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_15;
