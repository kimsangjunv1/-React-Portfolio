import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";

import Index from "@/components/pages/home";

import MouseComponents from "@/components/common/MouseComponents";
import ProgressComponents from "@/components/common/ProgressComponents";
import SkipComponents from "@/components/common/SkipComponents";

import { AnimatePresence } from "framer-motion";

import LoadingComponents from "@/components/common/LoadingComponents";

import { data } from "@/components/utils/data";

import Animation from "@/components/utils/animation";

import useMatchMedia from "@/components/hooks/useMatchMedia";

import useRouteLoading from "@/components/hooks/useRouteLoading";

const App = () => {
    const isMobile = useMatchMedia("(max-width: 768px)");
    const { isLoaded, loadingCount } = useRouteLoading();

    useEffect(() => {
        !isMobile ? Animation.layout.main() : "";
    },[isMobile]);
    
    return (
        <Router>
            <Header />
            <Main>
                <AnimatePresence>
                    {isLoaded ? "" : <LoadingComponents count={loadingCount} />}
                </AnimatePresence>
                
                <Routes>
                    <Route path="/" element={<Index isMobile={isMobile} data={data} />} />
                </Routes>

                <MouseComponents />
                <ProgressComponents />
                <SkipComponents />
            </Main>
            <Footer />
        </Router>
    );
};

export default App;