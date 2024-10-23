import { useEffect } from "react";
import { motion } from "framer-motion";

const NavigationComponents = ({ func }) => {
    useEffect(() => {
        const menuItems = document.querySelectorAll("a");

        menuItems.forEach((e, i) => {
            e.addEventListener("click", () => {
                func();
            })
        })
    }, [])
    return (
        <motion.article
            id="loading"

            initial={{ y: 0 }}
            animate={{ background: "#00000000" }}
            transition={{ duration: 2.0, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
            {Array(5).fill(0).map((e, key) =>
                <motion.div
                    key={key}
                    className="container-inner"

                    exit={{ y: 0, translateY: "100%" }}
                    initial={{ y: 0, height: "0%" }}
                    animate={{ y: 0, height: "100%" }}
                    transition={{ duration: 0.8, delay: 0.03 * key, ease: [0, 0.71, 0.2, 1.01] }}
                    
                />
            )}

            <motion.div
                className="list"
                exit={{ opacity: 0 }}
            >
                <button type="button" onClick={() => func()}>닫기</button>
                <a href="#about">인터뷰</a>
                <a href="#career">이력</a>
                <a href="#skill">기술</a>
                <a href="#education">개인공부</a>
                <a href="#projects">프로젝트</a>
            </motion.div>
        </motion.article>
    );
};

export default NavigationComponents;
