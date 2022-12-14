import React from "react";

const Section_03 = () => {
  return (
    <section id="javascript" className="horizontal">
      <div className="section3_fixed">
        <h2>
          JAVSCRIPT <em>EFFECT</em>
        </h2>
      </div>

      <section className="panel custom_02">
        <img
          className="section3_item_bottom2"
          src="src/assets/img/section3_img_bottom.svg"
          alt="라마인형들"
        />
        <img
          className="section3_item_bottom"
          src="src/assets/img/section3_img_bottom.svg"
          alt="라마인형들_뒷배경"
        />
        <div className="section3_item i001">
          <img src="src/assets/img/section3_img_001.jpg" alt="Search Effect" />
          <div className="item_desc">
            <h2>
              SEARCH
              <br />
              EFFECT
            </h2>
            <p>
              indexOf, includes, find 메서드 등을 이용해 사용자가 입력한
              키워드와 문자열이 일치시 해당 속성만 출력해 주는 CSS 속성 검색
              효과입니다. 좀 더 응용하여 data-set의 value값을 호출해 카테고리
              별로 검색하는 기능까지 추가해 종류별로도 볼 수 있도록 하였습니다.
            </p>
            <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/searchEffect01.html">
              code
            </a>
            <a href="http://vvv0032.dothome.co.kr/javascript/effect/searchEffect01.html">
              view
            </a>
          </div>
        </div>

        <div className="section3_item i002">
          <img src="src/assets/img/section3_img_002.jpg" alt="Search Effect" />
          <div className="item_desc">
            <h2>
              QUIZ
              <br />
              EFFECT
            </h2>
            <p>
              quizScore 변수에 정답을 저장해서 맞은 갯수가 몇개인지 알려주고
              <br />
              틀린 문제는 그에 맞는 애니메이션이 나오게 해주었습니다.
            </p>
            <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/quizEffect01.html">
              code
            </a>
            <a href="http://vvv0032.dothome.co.kr/javascript/effect/quizEffect01.html">
              view
            </a>
          </div>
        </div>

        <div className="section3_item i003">
          <img src="src/assets/img/section3_img_003.jpg" alt="Search Effect" />
          <div className="item_desc">
            <h2>
              SLIDE <br />
              EFFECT
            </h2>
            <p>
              insertBefore/appendChild을 통해 각각 앞 뒤에 처음이미지와
              <br />
              마지막 이미지를 넣어주어 연속적으로 스크롤하는 효과를 줍니다.
            </p>
            <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/sliderEffect.html">
              code
            </a>
            <a href="http://vvv0032.dothome.co.kr/javascript/effect/sliderEffect.html">
              view
            </a>
          </div>
        </div>

        <div className="section3_item i004">
          <img src="src/assets/img/section3_img_004.jpg" alt="Search Effect" />
          <div className="item_desc">
            <h2>
              MOUSE <br />
              EFFECT
            </h2>
            <p>
              window.innerWidth를 통해 마우스가 위치한 좌표 값을 기준으로
              <br />
              이미지효과 및 마우스를 추적하는 효과를 구현하였습니다.
            </p>
            <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/mouseEffect01.html">
              code
            </a>
            <a href="http://vvv0032.dothome.co.kr/javascript/effect/mouseEffect01.html">
              view
            </a>
          </div>
        </div>

        <div className="section3_item i005">
          <img src="src/assets/img/section3_img_005.jpg" alt="Search Effect" />
          <div className="item_desc">
            <h2>
              PARALLAX <br />
              EFFECT
            </h2>
            <p>
              offsetTop 값을 기준으로 브라우저 내부 요소가 위치한 값에 따라
              <br />
              다양한 효과를 주는 예제를 만들었습니다.
            </p>
            <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/parallaxEffect.html">
              code
            </a>
            <a href="http://vvv0032.dothome.co.kr/javascript/effect/parallaxEffect01.html">
              view
            </a>
          </div>
        </div>

        <div style={{ display: "none" }} className="section3_item i006">
          <img src="src/assets/img/section3_img_006.jpg" alt="Search Effect" />
          <div className="item_desc">
            <h2>
              GAME <br />
              EFFECT
            </h2>
            <p></p>
            <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/gameEffect01.html">
              code
            </a>
            <a href="http://vvv0032.dothome.co.kr/javascript/effect/gameEffect01.html">
              view
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Section_03;
