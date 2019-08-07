import { Text } from "@atoms/index";
import * as React from "react";
import { Animated, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import * as Animatable from "react-native-animatable";
import FastImage from "react-native-fast-image";
import { CIRCLE_SIZE } from "../../assets/level/level.styles";
import Pulse from "../../assets/level/pulse";
import { Corals, OrangeCircle, Pyramid, RedCircle, Trees } from "../svg";
import { initializeAnimation } from "../world-animations";
import assets from "./assets";
import worldData from "./world-3-unity.data";
import styles from "./world-3-unity.styles";

const AnimatableFastImage = Animatable.createAnimatableComponent(FastImage);

interface IState {
    textIndex: 0 | 1;
}

interface IProps {
    onSkip: () => void;
}

class World2Unity extends React.PureComponent<IProps, IState> {
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
        this.animateTextDelay = global.setTimeout(() => this.changeTextOpacity(1).start(this.animateText2), 3000);
    };

    public animateText2 = () => {
        this.animateTextDelay = global.setTimeout(
            () =>
                this.changeTextOpacity(0).start(() =>
                    this.setState({ textIndex: 1 }, () => this.changeTextOpacity(1).start(this.animateText3))
                ),
            3000
        );
    };

    public animateText3 = () => {
        this.animateTextDelay = global.setTimeout(() => this.changeTextOpacity(0).start(this.props.onSkip), 3000);
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
                <SafeAreaView style={StyleSheet.absoluteFill}>
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
                            <View style={styles.treesWrapper}>
                                <Trees />
                            </View>
                            <View style={styles.coralsWrapper}>
                                <Corals />
                            </View>
                            <Animatable.View
                                style={styles.pyramidWrapper}
                                useNativeDriver={true}
                                animation="scaleIconAnimation"
                                duration={12000}
                            >
                                <Pyramid />
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
                        <AnimatableFastImage
                            animation="imageAnimation"
                            duration={12000}
                            useNativeDriver={true}
                            source={assets[0]}
                            style={styles.image}
                        />
                        <AnimatableFastImage
                            animation="imageAnimation"
                            duration={12000}
                            useNativeDriver={true}
                            source={assets[1]}
                            style={styles.image}
                        />
                        <AnimatableFastImage
                            animation="imageAnimation"
                            duration={12000}
                            useNativeDriver={true}
                            source={assets[2]}
                            style={styles.image}
                        />
                        <AnimatableFastImage
                            animation="imageAnimation"
                            duration={12000}
                            useNativeDriver={true}
                            source={assets[3]}
                            style={styles.image}
                        />
                        <AnimatableFastImage
                            animation="imageAnimation"
                            duration={12000}
                            useNativeDriver={true}
                            source={assets[4]}
                            style={styles.image}
                        />
                    </Animatable.View>
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
                </SafeAreaView>
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

export default World2Unity;
