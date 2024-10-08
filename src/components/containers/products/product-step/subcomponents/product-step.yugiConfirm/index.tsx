import React, { useRef, RefObject, memo, useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react-native";
import { View, StyleSheet, ViewStyle, FlatList, Platform, ListRenderItemInfo } from "react-native";
import { TextTemplate } from "@atoms";
import { Button, LottieView } from "@molecules";
import { Style, TOP_BAR, Colours } from "@styles";
import { FIB_INTRO_SCREEN } from "@ids";
import { ContentItemYugiConfirmFragment } from "@graphql/__generated";
import { ArrowUp } from "./arrowUp";
import { ProductStepContext } from "./../../product-step.context";
import { getSduiLoadingForKey } from "@redux/server-driven-ui/sdui.selectors";
import Animated, { Easing, FadeIn } from "react-native-reanimated";

const lottieJson = require("./yugi.json");

type Props = ContentItemYugiConfirmFragment;

export const ProductStepYugiConfirm = memo(function (props: Props) {
  const contextConsumer = useContext(ProductStepContext);
  const { productId, stepId, dynamicData, isLoading: isInLoadingContext } = contextConsumer;
  const { yugiHeading, content, buttonText, buttonOnPress, id } = props;
  const lottieYugiRef: RefObject<Lottie> = useRef();
  const swiper: RefObject<FlatList> = useRef();
  const dispatch = useDispatch();

  const dynamicOnPress = useMemo(
    () => ({
      type: buttonOnPress.type,
      payload: { productId, stepId, dynamicData, serverPayload: buttonOnPress.payload, id },
    }),
    [buttonOnPress, productId, stepId, dynamicData, id]
  );

  const isLoading = useSelector(getSduiLoadingForKey(id)) || isInLoadingContext;

  return (
    <View style={styles.yugiIntroWrapper}>
      <View style={styles.lottieWrapper} testID={FIB_INTRO_SCREEN}>
        <LottieView style={styles.lottie} source={lottieJson} autoPlay={true} loop={false} ref={lottieYugiRef} />
      </View>

      <Animated.View
        entering={FadeIn.duration(Platform.select({ ios: 0, android: 2000 })).easing(Easing.in(Easing.ease))}
        style={styles.speechWrapper}
      >
        <View style={styles.speakerNameWrapper}>
          <TextTemplate type="b2b" color={Colours.orange}>
            {yugiHeading}
          </TextTemplate>
        </View>

        <View style={styles.arrowUp}>
          <ArrowUp />
        </View>

        <FlatList
          pagingEnabled={true}
          renderItem={renderItem}
          decelerationRate="fast"
          keyExtractor={keyExtractor}
          data={[{ text: content.parsedMarkdown }]}
          ref={swiper}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.width100}
          scrollEnabled={false}
        />
      </Animated.View>

      <View style={styles.buttonWrapper}>
        <Button
          testID="product-step-yugi-confirm-button"
          disabled={isLoading}
          isLoading={isLoading}
          size="Small"
          onPress={() => dispatch(dynamicOnPress)}
          delay={300}
          translatedLabel={buttonText}
        />
      </View>
    </View>
  );
});

const keyExtractor = (item: { text: string }) => item?.text;

function renderItem({ item }: ListRenderItemInfo<{ text: string }>) {
  return (
    <View style={styles.copyWrapper}>
      <TextTemplate type="b2b" color={Colours.products.fib.n800}>
        {item.text}
      </TextTemplate>
    </View>
  );
}

const SPEECH_WRAPPER_WIDTH = Style.DEVICE_WIDTH - 45;

const styles = StyleSheet.create({
  width100: {
    width: "100%",
  } as ViewStyle,
  yugiIntroWrapper: {
    alignItems: "center",
    height: Style.DEVICE_HEIGHT,
  },
  speechWrapper: {
    marginBottom: Style.adjust(16),
    width: SPEECH_WRAPPER_WIDTH,
    marginTop: Style.DEVICE_HEIGHT * 0.24,
    backgroundColor: Colours.products.fib.u10S4,
    borderRadius: 16,
    borderColor: Colours.products.fib.u50S4,
    borderWidth: 2,
    paddingTop: Style.adjust(24),
    paddingBottom: Style.adjust(24),
  } as ViewStyle,
  copyWrapper: {
    width: SPEECH_WRAPPER_WIDTH,
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  arrowUp: {
    right: 0,
    position: "absolute",
    marginRight: Style.adjust(33),
    marginTop: Style.adjust(-15),
  } as ViewStyle,
  speakerNameWrapper: {
    position: "absolute",
    marginLeft: Style.adjust(23),
    marginTop: Style.adjust(-12),
    width: Style.adjust(61),
    height: Style.adjust(24),
    backgroundColor: Colours.products.fib.u100S4,
    borderRadius: 16,
    alignItems: "center",
  } as ViewStyle,
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
