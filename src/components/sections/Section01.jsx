import { useRef, useMemo, useEffect } from "react";
import Animation from "../utils/animation";

import Character_01 from "/images/sections/01/character_01.svg";
import Character_02 from "/images/sections/01/character_02.svg";
import Character_03 from "/images/sections/01/character_03.svg";
import Particle_01 from "/images/sections/01/particle_01.svg";
import Particle_02 from "/images/sections/01/particle_02.svg";
import Particle_03 from "/images/sections/01/particle_03.svg";
import Particle_04 from "/images/sections/01/particle_04.svg";
import Particle_05 from "/images/sections/01/particle_05.svg";
import Particle_06 from "/images/sections/01/particle_06.svg";

const Section01 = () => {
    const refCharacter01 = useRef(null);
    const refCharacter02 = useRef(null);
    const refCharacter03 = useRef(null);

    const refParticle01 = useRef(null);
    const refParticle02 = useRef(null);
    const refParticle03 = useRef(null);
    const refParticle04 = useRef(null);
    const refParticle05 = useRef(null);
    const refParticle06 = useRef(null);

    const refs = useMemo(() => ({
        character: {
            character01: refCharacter01,
            character02: refCharacter02,
            character03: refCharacter03,
        },
        particle: {
            particle01: refParticle01,
            particle02: refParticle02,
            particle03: refParticle03,
            particle04: refParticle04,
            particle05: refParticle05,
            particle06: refParticle06,
        }
    }), []);

    useEffect(() => {
        Animation.section01.scroll(refs);
    }, []);
    
    return (
        // 섹션 1 : 메인
        <article id="intro">
            {/* 제목 */}
            <section className="title">
                <section className="top">
                    웹-프론트엔드
                </section>
                <section className="bottom">
                    포트-폴리오
                </section>
            </section>
            {/* 제목 END */}

            {/* 캐릭터 */}
            <section className="character">
                <img ref={refCharacter01} src={Character_01} alt="라마" />
                <img ref={refCharacter02} src={Character_02} alt="먼지 캐릭터 1" />
                <img ref={refCharacter03} src={Character_03} alt="먼지 캐릭터 2" />
            </section>
            {/* 캐릭터 END */}

            {/* 파티클 */}
            <section className="particle">
                <img ref={refParticle01} src={Particle_01} alt="먼지 1" />
                <img ref={refParticle02} src={Particle_02} alt="먼지 2" />
                <img ref={refParticle03} src={Particle_03} alt="먼지 3" />
                <img ref={refParticle04} src={Particle_04} alt="먼지 4" />
                <img ref={refParticle05} src={Particle_05} alt="먼지 5" />
                <img ref={refParticle06} src={Particle_06} alt="먼지 6" />
            </section>
            {/* 파티클 END */}
        </article>
    );
};

export default Section01;
