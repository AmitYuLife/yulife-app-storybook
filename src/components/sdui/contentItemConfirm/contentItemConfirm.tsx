import React, { memo } from "react";
import { CheckBox } from "@atoms";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { ContentItemConfirm as GqlConfirm } from "@graphql/_core/schema";
import { Style } from "@styles";
import { mapServerStyles } from "..";

type Props = GqlConfirm & {
  checked: boolean;
  onChange: (value: string) => void;
};

export const ContentItemConfirm = memo(({ checked, onChange, confirmLabel, styles: incomingStyles }: Props) => {
  const serverStyles = mapServerStyles(incomingStyles);

  return (
    <View style={[styles.wrapper, serverStyles]}>
      <CheckBox checked={checked} value="" label={confirmLabel} onChange={onChange} textStyle={styles.text} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: Style.DEVICE_WIDTH - Style.adjust(48),
    alignItems: "center",
    alignSelf: "center",
    margin: Style.adjust(32),
    padding: Style.adjust(16),
  } as ViewStyle,
  text: {
    maxWidth: Style.DEVICE_WIDTH - Style.adjust(96),
    marginLeft: Style.adjust(4),
  } as TextStyle,
});
