import {
    Platform,
    StyleSheet,
    TextStyle,
    ViewStyle
} from "react-native";
import { Colours, Style } from "../../../../../../styles";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        alignSelf: "stretch",
        flexDirection: "row",
        marginHorizontal: Style.SCALE_UP_AND_DOWN(15)
    } as ViewStyle,
    counterPosition: {
        alignItems: "baseline",
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        top: Style.SCALE_UP_AND_DOWN(15)
    },
    stepsText: {
        color: Colours.progressBar.heading,
        fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
        fontSize: Style.SCALE_UP_AND_DOWN(40),
        textAlign: "center"
    } as TextStyle,
    timeLabel: {
        lineHeight:
            Platform.OS === "ios"
                ? Style.SCALE_UP_AND_DOWN(20)
                : Style.SCALE_UP_AND_DOWN(35),
        marginHorizontal: Style.SCALE_UP_AND_DOWN(5)
    }
});

export default styles;
