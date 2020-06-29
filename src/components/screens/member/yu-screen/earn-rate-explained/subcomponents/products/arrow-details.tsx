import React from "react";
import { SvgXml } from "react-native-svg";

const xml = `
<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16.4514" cy="16.8379" r="12" fill="#F50D78"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5181 11.7084L14.9112 10.3379L21.5181 16.8379L14.9112 23.3379L13.5181 21.9673L18.7319 16.8379L13.5181 11.7084Z" fill="white"/>
</svg>
`;
export default () => <SvgXml xml={xml} />;
