import React, { memo } from "react";
import { StyleSheet, View, ListRenderItemInfo } from "react-native";
import { FlatList, Radio, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { SettingsHeader, TouchableOpacityWithDelay } from "@components/molecules";
import { TEXT_TEMPLATE, SETTINGS_NAME } from "@ids";
import { Style } from "@styles";

type Option = { id: string; title: string; description: string; isSelected: boolean; onPress: () => void };

type Props = {
  onRightIconPress: () => void;
  onLeftIconPress?: () => void;
  options: Option[];
  screenTestId?: string;
  headerText: string;
};

const SettingLayout = ({ onRightIconPress, onLeftIconPress, options, headerText, screenTestId }: Props) => {
  return (
    <View style={styles.flex} testID={screenTestId}>
      <GenericHeadingPad />
      <View style={styles.settingsHeader}>
        <SettingsHeader title={headerText} />
      </View>
      <FlatList style={styles.container} horizontal={false} data={options} renderItem={renderItem} />
      <GenericHeadingAbsolute
        heading="Settings"
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
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

const renderItem = ({ item }: ListRenderItemInfo<Option>): React.ReactElement | null => (
  <View key={item.title} style={styles.option}>
    <View>
      <TextTemplate type="b2b" testID={TEXT_TEMPLATE(item.title)}>
        {item.title}
      </TextTemplate>
      <TextTemplate type="l2" testID={TEXT_TEMPLATE(item.description)}>
        {item.description}
      </TextTemplate>
    </View>
    <TouchableOpacityWithDelay testID={SETTINGS_NAME(item.id)} onPress={item.onPress} style={styles.radioWrapper}>
      <Radio selected={item.isSelected} />
    </TouchableOpacityWithDelay>
  </View>
);
