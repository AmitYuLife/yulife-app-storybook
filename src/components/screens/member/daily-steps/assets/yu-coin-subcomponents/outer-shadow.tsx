import * as React from "react";
import { SFC } from "react";
import { Ellipse } from "react-native-svg";
import { ISvgComponentProps } from "./model";

const OuterShadow: SFC<ISvgComponentProps> = ({ isGrayScale }) => (
    <Ellipse
        transform="matrix(2.296964e-02 -0.9997 0.9997 2.296964e-02 -9.055 216.0345)"
        fill={isGrayScale ? "#868686" : "#EA9E2F"}
        cx="106"
        cy="112.6"
        rx="105"
        ry="105"
    />
);

export default OuterShadow;
