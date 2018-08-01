import * as React from "react";
import { SFC } from "react";
import {
    Animated,
    Platform,
    StyleSheet,
} from "react-native";
import { BlurView } from "react-native-blur";

interface IProps {
    blurRef: number;
    wrapperOpacity: Animated.Value;
    wrapperPosition: Animated.Value;
}

const Blur: SFC<IProps> = ({ blurRef, wrapperOpacity, wrapperPosition }) =>
    Platform.OS === "ios" ? (
        <Animated.View
            style={{
                ...StyleSheet.absoluteFillObject,
                opacity: wrapperOpacity,
                transform: [
                    {
                        translateX: wrapperPosition,
                    },
                ],
            }}
        >
            <BlurView
                blurAmount={50}
                blurType="light"
                style={StyleSheet.absoluteFill}
            />
        </Animated.View>
    ) : (
        <Animated.View
            style={{
                backgroundColor: "rgba(255,255,255,0.99)",
                ...StyleSheet.absoluteFillObject,
                opacity: wrapperOpacity,
                transform: [
                    {
                        translateX: wrapperPosition,
                    },
                ],
            }}
        >
            <BlurView
                viewRef={blurRef}
                blurAmount={50}
                blurType="light"
                style={StyleSheet.absoluteFill}
            />
        </Animated.View>
    );

export default Blur;
