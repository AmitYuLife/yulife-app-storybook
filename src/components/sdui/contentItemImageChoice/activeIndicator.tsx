import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { CheckBoxType } from "@components/molecules/check-box/check-box-type";

interface Props {
  isChecked: boolean;
  checkboxVisible: boolean;
  style?: ViewStyle;
}

export const ImageChoiceActiveIndicator = memo(({ isChecked, checkboxVisible, style }: Props) => {
  return (
    <View style={StyleSheet.flatten([styles.wrapper, isChecked ? styles.activeWrapper : null, style])}>
      {checkboxVisible ? (
        <View style={styles.absoluteUpperRight}>
          <CheckBoxType
            type={"cubic"}
            checked={isChecked}
            strokeColor={Colours.neutral.n400}
            activeCheckboxFillColor={Colours.primary.p600}
            size={Style.adjust(16)}
          />
        </View>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  activeWrapper: {
    backgroundColor: Colours.primary.p20,
    borderRadius: Style.adjust(8),
  } as ViewStyle,
  absoluteUpperRight: {
    position: "absolute",
    top: Style.adjust(8),
    right: Style.adjust(8),
  } as ViewStyle,
});
