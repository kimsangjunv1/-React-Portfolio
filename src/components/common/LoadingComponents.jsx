import { useEffect } from "react";
import { motion } from "framer-motion";

const LoadingComponents = ({ count }) => {
    // 로딩 중 스크롤 방지
    useEffect(() => {
        const body = document.querySelector("body");
        const html = document.querySelector("html");
    
        body.classList.add("no-scroll");
        html.classList.add("no-scroll");
    
        if (count >= 98) {
            const timeout = setTimeout(() => {
                body.classList.remove("no-scroll");
                html.classList.remove("no-scroll");
            }, 100);
    
            return () => clearTimeout(timeout);
        }
    }, [count]);
    return (
        <motion.article
            id="loading"

            initial={{ y: 0, translateY: "0%" }}
            animate={{ background: "transparent" }}
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
                className="info"
                exit={{ opacity: 0 }}
            >
                <h2>로딩중...</h2>
                <p>{count}</p>
            </motion.div>
        </motion.article>
    );
};

export default LoadingComponents;
