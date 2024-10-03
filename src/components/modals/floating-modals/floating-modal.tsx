import React, { memo, isValidElement, ReactElement, useMemo, useState, useCallback, ReactNode } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View, ViewStyle } from "react-native";
import { Button, PressableWithDelay, SecondaryButton } from "@molecules";
import { Style, Colours } from "@styles";
import { ContentItemLottie } from "@components/sdui";
import { ContentItemLottieFragment as GqlLottie } from "@graphql/__generated";
import { useTranslation } from "@hooks";
import { CloseSvg, Image, Source, TextTemplate } from "@atoms";
import Logger from "@services/logging/logger";
import { FLOATING_CONTINUE_BUTTON } from "@ids";

type FloatingModalComponent = (props: IFloatingModalContentProps) => ReactNode;

interface IProps {
  closeOverlay?: () => void;
  children: ReactElement | FloatingModalComponent;
  height?: number;
  paddingTop?: number;
  lottie?: GqlLottie;
  showCloseIcon?: boolean;
  closeIconColor?: string;
  showButton?: boolean;
  buttonLabel?: string;
  buttonOnPress?: () => void;
  icon?: Source;
  isCloseButtonSecondary?: boolean;
  title?: string;
  wrapperStyle?: ViewStyle;
  testID?: string;
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
  closeIconColor = Colours.darkestGray,
  title,
  wrapperStyle,
  testID,
}: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [iconAsset, setIconAsset] = useState<Source>(icon);
  const CloseButton = isCloseButtonSecondary ? SecondaryButton : Button;
  const translation = useTranslation(["labels.cta.close"]);

  const content = useMemo(() => {
    if (isValidElement(children)) {
      return children;
    }

    const Content = children as FloatingModalComponent;
    return <Content onClose={closeOverlay} setIcon={setIconAsset} />;
  }, [children, closeOverlay, setIconAsset]);

  const onButtonPress = useCallback(async () => {
    if (buttonOnPress) {
      try {
        setIsLoading(true);
        await buttonOnPress();
      } catch (err) {
        Logger.error(err, { location: "floating-modal" });
      } finally {
        setIsLoading(false);
      }
    }

    closeOverlay();
  }, [buttonOnPress, closeOverlay]);

  const wrapperStyles = useMemo(
    () => ({ ...styles.wrapper, paddingTop, minHeight: height, ...wrapperStyle }),
    [wrapperStyle, paddingTop, height]
  );
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
      <View style={wrapperStyles} testID={testID}>
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
            testID={FLOATING_CONTINUE_BUTTON}
            onPress={onButtonPress}
            translatedLabel={buttonLabel || translation["labels.cta.close"]}
            wrapperStyle={styles.buttonWrapperStyle}
            isLoading={isLoading}
          />
        )}
        {!showCloseIcon ? null : (
          <PressableWithDelay onPress={closeOverlay} style={styles.closeWrapper}>
            <CloseSvg stroke={closeIconColor} size={Style.adjust(24)} />
          </PressableWithDelay>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.white,
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
