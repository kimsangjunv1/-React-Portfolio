import { useEffect, useState } from "react";

// - 컴포넌트 작동방식 설명 -
// stickyElement는 DOM에서 위치가 항상 고정되어있으며, section들은 스크롤 할때마다 위치가 바뀌기 때문에
// stickyElement와 section들 중 하나가 이와 가까워 진다면 그 section의 id 값을 알아내 currentOverlap에 저장 후
// currentOverlap에 저장된 id 값과 menuItem에 해당하는 id 값 하고 같은 경우 해당하는 곳의 name,desc를 표시함

const TitleComponents = () => {
    const [currentOverlap, setCurrentOverlap] = useState(""); // 현재 겹친곳의 id값

    // 겹칠때마다 배정된 currentOverlap에 맞춰 보여줄 내용 리스트
    const menuItem = [
        {
            name: "INTERVIEW",
            className: "intro",
        },
        {
            name: "창의적인 인재를 찾아요",
            className: "mind",
        },
        {
            name: "INTERVIEW",
            className: "about-me",
        },
        {
            name: "skill & tools",
            className: "skill-and-tools",
        },
        {
            name: "journey",
            className: "journey",
        },
        {
            name: "career",
            className: "career",
        },
        {
            name: "horizontal",
            className: "horizontal",
        }
    ];

    // 각 섹션별로 닿게 되면 기존에 그려져 있던 제목에서 각각 active가 활성화 되게 하여 보여주기
    useEffect(() => {
        const stickyElement = document.querySelector(".title");
        const sectionElements = document.querySelectorAll(".section");

        // 각 대상이 위치한 최대값
        const getOverlapArea = (rect1, rect2) => {
            const x_overlap = Math.max(
                0,
                Math.min(rect1.right, rect2.right) -
                    Math.max(rect1.left, rect2.left)
            );
            const y_overlap = Math.max(
                0,
                Math.min(rect1.bottom, rect2.bottom) -
                    Math.max(rect1.top, rect2.top)
            );

            return x_overlap * y_overlap;
        };

        // 각 요소가 겹치는지 확인
        const checkOverlap = () => {
            const stickyRect = stickyElement.getBoundingClientRect(); // .title의 DOM 정보

            let maxOverlap = 0; // 이전 겹침값
            let maxOverlapElement = null; // 이전에 겹친 섹션

            // stickyRect가 위치한 곳을 기반으로 섹션들을 순회하여 비교 후 보여줄 값을 저장
            sectionElements.forEach((el) => {
                const elRect = el.getBoundingClientRect(); // 섹션별 위치값 저장
                const overlap = getOverlapArea(stickyRect, elRect); // 고정된 값과 각 섹션별 서로 위치한 값을 곱한 값을 저장

                // 겹침 정도가 (고정*섹션별)위치값보다 작다면
                if (overlap > maxOverlap) {
                    maxOverlap = overlap; // 겹친 값을 이전 겹침값에 저장
                    maxOverlapElement = el; // 이전 겹친 섹션 저장
                }
            });

            // maxOverlapElement이 존재한다면 setCurrentOverlap에 id값 저장
            if (maxOverlapElement) {
                setCurrentOverlap(maxOverlapElement.className.replace("section ",""));
            } else {
                setCurrentOverlap("hello");
            }
        };

        window.addEventListener("scroll", checkOverlap);
        window.addEventListener("resize", checkOverlap);

        // 메모리 누수 방지용으로 언마운트 이후에도 작동하지 못하도록 이벤트 리스너 제거
        return () => {
            window.removeEventListener("scroll", checkOverlap);
            window.removeEventListener("resize", checkOverlap);
        };
    }, []);

    return (
        <article className="title">
            {menuItem.map((item, key) => {
                return (
                    <section key={key}>
                        {/* 제목 */}
                        {currentOverlap === item.className &&
                            [...item.name].map((item, key) =>
                                <h2 key={key} className={item == " " && "space"}>{item}</h2>                            
                            )
                        }
                        {/* 제목 END */}
                    </section>
                );
            })}
        </article>
    );
};

export default TitleComponents;
