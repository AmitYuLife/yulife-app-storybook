import * as React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import { Colours } from "@styles";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import { getShadowStyle, getTextStyle, getWrapperOverlayStyle, getWrapperStyle } from "./button.helpers";
import { BUTTON_TYPES, Types } from "./button.types";

interface IProps {
  isLoading?: boolean;
  type: Types;
  onPress: () => void;
  label: string;
  wrapperStyle?: ViewStyle;
  disabled?: boolean;
  testID?: string;
}

function Button({ label, type, wrapperStyle, disabled, testID, isLoading, onPress }: IProps) {
  const { isPressedIn, handlePressIn, handlePressOut } = usePressedInWithDelay({ onPress });

  if (type.startsWith(BUTTON_TYPES.PRIMARY)) {
    return (
      <View style={wrapperStyle}>
        <View style={getShadowStyle({ type, isPressedIn })}>
          {!disabled ? null : (
            <View testID={`${testID}-disabled-overlay`} style={getWrapperOverlayStyle({ disabled, isShadow: true })} />
          )}
        </View>
        <TouchableWithoutFeedback
          testID={testID}
          accessibilityLabel={disabled ? "disabled" : "enabled"}
          disabled={disabled}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <View testID={`${testID}-text-view`} style={getWrapperStyle({ type, isPressedIn })}>
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text allowFontScaling={false} style={getTextStyle(type)}>
                {label}
              </Text>
            )}
          </View>
        </TouchableWithoutFeedback>
        {!disabled ? null : <View style={getWrapperOverlayStyle({ disabled })} />}
      </View>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      testID={testID}
      disabled={disabled}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={StyleSheet.flatten([getWrapperStyle({ type }), wrapperStyle])}
    >
      {isLoading ? <ActivityIndicator color={Colours.darkHotPink} /> : <Text style={getTextStyle(type)}>{label}</Text>}
    </TouchableOpacity>
  );
}

export default Button;
