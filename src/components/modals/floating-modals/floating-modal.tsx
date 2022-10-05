import React, { memo, ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { Button, SecondaryButton } from "@molecules";
import { Style } from "@styles";
import { ContentItemLottie } from "@components/sdui";
import { ContentItemLottie as GqlLottie } from "@graphql/_core/schema";
import { useTranslation } from "@hooks";
import { Source } from "react-native-fast-image";
import { Image } from "@atoms";

interface IProps {
  closeOverlay?: () => void;
  children: ReactElement;
  height?: number;
  paddingTop?: number;
  lottie?: GqlLottie;
  icon?: Source;
  isCloseButtonSecondary?: boolean;
}

const FloatingModal = ({
  closeOverlay,
  children,
  lottie,
  icon,
  height = Style.adjust(420),
  paddingTop = Style.adjust(124),
  isCloseButtonSecondary,
}: IProps) => {
  const CloseButton = isCloseButtonSecondary ? SecondaryButton : Button;
  const translation = useTranslation(["button.close"]);

  return (
    <View style={[styles.wrapper, { paddingTop, minHeight: height }]}>
      {!lottie ? null : (
        <View style={styles.iconWrapper}>
          <ContentItemLottie {...lottie} />
        </View>
      )}
      {!icon ? null : (
        <View style={styles.iconWrapper}>
          <Image width={Style.adjust(140)} height={Style.adjust(140)} source={icon} />
        </View>
      )}
      {children}
      <CloseButton
        onPress={closeOverlay}
        label={translation["button.close"]}
        wrapperStyle={styles.buttonWrapperStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    borderTopLeftRadius: Style.adjust(20),
    borderTopRightRadius: Style.adjust(20),
  },
  iconWrapper: {
    height: Style.adjust(140),
    width: Style.adjust(140),
    borderRadius: Style.adjust(70),
    top: Style.adjust(-40),
    position: "absolute",
    alignSelf: "center",
  },
  buttonWrapperStyle: {
    position: "absolute",
    bottom: Style.adjust(32),
  },
});

export default memo(FloatingModal);
