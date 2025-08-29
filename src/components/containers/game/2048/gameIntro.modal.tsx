import { memo, useCallback } from "react";
import { Image } from "expo-image";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { Box, TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { showFloatingModal } from "@modals";
import { BUTTON_SUBMIT } from "@ids";
import { Style, StyleSheet } from "@styles";
import { VoidFunction } from "@utils";
import { useTimeout } from "@hooks";

const HOURGLASS_IMG = require("./components/assets/hourglass.png");

type IGameIntroProps = {
  title: string;
  ctaLabel: string;
  image?: {
    uri: string;
    width: number;
    height: number;
  };
  displayDuration?: number;
  onDismiss?: VoidFunction;

  // Auto bound by FloatingModal
  closeActiveOverlay?: () => void;
};

const GameIntroModal = memo(
  ({ title, ctaLabel, image, displayDuration, onDismiss, closeActiveOverlay }: IGameIntroProps) => {
    const dismissModal = useCallback(() => {
      onDismiss?.();

      if (closeActiveOverlay) {
        closeActiveOverlay();
        return;
      }

      Navigation.dismissOverlayWithChild();
    }, [closeActiveOverlay, onDismiss]);

    useTimeout(dismissModal, displayDuration, displayDuration > 0);

    return (
      <Box flex={1} p={32} gap={32} alignItems="center">
        {image?.uri && image?.width ? (
          <Image source={image.uri} style={{ width: image.width, height: image.height ?? image.width }} />
        ) : (
          <Image source={HOURGLASS_IMG} style={styles.image} />
        )}
        <TextTemplate type="h2" textAlign="center">
          {title}
        </TextTemplate>
        <Box mt="auto" gap={8}>
          <Button testID={BUTTON_SUBMIT("game-intro-modal")} translatedLabel={ctaLabel} onPress={dismissModal} />
        </Box>
      </Box>
    );
  }
);

export type ShowGameIntroModalProps = IGameIntroProps & {
  closeOnBlur?: boolean;
};

export const showGameIntroModal = (props: ShowGameIntroModalProps) =>
  showFloatingModal({
    modalId: MODALS.game2048Intro,
    showButton: false,
    showCloseIcon: false,
    closeOnBlur: !!props.closeOnBlur,
    height: Style.adjust(390),
    paddingTop: 0,
    onClose: props.onDismiss,
    children: <GameIntroModal {...props} />,
  });

const styles = StyleSheet.create({
  image: {
    width: Style.adjust(67),
    height: Style.adjust(86),
  },
});
