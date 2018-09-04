import * as React from "react";
import { StyleSheet, TextInput as Input, View, ViewStyle } from "react-native";
import TextInputError from "./text-input-error";
import { getColour, getIcon, getPlaceholder, getStyle, getValue, getWrapperStyle } from "./text-input.helpers";
import styles from "./text-input.styles";

interface IProps {
    value: string;
    onChange: (value: string) => void;
    hasError?: boolean;
    errorMessage?: string;
    type: Types;
    onBlur?: (value: string) => void;
    placeholder?: string;
    style?: ViewStyle;
}

export enum TEXT_INPUT_TYPES {
    EMAIL = "Email",
    PASSWORD = "Password",
    TEXT = "Text",
    CARD = "Card"
}

export type Types = "Email" | "Password" | "Text" | "Card";

class TextInput extends React.PureComponent<IProps> {
    public static Types = TEXT_INPUT_TYPES;
    public cardInput: Input;
    public state = {
        isFocused: false
    };

    public render() {
        const { value, onChange, hasError, errorMessage, type, placeholder = "", style } = this.props;
        const { isFocused } = this.state;
        const Icon = getIcon(type);
        return (
            <View style={StyleSheet.flatten([styles.outerWrapper, style])}>
                <View
                    style={getWrapperStyle({
                        hasError,
                        isFilled: !!value,
                        isFocused
                    })}
                >
                    <View
                        style={StyleSheet.flatten([styles.iconWrapper, type === "Text" ? styles.iconWrapperCard : {}])}
                    >
                        {
                            <Icon
                                colour={getColour({
                                    hasError,
                                    hasValue: !!value
                                })}
                                scale={0.5}
                            />
                        }
                    </View>
                    <Input
                        onFocus={this.handleFocus(true)}
                        onBlur={this.handleFocus(false)}
                        onChangeText={onChange}
                        value={getValue({ value, type })}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={false}
                        placeholder={getPlaceholder({ type, placeholder })}
                        style={getStyle({ type })}
                        underlineColorAndroid="transparent"
                        secureTextEntry={type === TEXT_INPUT_TYPES.PASSWORD}
                        keyboardType={type === TEXT_INPUT_TYPES.CARD ? "numeric" : "default"}
                    />
                </View>
                {hasError ? <TextInputError>{errorMessage || ""}</TextInputError> : null}
            </View>
        );
    }

    private handleFocus = (isFocused: boolean) => {
        return () => {
            this.setState({ isFocused });
        };
    }
}

export default TextInput;
