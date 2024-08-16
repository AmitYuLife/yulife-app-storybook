import React, { FC, memo, useMemo } from "react";
import { FlexStyle, StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import EditSVG from "@atoms/edit/edit-svg";
import { t } from "@locale";
import { TouchableOpacityWithDelay } from "@components/molecules";

interface Props {
  values?: string[];
  justifyContent?: FlexStyle["justifyContent"];
  backgroundColor?: string;
  onPressEdit?: () => void;
}

export const SmokingChips: FC<Props> = memo(
  ({ values, justifyContent = "flex-start", backgroundColor = Colours.secondary.s10S1, onPressEdit }) => {
    const chipStyles = useMemo(() => [styles.chip, { backgroundColor }], [backgroundColor]);

    return (
      <>
        <View style={[styles.wrapper, { justifyContent }]}>
          {values.map((value: string) => {
            return (
              <View key={value} style={chipStyles}>
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
      </>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Style.adjust(8),
    marginTop: Style.adjust(16),
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
