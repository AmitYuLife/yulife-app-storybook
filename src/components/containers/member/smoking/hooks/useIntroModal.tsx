import { ROUTES } from "@navigation/constants";
import { FullScreenSwiper } from "@organisms";
import { useState, useCallback, useEffect, ComponentProps } from "react";
import { Navigation } from "@navigation/main";

export function useIntroModal(swiper: ComponentProps<typeof FullScreenSwiper>) {
  const [showIntroModal, setShowIntroModal] = useState(!!swiper);
  const [shouldResetNavigationStack, setShouldResetNavigationStack] = useState(!!swiper);

  const dismissOverlay = useCallback(() => {
    Navigation.dismissAllOverlays();
    setShowIntroModal(false);
  }, []);

  useEffect(() => {
    if (!swiper || !shouldResetNavigationStack) {
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;
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

      const reset = async () => {
        await Navigation.popToRoot(ROUTES.yuScreen);
        await Navigation.push(ROUTES.yuScreen, {
          component: {
            id: ROUTES.smoking,
            name: ROUTES.smoking,
          },
        });
      };

      timeout = setTimeout(reset, 1000);
    };

    start();
    setShouldResetNavigationStack(false);

    return () => {
      setShouldResetNavigationStack(false);
      clearTimeout(timeout);
    };
  }, [swiper, shouldResetNavigationStack]);

  return { showIntroModal };
}
