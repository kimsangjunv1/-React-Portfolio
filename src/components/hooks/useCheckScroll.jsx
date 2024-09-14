import { useState, useEffect } from "react";

function useCheckScroll(initialValue) {
    const [isShow, setIsShow] = useState(true);
    let lastScroll = 0; // lastScroll 변수 선언 및 초기화

    useEffect(() => {
        // 상단 값 체크 함수
        const checkTop = () => {
            let scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
            let startHeight = initialValue; // 초기값을 사용

            if (startHeight >= scrollTop) {
                // 안닿았을 때
                setIsShow(true);
            } else {
                // 닿았을 때
                setIsShow(false);
                lastScroll = scrollTop;
            }
        };

        window.addEventListener("scroll", checkTop);

        return () => {
            window.removeEventListener("scroll", checkTop);
        };
    }, [initialValue]); // initialValue를 의존성 배열에 추가

    return isShow;
}

export default useCheckScroll;
