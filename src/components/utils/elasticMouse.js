const elasticMouse = (props, isNeedTransform) => {
    // 원 형태의 요소를 선택합니다.
    const circleElement = props;

    // 마우스 위치와 커서 위치를 추적하는 객체를 생성합니다.
    const mouse = { x: 0, y: 0 }; // 현재 마우스 위치 추적
    const previousMouse = { x: 0, y: 0 }; // 이전 마우스 위치 저장
    const circle = { x: 0, y: 0 }; // 원의 위치 추적

    // 지속적으로 트래킹할 스케일, 회전 값 저장할곳
    let currentScale = 0; // 스케일 값
    let currentAngle = 0; // 회전 값

    // Update mouse position on the 'mousemove' event
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;

        let tagName = e.target.tagName;
        let parentTagName = e.target.parentNode.tagName;

        // 버튼, 링크에 커서를 올렸을때
        if (tagName === "A" || tagName === "BUTTON" || parentTagName === "BUTTON") {
            circleElement.classList.add("big");
        } else {
            circleElement.classList.remove("big");
        }

        // 텍스트에 커서를 올렸을때
        if (tagName === "P" || tagName === "H1" || tagName === "H2" || tagName === "H3" || tagName === "H4" || tagName === "H5" || tagName === "FIGCAPTION" || tagName === "STRONG" || tagName === "SPAN") {
            circleElement.classList.add("text");
        } else {
            circleElement.classList.remove("text");
        }
    });

    // 커서 이동 속도를 부드럽게 만드는 변수 (0 = 부드럽게, 1 = 즉시, 0.17 = 기본)
    const speed = 0.17;

    // 애니메이션 시작
    const tick = () => {
        // 이동
        // 마우스 위치를 기반으로 한 원의 이동 계산 및 부드럽게
        circle.x += (mouse.x - circle.x) * speed;
        circle.y += (mouse.y - circle.y) * speed;

        // 커서 이동을 위한 변환 문자열 생성
        const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

        // 크기 조절
        // 1. 마우스 위치 변경량(deltaMouse) 계산
        const deltaMouseX = mouse.x - previousMouse.x;
        const deltaMouseY = mouse.y - previousMouse.y;

        // 다음 프레임을 위해 이전 마우스 위치 업데이트
        previousMouse.x = mouse.x;
        previousMouse.y = mouse.y;

        // 2. 피타고라스의 정리와 속도 조절로 마우스 속도 계산
        const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);

        // 3. 마우스 속도를 [0, 0.5] 범위로 변환
        const scaleValue = (mouseVelocity / 150) * 0.3;

        // 4. 현재 크기를 부드럽게 업데이트
        currentScale += (scaleValue - currentScale) * speed;

        // 5. 크기 조절을 위한 변환 문자열 생성
        const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

        // 회전
        // 1. 아크탄젠트 함수를 사용하여 각도 계산
        const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;

        // 2. 낮은 마우스 속도에서 흔들림을 줄이기 위한 임계값 확인
        if (mouseVelocity > 20) {
            currentAngle = angle;
        }

        // 3. 회전을 위한 변환 문자열 생성
        const rotateTransform = `rotate(${currentAngle}deg)`;

        // 모든 변환을 지정된 순서대로 원 요소에 적용합니다: 이동 -> 회전 -> 크기 조절
        circleElement.style.transform = `${translateTransform} ${rotateTransform} ${isNeedTransform ? scaleTransform : ''}`;

        // 애니메이션을 계속 진행하기 위해 다음 프레임을 요청합니다.
        window.requestAnimationFrame(tick);
    };

    // 애니메이션 루프 시작
    tick();
};
export default elasticMouse;
