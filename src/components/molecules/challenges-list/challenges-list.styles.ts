import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../styles";

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        marginTop: Style.isShortAndroid() ? -50 : 0,
    } as ViewStyle,
    column: {
        height: Style.isShortAndroid() ? 410 : "auto",
        paddingTop: Style.isShortAndroid() ? 60 : 0,
        borderWidth: 1,
        borderColor: "transparent",
        justifyContent: Style.isShortAndroid() ? "space-around" : "flex-start",
    } as ViewStyle,
    rightColumnWrapper: {
        marginLeft: "auto",
        marginTop: Style.SCALE_UP_AND_DOWN(37),
    } as ViewStyle,
});

export default styles;
