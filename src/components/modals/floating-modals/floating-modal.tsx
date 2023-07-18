import React, { memo, isValidElement, ReactElement, useMemo, useState, useCallback } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, PressableWithDelay, SecondaryButton } from "@molecules";
import { Style, Colours } from "@styles";
import { ContentItemLottie } from "@components/sdui";
import { ContentItemLottie as GqlLottie } from "@graphql/_core/schema";
import { useTranslation } from "@hooks";
import { Source } from "react-native-fast-image";
import { CloseSvg, Image, TextTemplate } from "@atoms";

interface IProps {
  closeOverlay?: () => void;
  children: ReactElement | ((props: IFloatingModalContentProps) => ReactElement);
  height?: number;
  paddingTop?: number;
  lottie?: GqlLottie;
  showCloseIcon?: boolean;
  showButton?: boolean;
  buttonLabel?: string;
  buttonOnPress?: () => void;
  icon?: Source;
  isCloseButtonSecondary?: boolean;
  title?: string;
}

export interface IFloatingModalContentProps {
  onClose?: () => void;
  setIcon?: (icon: Source) => void;
}

const FloatingModal = ({
  closeOverlay,
  children,
  lottie,
  icon,
  showCloseIcon = true,
  showButton = true,
  buttonLabel,
  buttonOnPress,
  height = Style.adjust(420),
  paddingTop = Style.adjust(124),
  isCloseButtonSecondary,
  title,
}: IProps) => {
  const CloseButton = isCloseButtonSecondary ? SecondaryButton : Button;
  const translation = useTranslation(["labels.cta.close"]);
  const [iconAsset, setIconAsset] = useState<Source>(icon);

  const content = useMemo(() => {
    if (isValidElement(children)) {
      return children;
    }

    const Content = children;
    return <Content onClose={closeOverlay} setIcon={setIconAsset} />;
  }, [children, closeOverlay, setIconAsset]);

  const onButtonPress = useCallback(() => {
    if (buttonOnPress) {
      buttonOnPress();
    }

    closeOverlay();
  }, [buttonOnPress, closeOverlay]);
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
      <View style={[styles.wrapper, { paddingTop, minHeight: height }]}>
        {!title ? null : (
          <View style={styles.title}>
            <TextTemplate type="h3">{title}</TextTemplate>
          </View>
        )}
        {!lottie ? null : (
          <View style={styles.iconWrapper}>
            <ContentItemLottie {...lottie} />
          </View>
        )}
        {!iconAsset ? null : (
          <View style={styles.iconWrapper}>
            <Image width={Style.adjust(140)} height={Style.adjust(140)} source={iconAsset} />
          </View>
        )}
        {content}

        {!showButton ? null : (
          <CloseButton
            onPress={onButtonPress}
            label={buttonLabel || translation["labels.cta.close"]}
            wrapperStyle={styles.buttonWrapperStyle}
          />
        )}
        {!showCloseIcon ? null : (
          <PressableWithDelay onPress={closeOverlay} style={styles.closeWrapper}>
            <CloseSvg stroke={Colours.darkestGray} size={Style.adjust(24)} />
          </PressableWithDelay>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    borderTopLeftRadius: Style.adjust(20),
    borderTopRightRadius: Style.adjust(20),
  },
  title: {
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: Style.adjust(16),
  },
  closeWrapper: {
    position: "absolute",
    top: Style.adjust(16),
    right: Style.adjust(16),
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
