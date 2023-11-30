import React, { useEffect } from "react";

import imagesLoaded from "imagesloaded";
import $ from "jquery";
import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";

// import LoadingLogo from "./../../assets/img/landing_loading_logo.svg";
import lama_loading from "./../../assets/img/section_loading.svg";
import lama_loading_text from "./../../assets/img/section_loading_text.svg";

const Loading = () => {
  useEffect(() => {
    function imagesProgress() {
      var $container = $("#loading"),
        $containerInner = $("#loading_inner"),
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
          $containerInner.fadeOut("slow");
        }
      }
    }
    imagesProgress();
  });
  return (
    <motion.section
      initial={{ y: 0, translateY: "0%" }}
      //   animate={{ y: 0, translateY: "100%" }}
      exit={{ y: 0, translateY: "100%" }}
      transition={{ duration: 1.0, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      className="loading_container"
      id="loading"
    >
      <motion.div
        className="loading_container_inner"
        transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        // exit={{ y: -10, width: "0%" }}
        initial={{ y: 0, height: "0%" }}
        animate={{ y: 0, height: "100%" }}
        id="loading_inner"
      >
        <img src={lama_loading} alt="로딩 그림" />
        <img src={lama_loading_text} alt="로딩 텍스트" />
        <h2>loading</h2>
        <div className="progress-text">0%</div>
      </motion.div>
    </motion.section>
  );
};

export default Loading;
