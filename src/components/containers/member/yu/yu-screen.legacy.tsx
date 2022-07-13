import React, { useEffect, useRef } from "react";
import { StyleSheet, ViewStyle, View, ScrollView, Platform, Animated } from "react-native";
import { Style, TOP_BAR } from "@styles";
import media from "@styles/media";
import { YUSCREEN, YUSCREEN_SCROLL_VIEW } from "@ids";
import { AvatarAndEquipment, YuCoinPower } from "./subcomponents";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { NameAndLevel } from "@components/molecules";

export const YuScreen = () => {
  const scrollValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null as ScrollView);
  const currentRoute = useSelector(getRouteState);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0 });
  }, [currentRoute]);

  return (
    <View style={styles.wrapper} testID={YUSCREEN}>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollValue } } }], {
          useNativeDriver: true,
        })}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        testID={YUSCREEN_SCROLL_VIEW}
      >
        <View style={styles.padTop} />
        <NameAndLevel />
        <AvatarAndEquipment />
        <YuCoinPower />
        <View style={styles.padBot} />
      </Animated.ScrollView>
    </View>
  );
};

export const PAD_TOP = Platform.select({
  ios: media.select(
    [
      {
        condition: Style.hasNotch,
        value: TOP_BAR.HEIGHT + Style.adjust(8),
      },
    ],
    TOP_BAR.HEIGHT + Style.adjust(22)
  ),
  android: TOP_BAR.HEIGHT + Style.adjust(20),
});

const PAD_BOT = Platform.select({
  ios: media.select(
    [
      {
        condition: Style.hasNotch,
        value: Style.adjust(100),
      },
    ],
    Style.adjust(88)
  ),
  android: Style.adjust(115),
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  list: {
    flex: 1,
  } as ViewStyle,
  padTop: {
    height: PAD_TOP,
  } as ViewStyle,
  padBot: {
    height: PAD_BOT,
  } as ViewStyle,
});
