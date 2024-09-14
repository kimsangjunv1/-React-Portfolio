import { useRef, useMemo, useEffect } from 'react';
import Animation from '../utils/animation';

import Background from "/images/sections/03/background.png";

const Section04 = ({ data }) => {
    const refContainer = useRef(null);
    const refBackground01 = useRef(null);
    const refBackground02 = useRef(null);

    const refs = useMemo(() => ({
        container: refContainer,
        background01: refBackground01,
        background02: refBackground02
    }), []);


    useEffect(() => {
        Animation.section04(refs)
    }, [refs]);
  return (
    <article id="skill" ref={refs.container}>
        <section className="item title">
            이런 기술들을 사용해봤어요
        </section>
        {data.map((element, index) =>
            <section className={`item contents target-${index + 1}`} key={index}>
                <div className="item-inner pinned">
                    <h2>{element.title}</h2>
                    {element.desc.map((e, i) =>
                        <div key={i}>
                            <h4>{e.name}</h4>
                            <p>
                                {e.description}
                            </p>
                        </div>
                    )}
                </div>
            </section>
        )}
        <div className="background">
            <img src={Background} ref={refs.background01} alt="라마인형들" loading="lazy" />
            <img src={Background} ref={refs.background02} alt="라마인형들_뒷배경" loading="lazy" />
        </div>
    </article>
  )
}

export default Section04