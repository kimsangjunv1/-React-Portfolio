import React from "react";

import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";

// import LoadingLogo from "./../../assets/img/landing_loading_logo.svg";
import lama_loading from "./../../assets/img/section_loading.svg";
import lama_loading_text from "./../../assets/img/section_loading_text.svg";

const Loading = () => {
  return (
    <motion.div
      initial={{ y: 0, translateY: "0%" }}
      //   animate={{ y: 0, translateY: "100%" }}
      exit={{ y: 0, translateY: "100%" }}
      transition={{ duration: 1.0, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      className="loading_container"
    >
      <motion.div
        className="loading_container_inner"
        transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        // exit={{ y: -10, width: "0%" }}
        initial={{ y: 0, height: "0%" }}
        animate={{ y: 0, height: "100%" }}
      >
        <img src={lama_loading} alt="로딩 그림" />
        <img src={lama_loading_text} alt="로딩 텍스트" />
      </motion.div>
    </motion.div>
  );
};

export default Loading;
