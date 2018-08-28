import * as React from "react";
import { SFC } from "react";
import Body from "./body";
import Circles from "./circles";
import Label from "./label";
import LowerInnerShadow from "./lower-inner-shadow";
import OuterShadow from "./outer-shadow";
import UpperInnerShadow from "./upper-inner-shadow";

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
