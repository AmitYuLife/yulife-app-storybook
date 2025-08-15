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
  errorMessage: string;
};

const CONFIG = {
  STARTING_POINT: Style.DEVICE_HEIGHT + TRIANGLE_HEIGHT * 2,
  ENDING_POINT: -TRIANGLE_HEIGHT,
};

export const useGiftPreviewLoadingAnimation = ({ sendingState, setShowButton, goToSuccess, errorMessage }: Props) => {
  const [finishedAnimation, setFinishedAnimation] = useState(false);
  const [minimumTimeReached, setMinimumTimeReached] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const translateY = useSharedValue(CONFIG.STARTING_POINT);

  const onLoadingPress = useCallback(() => {
    setFinishedAnimation(true);
  }, []);

  const onCloseAlert = useCallback(() => {
    translateY.value = withTiming(CONFIG.STARTING_POINT, { duration: 600, easing: Easing.inOut(Easing.ease) }, () =>
      runOnJS(setShowButton)(true)
    );
  }, [translateY, setShowButton]);

  useEffect(() => {
    if (sendingState === GiftSendingStates.SENDING) {
      setShowButton(false);
      setShowAnimation(true);
      setFinishedAnimation(false);
      setMinimumTimeReached(false);

      translateY.value = withTiming(CONFIG.ENDING_POINT, { duration: 600, easing: Easing.inOut(Easing.ease) });

      setTimeout(() => {
        setMinimumTimeReached(true);
      }, 1000);
    }
  }, [sendingState, translateY, setShowButton]);

  useEffect(() => {
    if (errorMessage && minimumTimeReached) {
      setShowAnimation(false);

      Alert.alert(t("screens.gifting.gift_view_error.heading"), errorMessage, [
        {
          onPress: onCloseAlert,
          text: t("labels.cta.got_it"),
        },
      ]);
    }
  }, [minimumTimeReached, onCloseAlert, errorMessage]);

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
