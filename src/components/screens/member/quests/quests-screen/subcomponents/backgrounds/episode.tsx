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
    data: IChallenge[];
    level: number;
    setUnityLockerRef: (ref: UnityLockerImage) => void;
}

class Episode extends PureComponent<IProps> {
    public render() {
        const {
            data,
            level,
            setUnityLockerRef
        } = this.props;
        const Background = backgrounds[level];
        if (!Background) {
            return null;
        }

        const backgroundLevels = levels[level - 1];
        return (
            <View style={styles.wrapper}>
                <Svg
                    style={styles.svg}
                    height={height}
                    width={width}
                    viewBox="0 0 750 1334"
                >
                    <Background>
                        {!level ? null : backgroundLevels.map(({ x, y }, index) => (
                            <Level
                                data={data[index]}
                                lockIcon={getLevelLockIcon({ level, index, completedLevels: data.length })}
                                key={index}
                                level={index + 1}
                                fill={getLevelFill(level)}
                                cx={x}
                                cy={y}
                                size="50"
                            />
                        ))}
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
