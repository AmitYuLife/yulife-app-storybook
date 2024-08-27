import React, { FC, memo, useCallback, useMemo, useRef } from "react";
import { LayoutChangeEvent, Platform, StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { SMOKING_INFO_PANEL } from "@ids";
import { HealthSmokingStateTip } from "@redux/health-smoking/health-smoking.types";

interface Props {
  tips: HealthSmokingStateTip[];
}

const CARD_WIDTH = Style.adjust(270);

const VIEWABILITY_CONFIG = {
  waitForInteraction: false,
  minimumViewTime: 400,
  viewAreaCoveragePercentThreshold: 80,
};

const DECELERATION_RATE = Platform.select({
  ios: 0.8,
  android: 0.9,
});

const keyExtractor = (item: HealthSmokingStateTip) => `${item.id}`;

export const SmokingTips: FC<Props> = memo(({ tips }) => {
  const refMinHeight = useRef(0);
  const cardMinHeight = useSharedValue(0);

  const handleCardLayout = useCallback((e: LayoutChangeEvent) => {
    refMinHeight.current = Math.ceil(Math.max(refMinHeight.current, e.nativeEvent.layout.height));
    cardMinHeight.value = refMinHeight.current;
  }, []);

  const animatedStyle = useAnimatedStyle(
    () => ({
      ...styles.card,
      minHeight: cardMinHeight.value,
    }),
    []
  );

  const renderItem = useCallback(
    ({ item }: { item: HealthSmokingStateTip & { animatedStyle?: Record<string, string | number> } }) => {
      if (!item) {
        return null;
      }

      const { id, title, description, icon } = item;

      return (
        <Animated.View key={id} onLayout={handleCardLayout} style={item.animatedStyle}>
          {!icon ? null : <Image source={icon} width={Style.adjust(48)} height={Style.adjust(48)} />}
          <View style={styles.textWrapper} testID={id}>
            {!title ? null : <TextTemplate type="l1b">{title}</TextTemplate>}
            {!description ? null : <TextTemplate type="l1">{description}</TextTemplate>}
          </View>
        </Animated.View>
      );
    },
    []
  );

  const calculated = useMemo(
    () => ({
      data: tips.map((tip) => ({ ...tip, animatedStyle })),
      contentContainerStyle: { paddingHorizontal: Style.adjust(24) },
    }),
    [tips]
  );

  const Separator = useCallback(() => <View style={styles.separator} />, []);

  return (
    <View testID={SMOKING_INFO_PANEL}>
      <Animated.FlatList
        renderItem={renderItem}
        snapToInterval={SNAP_TO_INTERVAL}
        data={calculated.data}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        decelerationRate={DECELERATION_RATE}
        keyExtractor={keyExtractor}
        viewabilityConfig={VIEWABILITY_CONFIG}
        style={styles.wrapper}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={calculated.contentContainerStyle}
      >
        {calculated.data.map((item) => renderItem({ item }))}
      </Animated.FlatList>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(40),
  },
  card: {
    flexDirection: "row",
    paddingVertical: Style.adjust(16),
    paddingLeft: Style.adjust(12),
    paddingRight: Style.adjust(16),
    gap: Style.adjust(8),
    width: CARD_WIDTH,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colours.neutral.n150,
  },
  textWrapper: {
    gap: Style.adjust(4),
    flexShrink: 1,
  },
  separator: {
    width: Style.adjust(16),
  },
});
const SNAP_TO_INTERVAL = CARD_WIDTH + styles.separator.width;

export default SmokingTips;
