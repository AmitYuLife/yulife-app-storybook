import * as React from "react";
import { Image } from "@atoms";
import { Style } from "@styles";
import { StyleSheet, TextInput as Input, View, ViewStyle } from "react-native";
import TextInputError from "./text-input-error";
import {
  getColour,
  getIcon,
  getKeyboardType,
  getPlaceholder,
  getStyle,
  getValue,
  getWrapperStyle,
} from "./text-input.helpers";
import styles from "./text-input.styles";
import { TextInputTypes, TEXT_INPUT_TYPES } from "./text-input.types";

interface IProps {
  value: string;
  onChange: (value: string) => void;
  hasError?: boolean;
  errorMessage?: string;
  type: TextInputTypes;
  onBlur?: (value: string) => void;
  placeholder?: string;
  style?: ViewStyle;
  testID?: string;
  icon?: TextInputTypes;
  iconUri?: string;
  maxLength?: number;
}

class TextInput extends React.PureComponent<IProps> {
  public static Types = TEXT_INPUT_TYPES;
  public cardInput: Input;
  public state = {
    isFocused: false,
  };

  public renderIcon() {
    const { icon, iconUri, value, hasError, type } = this.props;

    if (iconUri) {
      return <Image source={{ uri: iconUri }} width={Style.adjust(26)} height={Style.adjust(26)} />;
    }

    const Icon = icon ? getIcon(icon) : getIcon(type);

    if (!Icon) {
      return null;
    }

    return <Icon colour={getColour({ hasError, hasValue: !!value })} scale={0.5} />;
  }

  public render() {
    const { value, onChange, hasError, errorMessage, type, placeholder = "", style, maxLength } = this.props;
    const { isFocused } = this.state;
    return (
      <View style={StyleSheet.flatten([styles.outerWrapper, style])}>
        <View
          style={getWrapperStyle({
            hasError,
            isFilled: !!value,
            isFocused,
          })}
        >
          <View style={StyleSheet.flatten([styles.iconWrapper, type === "Text" ? styles.iconWrapperCard : {}])}>
            {this.renderIcon()}
          </View>
          <View style={styles.inputWrapper}>
            <Input
              maxLength={maxLength}
              allowFontScaling={false}
              testID={this.props.testID}
              onFocus={this.handleFocus(true)}
              onBlur={this.handleFocus(false)}
              onChangeText={onChange}
              value={getValue({ value, type })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder={placeholder || getPlaceholder({ type, placeholder })}
              style={getStyle({ type })}
              underlineColorAndroid="transparent"
              secureTextEntry={type === TEXT_INPUT_TYPES.PASSWORD}
              keyboardType={getKeyboardType(type)}
              placeholderTextColor="rgb(204,204,204)"
            />
          </View>
        </View>
        {hasError ? <TextInputError>{errorMessage || ""}</TextInputError> : null}
      </View>
    );
  }

  private handleFocus = (isFocused: boolean) => {
    return () => {
      this.setState({ isFocused });
    };
  };
}

export default TextInput;
