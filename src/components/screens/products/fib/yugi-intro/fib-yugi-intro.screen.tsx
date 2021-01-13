import React, { memo, useRef, RefObject, useEffect } from "react";
import * as Animated from "react-native-animatable";
import { View, StyleSheet, ViewStyle, TextStyle, FlatList, ListRenderItemInfo } from "react-native";
import { Button, Text } from "@atoms";
import { Style, TOP_BAR } from "@styles";
import { ScrollableLayout } from "@molecules";
import LottieView from "lottie-react-native";
import { YUGI_INTRO_TYPE } from "../../../../containers/products/fib/subcontainers/fib.yugi-intro.container";
import { getData } from "./data";
import { ArrowUp } from "./assets/arrowUp";
import colours from "@styles/colours";
import { FIB_INTRO_SCREEN } from "@ids";
import { useBackHandler } from "@services/hooks/useBackHandler";

export interface IFibYugiIntroScreenProps {
  onNavigateBack: () => void;
  onNavigateToSalary: () => void;
  onClose: () => void;
  type: YUGI_INTRO_TYPE;
  initialIndex?: number;
  buttonLabel?: string;
}

const intro_yugi = { lottieJson: require("./assets/yugi.json") };

export const FibYugiIntroScreen = memo(function (props: IFibYugiIntroScreenProps) {
  const { onNavigateBack, onClose, onNavigateToSalary, type, initialIndex = 0, buttonLabel = "Okay" } = props;
  const delay = useRef(null);

  const currentIndex = useRef(initialIndex);

  const lottie_yugi_ref: RefObject<LottieView> = useRef();
  const swiper: RefObject<FlatList> = useRef();

  const play = () => {
    lottie_yugi_ref?.current?.play();
  };

  const swipe = () => {
    currentIndex.current += 1;
    const isLastPage = currentIndex.current === data.length;
    if (isLastPage) {
      onNavigateToSalary();
    } else {
      swiper.current?.scrollToIndex({ index: currentIndex.current, animated: true });
    }
  };

  useEffect(() => {
    delay.current = setTimeout(() => {
      swiper.current?.scrollToIndex({ index: currentIndex.current, animated: false });
    }, 100);

    return () => {
      clearTimeout(delay.current);
      delay.current = null;
    };
  }, [initialIndex]);

  const swipeBack = () => {
    currentIndex.current -= 1;
    swiper.current?.scrollToIndex({ index: currentIndex.current, animated: true });
  };

  const onLeftIconPress = () => {
    if (!currentIndex.current) {
      onNavigateBack();
    } else {
      swipeBack();
    }
  };

  useBackHandler(() => {
    onLeftIconPress();
    return true;
  });

  const data = getData(type);

  return (
    <ScrollableLayout
      onRightIconPress={onClose}
      onLeftIconPress={onLeftIconPress}
      logo={"yulife"}
      isBeta={false}
      shouldCenterContent={true}
    >
      <View style={styles.lottieWrapper} testID={FIB_INTRO_SCREEN}>
        <LottieView
          resizeMode="cover"
          style={styles.lottie}
          source={intro_yugi.lottieJson}
          autoPlay={true}
          loop={false}
          ref={lottie_yugi_ref}
        />
      </View>

      <View style={styles.speechWrapper}>
        <View style={styles.speakerNameWrapper}>
          <Text style={styles.speakerName}>Yugi</Text>
        </View>

        <View style={styles.arrowUp}>
          <ArrowUp />
        </View>

        <FlatList
          pagingEnabled={true}
          renderItem={renderItem}
          decelerationRate="fast"
          keyExtractor={keyExtractor}
          data={data}
          ref={swiper}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            width: Style.adjust(282),
          }}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          type="Primary"
          size="Small"
          onPress={() => {
            play();
            swipe();
          }}
          delay={300}
          label={buttonLabel}
          disableAnimation={true}
        />
      </View>
    </ScrollableLayout>
  );
});

const keyExtractor = (item: { text: string }) => item?.text;

function renderItem({ item }: ListRenderItemInfo<{ text: string }>) {
  return (
    <Animated.View
      useNativeDriver={true}
      animation="fadeIn"
      duration={2000}
      easing="ease-in"
      style={styles.copyWrapper}
    >
      <Text style={styles.message}>{item.text}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  speechWrapper: {
    marginBottom: 16,
    width: Style.DEVICE_WIDTH - 45,
    marginTop: Style.DEVICE_HEIGHT * 0.15,
    backgroundColor: colours.products.fib.u10S4,
    borderRadius: 16,
    borderColor: colours.products.fib.u50S4,
    borderWidth: 2,
    paddingTop: 24,
    paddingLeft: 24,
    paddingBottom: 24,
  } as ViewStyle,
  copyWrapper: {
    width: Style.adjust(282),
  } as ViewStyle,
  arrowUp: {
    right: 0,
    position: "absolute",
    marginRight: 33,
    marginTop: -15,
  } as ViewStyle,
  speakerNameWrapper: {
    position: "absolute",
    marginLeft: 23,
    marginTop: -12,
    width: 61,
    height: 24,
    backgroundColor: colours.products.fib.u100S4,
    borderRadius: 16,
    alignItems: "center",
  } as ViewStyle,
  speakerName: {
    color: colours.orange,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
  } as TextStyle,
  message: {
    color: colours.products.fib.n800,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
    maxWidth: Style.adjust(282),
    flex: 1,
  } as TextStyle,
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: Style.DEVICE_WIDTH - 45,
  } as ViewStyle,
  lottieWrapper: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT - TOP_BAR.TOP_BAR_WITH_PAD - TOP_BAR.PADDING_TOP,
  } as ViewStyle,
  lottie: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT - TOP_BAR.TOP_BAR_WITH_PAD - TOP_BAR.PADDING_TOP - Style.DEVICE_HEIGHT * 0.09,
  } as ViewStyle,
});
