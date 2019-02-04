import * as React from "react";
import { SFC } from "react";
import { Image, RegisteredStyle, SafeAreaView, StyleSheet, View, ViewStyle } from "react-native";
import { getImageAndStyle } from "./centred-screen.helpers";
import styles from "./centred-screen.styles";

interface IProps {
    footerImage?: CenteredScreenImages;
    style?: RegisteredStyle<ViewStyle>;
}

export type CenteredScreenImages =
    | "forest"
    | "large_forest"
    | "gray_forest"
    | "challenge_failed_forest"
    | "ocean"
    | "gray_ocean"
    | "challenge_failed_ocean";

const CenteredScreen: SFC<IProps> = ({ children, footerImage, style }) => (
    <SafeAreaView style={StyleSheet.flatten([styles.wrapper, style])}>
        {!footerImage ? null : (
            <View style={styles.imageWrapper}>
                <Image resizeMode="cover" {...getImageAndStyle(footerImage)} />
            </View>
        )}
        {children}
    </SafeAreaView>
);

export default CenteredScreen;
