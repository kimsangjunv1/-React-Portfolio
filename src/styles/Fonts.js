import { createGlobalStyle } from "styled-components";

const FontStyle = createGlobalStyle`
    // SUITE 폰트
    @font-face {
        font-family: 'BebasNeue';
        font-weight: 500;
        src:
            url('/fonts/BebasNeue/BebasNeue.ttf') format("truetype"),
            url('/fonts/BebasNeue/BebasNeue.eot') format('woff2')
            url('/fonts/BebasNeue/BebasNeue.woff') format('woff2')
            url('/fonts/BebasNeue/BebasNeue.woff2') format('woff2')
        ;
    }

    // 도트 매트릭스 폰트
    @font-face {
        font-family: 'OwnglyphMeetMe';
        font-weight: 500;
        src:
            url('/fonts/OwnglyphMeetMe/OwnglyphMeetMe.ttf') format("truetype"),
            url('/fonts/OwnglyphMeetMe/OwnglyphMeetMe.eot') format("truetype"),
            url('/fonts/OwnglyphMeetMe/OwnglyphMeetMe.woff') format("truetype"),
            url('/fonts/OwnglyphMeetMe/OwnglyphMeetMe.woff2') format("truetype"),
        ;
    }
`;

export default FontStyle;