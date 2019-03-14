import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
    arrow: {
        transform: [{ rotate: "180deg" }]
    } as ImageStyle,
    itemWrapper: {
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: Style.SCALE_UP_AND_DOWN(15),
        paddingVertical: Style.SCALE_UP_AND_DOWN(15)
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});
