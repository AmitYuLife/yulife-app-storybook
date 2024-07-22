import { StyleSheet, View } from "react-native";
import { LottieView } from "@components/molecules";
import { TextTemplate } from "@atoms";
import { GetHealthSmokingStateQuery } from "@graphql/__generated";
import { Colours, Style } from "@styles";
import {
  SMOKING_FLAT_LIST_ITEM_WIDTH,
  SMOKING_FLAT_LIST_SEPARATOR_WIDTH,
} from "@components/containers/member/smoking/smoking-streak.styles";
import { SmokingCarousel } from "@components/containers/member/smoking/smoking-streak";
import { PortholeSvg } from "./porthole-svg";

export const StreakIncreaseSection = ({
  smokingData,
  startFrom,
  animateTo,
}: {
  smokingData: GetHealthSmokingStateQuery["getHealthSmokingState"];
  startFrom?: number;
  animateTo?: number;
}) => {
  const {
    streakCheckInOverlay: { celebration },
    streakCarousel,
  } = smokingData;

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.titleContainer}>
        <TextTemplate type="h3" textAlign="center">
          {celebration.title}
        </TextTemplate>
      </View>

      <View style={styles.carouselSection}>
        {!streakCarousel ? null : (
          <View style={styles.carouselBackground}>
            <View style={styles.shrinkCarousel}>
              <SmokingCarousel
                streak={streakCarousel}
                paddingHorizontal={SMOKING_FLAT_LIST_ITEM_WIDTH - SMOKING_FLAT_LIST_SEPARATOR_WIDTH}
                startFrom={startFrom}
                animateTo={animateTo}
              />
            </View>
          </View>
        )}
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
      <View style={styles.infoBoxContainer}>
        <TextTemplate type="b2b" textAlign="center">
          {celebration.description}
        </TextTemplate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    marginBottom: Style.adjust(30),
  },
  titleContainer: {
    marginBottom: Style.adjust(15),
  },
  carouselSection: {
    marginVertical: Style.adjust(12),
  },
  carouselBackground: {
    backgroundColor: Colours.secondary.s10S3,
  },
  shrinkCarousel: {
    transform: [{ scale: 0.8 }],
  },
  portholeOverlayContainer: {
    flexDirection: "row",
    position: "absolute",
    gap: Style.adjust(-1), // ensure there is no gap between the two sides of the window frame
    transform: [{ scale: 1.15 }],
  },
  portholeSidePillar: {
    flexGrow: 1,
    height: "100%",
    backgroundColor: Colours.neutral.white,
  },
  sparks: {
    width: "100%",
    height: SMOKING_FLAT_LIST_ITEM_WIDTH * 2,
    position: "absolute",
    top: Style.adjust(-24),
    left: 0,
  },
  infoBoxContainer: {
    paddingHorizontal: Style.adjust(30),
    paddingTop: Style.adjust(18),
  },
});
