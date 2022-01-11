import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ArrowRightSvg, TertiaryButton } from "@atoms";
import { BlueDoc } from "@atoms/icon/blue-doc";
import { Colours, Style } from "@styles";

interface Props {
  onPress?: () => void;
}

export const PackageDetailsButton = memo(({ onPress }: Props) => {
  return (
    <View style={styles.wrapper}>
      <TertiaryButton
        onPress={onPress}
        label="Package details"
        LeftIcon={<BlueDoc />}
        RightIcon={<ArrowRightSvg colour={Colours.primary.p600} />}
        size="Fill"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(36),
  } as ViewStyle,
});
