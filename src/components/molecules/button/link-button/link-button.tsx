import React from "react";
import { View, ViewStyle } from "react-native";
import { usePressedInWithDelay } from "@hooks";
import { StyleSheet } from "@styles";
import { useTheme } from "@modules/themes/hooks/useTheme";
import LinkButtonBase from "./link-button.base";
import { DEFAULT_HEIGHT, buttonStyles } from "../button.styles";
import { ButtonLabelProps, ButtonTranslationProps, useButtonTitle } from "../button.use-title";

type DefaultProps = {
  wrapperStyle?: ViewStyle;
  onPress: () => void;
  delay?: number;
  disabled?: boolean;
  testID?: string;
  underline?: boolean;
  show?: boolean;
};

type Props = ButtonTranslationProps<DefaultProps> | ButtonLabelProps<DefaultProps>;

export const LinkButton = (props: Props) => {
  const { wrapperStyle, onPress, delay, disabled, underline, show = true } = props;

  const { theme } = useTheme();
  const { handlePress } = usePressedInWithDelay({ onPress, delay });
  const { title, testID } = useButtonTitle(props);

  if (!show) {
    return null;
  }

  return (
    <View style={StyleSheet.flatten([buttonStyles.wrapper, wrapperStyle])}>
      <LinkButtonBase
        height={DEFAULT_HEIGHT}
        disabled={disabled}
        testID={testID}
        title={title}
        onPress={handlePress}
        color={theme.colors.primary.p600}
        delay={delay}
        underline={underline}
      />
    </View>
  );
};
