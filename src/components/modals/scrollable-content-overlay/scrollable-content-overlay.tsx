import { LayoutChangeEvent, ScrollView, StyleSheet, View } from "react-native";
import { CloseSvg, TextTemplate } from "@atoms";
import { t } from "@locale";
import { Button, SecondaryButton, TouchableOpacityWithDelay } from "@components/molecules";
import { Colours } from "@styles";
import LinearGradient from "react-native-linear-gradient";
import { useCallback, useMemo, useState } from "react";
import { ScrollableContentOverlayProps } from "./types";
import { scrollableContentOverlayStyles as styles } from "./styles";
import { gradient } from "./config";
import { SCROLLABLE_CONTENT_CTA, SCROLLABLE_CONTENT_DISMISS } from "@ids";

export const ScrollableContentOverlay = (props: ScrollableContentOverlayProps) => {
  const {
    onPressCta,
    onPressCtaDismiss,
    onPressClose,
    ctaLabel,
    ctaDismissLabel,
    ctaDismissType = "secondary",
    HeaderIcon,
    heading,
    noMinHeight,
    children,
    testId,
  } = props;
  const [ctaContentHeight, setCtaContentHeight] = useState(0);

  const calculated = useMemo(
    () => ({
      scrollviewBottomPadStyle: {
        height: styles.buttonWrapper.paddingTop + ctaContentHeight,
      },
      innerWrapperStyle: [styles.innerWrapper, noMinHeight ? {} : styles.innerWrapperMinHeightConstraint],
    }),
    [ctaContentHeight, noMinHeight]
  );

  const handleCtaLayout = useCallback((event: LayoutChangeEvent) => {
    setCtaContentHeight(event.nativeEvent.layout.height);
  }, []);

  const DismissButtonComponent = ctaDismissType === "secondary" ? SecondaryButton : Button;

  return (
    <View style={styles.bottomWrapper} testID={testId}>
      <View style={styles.overshootCushion}>
        <View style={styles.safeAreaView}>
          <View style={calculated.innerWrapperStyle}>
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
              <View style={styles.topPad} />
              {!heading ? null : (
                <View style={styles.textWrapper}>
                  <TextTemplate textAlign="center" type="h2">
                    {heading}
                  </TextTemplate>
                </View>
              )}
              {children}
              <View style={calculated.scrollviewBottomPadStyle} />
            </ScrollView>
            <View style={styles.pushupSize} />
            <View style={styles.buttonContainer}>
              <View style={styles.bottomFadeWrapper}>
                <LinearGradient
                  colors={gradient.top.colors}
                  start={gradient.top.start}
                  end={gradient.top.end}
                  locations={gradient.top.locations}
                  style={StyleSheet.absoluteFillObject}
                />
              </View>
              <View onLayout={handleCtaLayout}>
                <View style={styles.buttonWrapper}>
                  <Button testID={SCROLLABLE_CONTENT_CTA} size="Fill" translatedLabel={ctaLabel} onPress={onPressCta} />
                </View>
                {!onPressCtaDismiss ? null : (
                  <View style={styles.buttonWrapper}>
                    <DismissButtonComponent
                      // testID="scrollable-content-dismiss-button"
                      testID={SCROLLABLE_CONTENT_DISMISS}
                      size="Fill"
                      translatedLabel={ctaDismissLabel ?? t("labels.cta.not_now")}
                      onPress={onPressCtaDismiss}
                    />
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.topFadeWrapper}>
          <LinearGradient
            colors={gradient.bottom.colors}
            start={gradient.bottom.start}
            end={gradient.bottom.end}
            locations={gradient.bottom.locations}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
        {!HeaderIcon ? null : <View style={styles.imageWrapper}>{HeaderIcon}</View>}
        {!onPressClose ? null : (
          <TouchableOpacityWithDelay onPress={onPressClose} style={styles.closeButtonWrapper}>
            <CloseSvg stroke={Colours.neutral.n800} accessible={false} />
          </TouchableOpacityWithDelay>
        )}
      </View>
    </View>
  );
};
