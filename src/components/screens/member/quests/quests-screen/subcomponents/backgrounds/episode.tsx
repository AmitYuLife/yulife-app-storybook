import React, { PureComponent } from "react";
import {
    View
} from "react-native";
import Svg from "react-native-svg";
import { UnityLockerImage } from "../";
import { IChallenge } from "../../quests-screen";
import { Level } from "../common";
import backgrounds from "./backgrounds";
import { getLevelFill, getLevelLockIcon } from "./episode.helpers";
import styles, { height, width } from "./episode.styles";
import levels from "./levels";

interface IProps {
    isLockedLastLevel: boolean;
    data: IChallenge[];
    level: number;
    setUnityLockerRef: (ref: UnityLockerImage) => void;
}

class Episode extends PureComponent<IProps> {
    public getLevel = (index: number) => {
        return (index + 1) + (42 - (7 * (this.props.level - 1)));
    }

    public handlePressLevel = (level: IChallenge) => {
        return (): null => {
            if (level.isNext) {
                level.onPress();
                return null;
            } else {
                // handle press locked level
                return null;
            }
        };
    }

    public render() {
        const {
            data,
            level,
            setUnityLockerRef,
            isLockedLastLevel
        } = this.props;
        const Background = backgrounds(isLockedLastLevel)[level];
        if (!Background) {
            return null;
        }

        const backgroundLevels = levels[level];
        return (
            <View
                style={styles.wrapper}
            >
                <Svg
                    style={styles.svg}
                    height={height}
                    width={width}
                    viewBox="0 0 750 1334"
                >
                    <Background>
                        {backgroundLevels.map((points, index) => {
                            const { x, y } = points;
                            const levelData = data[index];

                            return <Level
                                onPress={this.handlePressLevel(levelData)}
                                key={index}
                                data={levelData}
                                lockIcon={getLevelLockIcon({ level, index, completedLevels: data.length })}
                                level={this.getLevel(index)}
                                fill={getLevelFill(level)}
                                cx={x}
                                cy={y}
                            />;
                        })}
                    </Background>
                </Svg >
                {
                    level !== 1 ? null : (
                        <UnityLockerImage ref={setUnityLockerRef} />
                    )
                }
            </View>
        );
    }
}

export default Episode;
