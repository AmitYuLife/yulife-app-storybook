import React, { ComponentProps, Ref, memo, useCallback, useMemo } from "react";
import { Animated, View, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { Item } from "./item";
import { Source } from "@atoms";

type ItemProp = ComponentProps<typeof Item>;
interface Props {
  absoluteContentViewRef: Ref<View>;
  items: ItemProp[];
  headerHeight: number;
  translateYInterpolation: Animated.AnimatedInterpolation<number>;
  infoIcon: Source;
}

export const Content = memo(
  ({ absoluteContentViewRef, translateYInterpolation, headerHeight, items = [], infoIcon }: Props) => {
    const wrapperStyle = useMemo(() => {
      return [
        styles.content,
        {
          transform: [{ translateY: translateYInterpolation }],
          paddingTop: headerHeight + 16,
        },
      ];
    }, [translateYInterpolation]);

    const getItemMarginTop = useCallback((i: number) => {
      return {
        marginTop: !i ? 0 : Style.adjust(24),
      };
    }, []);

    return (
      <Animated.View ref={absoluteContentViewRef} style={wrapperStyle}>
        {items.map((item, i) => (
          <Item
            key={item.leftText}
            leftText={item.leftText}
            rightTextBody={item.rightTextBody}
            rightTextLabel={item.rightTextLabel}
            styles={getItemMarginTop(i)}
            info={item.info}
            infoIcon={infoIcon}
          />
        ))}
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  content: {
    paddingBottom: Style.adjust(16),
    backgroundColor: Colours.neutral.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    position: "absolute",
    left: 0,
    right: 0,
  } as ViewStyle,
});
