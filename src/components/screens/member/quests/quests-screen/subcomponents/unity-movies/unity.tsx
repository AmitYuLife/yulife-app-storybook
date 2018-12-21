import React from "react";
import Svg from "react-native-svg";
import styles, { height, width } from "../episodes/episode.styles";
import World1Movie from "./world-1/quests-next-episode/quests-next-episode";

const UnityLevelLocker: React.SFC<React.ReactNode> = () => (
    <Svg style={styles.svg} height={String(height)} width={String(width)} viewBox="0 0 750 1334" />
);

const getUnity = (currentWorldNumber: number, isLockedLastLevel: boolean): any => {
    switch (currentWorldNumber) {
        case 1:
            return isLockedLastLevel ? UnityLevelLocker : World1Movie;
        case 0:
        default:
            return isLockedLastLevel ? UnityLevelLocker : World1Movie;
    }
};

export default getUnity;
