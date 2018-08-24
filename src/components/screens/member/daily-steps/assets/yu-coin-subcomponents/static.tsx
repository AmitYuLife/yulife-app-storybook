import * as React from "react";
import { SFC } from "react";
import Label from "./label";
import Circles from "./circles";
import OuterShadow from "./outer-shadow";
import LowerInnerShadow from "./lower-inner-shadow";
import UpperInnerShadow from "./upper-inner-shadow";
import Body from "./body";

interface IProps {
    isGrayScale?: boolean;
}

const Static: SFC<IProps> = ({ isGrayScale }) => (
    <>
        <OuterShadow isGrayScale={isGrayScale} />
        <Body isGrayScale={isGrayScale} />
        <Circles isGrayScale={isGrayScale} />
        <LowerInnerShadow isGrayScale={isGrayScale} />
        <UpperInnerShadow isGrayScale={isGrayScale} />
        <Label isGrayScale={isGrayScale} />
    </>
);

export default Static;
