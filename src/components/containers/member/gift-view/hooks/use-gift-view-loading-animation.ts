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
  const [finishedAnimation, setFinishedAnimation] = useState(false);
  const [maxTimeoutId, setMaxTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [minimumTimeReached, setMinimumTimeReached] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const translateY = useSharedValue(0);

  useEffect(() => {
    const minTimeoutId = setTimeout(() => setMinimumTimeReached(true), 1000);

    const timeoutId = setTimeout(() => {
      setShowAlert(true);
      setShowAnimation(false);
    }, 4000);

    setMaxTimeoutId(timeoutId);

    return () => {
      clearTimeout(minTimeoutId);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (maxTimeoutId && !loading && !hasError) {
      clearTimeout(maxTimeoutId);
    }
  }, [maxTimeoutId, loading, hasError]);

  useEffect(() => {
    if (finishedAnimation && !loading && !hasError && !showAlert) {
      setShowAnimation(false);

      translateY.value = withTiming(
        Style.DEVICE_HEIGHT + TRIANGLE_HEIGHT,
        { duration: 600, easing: Easing.inOut(Easing.ease) },
        () => runOnJS(setShowContent)(true)
      );
    }
  }, [finishedAnimation, loading, hasError, showAlert]);

  useEffect(() => {
    if (hasError && minimumTimeReached) {
      setShowAlert(true);
      setShowAnimation(false);
    }
  }, [hasError, minimumTimeReached, showAlert]);

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

  const onLoadingPress = useCallback(() => setFinishedAnimation(true), []);

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
    setFinishedAnimation,
    onLoadingPress,
  };
};
