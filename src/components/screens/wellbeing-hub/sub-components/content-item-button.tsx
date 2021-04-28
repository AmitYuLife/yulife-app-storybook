import { TertiaryButton } from "@atoms";
import { ArrowRight } from "@atoms/icon/arrow-right";
import { handleLinkPress } from "@services/app-link";
import { Colours, Style } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface IProps {
  label: string;
  iconUri?: string;
  uri: string;
}

export const ContentItemButton = memo(({ label, iconUri, uri }: IProps) => (
  <View style={styles.wrapper}>
    <TertiaryButton
      size={"Fill"}
      label={label}
      onPress={handleLinkPress(uri)}
      height={Style.adjust(60)}
      iconUri={iconUri}
    />
    {/* This is a temp fix until we merge the new button refactor */}
    <View style={styles.rightIcon}>
      <ArrowRight color={Colours.primary.p600} />
    </View>
    {/* end */}
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  rightIcon: {
    position: "absolute",
    right: Style.adjust(16),
    marginTop: Style.adjust(13),
  } as ViewStyle,
});
