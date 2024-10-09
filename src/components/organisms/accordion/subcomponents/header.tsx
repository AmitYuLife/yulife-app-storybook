import React, { memo, useMemo } from "react";
import { Animated, LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { Image, Source, TextTemplate } from "@atoms";
import { Pressable } from "@molecules";
import { Colours, Style } from "@styles";

interface Props {
  onPress: () => void;
  header: string;
  subheading: string;
  arrowRotateInterpolation: Animated.AnimatedInterpolation<string>;
  headerIcon: Source;
  onLayout: (event: LayoutChangeEvent) => void;
  collapsed: boolean;
}

export const Header = memo(
  ({ onPress, header, subheading, arrowRotateInterpolation, headerIcon, onLayout, collapsed }: Props) => {
    const wrapperStyle = useMemo(() => {
      return [{ borderBottomWidth: collapsed ? 4 : 1 }, styles.head];
    }, [collapsed]);

    const arrowStyle = useMemo(() => {
      return [styles.headerIconWrapper, { transform: [{ rotate: arrowRotateInterpolation }] }];
    }, [arrowRotateInterpolation]);

    return (
      <Pressable onLayout={onLayout} delay={300} onPress={onPress} style={wrapperStyle}>
        <View style={styles.headerWrapper}>
          <TextTemplate type="b1b">{header}</TextTemplate>
          {!subheading ? null : <TextTemplate type="b2">{subheading}</TextTemplate>}
        </View>
        <Animated.View style={arrowStyle}>
          <Image width={24} source={headerIcon} />
        </Animated.View>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  } as ViewStyle,
  head: {
    flexDirection: "row",
    alignItems: "center",
    padding: Style.adjust(16),
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(16),
    borderColor: Colours.neutral.n100,
    borderWidth: 1,
  } as ViewStyle,
  headerWrapper: {
    flex: 1,
  } as ViewStyle,
  headerIconWrapper: {
    marginLeft: Style.adjust(16),
  } as ViewStyle,
});
