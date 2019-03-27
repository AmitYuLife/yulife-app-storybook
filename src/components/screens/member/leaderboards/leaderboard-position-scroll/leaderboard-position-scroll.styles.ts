import { Platform, StyleSheet, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../styles";

export const getTop = () => {
    if (isIphoneX()) {
        return 40;
    }

    if (Platform.OS === "ios") {
        return 15;
    }

    return 0;
};

const shrinkedListHeight = isIphoneX ? 40 : 15;

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        top: getTop(),
        width: "100%"
    } as ViewStyle,
    leaderboardPositionWrapper: {
        marginVertical: 30
    } as ViewStyle,
    loader: { position: "absolute", top: Style.SCALE_UP_AND_DOWN(180), left: 0, right: 0 } as ViewStyle,
    pageIndicatorWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        top: Style.SCALE_UP_AND_DOWN(getTop() + 58),
        width: "100%",
        zIndex: 2
    } as ViewStyle,
    expandList: {
        height: Style.SCALE_UP_AND_DOWN(getTop() + 385)
    } as ViewStyle,
    shrinkList: {
        height: Style.SCALE_UP_AND_DOWN(230 - Style.SCALE_UP_AND_DOWN(shrinkedListHeight + 50))
    } as ViewStyle,
    flatlist: {
        position: "absolute",
        zIndex: 2
    } as ViewStyle,
    scrollViewItem: {
        width: Style.DEVICE_WIDTH
    }
});

export const calculateListHeight = (height: number) => {
    return height - Style.SCALE_UP_AND_DOWN(Platform.OS === "android" ? 54 : isIphoneX() ? 8 : 30);
};

export default styles;
