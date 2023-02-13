import React, { ComponentProps, memo, useState } from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { InfoPanel } from "@components/molecules";
import { Colours, Style } from "@styles";
import { PercentPicker } from "./percent-picker";
import { Options } from "./options";
import { t } from "@locale";

interface Props {
  options: ComponentProps<typeof Options>["options"];
  activeValue: number;
  onPickCover: ComponentProps<typeof Options>["onPickCover"];
  isCustom: boolean;
  percentPicker: Omit<ComponentProps<typeof PercentPicker>, "onPickCover" | "activeValue">;
  topHeading: string;
  restrictedPercentInfoCardText?: string;
}

const CoverPicker = ({
  activeValue,
  options,
  onPickCover,
  isCustom,
  percentPicker,
  topHeading = "",
  restrictedPercentInfoCardText,
}: Props) => {
  const [showCustom, setShowCustom] = useState(isCustom);
  const handleToggleCustom = () => setShowCustom(true);

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <View style={styles.labelWrapper}>
          <TextTemplate type="b2">{topHeading}</TextTemplate>
        </View>
      </View>
      {!showCustom ? (
        <>
          <Options activeValue={activeValue} options={options} onPickCover={onPickCover} />
          <TouchableOpacity style={styles.toggleCustomButton} onPress={handleToggleCustom}>
            <TextTemplate type="l1" decoration="underline">
              {t("molecules.multi_factor_pricing.cover_picker.choose_custom")}
            </TextTemplate>
          </TouchableOpacity>
        </>
      ) : (
        <PercentPicker {...percentPicker} activeValue={activeValue} onPickCover={onPickCover} />
      )}
      {!restrictedPercentInfoCardText ? null : (
        <View style={{ marginTop: Style.adjust(!showCustom ? 16 : -20) }}>
          <InfoPanel markdown={restrictedPercentInfoCardText} type="info" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    backgroundColor: Colours.neutral.white,
    padding: Style.adjust(24),
  } as ViewStyle,
  row: {
    flexDirection: "row",
  } as ViewStyle,
  labelWrapper: {
    flex: 0.8,
  } as ViewStyle,
  toggleCustomButton: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
});

export default memo(CoverPicker);
