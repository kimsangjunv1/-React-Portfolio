import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Index from "@/components/pages/Index";

import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";

import SkipComponents from "@/components/common/SkipComponents";
import MouseComponents from "@/components/common/MouseComponents";
import AwardsComponents from "@/components/common/AwardsComponents";
import LoadingComponents from "@/components/common/LoadingComponents";
import NavigateComponents from "@/components/common/NavigateComponents";
import ProgressComponents from "@/components/common/ProgressComponents";
import NavigationComponents from "@/components/common/NavigationComponents";

import { data } from "@/components/utils/data";
import Animation from "@/components/utils/animation";

import useMatchMedia from "@/components/hooks/useMatchMedia";
import useRouteLoading from "@/components/hooks/useRouteLoading";

import { AnimatePresence } from "framer-motion";

const App = () => {
    const isMobile = useMatchMedia("(max-width: 768px)");
    const { isLoaded, loadingCount } = useRouteLoading();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isMobile) {
            Animation.layout.main();
        }
    // 클린업 함수는 반환하지 않음
    }, [isMobile]);

    useEffect(() => {
        isVisible && setIsVisible(!isVisible);
    }, [isMobile])
    
    return (
        <Router>
            <Header isMobile={isMobile} isVisible={isVisible} func={() => {setIsVisible(!isVisible)}}/>
            <Main>
                <AnimatePresence>{ !isVisible ? "" : <NavigationComponents count={loadingCount} func={() => {setIsVisible(!isVisible)}}/> }</AnimatePresence>
                <AnimatePresence>{ isLoaded ? "" : <LoadingComponents count={loadingCount} /> }</AnimatePresence>
                <Routes><Route path="/" element={ <Index isMobile={isMobile} data={data} /> } /></Routes>
                <MouseComponents />
                <ProgressComponents />
                <SkipComponents />
                <NavigateComponents />
                <AwardsComponents />
            </Main>
            <Footer />
        </Router>
    );
};

export default App;