import { Style } from "@styles/index";
import { Platform } from "react-native";
import * as Animatable from "react-native-animatable";
import { isIphoneX } from "react-native-iphone-x-helper";

const scaleAsZero = Platform.OS === "ios" ? 0 : 0.1;

const translateValue =
  Platform.OS === "android"
    ? Style.adjust(93)
    : isIphoneX()
    ? Style.adjust(158)
    : Style.adjust(98);

export function initializeAnimation() {
  Animatable.initializeRegistryWithDefinitions({
    wrapperAnimation: {
      0: { scaleX: 1, scaleY: 1, translateY: 0 },
      0.05: { scaleX: 1.2, scaleY: 1.2, translateY: 50 },
      0.98: { scaleX: 1.2, scaleY: 1.2, translateY: 50 },
      1: { scaleX: 1, scaleY: 1, translateY: 0 },
    },
    imageAnimation: {
      0: { opacity: 1 },
      0.05: { opacity: 1 },
      0.07: { opacity: 0 },
      0.98: { opacity: 0 },
      1: { opacity: 1 },
    },
    bubbleAnimation: {
      0: { translateY: 0 },
      0.025: {
        translateY: translateValue,
      },
      0.98: {
        translateY: translateValue,
      },
      0.99: {
        translateY: 0,
      },
      1: {
        translateY: 0,
      },
    },
    orangeCircleAnimation: {
      0: { scaleX: scaleAsZero, scaleY: scaleAsZero, opacity: 0 },
      0.01: { scaleX: scaleAsZero, scaleY: scaleAsZero, opacity: 1 },
      0.06: { scaleX: scaleAsZero, scaleY: scaleAsZero, opacity: 1 },
      0.09: { scaleX: 1, scaleY: 1, opacity: 1 },
      0.96: { scaleX: 1, scaleY: 1, opacity: 1 },
      0.97: { scaleX: scaleAsZero, scaleY: scaleAsZero, opacity: 0 },
      1: { scaleX: scaleAsZero, scaleY: scaleAsZero },
    },
    scaleIconAnimation: {
      0: { scaleX: scaleAsZero, scaleY: scaleAsZero, opacity: 0 },
      0.12: { scaleX: scaleAsZero, scaleY: scaleAsZero, opacity: 0 },
      0.19: { scaleX: 1, scaleY: 1, opacity: 1 },
      0.94: { scaleX: 1, scaleY: 1, opacity: 1 },
      0.95: { scaleX: scaleAsZero, scaleY: scaleAsZero, opacity: 0 },
      1: { scaleX: scaleAsZero, scaleY: scaleAsZero, opacity: 0 },
    },
    pulseAnimation: {
      0: { translateY: 0, scaleX: scaleAsZero, scaleY: scaleAsZero },
      0.025: { translateY: translateValue, scaleX: 1, scaleY: 1 },
      0.96: { translateY: translateValue, scaleX: 1, scaleY: 1 },
      0.97: { translateY: translateValue, scaleX: scaleAsZero, scaleY: scaleAsZero },
      0.98: { translateY: translateValue, scaleX: scaleAsZero, scaleY: scaleAsZero },
      0.99: { translateY: 0, scaleX: scaleAsZero, scaleY: scaleAsZero },
      1: { translateY: 0, scaleX: scaleAsZero, scaleY: scaleAsZero },
    },
  });
}
