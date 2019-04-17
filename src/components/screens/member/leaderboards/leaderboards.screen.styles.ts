import { ImageStyle, Platform, StyleSheet, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../styles";

const getTop = () => {
    if (isIphoneX()) {
        return 40;
    }

    if (Platform.OS === "ios") {
        return 15;
    }

    return 0;
};

const closeWrapperTopPosition = Platform.OS === "android" ? 15 : 5;

export default StyleSheet.create({
    arrowImageWrapper: {
        bottom: 0 - Style.SCALE_UP_AND_DOWN(1),
        flex: 0,
        left: "50%",
        position: "absolute",
        transform: [{ translateX: 0 - Style.SCALE_UP_AND_DOWN(12) }],
        width: Style.SCALE_UP_AND_DOWN(57)
    } as ViewStyle,
    backgroundImageBase: {
        width: "100%"
    } as ImageStyle,
    backgroundImageWrapper: {
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
        width: "100%"
    } as ViewStyle,
    closeWrapper: {
        height: 40,
        width: 40,
        padding: Style.SCALE_UP_AND_DOWN(10),
        position: "absolute",
        top: Style.SCALE_UP_AND_DOWN(getTop() + closeWrapperTopPosition),
        right: Style.SCALE_UP_AND_DOWN(5),
        elevation: 4,
        zIndex: 4
    } as ViewStyle,
    closeButton: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center"
    } as ViewStyle,
    giraffeImageWrapper: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: Style.SCALE_UP_AND_DOWN(15),
        position: "relative",
        width: "100%"
    } as ViewStyle,
    flatlistContainer: {
        width: Style.DEVICE_WIDTH - Style.SCALE_UP_AND_DOWN(30)
    } as ViewStyle,
    header: {
        position: "absolute",
        top: getTop(),
        width: "100%"
    } as ViewStyle,
    expandedList: {
        flex: 1,
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
        width: "100%"
    } as ViewStyle,
    shrinkedList: {
        height: Style.DEVICE_HEIGHT - Style.SCALE_UP_AND_DOWN(230),
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
        width: "100%"
    } as ViewStyle,
    wrapper: {
        backgroundColor: "white",
        flex: 1
    } as ViewStyle,
    loaderWrapper: { position: "absolute", left: 0, right: 0 } as ViewStyle,
    simpleLeaderboardHidden: {
        top: Style.SCALE_UP_AND_DOWN(50)
    } as ViewStyle,
    simpleLeaderboardShown: {
        top: Style.SCALE_UP_AND_DOWN(180)
    } as ViewStyle,
    simpleLeaderboardWrapper: { zIndex: 3 } as ViewStyle,
    simpleLeaderboardPosition: { position: "absolute", width: "100%" } as ViewStyle
});
