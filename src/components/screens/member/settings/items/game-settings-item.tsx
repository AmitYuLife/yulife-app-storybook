import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { TEXT_TEMPLATE } from "@ids";
import { ArrowButton } from "@components/molecules/arrow-button";

interface IProps {
  title: string;
  description: string;
  value: string;
  onPress: () => void;
}

const GameSettingsItem = ({ title, description, value, onPress }: IProps) => (
  <TouchableOpacityWithDelay onPress={onPress} style={styles.wrapper}>
    <View style={styles.container}>
      <TextTemplate type="b2b" testID={TEXT_TEMPLATE(title)}>
        {title}
      </TextTemplate>
      <TextTemplate type="l2" testID={TEXT_TEMPLATE(description)}>
        {description}
      </TextTemplate>
    </View>
    <View style={styles.measurement}>
      <View style={{ marginEnd: Style.adjust(10) }}>
        <TextTemplate type="b2" color={Colours.primary.p600} testID={TEXT_TEMPLATE(value)}>
          {value}
        </TextTemplate>
      </View>
      <ArrowButton color={Colours.primary.p600} />
    </View>
  </TouchableOpacityWithDelay>
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
