import React, { useEffect } from "react";
import $ from "jquery";
import imagesLoaded from "imagesloaded";

import lama_loading from "./../../assets/img/section_loading.svg";
import lama_particle1 from "./../../assets/img/loading_particle_01.svg";
import lama_particle2 from "./../../assets/img/loading_particle_02.svg";
import lama_particle3 from "./../../assets/img/loading_particle_03.svg";
import lama_particle4 from "./../../assets/img/loading_particle_04.svg";
import lama_particle5 from "./../../assets/img/loading_particle_05.svg";

const ImgLoader = () => {
  useEffect(() => {
    function imagesProgress() {
      var $container = $("#progress"),
        $progressText = $container.find(".progress-text"),
        imgLoad = imagesLoaded("body"),
        imgTotal = imgLoad.images.length,
        imgLoaded = 0,
        current = 0,
        progressTimer = setInterval(updateProgress, 2000 / 60);

      imgLoad.on("progress", function () {
        imgLoaded++;
      });

      function updateProgress() {
        var target = (imgLoaded / imgTotal) * 100;

        current += (target - current) * 0.1;
        $progressText.text(Math.floor(current) + "%");

        if (current >= 100) {
          clearInterval(progressTimer);
        }
        if (current > 99.9) {
          current = 100;
          $container.fadeOut("slow");
        }
      }
    }
    let rotate_que = Math.floor(Math.random() * 101);
    let size_que = Math.floor(Math.random() * 5) + 1;
    // const allList = document.querySelectorAll(".cover-thumbnail-3 ul li");

    document.querySelector("#progress").addEventListener("mousemove", (e) => {
      //마우스 좌표 값
      let mousePageX = e.pageX;
      let mousePageY = e.pageY;

      // 전체 가로
      let centerPageX = window.innerWidth / 2 - mousePageX;
      let centerPageY = window.innerHeight / 2 - mousePageY;

      //이미지 움직이기
      // for(let i=1; i<=6; i++){
      for (let q = 1; q <= 4; q++) {
        const imgMove = document.querySelector(
          ".icon_cont>img:nth-child(" + q + ")"
        );
        imgMove.style.transform =
          "translate(" +
          -centerPageX / (q * 5) +
          "px, " +
          -centerPageY / (q * 5) +
          "px) rotate(" +
          rotate_que * (q * 5) +
          "deg)";
      }
      // }

      //이미지 크기 조정
      // for(let i=1; i<=6; i++){
      for (let q = 1; q <= 5; q++) {
        for (let size_rand = 1; size_rand <= 2; size_rand++) {
          const imgMove = document.querySelector(
            ".icon_cont>img:nth-child(" + q + ")"
          );
          imgMove.style.transform =
            "translate(" +
            -centerPageX / (q * 5) +
            "px, " +
            -centerPageY / (q * 5) +
            "px) rotate(" +
            rotate_que * (q * 5) +
            "deg) scale(" +
            size_rand * size_que * 0.1 +
            ")";
        }
      }
      // }
    });
    imagesProgress();
  });

  return (
    <div id="progress">
      <div className="icon_cont">
        <img className="lama_icon_01" src={lama_particle1} alt="" />
        <img className="lama_icon_02" src={lama_particle2} alt="" />
        <img className="lama_icon_03" src={lama_particle3} alt="" />
        <img className="lama_icon_04" src={lama_particle4} alt="" />
        <img className="lama_icon_05" src={lama_particle5} alt="" />
      </div>
      <img className="lama_loading" src={lama_loading} alt="" />
      <h2>loading</h2>
      <div className="progress-text">0%</div>
    </div>
  );
};

export default ImgLoader;
