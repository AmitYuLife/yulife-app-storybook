import { LEVEL_CHALLENGE_BUTTON } from "@ids";
import { TouchableOpacityWithState } from "@molecules/index";
import moment from "moment";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Style } from "../../../../../../../styles";
import { IChallenge } from "../../quests-screen";
import { IMapSlice } from "../index";
import getLevelButton from "./level.content";
import { getBackgroundColor, getButtonPosition, getShadowColor, getShadowPosition } from "./level.helpers";
import styles, { CIRCLE_SIZE } from "./level.styles";
import Pulse from "./pulse";

interface IProps {
    currentLevel: number;
    index: number;
    level: IChallenge;
    slice: IMapSlice;
}

interface IState {
    nextAvailable: number | null;
}

export default class LevelBubble extends React.Component<IProps, IState> {
    public state: IState = {
        nextAvailable: null
    };
    private interval: NodeJS.Timer;
    private style = getButtonPosition(this.props.slice, this.props.index, false);
    private pulseStyle = getButtonPosition(this.props.slice, this.props.index, true);

    public componentDidMount() {
        const level = this.props.level;
        const nextAvailable = !!level.nextAvailableAt ? moment().diff(moment(level.nextAvailableAt), "seconds") : 0;

        if (nextAvailable < 0) {
            this.setState({ nextAvailable }, () => {
                this.interval = global.setInterval(this.handleUpdateNextAvailable, 1000);
            });
        }
    }

    public componentWillUnmount() {
        if (this.interval) {
            global.clearInterval(this.interval);
        }
    }

    public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
        return (
            nextState.nextAvailable !== this.state.nextAvailable ||
            nextProps.currentLevel !== this.props.currentLevel ||
            nextProps.level.isActive !== this.props.level.isActive ||
            nextProps.level.isDone !== this.props.level.isDone ||
            nextProps.level.isNext !== this.props.level.isNext ||
            nextProps.level.nextAvailableAt !== this.props.level.nextAvailableAt ||
            nextProps.level.rating !== this.props.level.rating
        );
    }

    public render() {
        const { nextAvailable } = this.state;
        const { currentLevel, level } = this.props;
        const bubbleBackgroundColor = getBackgroundColor(nextAvailable, level);
        const shadowStyle = getShadowPosition(this.style);
        const shadowColor = getShadowColor(level.level);
        return (
            <>
                {!level.isActive ? null : (
                    <Pulse
                        size={CIRCLE_SIZE + 6}
                        pulseMaxSize={Style.SCALE_UP_AND_DOWN(66)}
                        interval={nextAvailable < 0 ? 1250 : 750}
                        backgroundColor="rgb(145,0,76)"
                        style={this.pulseStyle}
                    />
                )}
                {!shadowColor || level.isActive ? null : (
                    <View style={StyleSheet.flatten([styles.bubble, shadowStyle])}>
                        <View style={[styles.bubbleButton, shadowColor]} />
                    </View>
                )}
                <View style={StyleSheet.flatten([styles.bubble, this.style])}>
                    <TouchableOpacityWithState
                        onPress={level.onPress}
                        style={StyleSheet.flatten([
                            styles.bubbleButton,
                            {
                                backgroundColor: bubbleBackgroundColor
                            }
                        ])}
                        hitSlop={{
                            top: Style.SCALE_UP_AND_DOWN(10),
                            left: Style.SCALE_UP_AND_DOWN(10),
                            right: Style.SCALE_UP_AND_DOWN(10),
                            bottom: Style.SCALE_UP_AND_DOWN(10)
                        }}
                        testID={LEVEL_CHALLENGE_BUTTON(level.level)}
                    >
                        {getLevelButton(nextAvailable, currentLevel, level)}
                    </TouchableOpacityWithState>
                </View>
            </>
        );
    }

    private handleUpdateNextAvailable = () => {
        const nextAvailable = moment().diff(moment(this.props.level.nextAvailableAt), "seconds");

        if (nextAvailable < 0) {
            this.setState({ nextAvailable });
        } else {
            if (this.interval) {
                global.clearInterval(this.interval);
            }
            this.setState({ nextAvailable: null });
        }
    };
}
