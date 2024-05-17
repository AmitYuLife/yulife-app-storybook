import { LayoutChangeEvent, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { CloseSvg, TextTemplate } from "@atoms";
import { t } from "@locale";
import { Button, SecondaryButton, TouchableOpacityWithDelay } from "@components/molecules";
import { Colours } from "@styles";
import LinearGradient from "react-native-linear-gradient";
import { useMemo, useState } from "react";
import { ScrollableContentOverlayProps } from "./types";
import { scrollableContentOverlayStyles as styles, BUTTON_HEIGHT } from "./styles";
import { gradient } from "./config";

export const ScrollableContentOverlay = (props: ScrollableContentOverlayProps) => {
  const { onPressCta, onPressCtaDismiss, onPressClose, ctaLabel, ctaDismissLabel, HeaderIcon, heading, children } =
    props;

  const calculated = useMemo(() => {
    const bottomFillerHeight = onPressCtaDismiss ? BUTTON_HEIGHT * 1.5 : BUTTON_HEIGHT;

    return {
      scrollviewBottomPadStyle: {
        height: bottomFillerHeight,
      },
    };
  }, [onPressCtaDismiss]);

  const [scrollContentHeight, setScrollContentHeight] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    setScrollContentHeight(event.nativeEvent.layout.height + calculated.scrollviewBottomPadStyle.height);
  };

  return (
    <View style={styles.bottomWrapper}>
      <View style={styles.overshootCushion}>
        <View style={styles.safeAreaView}>
          <View style={styles.innerWrapper}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ height: scrollContentHeight }} bounces={false}>
              <View onLayout={handleLayout}>
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
              </View>
            </ScrollView>
            <SafeAreaView style={styles.buttonAbsolute}>
              <View style={styles.bottomFadeWrapper}>
                <LinearGradient
                  colors={gradient.top.colors}
                  start={gradient.top.start}
                  end={gradient.top.end}
                  locations={gradient.top.locations}
                  style={StyleSheet.absoluteFillObject}
                />
              </View>
              <View style={styles.buttonWrapper}>
                <Button size="Fill" label={ctaLabel} onPress={onPressCta} />
              </View>
              {!onPressCtaDismiss ? null : (
                <View style={styles.buttonWrapper}>
                  <SecondaryButton
                    size="Fill"
                    label={ctaDismissLabel ?? t("labels.cta.not_now")}
                    onPress={onPressCtaDismiss}
                  />
                </View>
              )}
            </SafeAreaView>
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
