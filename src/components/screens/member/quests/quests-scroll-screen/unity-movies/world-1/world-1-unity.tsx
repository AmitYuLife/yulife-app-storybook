import * as React from "react";
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Text } from "../../../../../../atoms";
import { MAP_SLICE_HEIGHT } from "../../assets";
import { CIRCLE_SIZE } from "../../assets/level/level.styles";
import Pulse from "../../assets/level/pulse";
import OrangeCircle from "./svg/orange-circle";
import RedCircle from "./svg/red-circle";
import Trees from "./svg/trees";
import { initializeAnimation } from "./world-1-animation";
import world1UnityData from "./world-1-unity.data";
import styles from "./world-1-unity.styles";

interface IState {
    textIndex: 0 | 1;
}

interface IProps {
    onSkip: () => void;
}

class World1Unity extends React.PureComponent<IProps, IState> {
    public animateFramesDelay: NodeJS.Timer;
    public animateTextDelay: NodeJS.Timer;
    public state = {
        textIndex: 0
    } as IState;
    private textOpacity = new Animated.Value(0);

    public componentWillMount() {
        initializeAnimation();
    }

    public animateText = () => {
        this.animateTextDelay = global.setTimeout(() => this.changeTextOpacity(1).start(this.animateText2), 2000);
    };

    public animateText2 = () => {
        this.animateTextDelay = global.setTimeout(
            () =>
                this.changeTextOpacity(0).start(() =>
                    this.setState({ textIndex: 1 }, () => this.changeTextOpacity(1).start(this.animateText3))
                ),
            2000
        );
    };

    public animateText3 = () => {
        this.animateTextDelay = global.setTimeout(() => this.changeTextOpacity(0).start(this.props.onSkip), 4000);
    };

    public componentDidMount() {
        this.animateText();
    }

    public componentWillUnmount() {
        if (this.animateTextDelay) {
            clearTimeout(this.animateTextDelay);
        }
        if (this.animateFramesDelay) {
            clearTimeout(this.animateFramesDelay);
        }
    }

    public render() {
        const { textIndex } = this.state;
        const { onSkip } = this.props;

        return (
            <TouchableWithoutFeedback style={styles.wrapper} onPress={onSkip}>
                <View style={StyleSheet.absoluteFill}>
                    <Animatable.View
                        style={styles.wrapper}
                        duration={12000}
                        animation="wrapperAnimation"
                        useNativeDriver={true}
                    >
                        <Animatable.View
                            style={styles.orangeBubble}
                            animation="orangeCircleAnimation"
                            duration={12000}
                            useNativeDriver={true}
                        >
                            <Animatable.View
                                style={styles.treesWrapper}
                                useNativeDriver={true}
                                animation="treesAnimation"
                                duration={12000}
                            >
                                <Trees />
                            </Animatable.View>
                            <OrangeCircle />
                            <RedCircle />
                        </Animatable.View>
                        <Animatable.View
                            style={styles.bubble}
                            useNativeDriver={true}
                            animation="pulseAnimation"
                            duration={12000}
                        >
                            <Pulse
                                size={CIRCLE_SIZE + 6}
                                pulseMaxSize={66}
                                interval={1250}
                                backgroundColor="rgb(145,0,76)"
                                style={{
                                    bottom: 0
                                }}
                            />
                        </Animatable.View>
                        <Animatable.View
                            useNativeDriver={true}
                            style={styles.bubble}
                            animation="bubbleAnimation"
                            duration={12000}
                        />

                        <Animatable.Image
                            duration={12000}
                            animation="imageAnimation"
                            useNativeDriver={true}
                            source={require("../../../../../../../../assets/quest-slices/w1s28.png")}
                            style={{ height: MAP_SLICE_HEIGHT, width: "100%" }}
                        />
                        <Animatable.Image
                            duration={12000}
                            animation="imageAnimation"
                            useNativeDriver={true}
                            source={require("../../../../../../../../assets/quest-slices/w1s27.png")}
                            style={{ height: MAP_SLICE_HEIGHT, width: "100%" }}
                        />
                        <Animatable.Image
                            duration={12000}
                            animation="imageAnimation"
                            useNativeDriver={true}
                            source={require("../../../../../../../../assets/quest-slices/w1s26.png")}
                            style={{ height: MAP_SLICE_HEIGHT, width: "100%" }}
                        />
                        <Animatable.Image
                            duration={12000}
                            animation="imageAnimation"
                            useNativeDriver={true}
                            source={require("../../../../../../../../assets/quest-slices/w1s25.png")}
                            style={{ height: MAP_SLICE_HEIGHT, width: "100%" }}
                        />
                        <Animatable.Image
                            duration={12000}
                            animation="imageAnimation"
                            useNativeDriver={true}
                            source={require("../../../../../../../../assets/quest-slices/w1s24.png")}
                            style={{ height: MAP_SLICE_HEIGHT, width: "100%" }}
                        />
                    </Animatable.View>
                    <Animated.View style={[{ opacity: this.textOpacity }, styles.textWrapper]}>
                        <Text bold={true} style={StyleSheet.flatten([styles.bigText, styles.center])}>
                            {world1UnityData.heading[textIndex]}
                        </Text>
                        <Text
                            bold={!!textIndex}
                            style={StyleSheet.flatten([textIndex ? styles.bigText : styles.smallText, styles.center])}
                        >
                            {world1UnityData.subheading[textIndex]}
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
    };
}

export default World1Unity;
