import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const gsaps = () => {
  //   가로 스크롤 모음
  gsap.registerPlugin(ScrollTrigger);

  // JS 이펙트 설명
  let sections = gsap.utils.toArray(".section3_item");
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal",
      // markers: true,
      pin: true,
      scrub: true,
      end: "+=5000",
    },
  });

  // 게임 이펙트
  // let sections2 = gsap.utils.toArray(".panel2");
  // gsap.to(sections2, {
  //   xPercent: -100 * (sections2.length - 1),
  //   ease: "none",
  //   // duration: 122.5,
  //   scrollTrigger: {
  //     trigger: ".horizontal2",
  //     // markers: true,
  //     pin: true,
  //     scrub: 1,
  //     end: "+=11000",
  //   },
  // });

  // 상단바 : 색상 바꾸기
  ScrollTrigger.create({
    // 어디에 닿으면 반응할건지
    trigger: ".editorial_03",
    scrub: 1,
    // 어디다가 적용할건지
    animation: gsap.to(
      "#header, #header .header_inner a, .porfolio_desc_fixed p",

      {
        color: "#000",
        background: "linear-gradient(180deg, #ededf4, #ededf400)",
      }
    ),
  });
  ScrollTrigger.create({
    // 어디에 닿으면 반응할건지
    trigger: ".editorial_03",
    scrub: 1,
    // 어디다가 적용할건지
    animation: gsap.fromTo(
      ".cursor div div",
      {
        borderColor: "white",
        // background: "linear-gradient(180deg, #000000, #00000000)",
      },
      {
        borderColor: "black",
        // background: "linear-gradient(180deg, #ededf4, #ededf400)",
      }
    ),
  });
  ScrollTrigger.create({
    // 어디에 닿으면 반응할건지
    trigger: ".editorial_03",
    scrub: 1,
    // 어디다가 적용할건지
    animation: gsap.fromTo(
      ".scroll_background",
      {
        background: "white",
      },
      {
        background: "black",
      }
    ),
  });

  ScrollTrigger.create({
    // 어디에 닿으면 반응할건지
    trigger: ".editorial_04",
    scrub: 1,
    // 어디다가 적용할건지
    animation: gsap.to(
      "#header, #header .header_inner a, .porfolio_desc_fixed p",
      {
        color: "#fff",
        background: "linear-gradient(180deg, #000000, #00000000)",
      }
    ),
  });
  ScrollTrigger.create({
    // 어디에 닿으면 반응할건지
    trigger: ".editorial_04",
    scrub: 1,
    // 어디다가 적용할건지
    animation: gsap.fromTo(
      ".scroll_background",
      {
        background: "black",
      },
      {
        background: "white",
      }
    ),
  });
  ScrollTrigger.create({
    // 어디에 닿으면 반응할건지
    trigger: ".editorial_04",
    scrub: 1,
    // 어디다가 적용할건지
    animation: gsap.fromTo(
      ".point2",

      {
        borderColor: "black",
        // background: "linear-gradient(180deg, #ededf4, #ededf400)",
      },
      {
        borderColor: "white",
        // background: "linear-gradient(180deg, #000000, #00000000)",
      }
    ),
  });
};

export default gsaps;
