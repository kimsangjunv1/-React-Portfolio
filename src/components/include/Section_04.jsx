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
          <div className="level_cont">
            <p>!</p>
            <p>
              공부할때 childNodes와 같은 노드 선택을 활용한 점이 어려웠습니다.
            </p>
          </div>
          <div className="section4_item">
            <div className="section4_left"></div>
            <div className="section4_right">
              <h2>01.</h2>
              <div className="section4_item_desc">
                <h4>TETRIS</h4>
                <p>
                  blocks라는 변수에 각 블럭 좌표값을 저장 후 입력받은 키값으로
                  나오는 블럭의 위치를 조정시켜 맞춰나가는 테트리스 게임입니다
                  난이도 조절을 위해 시간이 지나면 속도가 빨라지게
                  설정해두었습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section4_rev_icon_layout">
          <div className="level_cont">
            <p>!</p>
            <p>
              공부할때 childNodes와 같은 노드 선택을 활용한 점이 어려웠습니다.
            </p>
          </div>
          <div className="section4_rev_item two">
            <div className="section4_rev_left">
              <h2>02.</h2>
              <div className="section4_rev_item_desc">
                <h4>TABOO</h4>
                <p>
                  처음 선택한 카드의 값과 두번째로 선택한 카드의 값의 비교
                  결과에 따라 맞다면 카드를 뒤집은 상태에 유지시킬지 말지 결정해
                  즐기는 카드 게임입니다 시간 및 점수를 통해 무한으로 게임을
                  즐길 수 없도록 하였습니다.
                </p>
              </div>
            </div>
            <div className="section4_rev_right"></div>
          </div>
        </div>
        <div className="section4_icon_layout three">
          <div className="level_cont">
            <p>!</p>
            <p>
              setTimeout을 통해 한정된 시간을 정해두고 해당 시간이 지나면 종료를
              시켜야 했었는데 해당 부분이 어려웠습니다.
            </p>
          </div>
          <div className="section4_item">
            <div className="section4_left"></div>
            <div className="section4_right">
              <h2>03.</h2>

              <div className="section4_item_desc">
                <h4>CSS MATCHING</h4>

                <p>
                  기존에 저장해두었던 CSS 속성 데이터들을 cssProperty라는 배열
                  속 객체로 저장 후 사용자가 입력한 값을 input 변수에 받아 if를
                  통해 값이 맞다면 점수를 올려주는 스크립트를 작동시키고 아닐시
                  아무런 반응이 없게 스크립트를 구성한 CSS 속성 맞추기
                  게임입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section4_rev_icon_layout">
          <div className="level_cont">
            <p>!</p>
            <p>
              data-index, data-duration 등 data 값을 다양하게 활용했던점이 가장
              어려웠었습니다.
            </p>
          </div>
          <div className="section4_rev_item two">
            <div className="section4_rev_left">
              <h2>04.</h2>
              <div className="section4_rev_item_desc">
                <h4>MUSIC PLAYER</h4>
                <p>
                  allMusic이라는 배열 속 객체에 저장해둔 각각의 음악에 대한
                  정보들을 저장해두고 음악리스트와, 파일을 찾을때 활용해
                  뮤직플레이어를 구성하였습니다. 음악 재생시 소리를 조절 할 수
                  있도록 왼쪽 상단의 음량버튼을 누르면 조절창이 나오도록
                  하였습니다.
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
