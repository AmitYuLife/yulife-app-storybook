import React from "react";
import { Image, View, ListRenderItemInfo, StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import { Text } from "@atoms";
import { OnboardingSwiper, OnboardingSwiperData } from "@organisms";
import { Style, Colours } from "@styles";

const images = [
  require("@assets/duels/onboarding/1.png"),
  require("@assets/duels/onboarding/2.png"),
  require("@assets/duels/onboarding/3.png"),
];

const data: OnboardingSwiperData[] = [
  {
    id: "duels_onboarding_1",
    buttonLabel: "Next",
    title: "Challenge a friend!",
    subtitle: "Want to go head-to-head? Select a friend from the leaderboard, and challenge them to a duel!",
  },
  {
    id: "duels_onboarding_2",
    buttonLabel: "Next",
    title: "Set the wager",
    subtitle: "Feeling confident? Duel for YuCoin or bragging rights!",
  },
  {
    id: "duels_onboarding_3",
    buttonLabel: "Let's go",
    title: "Out-step your opponent",
    subtitle: "Your duel will begin the next day and you’ll have 24 hours to get in as many steps as you can!",
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
