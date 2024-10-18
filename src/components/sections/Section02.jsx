import { useEffect, useRef, useMemo, Fragment } from "react";
import Animation from "../utils/animation";

const Section02 = ({ data, isMobile, type }) => {
    const refContainer = useRef(null);
    const refCard = useRef(null);

    const refs = useMemo(() => ({
        container: refContainer,
        card: refCard,
    }), []);

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