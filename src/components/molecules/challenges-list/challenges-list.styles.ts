import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../styles";

const styles = StyleSheet.create({
    column: {
        borderColor: "transparent",
        borderWidth: 1,
        height: Style.isShortAndroid() ? 410 : "auto",
        justifyContent: Style.isShortAndroid() ? "space-around" : "flex-start",
        paddingTop: Style.isShortAndroid() ? 60 : 0,
    } as ViewStyle,
    rightColumnWrapper: {
        marginLeft: "auto",
        marginTop: Style.SCALE_UP_AND_DOWN(37),
    } as ViewStyle,
    wrapper: {
        flexDirection: "row",
        height: "100%",
        marginTop: Style.isShortAndroid() ? -50 : 0,
        width: "100%",
    } as ViewStyle,
});

export default styles;
