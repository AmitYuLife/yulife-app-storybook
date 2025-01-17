import React, { memo, useCallback } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Buttons } from "./subcomponents/buttons";
import { Colours, Style } from "@styles";
import { TextTemplate } from "@atoms";
import { Image } from "@atoms";
import { HERO_IMAGE_MODAL } from "@ids";

interface Props {
  imageUrl: string;
  header: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  closeOverlay?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}

const HeroImageModal = (props: Props) => {
  const { onConfirm, cancelLabel, confirmLabel, imageUrl, header, description, closeOverlay } = props;

  const onConfirmButtonPressed = useCallback(() => {
    if (closeOverlay) {
      closeOverlay();
    }

    onConfirm();
  }, [closeOverlay, onConfirm]);

  return (
    <View style={styles.modalContainer} testID={HERO_IMAGE_MODAL}>
      <View style={styles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            imageStyle={styles.hero}
            source={!imageUrl ? require("@assets/hero-image-modal/default.png") : { uri: imageUrl }}
            width={Style.DEVICE_WIDTH - Style.adjust(24)}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.headerWrapper}>
            <TextTemplate type="h3" color={Colours.darkPink} lineHeight={Style.adjust(28)} textAlign="center">
              {header}
            </TextTemplate>
          </View>
          <View style={styles.descriptionWrapper}>
            <TextTemplate type="b2" color={Colours.neutral.n850} lineHeight={Style.adjust(20)} textAlign="center">
              {description}
            </TextTemplate>
          </View>
          <Buttons
            onConfirm={onConfirmButtonPressed}
            onCancel={closeOverlay}
            cancelLabel={cancelLabel}
            confirmLabel={confirmLabel}
          />
        </View>
      </View>
    </View>
  );
};

export default memo(HeroImageModal);

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(16),
    paddingBottom: Style.adjust(32),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  headerWrapper: {
    paddingVertical: Style.adjust(24),
  } as ViewStyle,
  descriptionWrapper: {} as ViewStyle,
  content: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  imageWrapper: {
    paddingHorizontal: Style.adjust(32),
  } as ViewStyle,
  innerWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Style.adjust(24),
  },
  hero: {
    borderTopLeftRadius: Style.adjust(16),
    borderTopRightRadius: Style.adjust(16),
  },
});
