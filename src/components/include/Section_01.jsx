import React from "react";

import main_lama from "./../../assets/img/main_lama.svg";
import main_dust_char_01 from "./../../assets/img/main_dust_char_01.svg";
import main_dust_char_02 from "./../../assets/img/main_dust_char_02.svg";
import main_dust_01 from "./../../assets/img/main_dust_01.png";
import main_dust_02 from "./../../assets/img/main_dust_02.svg";
import main_dust_03 from "./../../assets/img/main_dust_03.png";
import main_dust_05 from "./../../assets/img/main_dust_05.svg";
import main_lama_back_00 from "./../../assets/img/main_lama_back_00.png";
import main_lama_back_01 from "./../../assets/img/main_lama_back_01.svg";
import main_lama_back_02 from "./../../assets/img/main_lama_back_02.svg";

const Section_01 = () => {
  return (
    // 섹션 1 : 메인
    <section id="intro" className="section lama_ctrl">
      <div className="section1_desc">
        <h2>
          PORT
          <br />
          <em>FOLIO</em>
        </h2>
      </div>

      <div className="section1_img">
        <img className="ir dust_01" src={main_lama} alt="라마" />
        <img
          className="ir dust_02"
          src={main_dust_char_01}
          alt="먼지 캐릭터 1"
        />
        <img
          data-depth="-60"
          className="ir dust_03"
          src={main_dust_char_02}
          alt="먼지 캐릭터 2"
        />
        <img className="ir dust_09" src={main_dust_01} alt="먼지 1" />
        <img className="ir dust_10" src={main_dust_02} alt="먼지 2" />
        <img className="ir dust_11" src={main_dust_03} alt="먼지 3" />
        <img
          className="ir dust_04"
          src={main_lama_back_02}
          alt="메인 뒷배경 1"
        />
        <img
          className="ir dust_05"
          src={main_lama_back_01}
          alt="메인 뒷배경 2"
        />
        <img
          className="ir dust_06"
          src={main_lama_back_00}
          alt="메인 뒷배경 3"
        />
        <img className="ir dust_07" src={main_dust_05} alt="먼지 4" />
        <img className="ir dust_08" src={main_dust_05} alt="먼지 5" />
      </div>
    </section>
  );
};

export default Section_01;
