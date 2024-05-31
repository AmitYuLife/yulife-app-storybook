import React, { memo } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { NavBar, TopBar } from "@organisms";
import { IConnectedScreenProps } from "@app/typings";
import { Colours, NAV_BAR, Style, TOP_BAR } from "@styles";
import { ImageStyle, RawImage, TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { View as AnimatedView } from "react-native-animatable";
import { useQuestMapOnboarding } from "./useQuestMapOnboarding";

interface QuestMapOnboardingProps extends IConnectedScreenProps {
  heroImage?: string;
  heading?: string;
  description?: string;
  callToActionText: string;
  backgroundColor?: string;
  backgroundImage?: string;
}

const QuestMapOnboarding = ({
  onLeftMenuPress,
  heroImage,
  heading,
  description,
  callToActionText,
  backgroundColor = "#103726",
  backgroundImage,
}: QuestMapOnboardingProps) => {
  const { showOnboarding, handleClose } = useQuestMapOnboarding();

  if (!showOnboarding) {
    return null;
  }

  return (
    <>
      <AnimatedView
        useNativeDriver={true}
        animation="fadeInUpBig"
        duration={500}
        style={[styles.container, { backgroundColor }]}
      >
        <SafeAreaView style={styles.container}>
          <RawImage source={backgroundImage} style={styles.backgroundImage} />

          <View style={styles.header}>
            <TopBar type="white" onPressLeftIcon={onLeftMenuPress} />
          </View>

          <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
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
            <View style={styles.buttonWrapper}>
              <Button size="Fill" label={callToActionText} onPress={handleClose} />
            </View>
          </ScrollView>

          <NavBar activeIndex={1} />
        </SafeAreaView>
      </AnimatedView>
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
    paddingBottom: Style.adjust(32),
    paddingHorizontal: Style.adjust(32),
    paddingTop: TOP_BAR.TOP_BAR_WITH_PAD,
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
