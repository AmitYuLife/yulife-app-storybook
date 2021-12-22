import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { SwipeArrowLeft, SwipeArrowRight, TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours, Style } from "@styles";

const HIT_SLOP = {
  top: 16,
  bottom: 16,
  left: 16,
  right: 16,
};

interface Props {
  showLeftButton: boolean;
  showRightButton: boolean;
  onChangeIndex: (increment: number) => () => void;
  title: string;
  titleColor: string;
}

export const SwipeController = ({ showLeftButton, showRightButton, onChangeIndex, title, titleColor }: Props) => {
  const safeTitleColor = titleColor || Colours.neutral.n800;

  return (
    <View style={styles.row}>
      <View style={styles.arrow}>
        {!showLeftButton ? null : (
          <TouchableOpacityWithDelay delay={450} hitSlop={HIT_SLOP} onPress={onChangeIndex(-1)}>
            <SwipeArrowLeft />
          </TouchableOpacityWithDelay>
        )}
      </View>
      <View style={styles.titleWrapper}>
        <TextTemplate type="l1b" color={safeTitleColor}>
          {title}
        </TextTemplate>
      </View>
      <View style={styles.arrow}>
        {!showRightButton ? null : (
          <TouchableOpacityWithDelay delay={450} hitSlop={HIT_SLOP} onPress={onChangeIndex(1)}>
            <SwipeArrowRight />
          </TouchableOpacityWithDelay>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  arrow: {
    width: Style.adjust(16),
  } as ViewStyle,
  titleWrapper: {
    width: Style.adjust(140),
    justifyContent: "center",
    alignItems: "center",
    marginLeft: Style.adjust(16),
    marginRight: Style.adjust(16),
  } as ViewStyle,
});
