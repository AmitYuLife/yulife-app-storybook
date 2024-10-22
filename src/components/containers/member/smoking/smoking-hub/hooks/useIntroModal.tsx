import { ROUTES } from "@navigation/constants";
import { FullScreenSwiper } from "@organisms";
import { useState, useCallback, useEffect, ComponentProps } from "react";
import { Navigation } from "@navigation/main";
import { useDispatch } from "react-redux";
import { Platform } from "react-native";

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

export function useIntroModal(swiper: UseIntroModalProps) {
  const [showIntroModal, setShowIntroModal] = useState(!!swiper);
  const dispatch = useDispatch();

  const dismissOverlay = useCallback(
    (sduiAction: { type: string; payload: string }) => () => {
      if (sduiAction) {
        dispatch(sduiAction);
      }

      Navigation.dismissAllOverlays();
      setShowIntroModal(false);
    },
    []
  );

  useEffect(() => {
    if (!swiper) {
      return;
    }

    const passedProps = {
      ...swiper,
      close: !swiper.close
        ? null
        : {
            ...swiper.close,
            onPress: dismissOverlay(swiper.close.onPress),
          },
      button: !swiper.button
        ? null
        : {
            ...swiper.button,
            onPress: dismissOverlay(swiper.button.onPress),
          },
    };

    const start = async () => {
      await Navigation.showOverlayWithChild(<FullScreenSwiper {...passedProps} />);

      if (Platform.OS === "android") {
        await Navigation.popToRoot(ROUTES.yuScreen);
        await Navigation.push(ROUTES.yuScreen, {
          component: {
            id: ROUTES.smoking,
            name: ROUTES.smoking,
          },
        });
      }
    };

    start();
  }, []);

  return { showIntroModal };
}
