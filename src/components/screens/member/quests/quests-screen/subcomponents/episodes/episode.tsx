import React, { PureComponent } from "react";
import { View } from "react-native";
import Svg from "react-native-svg";
import { UnityLockerImage } from "..";
import { IChallenge } from "../../quests-screen";
import backgrounds from "../backgrounds/backgrounds";
import levels from "../backgrounds/levels";
import { Level } from "../common";
import getUnity from "../unity-movies/unity";
import { getLevelFill, getLevelLockIcon } from "./episode.helpers";
import styles, { height, width } from "./episode.styles";

interface IProps {
    currentLevel: number;
    isLoading: boolean;
    isLockedLastLevel: boolean;
    data: IChallenge[];
    episodeNumber: number;
    hasActivePulse: boolean;
    setUnityLockerRef: (ref: UnityLockerImage) => void;
    firstLevelNumber: number;
    worldNumber: number;
    onScrollToCurrentLevel: () => void;
}

class Episode extends PureComponent<IProps> {
    public handlePressLevelNull = (): null => null;

    public render() {
        const {
            currentLevel,
            data,
            episodeNumber,
            firstLevelNumber,
            hasActivePulse,
            isLoading,
            isLockedLastLevel,
            setUnityLockerRef,
            worldNumber,
            onScrollToCurrentLevel
        } = this.props;

        if (isLoading) {
            return <View style={styles.wrapper} />;
        }

        // it's unity
        if (!episodeNumber) {
            const Unity = getUnity(worldNumber, isLockedLastLevel);

            return (
                <View style={styles.wrapper}>
                    <Unity data={data[0]} onSkip={onScrollToCurrentLevel} />
                </View>
            );
        }

        const Background = backgrounds(worldNumber)[episodeNumber];

        if (!Background) {
            return null;
        }

        const backgroundLevels = levels[worldNumber][episodeNumber];

        return (
            <View style={styles.wrapper}>
                <Svg style={styles.svg} height={String(height)} width={String(width)} viewBox="0 0 750 1334">
                    <Background>
                        {backgroundLevels.map((points, index) => {
                            const { x, y } = points;
                            const levelData = data[index];

                            return (
                                <Level
                                    hasActivePulse={hasActivePulse}
                                    onPress={
                                        levelData && levelData.onPress ? levelData.onPress : this.handlePressLevelNull
                                    }
                                    key={index}
                                    data={levelData}
                                    lockIcon={getLevelLockIcon({
                                        currentLevel,
                                        episode: episodeNumber,
                                        isChest: !!levelData.levelChestId,
                                        level: index,
                                        worldNumber
                                    })}
                                    level={firstLevelNumber + index + 1}
                                    fill={getLevelFill(episodeNumber)}
                                    cx={x}
                                    cy={y}
                                />
                            );
                        })}
                    </Background>
                </Svg>
                {episodeNumber !== 1 ? null : <UnityLockerImage ref={setUnityLockerRef} />}
            </View>
        );
    }
}

export default Episode;
