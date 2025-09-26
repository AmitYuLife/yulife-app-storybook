import * as React from "react";
import { Image } from "@atoms";
import { Style, StyleSheet, Colours } from "@styles";
import { TextInput as Input, View, ViewStyle, TextInputProps } from "react-native";
import TextInputError from "./text-input-error";
import {
  getColour,
  getIcon,
  getKeyboardType,
  getStyle,
  getValue,
  getWrapperStyle,
  IGetPlaceholder,
} from "./text-input.helpers";
import styles from "./text-input.styles";
import { TextInputTypes, TEXT_INPUT_TYPES } from "./text-input.types";
import { t } from "@locale";
import { createRef } from "react";

export interface IProps {
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
  blurOnSubmit?: boolean;
  iconUri?: string;
  autoComplete?: TextInputProps["autoComplete"];
  returnKeyType?: TextInputProps["returnKeyType"];
  maxLength?: number;
  onSubmitEditing?: () => void;
}

class TextInput extends React.PureComponent<IProps> {
  public static Types = TEXT_INPUT_TYPES;
  public cardInput: Input;
  public inputRef = createRef<Input>();
  public state = {
    isFocused: false,
  };

  public focus() {
    this.inputRef?.current?.focus();
    this.handleFocus(true);
  }

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
    const {
      value,
      onChange,
      hasError,
      errorMessage,
      type,
      placeholder = "",
      style,
      maxLength,
      onSubmitEditing,
    } = this.props;
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
              onSubmitEditing={onSubmitEditing}
              maxLength={maxLength}
              allowFontScaling={false}
              blurOnSubmit={this.props.blurOnSubmit}
              testID={this.props.testID}
              autoComplete={this.props.autoComplete}
              onFocus={this.handleFocus(true)}
              ref={this.inputRef}
              onBlur={this.handleFocus(false)}
              onChangeText={onChange}
              value={getValue({ value, type })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder={placeholder || this.getPlaceholder({ type, placeholder })}
              style={getStyle({ type })}
              underlineColorAndroid="transparent"
              secureTextEntry={type === TEXT_INPUT_TYPES.PASSWORD}
              keyboardType={getKeyboardType(type)}
              placeholderTextColor={Colours.textInput.inactive}
              returnKeyType={this.props.returnKeyType}
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

  private getPlaceholder = ({ type, placeholder }: IGetPlaceholder) => {
    switch (type) {
      case "Card":
        return t("placeholder.account_number");
      case "Email":
        return t("placeholder.email");
      case "Password":
        return t("placeholder.password");
      case "Text":
        return placeholder;
      case "Board":
        return t("placeholder.group_name");
      case "PasswordReveal":
      default:
        return "";
    }
  };
}

export default TextInput;
