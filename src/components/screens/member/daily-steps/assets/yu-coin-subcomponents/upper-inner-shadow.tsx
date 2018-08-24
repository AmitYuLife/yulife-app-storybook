// tslint:disable:max-line-length

import * as React from "react";
import { SFC } from "react";
import { Path } from "react-native-svg";
import { ISvgComponentProps } from "./model";

const LowerInnerShadow: SFC<ISvgComponentProps>  = ({ isGrayScale }) => (
    <Path
        fill={isGrayScale ? "#d4d4d4" : "#F8CB31"}
        d="M106,21.6c26,0,49.7,9.7,67.7,25.8C157.2,28.5,133,16.6,106,16.6c-27,0-51.3,11.9-67.7,30.8 C56.3,31.4,80,21.6,106,21.6z"
    />
);

export default LowerInnerShadow;
