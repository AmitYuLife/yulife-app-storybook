import React, { useEffect, useRef } from "react";
import { Animated, Easing, Platform, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import { LinkButton, TextTemplate } from "@atoms";
import { CalmButton } from "@atoms/button/image-button/calm-button";
import { HeadspaceButton } from "@atoms/button/image-button/headspace-button";
import { Colours, Style } from "@styles";
import { useBackHandler } from "@services/hooks/useBackHandler";

interface Props {
  showScreen?: boolean;
  setShowScreen?: (val: boolean) => void;
}

const VISIBLE_SCREEN_OPACITY = 1;
const HIDDEN_SCREEN_OPACITY = 0;
const VISIBLE_SCREEN_TRANSLATE_Y = 0;
const HIDDEN_SCREEN_TRANSLATE_Y = Style.DEVICE_HEIGHT * 2;

export const MeditationOverlay = ({ showScreen, setShowScreen }: Props) => {
  const opacityRef = useRef(new Animated.Value(showScreen ? VISIBLE_SCREEN_OPACITY : HIDDEN_SCREEN_OPACITY));
  const translateyRef = useRef(new Animated.Value(showScreen ? VISIBLE_SCREEN_TRANSLATE_Y : HIDDEN_SCREEN_TRANSLATE_Y));

  const hideOverlay = () => setShowScreen(false);

  useBackHandler(() => {
    hideOverlay();

    return !!showScreen;
  });

  useEffect(() => {
    if (showScreen) {
      Animated.sequence([
        Animated.timing(opacityRef.current, {
          toValue: VISIBLE_SCREEN_OPACITY,
          useNativeDriver: true,
          duration: 300,
          easing: Easing.ease,
        }),
        Animated.timing(translateyRef.current, {
          toValue: VISIBLE_SCREEN_TRANSLATE_Y,
          useNativeDriver: true,
          duration: 300,
          easing: Easing.ease,
        }),
      ]).start();

      return;
    }

    Animated.sequence([
      Animated.timing(translateyRef.current, {
        toValue: HIDDEN_SCREEN_TRANSLATE_Y,
        useNativeDriver: true,
        duration: 300,
        easing: Easing.ease,
      }),
      Animated.timing(opacityRef.current, {
        toValue: HIDDEN_SCREEN_OPACITY,
        useNativeDriver: true,
        duration: 300,
        easing: Easing.ease,
      }),
    ]).start();
  }, [showScreen]);

  return (
    <Animated.View pointerEvents="box-none" style={[styles.wrapper, { opacity: opacityRef.current }]}>
      <View pointerEvents={showScreen ? "auto" : "none"} style={StyleSheet.absoluteFill}>
        <TouchableOpacity
          onPress={() => {
            setShowScreen(false);
          }}
          activeOpacity={1}
          style={styles.background}
        />
      </View>
      <Animated.View style={[styles.innerWrapper, { transform: [{ translateY: translateyRef.current }] }]}>
        <TextTemplate type="h2" textAlign="center">
          Choose an app to start
        </TextTemplate>
        <View style={styles.spaceSmall} />
        <TextTemplate type="b2" textAlign="center">
          {`You can use any app that syncs mindfulness minutes to ${
            Platform.OS === "ios" ? "Apple Health" : "Google Fit"
          }`}
        </TextTemplate>
        <CalmButton style={styles.spaceMedium} onPressCallback={hideOverlay} />
        <HeadspaceButton style={styles.spaceSmall} onPressCallback={hideOverlay} />
        <LinkButton
          wrapperStyle={styles.spaceXsmall}
          label="I'm using a different app"
          onPress={() => setShowScreen(false)}
        />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.64)",
  } as ViewStyle,
  innerWrapper: {
    backgroundColor: Colours.neutral.white,
    borderRadius: 16,
    paddingTop: Style.adjust(32),
    paddingBottom: Platform.select({
      ios: Style.hasNotch ? Style.adjust(40) : Style.adjust(28),
      android: Style.adjust(20),
    }),
    paddingHorizontal: Style.adjust(32),
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  } as ViewStyle,
  spaceXsmall: {
    marginTop: Style.adjust(4),
  } as ViewStyle,
  spaceSmall: {
    marginTop: Style.adjust(12),
  } as ViewStyle,
  spaceMedium: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
});
