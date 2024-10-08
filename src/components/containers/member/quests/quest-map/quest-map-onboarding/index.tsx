import React, { memo } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { NavBar, TopBar } from "@organisms";
import { IConnectedScreenProps } from "@app/typings";
import { Colours, NAV_BAR, Style, TOP_BAR } from "@styles";
import { ImageStyle, RawImage, TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { QUEST_MAP_ONBOARDING_IMAGE } from "@ids";
import Animated, { FadeInDown } from "react-native-reanimated";

interface QuestMapOnboardingProps extends IConnectedScreenProps {
  handleClose: () => void;
  heroImage?: string;
  heading?: string;
  description?: string;
  callToActionText: string;
  backgroundColor?: string;
  backgroundImage?: string;
}

const QuestMapOnboarding = ({
  onLeftMenuPress,
  handleClose,
  heroImage,
  heading,
  description,
  callToActionText,
  backgroundColor = "#103726",
  backgroundImage,
}: QuestMapOnboardingProps) => {
  return (
    <>
      <View style={styles.header}>
        <TopBar type="white" onPressLeftIcon={onLeftMenuPress} />
      </View>

      <Animated.View entering={FadeInDown.duration(500)} style={[styles.container, { backgroundColor }]}>
        <SafeAreaView style={styles.container}>
          <RawImage
            source={backgroundImage}
            style={styles.backgroundImage}
            testID={QUEST_MAP_ONBOARDING_IMAGE(heroImage)}
          />

          <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
              {!heroImage ? null : <RawImage source={heroImage} style={styles.heroImage} />}
              <View style={styles.textWrapper}>
                {!heading ? null : (
                  <TextTemplate type="h1" color={Colours.neutral.white} textAlign="center">
                    {heading}
                  </TextTemplate>
                )}
                {!description ? null : (
                  <TextTemplate type="b2" color={Colours.neutral.white} textAlign="center">
                    {description}
                  </TextTemplate>
                )}
              </View>
            </ScrollView>
            <View style={styles.buttonWrapper}>
              <Button
                testID="quest-map-onboarding-close-button"
                size="Fill"
                translatedLabel={callToActionText}
                onPress={handleClose}
              />
            </View>
          </View>
        </SafeAreaView>
      </Animated.View>
      <NavBar activeIndex={1} />
    </>
  );
};

const styles = {
  header: {
    position: "absolute",
    left: 0,
    right: 0,
    top: TOP_BAR.PADDING_TOP,
  } as ViewStyle,
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  content: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: NAV_BAR.DEFAULT_FULL_HEIGHT,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingBottom: Style.adjust(32),
    paddingHorizontal: Style.adjust(32),
    paddingTop: TOP_BAR.TOP_BAR_WITH_PAD,
  } as ViewStyle,
  scrollView: {
    flex: 1,
    left: 0,
    right: 0,
    maxHeight: Style.DEVICE_HEIGHT - NAV_BAR.DEFAULT_FULL_HEIGHT - TOP_BAR.TOP_BAR_WITH_PAD - Style.adjust(128),
  } as ViewStyle,
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: Style.adjust(8),
  } as ViewStyle,
  buttonWrapper: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
  heroImage: {
    width: Style.adjust(327),
    height: Style.adjust(351),
    marginBottom: Style.adjust(32),
  } as ImageStyle,
  backgroundImage: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_WIDTH * 0.48,
    position: "absolute",
  } as ImageStyle,
};

export default memo(QuestMapOnboarding);
