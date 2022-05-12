import { Radio, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { SettingsHeader, TouchableOpacityWithDelay } from "@components/molecules";
import { TEXT_TEMPLATE, SETTINGS_NAME } from "@ids";
import { Style } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

type Option = { id: string; title: string; description: string; isSelected: boolean; onPress: () => void };

type Props = {
  onRightIconPress: () => void;
  onLeftIconPress: () => void;
  options: Option[];
  screenTestId?: string;
  headerText: string;
};

const SettingLayout = ({ onRightIconPress, onLeftIconPress, options, headerText, screenTestId }: Props) => {
  return (
    <View testID={screenTestId}>
      <GenericHeadingPad />
      <View style={styles.settingsHeader}>
        <SettingsHeader title={headerText} />
      </View>
      <View style={styles.container}>
        {options.map((option) => (
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
              testID={SETTINGS_NAME(option.id)}
              onPress={option.onPress}
              style={styles.radioWrapper}
            >
              <Radio selected={option.isSelected} />
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

export default memo(SettingLayout);
