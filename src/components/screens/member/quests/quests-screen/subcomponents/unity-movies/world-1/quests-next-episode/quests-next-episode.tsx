import React from "react";
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Text } from "../../../../../../../../atoms";
import { IChallenge } from "../../../../quests-screen";
import levels from "../../../backgrounds/levels";
import { Level, Lock } from "../../../common";
import Background from "../background";
import frames from "./frames";
import worldData from "./quests-next-episode.data";
import styles from "./quests-next-episode.styles";

interface IState {
    activeFrame: number;
    isAnimationStarted: boolean;
    textIndex: 0 | 1;
}

interface IProps {
    data: IChallenge;
    onSkip: () => void;
}

class QuestsNextEpisode extends React.PureComponent<IProps, IState> {
    public animateFramesDelay: NodeJS.Timer;
    public animateTextDelay: NodeJS.Timer;
    public state = {
        activeFrame: 0,
        isAnimationStarted: false,
        textIndex: 0
    } as IState;
    private textOpacity = new Animated.Value(0);
    private framesDelay: number[] = frames.map((_, i) => {
        switch (i) {
            case 8:
                return 5000;
            case 12:
                return 2000;
            default:
                return 120;
        }
    });

    public goToNextFrame = () => {
        if (this.state.activeFrame + 1 < frames.length) {
            this.setState(({ activeFrame }) => ({ activeFrame: activeFrame + 1 }), this.animateFrames);
        } else {
            this.setState({ isAnimationStarted: false, activeFrame: 0 });
            this.props.onSkip();
        }
    }

    public animateFrames = () => {
        this.animateFramesDelay = global.setTimeout(this.goToNextFrame, this.framesDelay[this.state.activeFrame]);
    }

    public animateText = () => {
        this.animateTextDelay = global.setTimeout(() => this.changeTextOpacity(1).start(this.animateText2), 2000);
    }

    public animateText2 = () => {
        this.animateTextDelay = global.setTimeout(
            () =>
                this.changeTextOpacity(0).start(() =>
                    this.setState({ textIndex: 1 }, () => this.changeTextOpacity(1).start(this.animateText3))
                ),
            2000
        );
    }

    public animateText3 = () => {
        this.animateTextDelay = global.setTimeout(this.changeTextOpacity(0).start, 4000);
    }

    public componentWillUnmount() {
        if (this.animateTextDelay) {
            clearTimeout(this.animateTextDelay);
        }
        if (this.animateFramesDelay) {
            clearTimeout(this.animateFramesDelay);
        }
    }

    public startAnimation = () => {
        this.setState({ isAnimationStarted: true }, () => {
            this.animateFrames();
            this.animateText();
        });
    }

    public render() {
        const { activeFrame, isAnimationStarted, textIndex } = this.state;
        const { data, onSkip } = this.props;

        if (!isAnimationStarted) {
            const backgroundLevels = levels[0][0];

            return (
                <Background>
                    {backgroundLevels.map((points, index) => {
                        const { x, y } = points;
                        const onPress = () => {
                            this.startAnimation();
                            data.onPress();
                        };
                        return (
                            <Level
                                onPress={onPress}
                                key={index}
                                level={50}
                                data={{ ...data, isDone: false, isNext: true, nextAvailableAt: "" }}
                                lockIcon={Lock}
                                fill="rgb(255,255,255)"
                                cx={x}
                                cy={y}
                            />
                        );
                    })}
                </Background>
            );
        }

        const Frame = frames[activeFrame];

        return (
            <TouchableWithoutFeedback onPress={onSkip}>
                <View>
                    <Frame />
                    <Animated.View style={[{ opacity: this.textOpacity }, styles.textWrapper]}>
                        <Text bold={true} style={StyleSheet.flatten([styles.bigText, styles.center])}>
                            {worldData.heading[textIndex]}
                        </Text>
                        <Text
                            bold={!!textIndex}
                            style={StyleSheet.flatten([textIndex ? styles.bigText : styles.smallText, styles.center])}
                        >
                            {worldData.subheading[textIndex]}
                        </Text>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    private changeTextOpacity = (toValue: number) => {
        return Animated.timing(this.textOpacity, {
            toValue,
            useNativeDriver: true
        });
    }
}

export default QuestsNextEpisode;
