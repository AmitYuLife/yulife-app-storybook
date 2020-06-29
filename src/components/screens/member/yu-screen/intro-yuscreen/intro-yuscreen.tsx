import React, { memo } from "react";
import { useState, useRef } from "react";
import {
  Image,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import styles from "./intro-yuscreen.styles";
import { Style } from "@styles/index";
import { Text, PageIndicator } from "../../../../atoms";
import { useCallback } from "react";
import { data, images } from "./intro-yuscreen.helper";

interface IProps {
  setYuscreenIntroShown: () => void;
}

export const YuScreenIntro = memo(function ({ setYuscreenIntroShown }: IProps) {
  const [buttonLabel, setButtonLabel] = useState("Next");
  const [activePageIndex, setActivePageIndex] = useState(0);
  const swiper = useRef<FlatList | null>(null);

  const scrollToNext = useCallback(() => {
    if (activePageIndex + 1 < data.length) {
      swiper?.current?.scrollToIndex({ index: activePageIndex + 1, animated: true });
      setActivePageIndex(activePageIndex + 1);
      setButtonLabel(data[activePageIndex + 1].buttonLabel);
    } else {
      setYuscreenIntroShown();
    }
  }, [activePageIndex, swiper, setYuscreenIntroShown]);

  const handleSwipe = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { x } = event.nativeEvent.contentOffset;
    const activeIndex = Math.floor(x ? x / Style.DEVICE_WIDTH + 0.1 : 0);
    if (activeIndex > -1) {
      setActivePageIndex(activeIndex);
      setButtonLabel(data[activeIndex]?.buttonLabel || "Next");
    }
  };

  const renderItem = ({ item, index }: any) => {
    return (
      <View style={{ height: Style.DEVICE_HEIGHT, width: Style.DEVICE_WIDTH }}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={images[index]} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subtitle}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          pagingEnabled={true}
          renderItem={renderItem}
          decelerationRate={"fast"}
          keyExtractor={(keyItem: any) => keyItem.color}
          data={data}
          ref={swiper}
          showsVerticalScrollIndicator={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleSwipe}
          onScrollEndDrag={handleSwipe}
        />

        <View style={styles.navigationViewWrapper}>
          <View style={styles.pageIndicatorWrapper}>
            <PageIndicator activePage={activePageIndex} pageCount={3} />
          </View>
          <TouchableOpacity onPress={() => setYuscreenIntroShown()}>
            <Text style={styles.skipButton}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={scrollToNext}>
            <Text style={styles.actionButton}>{buttonLabel}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
});
