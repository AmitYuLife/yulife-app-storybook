import { Platform, StyleSheet } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../../../styles";
import {
    platformAdjust,
    platformAdjustPosition
} from "../backgrounds/backgrounds.helper";

export default StyleSheet.create({
    svg: {
        left: platformAdjustPosition(
            Platform.OS,
            isIphoneX()
        )
    },
    wrapper: {
        alignItems: "stretch",
        height: Style.DEVICE_HEIGHT,
        justifyContent: "center",
        width: Style.DEVICE_WIDTH +
            platformAdjust(
                Platform.OS,
                isIphoneX()
            )
    }
});

export const width = Style.DEVICE_WIDTH +
    platformAdjust(
        Platform.OS,
        isIphoneX()
    );

export const height = Style.DEVICE_HEIGHT;
