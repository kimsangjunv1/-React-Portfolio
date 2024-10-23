import { useRef, useMemo, useEffect, useState } from "react";
import MarqueeComponents from "@/components/common/MarqueeComponents";

import Animation from "../utils/animation";

const Header = ({ isMobile }) => {
    const [isVisible, setIsVisible] = useState(false);
    const refMarquee = useRef(null);

    const refs = useMemo(() => ({
        marquee: refMarquee
    }), []);

    useEffect(() => {
        Animation.layout.header(refs);
    }, [refs]);

    useEffect(() => {
        isVisible && setIsVisible(!isVisible);
    }, [isMobile])

    return (
        <header id="header">
            <div className="header-inner">
                {/* 로고 */}
                <section className="logo">
                    <a href="#intro">
                        <h1>프론트-엔드</h1>
                        <img src="/images/common/img-header-logo.svg" alt="/" />
                        <h1 className="target">김상준</h1>
                    </a>
                </section>
                {/* 로고 END */}

                {/* 메뉴 */}
                { isMobile && <button type="button" onClick={() => setIsVisible(!isVisible)}>=</button> }
                <section className={`menu ${isVisible ? "show" : ""}`}>
                    <a href="#about">인터뷰</a>
                    <a href="#career">이력</a>
                    <a href="#skill">기술</a>
                    <a href="#education">개인공부</a>
                    <a href="#projects">프로젝트</a>
                </section>
                {/* 메뉴 END */}
            </div>
            <MarqueeComponents target={refMarquee} title={"THIS PAGE MADE BY REACT | GSAP | SCSS, TAKE A LOOK AROUND"} />
        </header>
    );
};

export default Header;