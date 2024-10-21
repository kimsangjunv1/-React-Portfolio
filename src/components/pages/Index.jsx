import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Section01 from "@/components/sections/Section01";
import Section02 from "@/components/sections/Section02";
import Section03 from "@/components/sections/Section03";
import Section04 from "@/components/sections/Section04";
import Section05 from "@/components/sections/Section05";
import Section06 from "@/components/sections/Section06";
import Section07 from "@/components/sections/Section07";

import { util } from '@/components/utils/util';

const Index = ({ isMobile, data }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type"); // 쿼리 파라미터 'type' 값 가져오기

    useEffect(() => {
        type && console.log(util.replace(type)); // 쿼리 파라미터 'type' 값 출력
    }, [type]);
    
    return (
        <Fragment>
            <Section01 />
            <Section02 isMobile={isMobile} data={ data.about } type={ type } />
            <Section03 isMobile={isMobile} data={ data.career } type={ type } />
            <Section04 isMobile={isMobile} data={ data.skill } type={ type } />
            <Section06 isMobile={isMobile} data={ data.projects } type={ type } />
            <Section05 isMobile={isMobile} data={ data.education } type={ type } />
            <Section07 />
        </Fragment>
    )
}

export default Index