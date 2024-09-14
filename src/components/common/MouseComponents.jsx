import { useEffect, useRef } from "react";

import elasticMouse from "../utils/elasticMouse";

const MouseComponents = () => {
    const cursorMain = useRef();
    const cursorSub = useRef();

    useEffect(() => {
        if (cursorMain.current !== "null") {
            elasticMouse(cursorMain.current, true);
            elasticMouse(cursorSub.current, false);
        }
    }, []);

    return (
        <article id="etc">
            <section className="cursor main" ref={cursorMain} />
            <section className="cursor sub" ref={cursorSub} />
        </article>
    );
};

export default MouseComponents;
