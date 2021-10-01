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
      <View style={styles.textWrapper}>
        <CheckBox checked={checked} value="" label={confirmLabel} onChange={onChange} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH - Style.adjust(48),
    alignItems: "center",
    alignSelf: "center",
    marginTop: Style.adjust(16),
    padding: Style.adjust(16),
  } as ViewStyle,
  textWrapper: {
    maxWidth: Style.DEVICE_WIDTH - Style.adjust(120),
    marginLeft: Style.adjust(4),
  } as TextStyle,
});
