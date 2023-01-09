import { useSduiBodyScrollValue } from "@components/sdui/_hooks/useSduiBodyScrollValue";
import { ContentItem } from "@graphql/_core/schema";
import { useSafeAreaViewOffset } from "@hooks";
import React, { useEffect, useRef } from "react";
import { Animated, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { renderItemContent } from "../renderer";

interface Props {
  items: Array<ContentItem>;
}

export const Body = ({ items }: Props) => {
  const { scrollValue } = useSduiBodyScrollValue();
  const scrollViewRef = useRef<ScrollView>(null);
  const { safeAreaViewOffset } = useSafeAreaViewOffset();

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });
  }, [items, scrollViewRef]);

  return (
    <SafeAreaView style={[styles.flex, { marginTop: -safeAreaViewOffset.y }]}>
      <Animated.ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        style={styles.flex}
        scrollEventThrottle={16}
        bounces={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollValue } } }], { useNativeDriver: true })}
      >
        {!items?.length ? null : items.map(renderItemContent)}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
