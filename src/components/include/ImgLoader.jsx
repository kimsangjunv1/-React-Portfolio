import React, { useEffect } from "react";
import $ from "jquery";
import imagesLoaded from "imagesloaded";

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
    imagesProgress();
  });

  return (
    <div id="progress">
      <h2>loading</h2>
      <div className="progress-text">0%</div>
    </div>
  );
};

export default ImgLoader;
