import * as React from "react";
import { SvgFromXml } from "react-native-svg";
import { BACK_BUTTON } from "@ids";

const svgXml = `<svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 13L16 7" stroke="#333333" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 19.5L9 13" stroke="#333333" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

function Back() {
  return <SvgFromXml xml={svgXml} testID={BACK_BUTTON} />;
}

export default Back;
