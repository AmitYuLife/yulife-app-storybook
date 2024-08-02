import { LayoutChangeEvent, SafeAreaView, ScrollView, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { CloseSvg } from "@atoms";
import { t } from "@locale";
import { Button, LinkButton, TouchableOpacityWithDelay } from "@components/molecules";
import { Colours, Style } from "@styles";
import LinearGradient from "react-native-linear-gradient";
import React, { memo, ReactNode, useCallback, useMemo, useState } from "react";
import { gradient } from "./config";
import {
  BUTTON_HEIGHT,
  DEFAULT_BOTTOM_GRADIENT_BASE_HEIGHT,
  HEADER_IMAGE_SIZE,
  modalStyles,
  SCROLLER_PUSHUP_SIZE,
} from "./styles";
import { BUTTON_CLOSE, POPUP_WITH_HEADER_ICON_MODAL } from "@ids";
import { VoidFunction } from "@utils";

type HeaderIconProps = {
  style?: StyleProp<ViewStyle>;
  width?: number;
  height?: number;
};

interface IPopupWithHeaderIconModal {
  heading?: string;
  HeaderIcon: (props: HeaderIconProps) => ReactNode;

  onPressCta: VoidFunction;
  onPressClose: VoidFunction;
  onPressCtaDismiss?: VoidFunction;
  ctaLabel?: string;
  dismissLabel?: string;

  bottomGradientBaseHeight?: number;
  minHeight?: number;
  testId?: string;

  children: React.ReactNode;
}

// TODO: Reuse this in Quest map

export const PopupWithHeaderIconModal = memo(
  ({
    onPressCta,
    onPressCtaDismiss,
    onPressClose,
    minHeight,
    testId,
    HeaderIcon,
    heading,
    children,
    ctaLabel,
    dismissLabel,
    bottomGradientBaseHeight,
  }: IPopupWithHeaderIconModal) => {
    const [scrollContentHeight, setScrollContentHeight] = useState(0);

    const adjustedBottomGradientBaseHeight = bottomGradientBaseHeight
      ? Style.adjust(bottomGradientBaseHeight)
      : DEFAULT_BOTTOM_GRADIENT_BASE_HEIGHT;

    const calculated = useMemo(() => {
      const bottomFillerHeight = adjustedBottomGradientBaseHeight + (onPressCtaDismiss ? BUTTON_HEIGHT : 0);
      const fullContentHeight =
        Style.adjust(scrollContentHeight) + modalStyles.innerWrapper.paddingTop + bottomFillerHeight;

      return {
        scrollviewBottomPadStyle: {
          height: bottomFillerHeight,
        },
        maxHeightPushup:
          fullContentHeight >= modalStyles.innerWrapper.maxHeight
            ? {
                height: SCROLLER_PUSHUP_SIZE,
              }
            : {},
        scrollViewStyle: {
          height: scrollContentHeight + adjustedBottomGradientBaseHeight,
        },
      };
    }, [onPressCtaDismiss, adjustedBottomGradientBaseHeight, scrollContentHeight]);

    const innerWrapperStyles = useMemo(
      () => [modalStyles.innerWrapper, ...(minHeight ? [{ minHeight }] : [])],
      [minHeight]
    );

    const handleLayout = useCallback((event: LayoutChangeEvent) => {
      setScrollContentHeight(event.nativeEvent.layout.height);
    }, []);

    return (
      <View style={modalStyles.bottomWrapper} testID={testId ?? POPUP_WITH_HEADER_ICON_MODAL(heading)}>
        <View style={modalStyles.overshootCushion}>
          <View style={modalStyles.safeAreaView}>
            <View style={innerWrapperStyles}>
              <ScrollView showsVerticalScrollIndicator={false} style={calculated.scrollViewStyle} bounces={false}>
                <View onLayout={handleLayout}>
                  <View style={modalStyles.topPad} />
                  {children}
                  <View style={calculated.scrollviewBottomPadStyle} />
                  <View style={calculated.maxHeightPushup} />
                </View>
              </ScrollView>
              <SafeAreaView style={modalStyles.buttonAbsolute}>
                <View style={modalStyles.bottomFadeWrapper}>
                  <LinearGradient
                    colors={gradient.top.colors}
                    start={gradient.top.start}
                    end={gradient.top.end}
                    locations={gradient.top.locations}
                    style={StyleSheet.absoluteFillObject}
                  />
                </View>
                <View style={modalStyles.buttonWrapper}>
                  <Button
                    testID="popup-with-header-icon-modal-cta-button"
                    size="Fill"
                    translatedLabel={ctaLabel}
                    onPress={onPressCta}
                  />
                </View>
                {!onPressCtaDismiss ? null : (
                  <View style={modalStyles.buttonWrapper}>
                    <LinkButton
                      testID="popup-with-header-icon-modal-dismiss-button"
                      translatedLabel={dismissLabel || t("labels.cta.not_now")}
                      onPress={onPressCtaDismiss}
                    />
                  </View>
                )}
              </SafeAreaView>
            </View>
          </View>
          <View style={modalStyles.topFadeWrapper}>
            <LinearGradient
              colors={gradient.bottom.colors}
              start={gradient.bottom.start}
              end={gradient.bottom.end}
              locations={gradient.bottom.locations}
              style={StyleSheet.absoluteFillObject}
            />
          </View>
          {!HeaderIcon ? null : (
            <View style={modalStyles.imageWrapper}>
              <HeaderIcon style={modalStyles.image} width={HEADER_IMAGE_SIZE} height={HEADER_IMAGE_SIZE} />
            </View>
          )}
          <TouchableOpacityWithDelay
            onPress={onPressClose}
            style={modalStyles.closeButtonWrapper}
            testID={BUTTON_CLOSE}
          >
            <CloseSvg stroke={Colours.neutral.n800} accessible={false} />
          </TouchableOpacityWithDelay>
        </View>
      </View>
    );
  }
);
