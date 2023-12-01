import React from "react";

import section3_img_bottom from "./../../assets/img/section3_img_bottom.svg";
import section3_img_001 from "./../../assets/img/section3_img_001.jpg";
import section3_img_002 from "./../../assets/img/section3_img_002.jpg";
import section3_img_003 from "./../../assets/img/section3_img_003.jpg";
import section3_img_004 from "./../../assets/img/section3_img_004.jpg";
import section3_img_005 from "./../../assets/img/section3_img_005.jpg";
import section3_img_006 from "./../../assets/img/section3_img_006.jpg";
import section3_title from "./../../assets/img/section3_title.svg";

const Section_03 = () => {
  const data = [
    {
      name: "dsad",
      desc: "asd",
      github: "asd",
    },
  ];
  return (
    <section id="javascript" className="horizontal">
      <div className="section3_fixed">
        <h2>
          USED <em>STACK</em>
          {/* JAVASCRIPT <em>PRACTICE</em> */}
        </h2>
        <p>이런 기술들을 사용해봤어요!</p>
        {/* <img src={section3_title} alt="" /> */}
      </div>

      <section className="panel custom_02">
        <img
          className="section3_item_bottom2"
          src={section3_img_bottom}
          alt="라마인형들"
        />
        <img
          className="section3_item_bottom"
          src={section3_img_bottom}
          alt="라마인형들_뒷배경"
        />
        <div className="section3_item i001">
          <img src={section3_img_001} alt="Search Effect" />
          <div className="item_desc">
            <h2>FRONT</h2>

            <div>
              <p>React</p>
              <p>
                React의 구조를 이해하고 있으며, 여러가지 Hook을 사용할 수
                있습니다.
              </p>
            </div>
            <div>
              <p>ReduxToolKit</p>
              <p>
                기록이 남아 에러가 발생한경우 찾기 수월하였으며, 상태관리를
                한곳에 관리하는데 유용하게 사용하였습니다.
              </p>
            </div>
            <div>
              <p>Zustand</p>
              <p>
                리덕스를 사용하기위해 provider 등등의 세팅 하는 과정들을
                축소시켜 빠른 작업이 가능하였고 상태를 정의하고 사용하는 방법이
                단순해 사용하게 되었습니다!
              </p>
            </div>
            <div>
              <p>Vue</p>
              <p></p>
            </div>

            {/* <div>
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/searchEffect01.html">
                code
              </a>
              <a href="http://vvv0032.dothome.co.kr/javascript/effect/searchEffect01.html">
                view
              </a>
            </div> */}
          </div>
        </div>

        <div className="section3_item i002">
          <img src={section3_img_002} alt="Search Effect" />
          <div className="item_desc">
            <h2>BACK-END</h2>
            <p>
              quizScore 변수에 정답을 저장해서 맞은 갯수가 몇개인지 알려주고
              <br />
              틀린 문제는 그에 맞는 애니메이션이 나오게 해주었습니다.
            </p>
            <div>
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/quizEffect01.html">
                code
              </a>
              <a href="http://vvv0032.dothome.co.kr/javascript/effect/quizEffect01.html">
                view
              </a>
            </div>
          </div>
        </div>

        <div className="section3_item i003">
          <img src={section3_img_003} alt="Search Effect" />
          <div className="item_desc">
            <h2>LIBRARY</h2>
            <p>
              insertBefore/appendChild을 통해 각각 앞 뒤에 처음이미지와
              <br />
              마지막 이미지를 넣어주어 연속적으로 스크롤하는 효과를 줍니다.
            </p>
            <div>
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/sliderEffect.html">
                code
              </a>
              <a href="http://vvv0032.dothome.co.kr/javascript/effect/sliderEffect.html">
                view
              </a>
            </div>
          </div>
        </div>

        <div className="section3_item i004">
          <img src={section3_img_004} alt="Search Effect" />
          <div className="item_desc">
            <h2>TOOL</h2>
            <p>
              window.innerWidth를 통해 마우스가 위치한 좌표 값을 기준으로
              <br />
              이미지효과 및 마우스를 추적하는 효과를 구현하였습니다.
            </p>
            <div>
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/mouseEffect01.html">
                code
              </a>
              <a href="http://vvv0032.dothome.co.kr/javascript/effect/mouseEffect01.html">
                view
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: "none" }} className="section3_item i005">
          <img src={section3_img_005} alt="Search Effect" />
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
            <div>
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/parallaxEffect.html">
                code
              </a>
              <a href="http://vvv0032.dothome.co.kr/javascript/effect/parallaxEffect01.html">
                view
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: "none" }} className="section3_item i006">
          <img src={section3_img_006} alt="Search Effect" />
          <div className="item_desc">
            <h2>
              JS <br />
              PROJECT
            </h2>
            <p></p>
            <div>
              <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/gameEffect01.html">
                code
              </a>
              <a href="http://vvv0032.dothome.co.kr/javascript/effect/gameEffect01.html">
                view
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Section_03;
