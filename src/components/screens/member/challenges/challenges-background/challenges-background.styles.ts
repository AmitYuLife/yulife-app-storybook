import {
    Platform,
    StyleSheet,
    ViewStyle
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../styles";

interface IGetHeightAdjust {
    adjustHeight: number;
    isAndroid: boolean;
}

const getLeftAdjust = (isX: boolean) => isX ? -50 : 0;
const getTopAdjust = (isX: boolean) => isX ? -44 : -20;
const getWidthAdjust = (isX: boolean) => isX ? 100 : 0;
const getHeightAdjust = ({ adjustHeight, isAndroid }: IGetHeightAdjust) => {
    if (isAndroid) {
        if (adjustHeight > 600) {
            return Style.SCALE_UP_AND_DOWN(250);
        } else {
            return Style.SCALE_UP_AND_DOWN(50);
        }
    } else {
        return 0;
    }
};

export const width = Style.DEVICE_WIDTH + getWidthAdjust(isIphoneX());
export const height =
    Style.DEVICE_HEIGHT +
    getHeightAdjust({
        adjustHeight: Style.DEVICE_HEIGHT,
        isAndroid: Platform.OS === "android"
    });

const styles = StyleSheet.create({
    wrapper: {
        left: getLeftAdjust(isIphoneX()),
        top: getTopAdjust(isIphoneX())
    } as ViewStyle
});

export default styles;
