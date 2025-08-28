import React, { memo, useCallback } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemConfirmFragment as GqlConfirm } from "@graphql/__generated";
import { Style } from "@styles";
import { mapServerStyles } from "..";
import { CheckBox } from "@molecules";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";

type Props = GqlConfirm & {
  checked: boolean;
  onChange: (value: string) => void;
};

export const ContentItemConfirmBase = memo(
  ({ checked, onChange, confirmLabel, styles: incomingStyles, checkboxType }: Props) => {
    const serverStyles = mapServerStyles(incomingStyles);

    return (
      <View style={[styles.wrapper, serverStyles]}>
        <CheckBox
          shouldAlignTop={true}
          checkboxType={checkboxType}
          checked={checked}
          value=""
          label={confirmLabel}
          onChange={onChange}
        />
      </View>
    );
  }
);

export const ContentItemConfirm = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useSduiOnChange<boolean>(answerKey);

  const handleOnChange = useCallback(
    (_: string) => {
      onChange(!value);
    },
    [onChange, value]
  );

  return <ContentItemConfirmBase {...props} checked={!!value} onChange={handleOnChange} />;
});

const styles = StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH - Style.adjust(48),
    alignItems: "flex-start",
    alignSelf: "center",
    marginTop: Style.adjust(16),
    padding: Style.adjust(16),
    paddingEnd: Style.adjust(48),
  } as ViewStyle,
});
