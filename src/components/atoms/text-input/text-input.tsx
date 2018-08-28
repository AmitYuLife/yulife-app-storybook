import * as React from "react";
import { PureComponent } from "react";
import {
    TextInput as Input,
    View
} from "react-native";
import Lock from "./assets/lock";
import Mail from "./assets/mail";
import TextInputError from "./text-input-error";
import {
    getColour,
    getWrapperStyle
} from "./text-input.helpers";
import styles from "./text-input.styles";

interface IProps {
    value: string;
    onChange: (value: string) => void;
    hasError?: boolean;
    errorMessage?: string;
    type: Types;
    onBlur?: (value: string) => void;
}

export enum TEXT_INPUT_TYPES {
    EMAIL = "Email",
    PASSWORD = "Password"
}

export type Types = "Email" | "Password";

class TextInput extends PureComponent<IProps> {
    public static Types = TEXT_INPUT_TYPES;

    public state = {
        isFocused: false
    };

    public render() {
        const {
            value,
            onChange,
            hasError,
            errorMessage,
            type
        } = this.props;
        const { isFocused } = this.state;
        const Icon =
            type === TEXT_INPUT_TYPES.EMAIL ? Mail : Lock;

        return (
            <View style={styles.outerWrapper}>
                <View
                    style={getWrapperStyle({
                        hasError,
                        isFilled: !!value,
                        isFocused
                    })}
                >
                    <View style={styles.iconWrapper}>
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
                        value={value}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={false}
                        placeholder={
                            type === TEXT_INPUT_TYPES.EMAIL
                                ? "Email"
                                : "Password"
                        }
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        secureTextEntry={
                            type ===
                            TEXT_INPUT_TYPES.PASSWORD
                        }
                        keyboardType="default"
                    />
                </View>
                {!!errorMessage && (
                    <TextInputError>{errorMessage}</TextInputError>
                )}
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
