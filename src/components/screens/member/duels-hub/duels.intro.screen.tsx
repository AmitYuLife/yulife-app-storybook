import React from "react";
import { Image, View, ListRenderItemInfo, StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import { Text } from "@atoms";
import { OnboardingSwiper, OnboardingSwiperData } from "@organisms";
import { Style, Colours } from "@styles";
import { t } from "@locale";

const images = [
  require("@assets/duels/onboarding/1.png"),
  require("@assets/duels/onboarding/2.png"),
  require("@assets/duels/onboarding/3.png"),
];

const data: OnboardingSwiperData[] = [
  {
    id: "duels_onboarding_1",
    buttonLabel: t("labels.cta.next"),
    title: t("modals.duels.intro.title_1"),
    subtitle: t("modals.duels.intro.subtitle_1"),
  },
  {
    id: "duels_onboarding_2",
    buttonLabel: t("labels.cta.next"),
    title: t("modals.duels.intro.title_2"),
    subtitle: t("modals.duels.intro.subtitle_2"),
  },
  {
    id: "duels_onboarding_3",
    buttonLabel: t("labels.cta.lets_go"),
    title: t("modals.duels.intro.title_3"),
    subtitle: t("modals.duels.intro.subtitle_3"),
  },
];

interface Props {
  setOnboardingShown: () => void;
}

function _DuelsIntroScreen(props: Props) {
  return <OnboardingSwiper data={data} renderItem={renderItem} onClose={props.setOnboardingShown} type="duels" />;
}

const DuelsIntroScreen = React.memo(_DuelsIntroScreen);

export default DuelsIntroScreen;

function renderItem({ item, index }: ListRenderItemInfo<OnboardingSwiperData>) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={images[index]} />
      </View>
      <Text bold={true} style={styles.title}>
        {item.title}
      </Text>
      <Text style={styles.subTitle}>{item.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    height: Style.adjust(320),
    width: Style.adjust(320),
    alignSelf: "center",
  } as ViewStyle,
  wrapper: {
    flex: 1,
    width: Style.DEVICE_WIDTH,
    justifyContent: "center",
  } as ViewStyle,
  image: {
    height: Style.adjust(320),
    width: Style.adjust(320),
  } as ImageStyle,
  title: {
    alignSelf: "center",
    marginTop: Style.adjust(Style.isShortToMediumAndroid() ? 17 : 34),
    fontSize: Style.adjust(24),
    letterSpacing: 0.8,
    color: Colours.neutral.n800,
  } as TextStyle,
  subTitle: {
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    marginTop: Style.adjust(18),
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    width: 280,
    letterSpacing: 0.8,
    color: Colours.neutral.n800,
  } as TextStyle,
});
