import  { useEffect, useRef, useMemo, useState } from "react";

const ProgressComponents = () => {
    const [ scrollValue, setScrollValue ] = useState(0);

    const refContainer = useRef(null);
    const refProgressBackground = useRef(null);
    const refProgressBar = useRef(null);
    const refMarquee = useRef(null);

    const refs = useMemo(() => ({
        marquee: refMarquee,
        container: refContainer,
        progress: {
            bar: refProgressBar,
            background: refProgressBackground,
        }
    }), []);

    // 스크롤 값 계산
    const calcScrollValue = () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollValue((winScroll / height) * 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", calcScrollValue);

        return () => {
            window.removeEventListener("scroll", calcScrollValue);
        };
    }, []);

    useEffect(() => {
        refs.progress.bar.current.style.height = scrollValue + "%";
    }, [scrollValue])

    return (
        <article id="progress" ref={refs.container}>
            <p>Portfolio</p>

            <div className="scroll_background" ref={refs.progress.background}>
                <div className="scroll_progress" ref={refs.progress.bar}></div>
            </div>

            <p>2024.09.09</p>
        </article>
    );
};

export default ProgressComponents;
