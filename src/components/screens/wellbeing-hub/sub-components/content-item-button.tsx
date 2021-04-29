import { TertiaryButton } from "@atoms";
import { ArrowRight } from "@atoms/icon/arrow-right";
import { handleLinkPress } from "@services/app-link";
import Logger from "@services/logging/logger";
import { Colours, Style } from "@styles";
import React, { memo, useCallback } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface IProps {
  label: string;
  iconUri?: string;
  uri: string;
  metaData: Record<string, string>;
}

export const ContentItemButton = memo(({ label, iconUri, uri, metaData }: IProps) => {
  const onButtonPress = useCallback(() => {
    Logger.logMixpanelEvent("wellbeing_item_button_pressed", {
      ...metaData,
      label,
      type: uri?.split(":")?.[0],
    });
    handleLinkPress(uri);
  }, [metaData, label, uri]);

  return (
    <View style={styles.wrapper}>
      <TertiaryButton size={"Fill"} label={label} onPress={onButtonPress} height={Style.adjust(60)} iconUri={iconUri} />
      {/* This is a temp fix until we merge the new button refactor */}
      <View style={styles.rightIcon}>
        <ArrowRight color={Colours.primary.p600} />
      </View>
      {/* end */}
    </View>
  );
});

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
