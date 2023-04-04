import React, { memo, useCallback, useState } from "react";
import { VideoPlayer } from "@organisms";
import { ContentItemMedia as GqlMarkdown } from "@graphql/_core/schema";
import { Modal, StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { useSduiCallbackFunctionOrReduxAction } from "../_hooks";
import { GenericModal } from "@components/modals";
import { t } from "@locale";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";

export const ContentItemMedia = memo(
  ({
    theme,
    mediaTitle,
    source,
    poster,
    thumbnail,
    mediaLogo,
    onLeftIconPress,
    onRightIconPress,
    onStart,
    onEnd,
    orientation,
    ...props
  }: GqlMarkdown) => {
    const [showModal, setShowModal] = useState(false);
    const [showError, setShowError] = useState(false);
    const { handleSduiAction: handleLeftIconPress } = useSduiCallbackFunctionOrReduxAction(onLeftIconPress);
    const { handleSduiAction: handleRightIconPress } = useSduiCallbackFunctionOrReduxAction(onRightIconPress);
    const { handleSduiAction: handleOnStart } = useSduiCallbackFunctionOrReduxAction(onStart);
    const { handleSduiAction: handleOnEnd } = useSduiCallbackFunctionOrReduxAction(onEnd);

    const onEndAndPop = useCallback(() => {
      handleOnEnd();
      Navigation.pop(ROUTES.journey);
    }, [handleOnEnd]);

    const rightIconPress = useCallback((shouldShowModal: boolean) => {
      if (shouldShowModal) {
        return setShowModal(true);
      }

      handleRightIconPress();
    }, []);

    const onError = useCallback(() => {
      setShowError(true);
      setShowModal(true);
    }, []);

    const onPress = useCallback(async () => {
      setShowModal(false);
      handleLeftIconPress();
      //do something?
    }, []);

    const onPressSecondary = useCallback(async () => {
      setShowModal(false);
      //do something?
    }, []);

    return (
      <View style={styles.wrapper}>
        <VideoPlayer
          {...props}
          theme={theme as "light" | "dark"}
          title={mediaTitle}
          source={source.uri}
          poster={poster.uri}
          thumbnail={thumbnail.uri}
          logo={mediaLogo.uri}
          videoLogo={props?.videoLogo?.uri}
          onLeftIconPress={handleLeftIconPress}
          onRightIconPress={rightIconPress}
          onStart={handleOnStart}
          onEnd={onEndAndPop}
          onError={onError}
          orientation={orientation}
        />

        <Modal
          statusBarTranslucent={true}
          animationType="slide"
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <GenericModal
            isPrimaryOnePressOnly={true}
            heading={
              !showError
                ? t("modals.generic_modal.cancel_challenge.heading")
                : t("modals.generic_modal.on_meditopia_error.heading")
            }
            subheading={
              !showError
                ? t("modals.generic_modal.cancel_challenge.subheading")
                : t("modals.generic_modal.on_meditopia_error.subheading")
            }
            ctaLabel={
              !showError
                ? t("modals.generic_modal.cancel_challenge.cta_label")
                : t("modals.generic_modal.on_meditopia_error.cta_label")
            }
            ctaLabelSecondary={
              !showError ? t("labels.cta.cancel") : t("modals.generic_modal.on_meditopia_error.cta_label_secondary")
            }
            onPress={onPress}
            onPressSecondary={onPressSecondary}
          />
        </Modal>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    position: "absolute",
    height: Style.DEVICE_HEIGHT,
  },
});
