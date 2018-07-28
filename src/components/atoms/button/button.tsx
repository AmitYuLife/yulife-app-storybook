import * as React from "react";
import { PureComponent } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";
import {
    getShadowStyle,
    getTextStyle,
    getWrapperStyle,
} from "./button.helpers";

interface IProps {
    type: Types;
    onPress: () => void;
    label: string;
    wrapperStyle?: ViewStyle;
}

export enum BUTTON_TYPES {
    PRIMARY = "Primary",
    PRIMARY_MEDIUM = "PrimaryMedium",
    PRIMARY_SMALL = "PrimarySmall",
    SECONDARY = "Secondary",
    LINK = "Link",
}

type Types =
    | "Primary"
    | "PrimaryMedium"
    | "PrimarySmall"
    | "Secondary"
    | "Link";

class Button extends PureComponent<IProps> {

    public static Types = BUTTON_TYPES;

    public render() {
        const {
            label,
            type,
            onPress,
            wrapperStyle,
        } = this.props;
        if (
            Platform.OS === "android" &&
            type.startsWith(BUTTON_TYPES.PRIMARY)
        ) {
            return (
                <View style={wrapperStyle}>
                    <View style={getShadowStyle(type)} />
                    <TouchableOpacity
                        onPress={onPress}
                        style={getWrapperStyle(type)}
                    >
                        <Text style={getTextStyle(type)}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <TouchableOpacity
                    onPress={onPress}
                    style={StyleSheet.flatten([
                        getWrapperStyle(type),
                        wrapperStyle,
                    ])}
                >
                    <Text style={getTextStyle(type)}>
                        {label}
                    </Text>
                </TouchableOpacity>
            );
        }
    }
}

export default Button;
