import * as React from "react";
import { Animated, Platform, StyleSheet } from "react-native";
import { BlurView } from "react-native-blur";

interface IProps {
    blurRef: number;
    wrapperOpacity: Animated.Value;
    wrapperPosition: Animated.Value;
}

export default function Blur({ blurRef, wrapperOpacity, wrapperPosition }: IProps) {
    return Platform.OS === "ios" ? (
        <Animated.View
            style={{
                ...StyleSheet.absoluteFillObject,
                opacity: wrapperOpacity,
                transform: [
                    {
                        translateX: wrapperPosition
                    }
                ]
            }}
        >
            <BlurView blurAmount={15} blurType="light" style={StyleSheet.absoluteFillObject} />
        </Animated.View>
    ) : (
        <Animated.View
            style={{
                backgroundColor: "rgba(255,255,255,0.99)",
                ...StyleSheet.absoluteFillObject,
                opacity: wrapperOpacity,
                transform: [
                    {
                        translateX: wrapperPosition
                    }
                ]
            }}
        >
            <BlurView viewRef={blurRef} blurAmount={15} blurType="light" style={StyleSheet.absoluteFillObject} />
        </Animated.View>
    );
}
