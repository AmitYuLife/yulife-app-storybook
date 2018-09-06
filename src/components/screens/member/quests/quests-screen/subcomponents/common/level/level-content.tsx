import React, { SFC } from "react";
import { G } from "react-native-svg";
import LevelComplete from "./level-complete";
import LevelNext from "./level-next";
import LevelPending from "./level-pending";

interface IProps {
    nextAvailable: number;
    level: number;
    x: number;
    y: number;
    rating: number;
    isNext: boolean;
}

const LevelContent: SFC<IProps> = ({ isNext, nextAvailable, level, x, y, rating }) => (
    <G x={x} y={y}>
        {
            isNext
                ? nextAvailable < 0
                    ? <LevelPending nextAvailable={nextAvailable} />
                    : <LevelNext level={level} />
                : <LevelComplete level={level} rating={rating} />
        }
    </G>
);

export default LevelContent;
