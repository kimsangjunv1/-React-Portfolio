import React from "react";

import section5p5_lama_fur2 from "./../../assets/img/section5p5_lama_fur2.svg";

const Section_05_5 = () => {
  return (
    // <!-- 섹션 5.5 : 게임 이펙트와 도큐먼트 사이의 과정 -->
    <section className="section custom_color pin2">
      <img className="lama_fur2" src={section5p5_lama_fur2} alt="" />
      <svg
        className="editorial"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
      58-18 88-18s
      58 18 88 18 
      58-18 88-18 
      58 18 88 18
      v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="50" y="0" fill="#15152d" />
          <use xlinkHref="#gentle-wave" x="50" y="3" fill="#15152dcf" />
          <use xlinkHref="#gentle-wave" x="50" y="6" fill="#15152dad" />
        </g>
      </svg>

      <link
        href="https://fonts.googleapis.com/css?family=Lato:100"
        rel="stylesheet"
      />
    </section>
  );
};

export default Section_05_5;
