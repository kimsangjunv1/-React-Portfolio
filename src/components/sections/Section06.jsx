import  { useEffect, useLayoutEffect } from "react";
import Animation from "../utils/animation";
import WaveComponents from "../common/WaveComponents";

import { Swiper, SwiperSlide } from 'swiper/react';


const Section06 = ({ data }) => {
    // const refCharacter01 = useRef(null);

    // const refs = useMemo(() => ({
    //     character: {
    //         character01: refCharacter01
    //     }
    // }), []);

    useEffect(() => {
        Animation.section06();
    }, []);
  return (
    <article id="projects">
        {/* 타이틀 */}
        <section className="item title">
            <WaveComponents color={"#eeedf5"} className={"wave-1"}/>
            <div className="container-inner">
                <section className="desc">
                    프로젝트
                </section>
                <section className="bg">
                    <img src="/images/sections/05/img-deco-02.png" alt="/" className="deco" />
                    <img src="/images/sections/05/img-deco-01.png" alt="/" className="deco" />
                    <img src="/images/sections/05/img-deco-03.png" alt="/" className="deco" />
                </section>
                <WaveComponents color={"#2B2BCC"} className={"wave-2"}/>
            </div>
        </section>
        {/* 타이틀 END */}

        {/* 내용 */}
        {data.map((element, index) =>
            <section className="item" key={index}>
                <div className="container-inner" >
                    <img src={`/images/sections/06/${element.imgSrc}.png`} alt="/" className="logo" />

                    <div>
                        <section className="info">
                            <h5>{element.title}</h5>
                        </section>

                        <section className="more">
                            {/* 상세 정보 */}
                            <section className="details">
                                {element.details.map((e, i) =>
                                    <div key={i}>
                                        <h6>{e.name}</h6>
                                        <div>
                                            {e.description.map((e, i) =>
                                                <p key={i}>{e}</p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </section>
                            {/* 상세 정보 END */}

                            {/* 기능 */}
                            <section className="feature">
                                <h6>{element.feature.name}</h6>
                                <ol>
                                    {element.feature.description.map((e, i) =>
                                        <li>{e}</li>
                                    )}
                                </ol>
                            </section>
                            {/* 기능 END */}
                            
                            {/* 스크린샷 */}
                            <section className="screenshot">
                                <h6>스크린샷</h6>
                                <Swiper
                                    spaceBetween={8}
                                    slidesPerView={3}
                                    // onSlideChange={() => console.log('slide change')}
                                    // onSwiper={(swiper) => console.log(swiper)}
                                >
                                    {element.screenshots.map((e, i) =>
                                        <SwiperSlide><img src={`/images/sections/06/${e}.png`} alt="스크린샷" key={i}/></SwiperSlide>
                                    )}
                                </Swiper>
                            </section>
                            {/* 스크린샷 END */}
                        </section>
                        

                        <section className="actions">
                            <a href={element.url.live}>보기</a>
                            {element.url.github && <a href={element.url.github}>깃허브</a>}
                            {element.url.figma && <a href={element.url.figma}>피그마</a>}
                        </section>
                    </div>
                </div>
            </section>
        )}
        {/* 내용 END */}
    </article>
  )
}

export default Section06