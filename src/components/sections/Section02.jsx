import { useEffect, useRef, useMemo, Fragment } from "react";
import Animation from "../utils/animation";

const Section02 = ({ data, isMobile }) => {
    const refContainer = useRef(null);
    const refCard = useRef(null);

    const refs = useMemo(() => ({
        container: refContainer,
        card: refCard,
    }), []);
    
    useEffect(() => {
        console.log("감지",isMobile)
    }, [isMobile])

    useEffect(() => {
        Animation.section03(refs);
    }, [refs]);

    return (
        <article id="about" ref={refs.container}>
            <div className="container-inner">
                <section>
                    {data.map((e, i) =>
                        <Fragment key={i}>
                            <div className={`item content-${i}`} ref={refCard}>
                                <h5>Q. {e.title}</h5>
                            </div>
                            <div className={`item content-${i}`} ref={refCard}>
                                <p>
                                    {e.desc}
                                    {/* 웹 디자이너로 활동하며 <strong>사용자 중심 디자인, 협업, 프론트엔드 기초 지식</strong>을 쌓았습니다.<br /><br />
                                    사용자와의 소통에 대해 중요성을 인지하고,<br />
                                    더 밀접하게 상호작용 가능한 프로젝트를 개발하고자<br />
                                    프론트엔드 개발자로 전향을 결심하게 되었습니다.<br /><br />
                                    React, Styled Components, Redux Toolkit 등 다양한 프레임워크와 라이브러리를 도입해<br />
                                    발전할 수 있는 새로운 도전에 나서고 있습니다. */}
                                </p>
                            </div>
                        </Fragment>
                    )}
                </section>
                
                <section>
                    <div>
                        <img src="/images/sections/03/img-my-photo-01.png" alt="김상준 이미지" loading="lazy" />
                    </div>
                </section>
            </div>
        </article>
    )
}

export default Section02