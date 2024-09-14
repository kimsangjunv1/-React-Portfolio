import  { useEffect, useMemo, useState, useRef } from "react";
import Animation from "../utils/animation";
import WaveComponents from "../common/WaveComponents";

const Section05 = ({ data }) => {
    const refCharacter01 = useRef(null);

    const refs = useMemo(() => ({
        character: {
            character01: refCharacter01
        }
    }), []);

    useEffect(() => {
        Animation.section05(refs);
    }, []);
    return (
        <article id="education">
            <div className="container-inner">
                <section className="title">
                    <h2 className="">개인 공부</h2>
                    <div className="desc">
                        <p>
                            개인적으로 공부한 내용들을 티스토리에 정리하였습니다<br />
                            각각의 본문은 '보기'를 클릭하시면 이동됩니다!
                        </p>
                        {/* <div className="actions">
                            <button>CODE</button>
                            <button>VIEW</button>
                        </div> */}
                    </div>
                </section>

                <section className="deco">
                    <WaveComponents color={"#ededf4"}/>
                </section>

                <section className="contents">
                    {data.map((e, i) => 
                        <div className="item" key={i}>
                            <div className="title">
                                <img src="/images/sections/05/img-thumbnail-01.png" alt="/" loading="lazy"/>
                            </div>
                            <div className="desc">
                                <div>
                                    <div className="import">
                                        {/* <img src="/images/common/img-logo-tistory.png" alt="/" loading="lazy"/> */}
                                        <p>tistory</p>
                                    </div>
                                    <h5>{e.title}</h5>
                                    <p>{e.desc}</p>
                                    <div>
                                        <a href={e.url} target="_blank">보기</a>
                                    </div>
                                </div>
                                <img src="/images/sections/05/img-desc-background.png" alt="/" loading="lazy"/>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </article>
    )
}

export default Section05