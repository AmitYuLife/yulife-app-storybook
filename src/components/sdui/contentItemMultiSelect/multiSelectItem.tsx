import React, { useCallback } from "react";
import { Platform, View, ViewStyle } from "react-native";
import { Image } from "@atoms";
import { Style, Colours, StyleSheet } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { MultiSelectActiveIndicator } from "./multiSelectActiveIndicator";
import { MultiSelectLabel } from "./multiSelectLabel";
import media from "@styles/media";
import { CONDITION_OPTION } from "@ids";

export interface MultiSelectItemProps {
  id: string;
  relatedIds?: string[];
  active: boolean;
  label: string;
  iconUri: string;
  onPress?: (value: string) => void;
}

const SIZE = Platform.select({
  ios: Style.adjust(40),
  android: media.select(
    [
      {
        condition: Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
        value: Style.adjust(32),
      },
    ],
    Style.adjust(40)
  ),
  //Storybook
  web: Style.adjust(40),
});

function MultiSelectItem(props: MultiSelectItemProps) {
  const { id, active, label, iconUri, onPress } = props;

  const handlePress = useCallback(() => onPress(id), [id, onPress]);

  return (
    <TouchableOpacityWithDelay
      activeOpacity={1}
      style={StyleSheet.flatten([styles.wrapper, active && styles.activeWrapper])}
      onPress={handlePress}
      delay={50}
      testID={CONDITION_OPTION(label, active)}
    >
      <View style={styles.viewWrapper}>
        <MultiSelectActiveIndicator isActive={active} />
        <View style={styles.imageWrapper}>
          <Image height={SIZE} width={SIZE} source={{ uri: iconUri }} />
        </View>

        <MultiSelectLabel label={label} isActive={active} />
      </View>
    </TouchableOpacityWithDelay>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(168),
    height: Style.adjust(80),
    borderRadius: Style.adjust(16),
    marginHorizontal: Style.adjust(4),
    borderColor: Colours.neutral.n100,
    borderWidth: Style.adjust(1),
  } as ViewStyle,
  imageWrapper: {
    alignSelf: "center",
    marginTop: Style.adjust(8),
  } as ViewStyle,
  activeWrapper: {
    borderColor: Colours.ocean.up306,
  } as ViewStyle,
  viewWrapper: {
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: Style.adjust(16),
  } as ViewStyle,
});

export default MultiSelectItem;
