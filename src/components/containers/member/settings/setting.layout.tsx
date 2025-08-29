import React, { memo } from "react";
import { View, ListRenderItemInfo } from "react-native";
import { FlatList } from "@atoms";
import { SettingsHeader } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad, RadioListItem, RadioListItemProps } from "@organisms";
import { Style, StyleSheet } from "@styles";
import { t } from "@locale";

type Props = {
  onRightIconPress: () => void;
  onLeftIconPress?: () => void;
  options: RadioListItemProps[];
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
        heading={t("screens.settings.heading")}
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
    paddingStart: Style.adjust(24),
    paddingEnd: Style.adjust(35),
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

const renderItem = ({ item }: ListRenderItemInfo<RadioListItemProps>) => <RadioListItem {...item} />;
