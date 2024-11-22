import { StyleSheet, View } from "react-native";
import { useMemo } from "react";
import { GetHealthSmokingStateQuery } from "@graphql/__generated";
import { Box, TextTemplate } from "@atoms";
import { LottieView, SmokingChips } from "@molecules";
import { SmokingCarousel, TipCard } from "@organisms";
import { Colours, Style } from "@styles";
import { PortholeSvg } from "./porthole-svg";
import { SMOKING_POPUP_HEADER, SMOKING_POPUP_SUBHEADER } from "@ids";

export const CAROUSEL_REWARD_ITEM_WIDTH = Style.adjust(130);

export const StreakIncreaseSection = ({
  smokingData,
}: {
  smokingData: GetHealthSmokingStateQuery["getHealthSmokingState"];
}) => {
  const {
    streakCheckInOverlay: { celebration },
    smokingStreakCarousel,
  } = smokingData;

  const chipValues = useMemo(() => celebration.chips?.map(({ label }) => label), [celebration.chips]);

  const [carouselScrollFrom, carouselScrollTo] = useMemo(() => {
    const firstPendingIndex = smokingStreakCarousel?.findIndex((reward) => reward.status === "pending");
    const scrollTo = firstPendingIndex === -1 ? smokingStreakCarousel?.length - 1 : firstPendingIndex - 1;

    return [scrollTo - 1, scrollTo];
  }, [smokingStreakCarousel]);

  return (
    <View>
      <TextTemplate type="h3" textAlign="center" testID={SMOKING_POPUP_HEADER(celebration.title)}>
        {celebration.title}
      </TextTemplate>
      {!smokingStreakCarousel ? null : (
        <View style={styles.carouselSection}>
          <View style={styles.carouselBackground}>
            <SmokingCarousel
              streak={smokingStreakCarousel}
              animationOffset={CAROUSEL_REWARD_ITEM_WIDTH - Style.adjust(100)}
              scrollFrom={carouselScrollFrom}
              scrollTo={carouselScrollTo}
              showClaimButton={false}
            />
          </View>
          <View style={styles.portholeOverlayContainer}>
            <View style={styles.portholeSidePillar} />
            <PortholeSvg />
            <View style={styles.portholeSidePillar} />
          </View>
          <LottieView
            source={require("../assets/streak-sparkles.json")}
            autoPlay={true}
            loop={true}
            style={styles.sparks}
          />
        </View>
      )}
      <View style={styles.infoBoxContainer}>
        <TextTemplate type="b2b" textAlign="center">
          {celebration.description}
        </TextTemplate>
      </View>
      {celebration.tips?.length ? (
        <Box mt={32} gap={15} style={styles.tipsContainer}>
          {celebration.tips.map((tip) => (
            <View key={tip.id}>
              <TipCard
                id={tip.id}
                title={tip.title}
                description={tip.description}
                icon={tip.icon}
                cardStyle={styles.tipCardStyles}
              />
            </View>
          ))}
        </Box>
      ) : null}
      {!celebration.chips?.length ? null : (
        <View style={styles.chipsContainer}>
          <TextTemplate type="b1b" textAlign="center" testID={SMOKING_POPUP_SUBHEADER(celebration.chipsTitle)}>
            {celebration.chipsTitle}
          </TextTemplate>
          <SmokingChips values={chipValues} justifyContent="center" backgroundColor={celebration.chips[0].colour} />
        </View>
      )}
    </View>
  );
};

const TIP_CARD_WIDTH = Style.DEVICE_WIDTH * 0.8;
const styles = StyleSheet.create({
  carouselSection: {
    marginVertical: Style.adjust(12),
    flexDirection: "row",
    justifyContent: "center",
  },
  carouselBackground: {
    backgroundColor: Colours.secondary.s10S3,
    paddingVertical: Style.adjust(24),
    width: Style.adjust(210),
  },
  portholeOverlayContainer: {
    flexDirection: "row",
    position: "absolute",
    borderColor: Colours.neutral.white, // a white border prevents an edge case where the backgroundColour of the carouselBackground can be visible
    borderWidth: 1,
    gap: -1, // ensure there is no gap between the two sides of the window frame
  },
  portholeSidePillar: {
    flexGrow: 1,
    height: "100%",
    backgroundColor: Colours.neutral.white,
    borderColor: Colours.neutral.white,
    borderWidth: 1,
  },
  sparks: {
    width: "100%",
    height: Style.adjust(280),
    position: "absolute",
    top: Style.adjust(-18),
    left: 0,
  },
  infoBoxContainer: {
    paddingHorizontal: Style.adjust(30),
    paddingTop: Style.adjust(18),
  },
  chipsContainer: {
    paddingHorizontal: Style.adjust(30),
    paddingTop: Style.adjust(32),
  },
  tipsContainer: {
    alignItems: "center",
    marginBottom: Style.adjust(15),
  },
  tipCardStyles: {
    width: TIP_CARD_WIDTH,
  },
});
