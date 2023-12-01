import React from "react";
import { Link } from "react-router-dom";

import section16_sns_01 from "./../../assets/img/section16_sns_01.svg";
import section16_sns_02 from "./../../assets/img/section16_sns_02.svg";
import section16_sns_03 from "./../../assets/img/section16_sns_03.svg";
import section16_lama from "./../../assets/img/section16_lama.svg";

const Section_16 = () => {
  return (
    // <!-- section16 -->
    // <section style={{ background: "#f6f6fb" }} className="section vr8">
    <section className="section vr8">
      <div className="section16_item_cont">
        <div className="contact_cont">
          <h2>연락해주세요 :)</h2>
          <div className="info_container">
            <p>
              <a href="mailto:to_before@naver.com">메일</a>
            </p>
            <p>
              <Link to="https://github.com/kimsangjunv1">깃허브</Link>
            </p>
            <p>010-6607-7265</p>
          </div>
          {/* <p>010-6607-72765</p> */}
          {/* <div className="sns_cont">
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
          </div> */}
        </div>
        <img className="section16_lama" src={section16_lama} alt="" />
      </div>
    </section>
  );
};

export default Section_16;
