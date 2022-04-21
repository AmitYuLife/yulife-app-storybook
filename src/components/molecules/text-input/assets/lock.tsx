import * as React from "react";
import { SFC } from "react";
import Svg, { Path } from "react-native-svg";
import { Colours } from "../../../../styles";

interface IProps {
  colour?: string;
  scale?: number;
}

const Lock: SFC<IProps> = ({ scale = 1, colour }) => (
  <Svg width={String(52 * scale)} height={String(54 * scale)} viewBox="0 0 52 54">
    <Path
      fill={colour || Colours.textInput.inactive}
      stroke={colour || Colours.textInput.inactive}
      /*tslint:disable-next-line*/
      d="M40.5,20v-5.1C40.5,6.9,34,0.5,26,0.5S11.5,6.9,11.5,14.9V20H0v34h52V20H40.5z M14.5,14.9 c0-6.3,5.2-11.4,11.5-11.4c6.3,0,11.5,5.1,11.5,11.4V20h-23V14.9z M49,51H3V23h46V51z"
    />
    <Path
      fill={colour || Colours.textInput.inactive}
      stroke={colour || Colours.textInput.inactive}
      /*tslint:disable-next-line*/
      d="M26,42.5c3,0,5.5-2.5,5.5-5.5S29,31.5,26,31.5c-3,0-5.5,2.5-5.5,5.5S23,42.5,26,42.5z M26,34.5 c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5S24.6,34.5,26,34.5z"
    />
  </Svg>
);

export default Lock;
