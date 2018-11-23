import moment from "moment";
import React, { SFC } from "react";
import { G } from "react-native-svg";
import LevelComplete from "./level-complete";
import LevelNext from "./level-next";
import LevelPending from "./level-pending";

interface IProps {
    nextAvailableAt: string;
    level: number;
    x: number;
    y: number;
    rating: number;
    isNext: boolean;
}

const LevelContent: SFC<IProps> = ({ isNext, nextAvailableAt, level, x, y, rating }) => {
    const nextAvailable = !!nextAvailableAt ? moment().diff(moment(nextAvailableAt), "seconds") : 0;
    return (
        <G x={String(x)} y={String(y)}>
            {isNext ? (
                nextAvailable < 0 ? (
                    <LevelPending nextAvailableAt={nextAvailableAt} />
                ) : (
                    <LevelNext level={level} />
                )
            ) : (
                <LevelComplete level={level} rating={rating} />
            )}
        </G>
    );
};

export default LevelContent;
