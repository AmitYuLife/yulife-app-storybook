import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { TEXT_TEMPLATE } from "@ids";

interface IProps {
  title: string;
  description: string;
  value: string;
  onPress: () => void;
}

const GameSettingsItem = ({ title, description, value, onPress }: IProps) => (
  <View style={styles.wrapper}>
    <View style={styles.container}>
      <TextTemplate type="b2b" testID={TEXT_TEMPLATE(title)}>
        {title}
      </TextTemplate>
      <TextTemplate type="l2" testID={TEXT_TEMPLATE(description)}>
        {description}
      </TextTemplate>
    </View>
    <TouchableOpacityWithDelay onPress={onPress} style={styles.measurement}>
      <View style={{ marginRight: Style.adjust(10) }}>
        <TextTemplate type="b2" color={Colours.primary.p600} testID={TEXT_TEMPLATE(value)}>
          {value}
        </TextTemplate>
      </View>
      <ArrowIcon color={Colours.primary.p600} />
    </TouchableOpacityWithDelay>
  </View>
);

export default memo(GameSettingsItem);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginBottom: Style.adjust(24),
  } as ViewStyle,
  container: {
    flex: 1,
  } as ViewStyle,
  measurement: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.8,
    justifyContent: "flex-end",
  } as ViewStyle,
});
