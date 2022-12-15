import React from "react";

import section4_lama from "./../../assets/img/section4_lama.svg";

const Section_04 = () => {
  return (
    // <!-- 섹션 4 : 게임 이펙트 -->
    <section id="game" className="section point custom_color">
      <div className="section4_fixed">
        <h2 className="title">
          GAME <em>EFFECT</em>
        </h2>
        <div className="desc_cont">
          <p className="desc">
            자바스크립트와 각종 음원들을 통하여
            <br />
            게임 이펙트에 다양한 게임들을 담았습니다
            <br />총 4가지의 게임으로 준비해보았습니다.
          </p>
          <div className="section4_button_cont">
            <a href="https://github.com/kimsangjunv1/codingclass/blob/main/javascript/effect/gameEffect01.html">
              code
            </a>
            <a href="http://vvv0032.dothome.co.kr/javascript/effect/gameEffect01.html">
              view
            </a>
          </div>
        </div>
      </div>

      <div className="section4_cont">
        <div className="section4_icon_layout one">
          <div className="section4_item">
            <div className="section4_left"></div>
            <div className="section4_right">
              <h2>01.</h2>
              <div className="section4_item_desc">
                <h4>TETRIS</h4>
                <p>
                  어떤 일이라도노력하고 즐기면 그 결과는 빛을 바란다고
                  생각합니다. 신입의 열정과 도전정신을 깊숙히 새기며 배움에 있어
                  겸손함을 유지하며 세부적인 곳까 파고드는 개발자가 되겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section4_rev_icon_layout">
          <div className="section4_rev_item two">
            <div className="section4_rev_left">
              <h2>02.</h2>
              <div className="section4_rev_item_desc">
                <h4>TABOO</h4>
                <p>
                  어떤 일이라도노력하고 즐기면 그 결과는 빛을 바란다고
                  생각합니다. 신입의 열정과 도전정신을 깊숙히 새기며 배움에 있어
                  겸손함을 유지하며 세부적인 곳까 파고드는 개발자가 되겠습니다.
                </p>
              </div>
            </div>
            <div className="section4_rev_right"></div>
          </div>
        </div>
        <div className="section4_icon_layout three">
          <div className="section4_item">
            <div className="section4_left"></div>
            <div className="section4_right">
              <h2>03.</h2>
              <div className="section4_item_desc">
                <h4>CSS MATCHING</h4>
                <p>
                  어떤 일이라도노력하고 즐기면 그 결과는 빛을 바란다고
                  생각합니다. 신입의 열정과 도전정신을 깊숙히 새기며 배움에 있어
                  겸손함을 유지하며 세부적인 곳까 파고드는 개발자가 되겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section4_rev_icon_layout">
          <div className="section4_rev_item two">
            <div className="section4_rev_left">
              <h2>04.</h2>
              <div className="section4_rev_item_desc">
                <h4>MUSIC PLAYER</h4>
                <p>
                  어떤 일이라도노력하고 즐기면 그 결과는 빛을 바란다고
                  생각합니다. 신입의 열정과 도전정신을 깊숙히 새기며 배움에 있어
                  겸손함을 유지하며 세부적인 곳까 파고드는 개발자가 되겠습니다.
                </p>
              </div>
            </div>
            <div className="section4_rev_right"></div>
          </div>
        </div>
      </div>
      <img className="ir lamas" src={section4_lama} alt="" />
    </section>
  );
};

export default Section_04;
