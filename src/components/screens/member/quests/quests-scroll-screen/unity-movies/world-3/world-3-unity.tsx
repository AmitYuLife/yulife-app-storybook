import { Text } from "@atoms/index";
import React from "react";
import { Animated, Image, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from "react-native";
import worldData from "./world-3-unity.data";
import styles from "./world-3-unity.styles";

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
            <TouchableWithoutFeedback onPress={onSkip}>
                <SafeAreaView style={styles.wrapper}>
                    <SafeAreaView
                        style={StyleSheet.flatten([
                            StyleSheet.absoluteFillObject,
                            { backgroundColor: "rgb(255,255,255)" }
                        ])}
                    >
                        <Image
                            resizeMode="cover"
                            style={styles.background}
                            source={require("../../../../../../../../assets/unity/unity-3.png")}
                        />
                    </SafeAreaView>
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
