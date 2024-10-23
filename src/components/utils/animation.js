import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin, CSSPlugin } from "gsap/all";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSPlugin);

class Animation {
    //w 기본 레이아웃
    static layout = {
        header: (target) => {
            const sections = gsap.utils.toArray(".marquee .content");
    
            for(let i = 0; i <= sections.length - 1; i++ ) {
                gsap.to(sections[i], {
                    xPercent: -100,
                    repeat: -1,
                    duration: 70,
                    ease: "linear",
                    modifiers: {
                        xPercent: gsap.utils.wrap(-100, 0)
                    }
                });
            };

            gsap.fromTo("#header .logo a img",{
                opacity: 0.8,
            },{
                opacity: 1,
                // rotate: 720,
                repeat: -1,
                duration: 0.5,
                ease: "power1.inout",
                yoyo: true,
            });

            const conatinerSkill = document.querySelector("#skill");
            const containerEducation = document.querySelector("#education");

            ScrollTrigger.create({
                trigger: "#education", // 트리거할 섹션을 #skill로 설정
                start: () => "+=" + conatinerSkill.offsetWidth,
                end: () => "+=" + containerEducation.offsetHeight,
                onEnter: () => {
                  gsap.to("#header a, #header h5, #progress p", { color: "#000000" });
                  gsap.to("#progress .scroll_background", { backgroundColor: "#00000050" });
                },
                onLeave: () => {
                  gsap.to("#header a, #header h5, #progress p", { color: "#ffffff" });
                  gsap.to("#progress .scroll_background", { backgroundColor: "#ffffff50" });
                },
                onEnterBack: () => {
                  gsap.to("#header a, #header h5, #progress p", { color: "#000000" });
                  gsap.to("#progress .scroll_background", { backgroundColor: "#00000050" });
                },
                onLeaveBack: () => {
                  gsap.to("#header a, #header h5, #progress p", { color: "#ffffff" });
                  gsap.to("#progress .scroll_background", { backgroundColor: "#ffffff50" });
                }
            });
        },

        main: () => {
            const lenis = new Lenis();

            const raf = (time) => {
                lenis.raf(time);
                requestAnimationFrame(raf);
            };

            requestAnimationFrame(raf);
        },

        footer: () => {},

        progress: () => {}
    }

