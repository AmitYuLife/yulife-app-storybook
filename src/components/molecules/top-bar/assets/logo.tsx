import * as React from "react";
import { SFC } from "react";
import Svg, { Path, Polygon } from "react-native-svg";

interface IProps {
    scale?: number;
}

const Logo: SFC<IProps> = ({ scale = 1 }) => (
    <Svg
        height={74 * scale}
        width={74 * scale}
        viewBox="0 0 74 74"
    >
        <Path
            fill="#E20177"
            /*tslint:disable-next-line*/
            d="M71,3v0.5v67.1V71h-0.5H3.5H3v-0.5V3.4V3h0.5h67.1H71 M74,0h-3.5H3.5H0v3.5v67.1V74h3.5h67.1H74v-3.5V3.4V0 L74,0z"
        />
        <Polygon
            fill="#E20177"
            /*tslint:disable-next-line*/
            points="32.5,24.3 24.1,44.7 15.8,24.3 12.5,24.3 22.5,48.6 17.8,60 21.1,60 35.7,24.3 "
        />
        <Path
            fill="#E20177"
            /*tslint:disable-next-line*/
            d="M58.4,24.3v15.2c0,4.4-1.3,7.4-7.5,7.4s-7.5-3-7.5-7.4V24.3h-3v15.2c0,7,3.4,10.4,10.5,10.4 c7,0,10.5-3.4,10.5-10.4V24.3H58.4z"
        />
    </Svg>
);

export default Logo;
