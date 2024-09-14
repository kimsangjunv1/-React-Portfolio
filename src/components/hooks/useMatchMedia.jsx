import { useState, useEffect } from "react";

const useMatchMedia = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // 상태 업데이트 함수
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // 미디어 쿼리 변화 감지
    mediaQueryList.addEventListener('resize', handleChange);

    // 초기 설정
    setMatches(mediaQueryList.matches);

    // 클린업
    return () => {
      mediaQueryList.removeEventListener('resize', handleChange);
    };
  }, [query]);

  return matches;
}

export default useMatchMedia;