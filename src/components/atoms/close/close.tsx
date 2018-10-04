import * as React from "react";
import { SFC } from "react";
import {
    Image,
    Platform,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedbackProps,
    ViewStyle
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../styles";

const getTop = () => {
    if (isIphoneX()) {
        return 65;
    }

    if (Platform.OS === "ios") {
        return 40;
    }

    return 25;
};

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        right: Style.SCALE_UP_AND_DOWN(15),
        top: Style.SCALE_UP_AND_DOWN(getTop())
    } as ViewStyle
});

const Close: SFC<TouchableWithoutFeedbackProps> = ({ onPress }) => (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Image source={require("../../../../assets/close/close.png")} />
    </TouchableOpacity>
);

export default Close;
