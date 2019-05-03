import { TouchableOpacityWithState } from "@molecules/index";
import moment from "moment";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Style } from "../../../../../../../styles";
import { IChallenge } from "../../quests-screen";
import { IMapSlice } from "../index";
import getLevelButton from "./level.content";
import { getBackgroundColor, getButtonPosition } from "./level.helpers";
import styles, { CIRCLE_SIZE } from "./level.styles";
import Pulse from "./pulse";

interface IProps {
    currentLevel: number;
    index: number;
    level: IChallenge;
    slice: IMapSlice;
}

interface IState {
    style: {
        bottom?: number;
        left: number;
        top?: number;
    };
    pulseValue: number;
}

export default class LevelBubble extends React.PureComponent<IProps, IState> {
    public state: IState = {
        pulseValue: 50,
        style: getButtonPosition(this.props.slice, this.props.index)
    };

    public render() {
        const { currentLevel, level } = this.props;
        const { style } = this.state;
        const nextAvailable = !!level.nextAvailableAt ? moment().diff(moment(level.nextAvailableAt), "seconds") : 0;
        const bubbleBackgroundColor = getBackgroundColor(nextAvailable, level);

        return (
            <>
                {!level.isActive ? null : (
                    <Pulse
                        size={CIRCLE_SIZE + 6}
                        pulseMaxSize={Style.SCALE_UP_AND_DOWN(66)}
                        interval={nextAvailable < 0 ? 1250 : 750}
                        backgroundColor="rgb(145,0,76)"
                        style={style}
                    />
                )}
                <TouchableOpacityWithState
                    onPress={level.onPress}
                    style={StyleSheet.flatten([
                        styles.bubble,
                        {
                            backgroundColor: bubbleBackgroundColor,
                            ...style
                        }
                    ])}
                >
                    {getLevelButton(nextAvailable, currentLevel, level)}
                </TouchableOpacityWithState>
            </>
        );
    }
}
