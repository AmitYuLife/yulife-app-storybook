import { t } from "@locale";
import { TRIANGLE_HEIGHT } from "@organisms/gift-view-loading/svg-background";
import { Style } from "@styles";
import { VoidFunction } from "@utils";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type Props = {
  loading: boolean;
  hasError: boolean;
  onClose: VoidFunction;
};

export const useGiftViewLoadingAnimation = ({ loading, hasError, onClose }: Props) => {
  const [maxTimeoutId, setMaxTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [isReadyToDismiss, setIsReadyToDismiss] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const translateY = useSharedValue(0);

  const onFirstLoopComplete = useCallback(() => setIsReadyToDismiss(true), []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAlert(true);
      setShowAnimation(false);
    }, 4000);

    setMaxTimeoutId(timeoutId);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (maxTimeoutId && !loading && !hasError) {
      clearTimeout(maxTimeoutId);
    }
  }, [maxTimeoutId, loading, hasError]);

  useEffect(() => {
    if (isReadyToDismiss && !loading && !hasError && !showAlert) {
      setShowAnimation(false);

      translateY.value = withTiming(
        Style.DEVICE_HEIGHT + TRIANGLE_HEIGHT,
        { duration: 600, easing: Easing.inOut(Easing.ease) },
        () => runOnJS(setShowContent)(true)
      );
    }
  }, [isReadyToDismiss, loading, hasError, showAlert]);

  useEffect(() => {
    if (hasError && isReadyToDismiss) {
      setShowAlert(true);
      setShowAnimation(false);
    }
  }, [hasError, isReadyToDismiss, showAlert]);

  useEffect(() => {
    if (showAlert) {
      Alert.alert(t("screens.gifting.gift_view_error.heading"), t("screens.gifting.gift_view_error.description"), [
        {
          onPress: onClose,
          text: t("labels.cta.got_it"),
        },
      ]);
    }
  }, [showAlert, onClose]);

  const onLoadingPress = useCallback(() => setIsReadyToDismiss(true), []);

  const giftLoadingStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      transform: [{ translateY: translateY.value }],
    };
  });

  return {
    showAnimation,
    showContent,
    giftLoadingStyle,
    onFirstLoopComplete,
    onLoadingPress,
  };
};
