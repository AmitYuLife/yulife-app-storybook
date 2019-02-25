import * as React from "react";
import { PureComponent } from "react";
import {
    RegisteredStyle,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    ViewStyle
} from "react-native";
import { getShadowStyle, getTextStyle, getWrapperOverlayStyle, getWrapperStyle } from "./button.helpers";
import { BUTTON_TYPES, Types } from "./button.types";

interface IProps {
    type: Types;
    onPress: () => void;
    label: string;
    wrapperStyle?: RegisteredStyle<ViewStyle>;
    disabled?: boolean;
    testID?: string;
}

interface IState {
    pressedIn: boolean;
}

class Button extends PureComponent<IProps, IState> {
    public static Types = BUTTON_TYPES;

    public state = {
        pressedIn: false
    };

    public render() {
        const { label, type, onPress, wrapperStyle, disabled, testID } = this.props;
        const { pressedIn } = this.state;
        if (type.startsWith(BUTTON_TYPES.PRIMARY)) {
            return (
                <View style={wrapperStyle}>
                    <View style={getShadowStyle({ type, pressedIn })} />
                    <TouchableWithoutFeedback
                        testID={testID}
                        accessibilityLabel={disabled ? "disabled" : "enabled"}
                        disabled={disabled}
                        onPressIn={this.handlePressIn}
                        onPressOut={this.handlePressOut}
                    >
                        <View style={getWrapperStyle({ type, pressedIn })}>
                            <Text style={getTextStyle(type)}>{label}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    {!disabled ? null : <View style={getWrapperOverlayStyle({ disabled })} />}
                </View>
            );
        } else {
            return (
                <TouchableOpacity
                    disabled={disabled}
                    onPress={onPress}
                    style={StyleSheet.flatten([getWrapperStyle({ type }), wrapperStyle])}
                >
                    <Text style={getTextStyle(type)}>{label}</Text>
                </TouchableOpacity>
            );
        }
    }

    private handlePressIn = () => {
        this.setState({ pressedIn: true });
    };

    private handlePressOut = () => {
        const { onPress } = this.props;
        this.setState({ pressedIn: false }, onPress);
    };
}

export default Button;
