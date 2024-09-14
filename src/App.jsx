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
import SkipComponents from "./components/common/SkipComponents";

import { data } from "@/components/utils/data";

import Animation from "@/components/utils/animation";

const App = () => {
    useEffect(() => {
        Animation.layout.main();
    },[])

    return (
        <Fragment>
            <Header />
            <Main>
                <Section01 />
                <Section02 data={ data.about } />
                <Section03 data={ data.career } />
                <Section04 data={ data.skill } />
                <Section05 data={ data.education } />
                <Section06 data={ data.projects } />
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