    //w 섹션 1 : 인사말
    static section01 = {
        // 스크롤 할때
        scroll: (target) => {
            // 나타나면 실행할 섹션
            let trigger = "#about";

            // 타이틀
            const titlePositionTop = gsap.utils.toArray("#intro .title .top");
            const titlePositionBottom = gsap.utils.toArray("#intro .title .bottom");

            // 돌려 사용할 스크롤 트리거 함수
            const scrollTrigger = (target, option) => {
                ScrollTrigger.create({
                    trigger: trigger,
                    scrub: 1,
                    animation: gsap.to(
                        target,
                        option
                    ),
                });
            }
            
            // 텍스트 분리 및 삽입
            const splitText = (element) => {
                const text = element.textContent;
                element.textContent = "";

                text.split("").forEach(char => {
                    const span = document.createElement("h2");
                    span.textContent = char;
                    element.appendChild(span);
                });
            };

            // 캐릭터 : 메인
            scrollTrigger(target.character.character01.current,{
                y: "1200%",
                scale: 5,
                rotation: 1500,
                filter: "blur(50px)",
                opacity: 0
            });

            // 캐릭터 : 먼지 1
            scrollTrigger(target.character.character02.current,{
                x: "-1300%",
                y: "-1200%",
                scale: 5,
                rotation: 1500,
                filter: "blur(50px)",
            });

            // 캐릭터 : 먼지 2
            scrollTrigger(target.character.character03.current,{
                x: "1300%",
                y: "-1200%",
                scale: 5,
                rotation: 1500,
                filter: "blur(50px)",
            });

            // 파티클 : 종이 두장
            scrollTrigger(target.particle.particle01.current,{
                x: "-1300%",
                y: "-1200%",
                scale: 5,
                rotation: 500,
                filter: "blur(30px)",
            });

            // 파티클 : 빗자루
            scrollTrigger(target.particle.particle02.current,{
                x: "1300%",  // 가로
                y: "-1200%", // 세로
                scale: 5,
                rotation: 500,
                filter: "blur(30px)",
            });

            // 파티클 : 망원경
            scrollTrigger(target.particle.particle03.current,{
                x: "-1300%",  // 가로
                y: "-1200%", // 세로
                scale: 5,
                rotation: 500,
                filter: "blur(30px)",
            });

            // 파티클 : 코드
            scrollTrigger(target.particle.particle04.current,{
                x: "1300%",  // 가로
                y: "-1200%", // 세로
                scale: 5,
                rotation: 500,
                filter: "blur(30px)",
            });

            // 파티클 : 마우스
            scrollTrigger(target.particle.particle05.current,{
                x: "-1300%",  // 가로
                y: "-1200%", // 세로
                scale: 5,
                rotation: 500,
                filter: "blur(30px)",
            });

            // 파티클 : 종이 한장
            scrollTrigger(target.particle.particle06.current,{
                x: "1300%",  // 가로
                y: "-1200%", // 세로
                scale: 5,
                rotation: 500,
                filter: "blur(30px)",
            });

            // 글자 분리
            for (let i = 0; i <= titlePositionTop.length - 1; i++) {splitText(titlePositionTop[i]);}
            for (let i = 0; i <= titlePositionBottom.length - 1; i++){ splitText(titlePositionBottom[i]);}

            gsap.fromTo(
                "#intro .title .top > h2, #intro .title .bottom > h2",
                { 
                    // y: 0,
                    // opacity: 1,
                    // transform: 50
                },
                {
                    y: -500,
                    opacity: 0,
                    filter: "blur(20px)",
                    stagger: 0.01,
                    scrollTrigger: {
                        trigger: "#intro",
                        start: "top 0%", // 시작 지점
                        end: "bottom 20%", // 최종 지점
                        scrub: true
                    }
                }
            );
        },

        // 마우스를 따라갈때
        tracking: (target, event) => {
            // 마우스의 x, y 위치를 가져옵니다.
            const mouseX = event.clientX / 50;
            const mouseY = event.clientY / 50;

            // GSAP을 사용하여 개체를 마우스 위치로 이동시킵니다.
            gsap.to(target.face.current, {
                x: mouseX,
                y: mouseY,
                duration: 0.3,  // 애니메이션 지속 시간
                ease: "power1.out"  // 애니메이션의 이징 함수
            });

            gsap.to(target.desc.current, {
                x: mouseX-20,
                y: mouseY-20,
                duration: 1.0,  // 애니메이션 지속 시간
                ease: "power1.out"  // 애니메이션의 이징 함수
            });
        }
    }

