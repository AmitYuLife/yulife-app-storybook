import { FullScreenSwiper } from "@organisms";
import { useState, useCallback, useEffect, ComponentProps, useRef } from "react";
import { Navigation } from "@navigation/main";
import { useDispatch } from "react-redux";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { showSmokingStreakCelebrationModal } from "../helpers/showSmokingStreakCelebrationModal";
import { GetHealthSmokingStateQuery } from "@graphql/__generated";
import { useAsyncEffect } from "@hooks";

export type UseIntroModalProps = Omit<ComponentProps<typeof FullScreenSwiper>, "close" | "button"> & {
  close: {
    icon: {
      id: string;
      uri?: string;
    };
    onPress: {
      type: string;
      payload: string;
    };
  };
  button: {
    onPress: {
      type: string;
      payload: string;
    };
    label: string;
  };
};

export function useIntroModal(swiper: UseIntroModalProps, smokingState?: HealthSmokingState) {
  const [showIntroModal, setShowIntroModal] = useState(!!swiper);
  const dispatch = useDispatch();
  const smokingStateRef = useRef(smokingState);

  const dismissOverlay = useCallback((sduiAction: { type: string; payload: string }) => {
    if (sduiAction) {
      dispatch(sduiAction);
    }

    Navigation.dismissAllOverlays();
    setShowIntroModal(false);
  }, []);

  useEffect(() => {
    smokingStateRef.current = smokingState;
  }, [smokingState]);

  const fullScreenSwiperOnPress = useCallback(
    (onPress: UseIntroModalProps["close" | "button"]["onPress"]) => {
      dismissOverlay(onPress);

      if (smokingStateRef.current?.streakCheckInOverlay?.celebration?.title) {
        showSmokingStreakCelebrationModal(
          smokingStateRef.current as GetHealthSmokingStateQuery["getHealthSmokingState"]
        );
      }
    },
    [dismissOverlay]
  );

  useAsyncEffect(async () => {
    if (!swiper) {
      return;
    }

    const fullScreenSwiperProps = {
      ...swiper,
      close: !swiper.close
        ? null
        : {
            ...swiper.close,
            onPress: () => fullScreenSwiperOnPress(swiper.close.onPress),
          },
      button: !swiper.button
        ? null
        : {
            ...swiper.button,
            onPress: () => fullScreenSwiperOnPress(swiper.button.onPress),
          },
    };

    await Navigation.showOverlayWithChild({ children: <FullScreenSwiper {...fullScreenSwiperProps} /> });
  }, []);

  return { showIntroModal };
}
