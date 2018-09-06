import React from "react";
import { G } from "react-native-svg";
import { platformAdjustments } from "../helpers";
import Bird from "./bird";
import Clouds from "./clouds";
import Gradient from "./gradient";
import Leaves from "./leaves";
import Mountains from "./mountains";
import Squirrel from "./squirrel";

const BackgroundImage = () => (
    <G {...platformAdjustments}>
        <Gradient />
        <Bird />
        <Squirrel />
        <Leaves />
        <Mountains />
        <Clouds />
    </G>
);

export default BackgroundImage;
