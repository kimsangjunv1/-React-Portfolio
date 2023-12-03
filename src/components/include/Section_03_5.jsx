import React from "react";

const Section_03_5 = () => {
  return (
    // <!-- 섹션 3.5 : 자바스크립트 이펙트와 게임 이펙트 사이 공간 -->
    <section className="section pin">
      <svg
        className="editorial editorial_03"
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
          <use xlinkHref="#gentle-wave" x="50" y="0" fill="#ededf4" />
          <use xlinkHref="#gentle-wave" x="50" y="3" fill="#ededf4d1" />
          <use xlinkHref="#gentle-wave" x="50" y="6" fill="#ededf4a3" />
        </g>
      </svg>

      <link
        href="https://fonts.googleapis.com/css?family=Lato:100"
        rel="stylesheet"
      />
    </section>
  );
};

export default Section_03_5;
