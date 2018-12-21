import React from "react";
import { G } from "react-native-svg";
import { platformAdjustments } from "../../helpers";
import ForestBack from "./forest-back";
import ForestFront from "./forest-front";
import Giraffe from "./giraffe";
import Ground from "./ground";
import Sky from "./sky";
import Squirrel from "./squirrel";

const BackgroundImage = () => (
    <G {...platformAdjustments}>
        <Sky />
        <Ground />
        <ForestBack />
        <Giraffe />
        <ForestFront />
        <Squirrel />
    </G>
);

export default BackgroundImage;
