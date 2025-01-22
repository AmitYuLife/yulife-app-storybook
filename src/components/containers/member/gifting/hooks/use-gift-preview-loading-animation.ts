import { t } from "@locale";
import { TRIANGLE_HEIGHT } from "@organisms/gift-view-loading/svg-background";
import { Style } from "@styles";
import { VoidFunction } from "@utils";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { GiftSendingStates } from "../context/gifting-manager.types";

type Props = {
  sendingState: GiftSendingStates;
  setShowButton: React.Dispatch<React.SetStateAction<boolean>>;
  goToSuccess: VoidFunction;
};

export const useGiftPreviewLoadingAnimation = ({ sendingState, setShowButton, goToSuccess }: Props) => {
  const [finishedAnimation, setFinishedAnimation] = useState(false);
  const [minimumTimeReached, setMinimumTimeReached] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const translateY = useSharedValue(Style.DEVICE_HEIGHT + TRIANGLE_HEIGHT);

  const onLoadingPress = useCallback(() => {
    setFinishedAnimation(true);
  }, []);

  const onCloseAlert = useCallback(() => {
    translateY.value = withTiming(
      Style.DEVICE_HEIGHT + TRIANGLE_HEIGHT,
      { duration: 600, easing: Easing.inOut(Easing.ease) },
      () => runOnJS(setShowButton)(true)
    );
  }, [translateY, setShowButton]);

  useEffect(() => {
    if (sendingState === GiftSendingStates.SENDING) {
      setShowButton(false);
      setShowAnimation(true);
      setFinishedAnimation(false);
      setMinimumTimeReached(false);

      translateY.value = withTiming(0, { duration: 600, easing: Easing.inOut(Easing.ease) });

      setTimeout(() => {
        setMinimumTimeReached(true);
      }, 1000);
    }
  }, [sendingState, translateY, setShowButton]);

  useEffect(() => {
    if (sendingState === GiftSendingStates.ERROR && minimumTimeReached) {
      setShowAnimation(false);

      Alert.alert(t("screens.gifting.gift_view_error.heading"), t("screens.gifting.gift_view_error.description"), [
        {
          onPress: onCloseAlert,
          text: t("labels.cta.got_it"),
        },
      ]);
    }
  }, [sendingState, minimumTimeReached, onCloseAlert]);

  useEffect(() => {
    if (sendingState === GiftSendingStates.SENT && finishedAnimation) {
      setShowButton(true);
      goToSuccess();
    }
  }, [sendingState, finishedAnimation, setShowButton, goToSuccess]);

  const giftLoadingStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      transform: [{ translateY: translateY.value }],
    };
  });

  return {
    showAnimation,
    giftLoadingStyle,
    setFinishedAnimation,
    onLoadingPress,
  };
};
