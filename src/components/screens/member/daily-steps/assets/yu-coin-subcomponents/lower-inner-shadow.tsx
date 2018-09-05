// tslint:disable:max-line-length

import * as React from "react";
import { SFC } from "react";
import { Path } from "react-native-svg";
import { ISvgComponentProps } from "./model";

const LowerInnerShadow: SFC<ISvgComponentProps> = ({ isGrayScale }) => (
    <Path
        fill={isGrayScale ? "#fcfcfc" : "#FFF"}
        d="M106,191.1c26,0,49.7-9.7,67.7-25.8c-16.5,18.8-40.7,30.8-67.7,30.8c-27,0-51.3-11.9-67.7-30.8 C56.3,181.3,80,191.1,106,191.1z"
    />
);

export default LowerInnerShadow;