    //w 섹션 2 : 인터뷰
    static section03(target) {
        const sections = gsap.utils.toArray("#about .item");

        sections.forEach((e, i) => {
            gsap.fromTo(e,
                {
                    filter: "blur(5px)",
                    scale: 0.5,
                },
                {
                    filter: "blur(0px)",
                    scale: 1,
                    ease: "power1.inout",
                    scrollTrigger: {
                        trigger: e,
                        scrub: true,
                        start: "bottom 120%", // 시작 지점
                        end: "top 50%",
                    },
                }
            );
        });

        // 전체 컨테이너를 선택
        const container = document.querySelector("#about");

        // 이미지들을 선택
        const images = gsap.utils.toArray("#about img");

        // GSAP 타임라인 생성
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top bottom", // 스크롤의 시작 지점
                end: "bottom top", // 스크롤의 끝 지점
                scrub: true, // 스크롤에 맞게 애니메이션 조정
            }
        });

        // 각 이미지에 애니메이션 추가
        tl.fromTo(images,
            {
                rotate: 0,
                scale: 1.25,
                y: 200
            },
            {
                rotate: -5,
                scale: 1,
                y: 0,
                duration: 0.2
            }
        );
    }

    //w 섹션 3 : 사용 가능 기술
    static section04(target, isMobile) {
        const title = gsap.utils.toArray("#skill .title");

        // 텍스트 분리 및 삽입
        const splitText = (element) => {
            const text = element.textContent;
            element.textContent = "";

            text.split("").forEach(char => {
                const span = document.createElement("h2");
                span.textContent = char;
                element.appendChild(span);
            });
        };

        // 글자 분리
        for (let i = 0; i <= title.length - 1; i++) {splitText(title[i]);}

        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------

        const sections = gsap.utils.toArray("#skill > section");

        if (target.container.current) {
            const scrollTween = gsap.to(sections, {
                xPercent: -100 * (isMobile ? sections.length : sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: target.container.current,
                    pin: true,
                    scrub: 1, // 스크롤과 애니메이션 동기화
                    end: () => "+=" + target.container.current.scrollWidth, // 전체 가로 스크롤 길이 설정
                },
            });
        }

        
        if (!isMobile) {
            // 항목 1
            ScrollTrigger.create({
                scrub: 1,
                animation: gsap.fromTo(
                    ".target-1 .pinned",
                    {
                        x: 1500,
                        y: "0%"
                    },
                    {
                        x: -1500,
                    }
                )
            });
    
            // 항목 2
            ScrollTrigger.create({
                scrub: 1,
                animation: gsap.fromTo(
                    ".target-2 .pinned",
                    {
                        x: 2000,
                        y: "-30%"
                    },
                    {
                        x: -2000,
                    }
                )
            });
    
            // 항목 3
            ScrollTrigger.create({
                scrub: 1,
                animation: gsap.fromTo(
                    ".target-3 .pinned",
                    {
                        x: 1200,
                        y: "10%"
                    },
                    {
                        x: -1200,
                    }
                )
            });
    
            // 항목 4
            ScrollTrigger.create({
                scrub: 1,
                animation: gsap.fromTo(
                    ".target-4 .pinned",
                    {
                        x: 1500,
                        y: "-30%"
                    },
                    {
                        x: -1000,
                    }
                )
            });
    
            // 항목 5
            ScrollTrigger.create({
                scrub: 1,
                animation: gsap.fromTo(
                    ".target-5 .pinned",
                    {
                        x: 700,
                        y: "0%"
                    },
                    {
                        x: -800,
                    }
                )
            });
        }

        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------

        // 섹션 : 타이틀
        gsap.fromTo(
            "#skill .title > h2",
            { 
                // y: 0,
                // opacity: 1,
                // transform: 50
            },
            {
                // y: -500,
                opacity: 0,
                filter: "blur(20px)",
                stagger: 0.01,
                scrollTrigger: {
                    trigger: "#skill",
                    start: "top 0%", // 시작 지점
                    end: "bottom 20%", // 최종 지점
                    scrub: true
                }
            }
        );

        ScrollTrigger.create({
            trigger: "#skill",
            scrub: 1,
            // start: "top 50%",
            // end: "bottom -100%",
            animation: gsap.fromTo(
                "#skill .title",
                {
                    scale: 2,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                })
        });

        // 뒷배경 - 1
        ScrollTrigger.create({
            scrub: 1,
            animation: gsap.fromTo(
                target.background01.current, 
                {
                    x: 50
                },
                {
                    x: -50
                }
            )
        });

        // 뒷배경 - 2
        ScrollTrigger.create({
            scrub: 1,
            animation: gsap.fromTo(
                target.background02.current, 
                {
                    x: 100,
                    scaleX: -1
                },
                {
                    x: -100,
                    scaleX: -1
                }
            )
        });
    }

    //w 섹션 4 : 경력
    static section041(target) {
        const sections = gsap.utils.toArray("#career .item section div");

        sections.forEach((e, i) => {
            gsap.fromTo(e,
                {
                    filter: "blur(5px)",
                    scale: 0.5,
                },
                {
                    filter: "blur(0px)",
                    scale: 1,
                    ease: "power1.inout",
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: e,
                        scrub: true,
                        start: "bottom 120%", // 시작 지점
                        end: "top 50%"
                    },
                }
            );
        });
        
    }

    //w 섹션 6 : 공부
    static section05() {
        let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter("#education .contents .item", "skewY", "deg"), // fast
        clamp = gsap.utils.clamp(-10, 10);
    
        ScrollTrigger.create({
            onUpdate: (self) => {
            let skew = clamp(self.getVelocity() / -300);
        
            if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;

                gsap.to(proxy, {
                    skew: 0,
                    duration: 0.8,
                    ease: "power3",
                    overwrite: true,
                    onUpdate: () => skewSetter(proxy.skew),
                });
            }
            },
        });
    }

    //w 섹션 7 : 프로젝트
    static section06() {
        const elementLogos = gsap.utils.toArray("#projects .logo");
        const elementSlides = gsap.utils.toArray("#projects .item");
        const elementThumbnail = gsap.utils.toArray("#projects .deco");
        const elementTitle = gsap.utils.toArray("#projects .desc");
        
        // 함수 : 텍스트 분리 및 삽입
        const splitText = (element) => {
            const text = element.textContent;
            element.textContent = "";

            text.split("").forEach(char => {
                const span = document.createElement("h2");
                span.textContent = char;
                element.appendChild(span);
            });
        };
        
        for (let i = 0; i <= elementTitle.length - 1; i++) {
            splitText(elementTitle[i]);
        };

        gsap.to(
            "#projects .desc h2",
            {
                y: -500,
                opacity: 0,
                filter: "blur(20px)",
                stagger: 0.01,
                scrollTrigger: {
                    trigger: "#projects",
                    start: "top 0%", // 시작 지점
                    end: "bottom 20%", // 최종 지점
                    scrub: true
                    // markers: true, // 디버깅 완료 후 제거
                }
            }
        );

        elementThumbnail.forEach((e, i) => {
            gsap.fromTo(e,
                {
                    scale: 1.05
                }, 
                {
                    scale: 1,
                    scrollTrigger: {
                        trigger: e,
                        scrub: true,
                        start: "top bottom", // position of trigger meets the scroller position
                    },
                    ease: "none"
                });
        })

        elementSlides.forEach((slide, i) => {
            let imageWrappers = slide.querySelector(".container-inner");

            gsap.fromTo(imageWrappers,
            {
                x: "10vw",
                y: "-30vh",
            }, 
            {
                y: "30vh",
                x: "-10vw",
                scrollTrigger: {
                    trigger: slide,
                    scrub: true,
                    start: "top bottom", // 트리거 시작 지점 명시
                    end: "bottom top",   // 트리거 종료 지점 명시
                },
                ease: "none",
            });
        });

        elementLogos.forEach((slide, i) => {
            gsap.fromTo(slide,
            {
                y: "-70%",
                scale: 1.05,
                // y: "-50vh",
                // rotate: -20,
            }, 
            {
                y: "-30%",
                scale: 1,
                // y: "10vh",
                // rotate: 0,
                scrollTrigger: {
                    trigger: slide,
                    scrub: true,
                    start: "top bottom", // position of trigger meets the scroller position
                },
                ease: "none",
            });
        });
    }

    //w 가로 스크롤 전용
    static sectionHorizontal(target) {
        const sections = gsap.utils.toArray(".horizontal > section");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: target.container.current,
                pin: true,
                scrub: 0,
                // snap: 1 / (sections.length - 1),
                end: () => "+=" + target.container.current.offsetWidth,
            },
        });
    }

    //w 가로 스크롤 전용
    static sectionHorizontalTest(target) {
        const sections = gsap.utils.toArray("#skill > section");

        gsap.to(sections, {
            x: `-${target.container.current.offsetWidth}`,
            ease: "none",
            scrollTrigger: {
                trigger: target.container.current,
                pin: true,
                scrub: 0,
                end: () => "+=" + target.container.current.offsetWidth,
            },
        });
    }
}

export default Animation;