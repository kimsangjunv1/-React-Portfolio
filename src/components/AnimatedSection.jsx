import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Animation from "./utils/animation";


gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    Animation.section01(boxRef);
  }, []);

  return (
    <section ref={boxRef}>
      <h2>Scroll down to see the animation</h2>
    </section>
  );
};

export default AnimatedSection;