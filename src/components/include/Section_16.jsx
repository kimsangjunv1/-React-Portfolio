import React from "react";

import section16_sns_01 from "./../../assets/img/section16_sns_01.svg";
import section16_sns_02 from "./../../assets/img/section16_sns_02.svg";
import section16_sns_03 from "./../../assets/img/section16_sns_03.svg";

const Section_16 = () => {
  return (
    // <!-- section16 -->
    <section style={{ background: "#f6f6fb" }} className="section vr8">
      <div className="section16_item_cont">
        <div className="contact_cont">
          <h2>CONTACT_ME</h2>
          <p>새싹을 틔울 수 있는 씨앗이 되겠습니다.</p>
          <p>to_before@naver.com</p>
          <p>010-6607-72765</p>
          <div className="sns_cont">
            <a href="https://github.com/kimsangjunv1">
              <img src={section16_sns_01} alt="깃허브" />
              GITHUB
            </a>
            <a href="https://blog.naver.com/to_before">
              <img src={section16_sns_02} alt="네이버" />
              NAVER BLOG
            </a>
            <a href="https://kimsangjun.tistory.com/">
              <img src={section16_sns_03} alt="티스토리" />
              TISTORY
            </a>
          </div>
        </div>
        <img
          className="section16_lama"
          src="src/assets/img/section16_lama.svg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Section_16;
