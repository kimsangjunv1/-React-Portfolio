import { useEffect, useRef, useMemo, Fragment } from "react";
import Animation from "../utils/animation";

const Section03 = ({ data }) => {
    const refContainer = useRef(null);

    const refs = useMemo(() => ({
        container: refContainer
    }), []);

    useEffect(() => {
        Animation.section041(refs);
    }, [refs]);

    return (
        <article id="career" ref={refs.container}>
            <div className="container-inner">
                <section className="contents">
                    {data.map((element, index) =>
                        <div className="item" key={index}>
                            <section>
                                <div>
                                    <h5>{ element.title }</h5>
                                </div>
                            </section>

                            <section>
                                {element.desc.map((e, i) =>
                                    <div key={i}>
                                        <h5>{ e.name }</h5>
                                        <p>{ e.description }</p>

                                        <ul className="tags">
                                            {e.tags.map((e, i) => 
                                                <li className={`${i == 0 && "focus-2"}`} key={i}>{e}</li>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </section>
                        </div>
                    )}
                </section>

            </div>
        </article>
    )
}

export default Section03