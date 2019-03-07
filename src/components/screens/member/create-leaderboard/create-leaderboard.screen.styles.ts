import { StyleSheet, ViewStyle } from "react-native";
import { Colours, Style } from "../../../../styles";

export default StyleSheet.create({
    createButton: { paddingBottom: 24 } as ViewStyle,
    flatListStyle: {
        marginVertical: Style.SCALE_UP_AND_DOWN(20),
        width: "100%"
    } as ViewStyle,
    flatListContainerStyle: {
        paddingVertical: Style.SCALE_UP_AND_DOWN(20),
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(44)
    } as ViewStyle,
    flatlistItemRemoveButton: {
        height: 10,
        width: 10,
        padding: 2,
        justifyContent: "center",
        alignItems: "center",
        right: 2,
        top: 15,
        bottom: 0,
        overflow: "hidden"
    } as ViewStyle,
    flatlistItem: {
        borderBottomColor: Colours.gray,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingLeft: 10,
        paddingVertical: 10
    } as ViewStyle,
    inviteesWrapper: {
        paddingHorizontal: 44
    } as ViewStyle
});
