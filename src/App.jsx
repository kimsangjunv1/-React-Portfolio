import { useEffect } from "react";
// import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Main from "./components/pages/Main";
import gsaps from "./components/utils/gsaps";
import gsapAnimation from "./components/utils/gsapAnimation";
import lenis from "./components/utils/lenis";
import section from "./components/utils/section";
import imgLoader from "./components/utils/imgLoader";

function App() {
  // const [count, setCount] = useState(0);
  useEffect(() => {
    gsaps();
    gsapAnimation();
    section();
    lenis();

    // imgLoader();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  );
}

export default App;
