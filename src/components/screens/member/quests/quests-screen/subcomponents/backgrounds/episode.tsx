import React, { PureComponent } from "react";
import { View } from "react-native";
import Svg from "react-native-svg";
import { UnityLockerImage } from "../";
import { IChallenge } from "../../quests-screen";
import { Level } from "../common";
import backgrounds from "./backgrounds";
import { getLevelFill, getLevelLockIcon } from "./episode.helpers";
import styles, { height, width } from "./episode.styles";
import levels from "./levels";

interface IProps {
    isLoading: boolean;
    isLockedLastLevel: boolean;
    data: IChallenge[];
    episodeNumber: number;
    setUnityLockerRef: (ref: UnityLockerImage) => void;
}

class Episode extends PureComponent<IProps> {
    public getLevel = (index: number) => {
        return index + 1 + (42 - 7 * (this.props.episodeNumber - 1));
    }

    public handlePressLevel = (level: IChallenge) => {
        return () => {
            if (level.onPress) {
                level.onPress();
            }
        };
    }

    public render() {
        const { data, episodeNumber, setUnityLockerRef, isLoading, isLockedLastLevel } = this.props;

        if (isLoading) {
            return <View style={styles.wrapper} />;
        }

        const Background = backgrounds(isLockedLastLevel)[episodeNumber];

        if (!Background) {
            return null;
        }

        const backgroundLevels = levels[episodeNumber];

        return (
            <View style={styles.wrapper}>
                <Svg style={styles.svg} height={String(height)} width={String(width)} viewBox="0 0 750 1334">
                    <Background>
                        {backgroundLevels.map((points, index) => {
                            const { x, y } = points;
                            const levelData = data[index];

                            return (
                                <Level
                                    onPress={this.handlePressLevel(levelData)}
                                    key={index}
                                    data={levelData}
                                    lockIcon={getLevelLockIcon({
                                        completedLevels: data.length,
                                        index,
                                        level: episodeNumber
                                    })}
                                    level={this.getLevel(index)}
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
