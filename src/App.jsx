import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/pages/Main";
import gsaps from "./components/utils/gsaps";
import gsapAnimation from "./components/utils/gsapAnimation";
import lenis from "./components/utils/lenis";
import section from "./components/utils/section";

function App() {
  useEffect(() => {
    gsaps();
    gsapAnimation();
    section();
    lenis();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
