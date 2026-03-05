import React, { memo, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { CheckBoxType } from "@components/molecules/check-box/check-box-type";
import { useTheme } from "@modules/themes/hooks/useTheme";

interface Props {
  isChecked: boolean;
  checkboxVisible: boolean;
  style?: ViewStyle;
}

export const ImageChoiceActiveIndicator = memo(({ isChecked, checkboxVisible, style }: Props) => {
  const { theme } = useTheme();

  const themedActiveWrapper = useMemo(
    () => ({
      backgroundColor: theme.colors.primary.p20,
      borderRadius: Style.adjust(8),
    }),
    [theme]
  );

  return (
    <View style={StyleSheet.flatten([styles.wrapper, isChecked ? themedActiveWrapper : null, style])}>
      {checkboxVisible ? (
        <View style={styles.absoluteUpperRight}>
          <CheckBoxType type={"cubic"} checked={isChecked} strokeColor={Colours.neutral.n400} size={Style.adjust(16)} />
        </View>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  absoluteUpperRight: {
    position: "absolute",
    top: Style.adjust(8),
    right: Style.adjust(8),
  } as ViewStyle,
});
