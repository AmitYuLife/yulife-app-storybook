import { ROUTES } from "@navigation/constants";
import { FullScreenSwiper } from "@organisms";
import { useState, useCallback, useEffect, ComponentProps } from "react";
import { Navigation } from "@navigation/main";
import { Platform } from "react-native";

export function useIntroModal(swiper: ComponentProps<typeof FullScreenSwiper>) {
  const [showIntroModal, setShowIntroModal] = useState(!!swiper);

  const dismissOverlay = useCallback(() => {
    Navigation.dismissAllOverlays();
    setShowIntroModal(false);
  }, []);

  useEffect(() => {
    if (!swiper) {
      return;
    }

    const passedProps: ComponentProps<typeof FullScreenSwiper> = {
      ...swiper,
      close: {
        ...swiper.close,
        onPress: dismissOverlay,
      },
      button: {
        ...swiper.button,
        onPress: dismissOverlay,
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
