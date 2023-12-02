import React from "react";

import section2_profile from "./../../assets/img/section2_profile.png";
import section2_lama from "./../../assets/img/section2_lama.svg";

const Section_02 = () => {
  return (
    // 섹션 2 : 김상준 소개
    <section id="information" className="section flex_ctrl">
      <div className="section2_cont">
        <div className="section2_desc">
          {/* <h2 className="fifth_name n1">SANGJUN</h2>
          <h2 className="fifth_name n2">SANGJUN</h2>
          <h2 className="fifth_name n3">SANGJUN</h2>
          <h2 className="first_name n4">KIM</h2>
          <p className="porfolio_desc n5">
            새싹을 틔울 수 있는 씨앗이 되겠습니다.
          </p>
          <h2 className="second_name n6">SANGJUN</h2>
          <h2 className="fifth_name n7">SANGJUN</h2> */}
          <h2 className="title">
            {/* BE <i>DRAWABLE</i> */}
            즐기면 더 잘한다는 마음으로
            <br />
            작업하고 있어요!
          </h2>
          <p className="desc">
            디자인을 하고싶었으나 어디서부터 어떻게 풀어갈지 고민에 빠져있다
            <br />
            유튜브에서 김종민이라는 유튜버가 웹페이지로 상상하던것을
            그려가는것을 본 뒤
            <br />
            <i>제가 원하는 디자인의 웹페이지를 만들고 싶다는 집념</i>으로
            <br />
            우연히 접하게 된 개발공부에 시간 가는줄 모르는 매력을 느껴 개발자의
            길을 걷게되었습니다.
            <br />
            <br />
            지금에 안주하지않고 끝없이 발전하려고 합니다.
            <br />
            <i>
              {/* {pageType === "publisher" ? "퍼블리셔" : "프론트엔드"}에서부터 */}
              시작해 풀스택
            </i>
            까지 달려나가고싶습니다.
            <br />
            <br />
            <li>문제에서 기회를 포착하고, 해결을 통한 성취감을 좋아합니다.</li>
            <li>
              React 등 프레임워크 환경에서 컴포넌트 단위의 마크업 작업을
              능숙하게 할 수 있어요.
            </li>
          </p>
        </div>
        <div className="section2_profile_cont">
          <img
            className="section2_profile ir"
            src={section2_profile}
            alt="김상준 프로필 이미지"
          />
        </div>
      </div>
      <img
        src={section2_lama}
        alt="오른쪽에서 나오는 라마 그림"
        className="lama"
      />
    </section>
  );
};

export default Section_02;
