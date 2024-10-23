import { useState, useEffect } from "react";

const useMatchMedia = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  // 상태 업데이트 함수
  const handleChange = (event) => {
    setMatches(event.matches);
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // 미디어 쿼리 변화 감지
    mediaQueryList.addEventListener('change',(e) => handleChange(e));

    // 클린업
    return () => {
      mediaQueryList.removeEventListener('change', (e) => handleChange(e));
    };
  }, [query]);

  return matches;
};

export default useMatchMedia;