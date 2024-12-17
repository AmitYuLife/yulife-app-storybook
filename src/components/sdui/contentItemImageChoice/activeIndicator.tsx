import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { CheckBoxType } from "@components/molecules/check-box/check-box-type";

interface Props {
  isActive: boolean;
  checkboxVisible: boolean;
}

export const ImageChoiceActiveIndicator = memo(({ isActive, checkboxVisible }: Props) => {
  return (
    <View style={StyleSheet.flatten([styles.wrapper, isActive ? styles.activeWrapper : null])}>
      {checkboxVisible && (
        <View style={styles.absoluteUpperRight}>
          <CheckBoxType
            type={"cubic"}
            checked={isActive}
            strokeColor={Colours.neutral.n400}
            activeCheckboxFillColor={Colours.primary.p600}
            size={Style.adjust(16)}
          />
        </View>
      )}
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
