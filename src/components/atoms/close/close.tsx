import * as React from "react";
import { SFC } from "react";
import { Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedbackProps, ViewStyle } from "react-native";
import { Style } from "../../../styles";

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        right: Style.SCALE_UP_AND_DOWN(15),
        top: 0,
    } as ViewStyle,
});

const Close: SFC<TouchableWithoutFeedbackProps> = ({ onPress }) => (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Image source={require("./assets/close.png")} />
    </TouchableOpacity>
);

export default Close;
