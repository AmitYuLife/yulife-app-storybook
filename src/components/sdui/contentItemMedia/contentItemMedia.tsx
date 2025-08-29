import React, { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { Navigation } from "@navigation/main";
import { VideoPlayer } from "@organisms";
import { ContentItemMediaFragment as GqlMarkdown } from "@graphql/__generated";
import { Modal, View } from "react-native";
import { Style, StyleSheet } from "@styles";
import { useSduiCallbackFunctionOrReduxAction } from "../_hooks";
import { GenericModal } from "@components/modals";

export const ContentItemMedia = memo(
  ({
    theme,
    mediaTitle,
    mediaSubtitle,
    modalCopy,
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
    const currentRoute: ReturnType<typeof getRouteState> = useSelector(getRouteState);
    const closeMedia = () => {
      Navigation.pop(currentRoute);
    };

    const [showModal, setShowModal] = useState(false);
    const [showError, setShowError] = useState(false);
    const { handleSduiAction: handleLeftIconPress } = useSduiCallbackFunctionOrReduxAction(onLeftIconPress);
    const { handleSduiAction: handleRightIconPress } = useSduiCallbackFunctionOrReduxAction(onRightIconPress);
    const { handleSduiAction: handleOnStart } = useSduiCallbackFunctionOrReduxAction(onStart);
    const { handleSduiAction: handleOnEnd } = useSduiCallbackFunctionOrReduxAction(onEnd, closeMedia);

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
          subtitle={mediaSubtitle}
          source={source.uri}
          poster={poster.uri}
          thumbnail={thumbnail.uri}
          logo={mediaLogo.uri}
          videoLogo={props?.videoLogo?.uri}
          onLeftIconPress={handleLeftIconPress}
          onRightIconPress={rightIconPress}
          onStart={handleOnStart}
          onEnd={handleOnEnd}
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
            {...(showError ? modalCopy.error : modalCopy.cancel)}
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
    height: Style.DEVICE_HEIGHT,
  },
});
