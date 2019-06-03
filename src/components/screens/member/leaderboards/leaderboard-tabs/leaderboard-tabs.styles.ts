import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../../../styles";

export default StyleSheet.create({
    pageIndicatorScroll: {
        width: "100%",
        paddingHorizontal: 15
    } as ViewStyle,
    pageIndicatorContentContainerScroll: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    } as ViewStyle,
    pageIndicator: {
        marginHorizontal: 8
    } as ViewStyle,
    tabsWrapper: {
        backgroundColor: "white",
        width: "100%"
    } as ViewStyle,
    tabs: {
        flexDirection: "row",
        backgroundColor: "white",
        borderTopWidth: 1,
        borderColor: "rgb(254, 250, 191)",
        marginHorizontal: Style.SCALE_UP_AND_DOWN(15),
        justifyContent: "space-between"
    } as ViewStyle,
    tabButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: Style.SCALE_UP_AND_DOWN(50),
        borderBottomWidth: 1,
        borderColor: "rgb(254, 250, 191)"
    } as ViewStyle,
    rightTabButton: {
        borderRightWidth: 1
    } as ViewStyle,
    leftTabButton: {
        borderLeftWidth: 1
    } as ViewStyle,
    middleTabButton: { flex: 1.5 } as ViewStyle,
    text: {
        fontSize: 18,
        lineHeight: 20,
        textAlign: "center"
    } as TextStyle,
    leftTabBorderWrapper: {
        borderLeftWidth: 1,
        borderLeftColor: "rgb(194, 170, 52)",
        height: 22,
        width: "100%"
    } as ViewStyle,
    rightTabBorderWrapper: {
        borderRightWidth: 1,
        borderRightColor: "rgb(194, 170, 52)",
        height: 22,
        width: "100%"
    } as ViewStyle,
    tabBorder: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderLeftColor: "rgb(194, 170, 52)",
        borderRightColor: "rgb(194, 170, 52)",
        height: 22,
        width: "100%"
    } as ViewStyle,
    activeTab: {
        borderBottomColor: Colours.darkHotPink,
        borderBottomWidth: 1
    },
    activeTabText: {
        color: Colours.darkHotPink
    } as TextStyle
});
