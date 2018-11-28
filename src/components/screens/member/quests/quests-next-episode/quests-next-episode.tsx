import React from "react";
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Text } from "../../../../atoms";
import frames from "./frames";
import data from "./quests-next-episode.data";
import styles from "./quests-next-episode.styles";

interface IState {
    activeFrame: number;
    textIndex: 0 | 1;
}

interface IProps {
    onSkip: () => void;
}

class QuestsNextEpisode extends React.PureComponent<IProps, IState> {
    public animateFramesDelay: NodeJS.Timer;
    public animateTextDelay: NodeJS.Timer;
    public state = {
        activeFrame: 0,
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
            this.setState(
                ({ activeFrame }) => ({ activeFrame: activeFrame + 1 }),
                this.animateFrames
            );
        }
    }

    public animateFrames = () => {
        this.animateFramesDelay = global.setTimeout(
            this.goToNextFrame,
            this.framesDelay[this.state.activeFrame]
        );
    }

    public animateText = () => {
        this.animateTextDelay = global.setTimeout(
            () => this.changeTextOpacity(1).start(this.animateText2),
            2000
        );
    }

    public animateText2 = () => {
        this.animateTextDelay = global.setTimeout(
            () => this.changeTextOpacity(0).start(
                () => this.setState(
                    { textIndex: 1 },
                    () => this.changeTextOpacity(1).start(this.animateText3)
                )
            ),
            2000
        );
    }

    public animateText3 = () => {
        this.animateTextDelay = global.setTimeout(
            this.changeTextOpacity(0).start,
            4000
        );
    }

    public componentWillUnmount() {
        clearTimeout(this.animateFramesDelay);
        clearTimeout(this.animateTextDelay);
    }

    public componentDidMount() {
        this.animateFrames();
        this.animateText();
    }

    public render() {
        const Background = frames[this.state.activeFrame];
        const { textIndex } = this.state;
        return (
            <TouchableWithoutFeedback
                onPress={this.props.onSkip}
            >
                <View>
                    <Background />
                    <Animated.View
                        style={[
                            { opacity: this.textOpacity },
                            styles.textWrapper
                        ]}
                    >
                        <Text
                            bold={true}
                            style={StyleSheet.flatten([styles.bigText, styles.center])}
                        >
                            {data.heading[textIndex]}
                        </Text>
                        <Text
                            bold={!!textIndex}
                            style={StyleSheet.flatten([textIndex ? styles.bigText : styles.smallText, styles.center])}
                        >
                            {data.subheading[textIndex]}
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
