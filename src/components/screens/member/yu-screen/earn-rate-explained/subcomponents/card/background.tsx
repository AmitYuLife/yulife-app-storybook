import * as React from "react";
import { SvgXml } from "react-native-svg";

const xml = `
<svg width="344" height="184" viewBox="0 0 344 184" fill="none">
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="344" height="184">
<rect width="344" height="184" rx="11" transform="matrix(-1 0 0 1 344 0)" fill="url(#paint0_linear)"/>
</mask>
<g mask="url(#mask0)">
<rect width="344" height="184" rx="11" transform="matrix(-1 0 0 1 344 0)" fill="url(#paint1_linear)"/>
<rect x="-143.78" y="-288" width="543.217" height="337.497" transform="rotate(31.3829 -143.78 -288)" fill="white" fill-opacity="0.1"/>
<path d="M323.551 -0.103368L348.204 -17.8538L207.995 214.636L182.222 233.193L323.551 -0.103368Z" fill="white" fill-opacity="0.1"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="-10.5306" y1="-41.9749" x2="376.786" y2="-8.38911" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDB42"/>
<stop offset="0.684342" stop-color="#FFC910"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="-10.5306" y1="-41.9749" x2="376.786" y2="-8.38911" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDB42"/>
<stop offset="0.684342" stop-color="#FFC910"/>
</linearGradient>
</defs>
</svg>
`;

export default () => <SvgXml xml={xml} width="100%" height="100%" style={{ position: "absolute" }} />;
