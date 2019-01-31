import moment from "moment";
import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
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
    bubbleLeftPosition: number;
    pulseValue: number;
}

export default class LevelBubble extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            bubbleLeftPosition: getButtonPosition(props.slice, props.index),
            pulseValue: 50
        };
    }

    public render() {
        const { currentLevel, level } = this.props;
        const { bubbleLeftPosition } = this.state;
        const nextAvailable = !!level.nextAvailableAt ? moment().diff(moment(level.nextAvailableAt), "seconds") : 0;
        const bubbleBackgroundColor = getBackgroundColor(nextAvailable, level);

        return (
            <>
                {!level.isActive ? null : (
                    <Pulse
                        size={CIRCLE_SIZE + 6}
                        pulseMaxSize={66}
                        interval={nextAvailable < 0 ? 1250 : 750}
                        backgroundColor="rgb(145,0,76)"
                        style={{ left: bubbleLeftPosition }}
                    />
                )}
                <TouchableOpacity
                    onPress={level.onPress}
                    style={StyleSheet.flatten([
                        styles.bubble,
                        {
                            backgroundColor: bubbleBackgroundColor,
                            left: bubbleLeftPosition
                        }
                    ])}
                >
                    {getLevelButton(nextAvailable, currentLevel, level)}
                </TouchableOpacity>
            </>
        );
    }
}
