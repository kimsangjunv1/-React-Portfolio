import { Fragment, useEffect } from "react";

import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";

import Section01 from "@/components/sections/Section01";
import Section02 from "@/components/sections/Section02";
import Section03 from "@/components/sections/Section03";
import Section04 from "@/components/sections/Section04";
import Section05 from "@/components/sections/Section05";
import Section06 from "@/components/sections/Section06";
import Section07 from "@/components/sections/Section07";

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
    },[isMobile])

    return (
        <Fragment>
            <Header />
            <Main>
                <AnimatePresence>
                    {isLoaded ? "" : <LoadingComponents count={loadingCount} />}
                </AnimatePresence>
                {/* <AnimatePresence mode="wait">{!isLoaded && <LoadingComponents routeName={router.route} loadingCount={loadingCount} />}</AnimatePresence> */}
                <Section01 />
                <Section02 isMobile={isMobile} data={ data.about } />
                <Section03 isMobile={isMobile} data={ data.career } />
                <Section04 isMobile={isMobile} data={ data.skill } />
                <Section06 isMobile={isMobile} data={ data.projects } />
                <Section05 isMobile={isMobile} data={ data.education } />
                <Section07 />

                <MouseComponents />
                <ProgressComponents />
                <SkipComponents />
            </Main>
            <Footer />
        </Fragment>
    );
};

export default App;