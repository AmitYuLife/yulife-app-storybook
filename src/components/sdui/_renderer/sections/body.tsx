import { useSduiBodyScrollValue } from "@components/sdui/_hooks/useSduiBodyScrollValue";
import { GetSduiJourneyQuery } from "@graphql/__generated";
import { useSafeAreaViewOffset } from "@hooks";
import { SDUI_BODY_SCROLL } from "@ids";
import React, { useEffect, useRef } from "react";
import { Animated, SafeAreaView, ScrollView, View } from "react-native";
import { Renderer } from "../renderer";

import { StyleSheet } from "@styles";
interface Props {
  items: GetSduiJourneyQuery["getSduiJourney"]["body"];
  isSafeAreaView: boolean;
}

export const Body = ({ items, isSafeAreaView }: Props) => {
  const { scrollValue } = useSduiBodyScrollValue();
  const scrollViewRef = useRef<ScrollView>(null);
  const { safeAreaViewOffset } = useSafeAreaViewOffset();

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });
  }, [items, scrollViewRef]);

  const Wrapper = isSafeAreaView ? SafeAreaView : View;

  return (
    <Wrapper style={[styles.flex, { marginTop: -safeAreaViewOffset.y }]}>
      <Animated.ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        style={styles.flex}
        scrollEventThrottle={16}
        bounces={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollValue } } }], { useNativeDriver: true })}
        testID={SDUI_BODY_SCROLL}
      >
        {!items?.length ? null : items.map((item) => <Renderer key={(item as { id: string }).id} item={item} />)}
      </Animated.ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
