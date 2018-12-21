// import { Platform } from "react-native";
import { LinearGradient, LinearGradientProps } from "react-native-svg";
import { Style } from "../../../../../../../../styles";

export const LinearGradientWithProps = LinearGradient as React.ComponentClass<
    LinearGradientProps & { gradientTransform?: string }
>;

export const platformAdjustments = {
    scale: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? 1.1 : 1,
    translateX: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? -30 : 0
};
