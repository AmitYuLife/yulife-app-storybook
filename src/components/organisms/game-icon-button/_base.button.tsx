import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Style, Colours, StyleSheet } from "@styles";

type GameButtonProps = {
  Icon: React.ReactElement;
  onPress: () => void;
  accessibilityLabel: string;
  badge?: string;
  badgeColor?: string;
  badgeStyle?: ViewStyle;
  label?: string;
  testID?: string;
  badgeTestID?: string;
  labelTestID?: string;
};

const _GameButton = (props: GameButtonProps) => {
  const {
    accessibilityLabel,
    badge,
    badgeColor = Colours.forest.fp101,
    badgeStyle = { right: 3, top: 1 },
    badgeTestID,
    label,
    labelTestID,
    testID,
    Icon,
    onPress,
  } = props;
  return (
    <TouchableOpacityWithDelay
      style={styles.wrapper}
      onPress={onPress}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
    >
      {Icon}
      {!badge ? null : (
        <View style={[styles.badgeWrapper, badgeStyle, { backgroundColor: badgeColor }]}>
          <View style={styles.badge}>
            <TextTemplate type="l2b" color={Colours.neutral.white} testID={badgeTestID}>
              {badge}
            </TextTemplate>
          </View>
        </View>
      )}

      {!label ? null : (
        <View style={styles.label}>
          <TextTemplate type="l1b" color={Colours.neutral.white} testID={labelTestID}>
            {label}
          </TextTemplate>
        </View>
      )}
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(20),
  },
  label: {
    position: "absolute",
    start: 0,
    end: 2,
    bottom: 0,
    alignItems: "center",
  },
  badgeWrapper: {
    position: "absolute",
    width: Style.adjust(21),
    height: Style.adjust(21),
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    marginTop: 1,
  },
});

export const GameButton = memo(_GameButton);
