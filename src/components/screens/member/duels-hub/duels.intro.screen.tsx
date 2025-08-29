import { useMemo, memo } from "react";
import { Image, ListRenderItemInfo, ImageStyle } from "react-native";
import { TextTemplate, Box } from "@atoms";
import { OnboardingSwiper, OnboardingSwiperData } from "@organisms";
import { Style, Colours, StyleSheet } from "@styles";
import { t } from "@locale";

const images = [
  require("@assets/duels/onboarding/1.png"),
  require("@assets/duels/onboarding/2.png"),
  require("@assets/duels/onboarding/3.png"),
];

const buildOnboardingData = (): OnboardingSwiperData[] => [
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

function DuelsIntroScreen(props: Props) {
  const data = useMemo(() => buildOnboardingData(), []);
  return <OnboardingSwiper data={data} renderItem={renderItem} onClose={props.setOnboardingShown} type="duels" />;
}

export default memo(DuelsIntroScreen);

function renderItem({ item, index }: ListRenderItemInfo<OnboardingSwiperData>) {
  return (
    <Box flex={1} disableAutoAdjust={true} width={Style.DEVICE_WIDTH} justifyContent="center">
      <Box height={320} width={320} alignSelf="center">
        <Image style={styles.image} source={images[index]} />
      </Box>
      <Box alignSelf="center" mt={Style.isShortToMediumAndroid() ? 17 : 34}>
        <TextTemplate type="h3" color={Colours.neutral.n800}>
          {item.title}
        </TextTemplate>
      </Box>
      <Box alignSelf="center" alignContent="center" mt={16} w={280}>
        <TextTemplate type="b2" textAlign="center" color={Colours.neutral.n800}>
          {item.subtitle}
        </TextTemplate>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  image: {
    height: Style.adjust(320),
    width: Style.adjust(320),
  } as ImageStyle,
});
