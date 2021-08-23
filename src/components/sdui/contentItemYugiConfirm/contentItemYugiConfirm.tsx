import React, { useRef, RefObject, memo } from "react";
import { useDispatch } from "react-redux";
import * as Animated from "react-native-animatable";
import { View, StyleSheet, ViewStyle, TextStyle, FlatList, Platform, ListRenderItemInfo } from "react-native";
import { Button, Text, TextTemplate } from "@atoms";
import { Style, TOP_BAR } from "@styles";
import LottieView from "lottie-react-native";
import colours from "@styles/colours";
import { FIB_INTRO_SCREEN } from "@ids";
import { GetPersonalProductStep_getPersonalProductStep_body_ContentItemYugiConfirm } from "@graphql/_core/schema";

import { ArrowUp } from "./arrowUp";
const intro_yugi = { lottieJson: require("./yugi.json") };

type Props = GetPersonalProductStep_getPersonalProductStep_body_ContentItemYugiConfirm;

export const ContentItemYugiConfirm = memo(function (props: Props) {
  const { yugiHeading, content, buttonText, buttonOnPress } = props;
  const lottie_yugi_ref: RefObject<LottieView> = useRef();
  const swiper: RefObject<FlatList> = useRef();
  const dispatch = useDispatch();

  return (
    <View style={styles.yugiIntroWrapper}>
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

      <Animated.View
        useNativeDriver={true}
        animation="fadeIn"
        duration={Platform.select({ ios: 0, android: 2000 })}
        easing="ease-in"
        style={styles.speechWrapper}
      >
        <View style={styles.speakerNameWrapper}>
          <TextTemplate type="b2b" color={colours.orange}>
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
          size="Small"
          onPress={() => dispatch(buttonOnPress)}
          delay={300}
          label={buttonText}
          disableAnimation={true}
        />
      </View>
    </View>
  );
});

const keyExtractor = (item: { text: string }) => item?.text;

function renderItem({ item }: ListRenderItemInfo<{ text: string }>) {
  return (
    <View style={styles.copyWrapper}>
      <Text style={styles.message}>{item.text}</Text>
    </View>
  );
}

const SPEECH_WRAPPER_WIDTH = Style.DEVICE_WIDTH - 45;
const MESSAGE_WIDTH = SPEECH_WRAPPER_WIDTH - 48;

const styles = StyleSheet.create({
  width100: {
    width: "100%",
  } as ViewStyle,
  yugiIntroWrapper: {
    alignItems: "center",
  },
  speechWrapper: {
    marginBottom: 16,
    width: SPEECH_WRAPPER_WIDTH,
    marginTop: Style.DEVICE_HEIGHT * 0.24,
    backgroundColor: colours.products.fib.u10S4,
    borderRadius: 16,
    borderColor: colours.products.fib.u50S4,
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
  message: {
    color: colours.products.fib.n800,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
    flex: 1,
    width: MESSAGE_WIDTH,
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
