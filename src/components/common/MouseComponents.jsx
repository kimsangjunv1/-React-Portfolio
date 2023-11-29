import React, { useEffect, useLayoutEffect, useRef } from "react";

// import Scroll_emoji from "./../../assets/img/scroll_emoji.svg";
import { Fragment } from "react";

const MouseComponents = () => {
  const subCursor = useRef();
  const mainCursor = useRef();
  const objCursor = useRef();
  const keepScrollDown = useRef();
  const particle_001 = useRef();
  const particle_002 = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      subCursor.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`;
      mainCursor.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`;
      objCursor.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem)) `;
      keepScrollDown.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(0%)`;
    });
    window.addEventListener("mousedown", (e) => {
      subCursor.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem)) scale(2)`;
    });
    window.addEventListener("mouseup", (e) => {
      subCursor.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem)) scale(1)`;
    });
    // window.requestAnimationFrame(moveCursor);
  }, []);

  return (
    <Fragment>
      {/* <div
				onMouseOver={() => {
					console.log("오버~");
				}}
			>
				<img
					className="mouse_cursor"
					ref={hoho}
					src={MousePointer}
					alt="마우스 포인터"
					// style={{ width: "60px" }}
				/>
			</div>
			<div
				className="cursor_particle_001"
				ref={particle_001}
				//   style={{ position: "absolute", width: "20px" }}
			>
				<img src={CursorParticle001} alt="마우스 포인터 파티클" />
			</div>
			<div
				className="cursor_particle_002"
				ref={particle_002}
				//   style={{ position: "absolute", width: "20px" }}
			>
				<img src={CursorParticle002} alt="마우스 포인터 파티클" />
			</div> */}

      <div id="cursor" className="cursor">
        <div className="ring" ref={subCursor}>
          <div></div>
        </div>
        <div className="ring" ref={mainCursor}>
          <div></div>
        </div>
      </div>
      <div className="cursor obj">
        <div className="back_obj" ref={objCursor}>
          <div></div>
        </div>
      </div>
      {/* <div className="alert" ref={keepScrollDown}>
        아래로 내려주세요!
        <img
          className="arrow"
          src={Arrow_down_right}
          alt="오른쪽 아래 화살표"
        />
        <img className="emoji" src={Scroll_emoji} alt="무표정 이모지" />
      </div> */}
    </Fragment>
  );
};

export default MouseComponents;
