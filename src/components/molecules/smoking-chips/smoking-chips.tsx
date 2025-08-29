import React, { FC, memo, useMemo } from "react";
import { FlexStyle, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { TouchableOpacityWithDelay } from "..";
import EditSVG from "@atoms/edit/edit-svg";
import { t } from "@locale";
import { SMOKING_CHIP } from "@ids";

interface Props {
  values?: string[];
  backgroundColor?: string;
  justifyContent?: FlexStyle["justifyContent"];
  onPressEdit?: () => void;
}

export const SmokingChips: FC<Props> = memo(
  ({ values, backgroundColor = Colours.secondary.s10S1, justifyContent = "flex-start", onPressEdit }) => {
    const wrapperStyle = useMemo(() => [styles.wrapper, { justifyContent }], [justifyContent]);
    const chipStyles = useMemo(() => [styles.chip, { backgroundColor }], [backgroundColor]);

    return (
      <View>
        <View style={wrapperStyle}>
          {values.map((value: string) => {
            return (
              <View key={value} style={chipStyles} testID={SMOKING_CHIP(value)}>
                <TextTemplate type="b2b">{value}</TextTemplate>
              </View>
            );
          })}
        </View>
        {!onPressEdit ? null : (
          <TouchableOpacityWithDelay style={styles.edit} onPress={onPressEdit}>
            <EditSVG stroke={Colours.neutral.n900} width={Style.adjust(18)} height={Style.adjust(18)} />
            <TextTemplate type="b2b" textAlign="left">
              {t("screens.smoking_hub.edit")} &gt;
            </TextTemplate>
          </TouchableOpacityWithDelay>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Style.adjust(8),
    marginTop: Style.adjust(8),
  },
  chip: {
    paddingVertical: Style.adjust(4),
    paddingHorizontal: Style.adjust(8),
    borderRadius: Style.adjust(24),
  },
  edit: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Style.adjust(16),
    gap: Style.adjust(8),
  },
});

export default SmokingChips;
