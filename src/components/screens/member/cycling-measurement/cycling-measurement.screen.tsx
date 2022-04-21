import { Radio, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { SettingsHeader, TouchableOpacityWithDelay } from "@components/molecules";
import { GAME_SETTINGS_SCREEN, TEXT_TEMPLATE, SETTINGS_NAME } from "@ids";
import { Style } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  onRightIconPress: () => void;
  onLeftIconPress: () => void;
  onRadioPress: (type: string) => void;
  selectedCyclingMeasurement: string;
}

const OPTIONS = [
  {
    title: "Imperial system",
    description: "Distance will be shown in miles ”mi”",
    cyclingMeasurement: "mi",
  },
  {
    title: "Metric system",
    description: "Distance will be shown in kilometers ”km”",
    cyclingMeasurement: "km",
  },
];

const CyclingMeasurementScreen = ({
  onRightIconPress,
  onLeftIconPress,
  onRadioPress,
  selectedCyclingMeasurement,
}: IProps) => {
  return (
    <View testID={GAME_SETTINGS_SCREEN}>
      <GenericHeadingPad />
      <View style={styles.settingsHeader}>
        <SettingsHeader title="Measurement (Cycling)" />
      </View>
      <View style={styles.container}>
        {OPTIONS.map((option) => (
          <View key={option.title} style={styles.option}>
            <View>
              <TextTemplate type="b2b" testID={TEXT_TEMPLATE(option.title)}>
                {option.title}
              </TextTemplate>
              <TextTemplate type="l2" testID={TEXT_TEMPLATE(option.description)}>
                {option.description}
              </TextTemplate>
            </View>
            <TouchableOpacityWithDelay
              testID={SETTINGS_NAME(option.cyclingMeasurement)}
              onPress={() => onRadioPress(option.cyclingMeasurement)}
              style={styles.radioWrapper}
            >
              <Radio selected={option.cyclingMeasurement === selectedCyclingMeasurement} />
            </TouchableOpacityWithDelay>
          </View>
        ))}
      </View>
      <GenericHeadingAbsolute
        heading="Settings"
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsHeader: {
    marginTop: Style.adjust(10),
    marginBottom: Style.adjust(24),
  },
  container: {
    paddingLeft: Style.adjust(24),
    paddingRight: Style.adjust(35),
  },
  option: {
    flexDirection: "row",
    marginBottom: Style.adjust(24),
  },
  radioWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default memo(CyclingMeasurementScreen);
