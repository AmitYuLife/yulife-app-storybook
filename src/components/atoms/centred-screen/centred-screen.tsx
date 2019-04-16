import * as React from "react";
import { Image, SafeAreaView, StyleSheet, View, ViewStyle } from "react-native";
import { getImageAndStyle } from "./centred-screen.helpers";
import styles from "./centred-screen.styles";

interface IProps {
    children?: React.ReactNode;
    footerImage?: CenteredScreenImages;
    style?: ViewStyle;
    testID?: string;
}

export type CenteredScreenImages =
    | "forest"
    | "large_forest"
    | "gray_forest"
    | "challenge_failed_forest"
    | "ocean"
    | "gray_ocean"
    | "challenge_failed_ocean"
    | "desert"
    | "gray_desert"
    | "challenge_failed_desert";

export default function CenteredScreen({ children, footerImage, style, testID }: IProps) {
    return (
        <SafeAreaView style={StyleSheet.flatten([styles.wrapper, style])} testID={testID}>
            {!footerImage ? null : (
                <View style={styles.imageWrapper}>
                    <Image resizeMode="cover" {...getImageAndStyle(footerImage)} />
                </View>
            )}
            {children}
        </SafeAreaView>
    );
}
