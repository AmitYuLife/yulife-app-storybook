import { StyleSheet, View } from "react-native";
import { GetHealthSmokingStateQuery } from "@graphql/__generated";
import { TextTemplate } from "@atoms";
import { LottieView } from "@molecules";
import { ENTERPRISE_REWARD_ITEM_WIDTH } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { SmokingCarousel } from "@components/containers/member/smoking/smoking-carousel";
import { Colours, Style } from "@styles";
import { PortholeSvg } from "./porthole-svg";

export const StreakIncreaseSection = ({
  smokingData,
}: {
  smokingData: GetHealthSmokingStateQuery["getHealthSmokingState"];
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
            <SmokingCarousel
              streak={streakCarousel}
              animationOffset={ENTERPRISE_REWARD_ITEM_WIDTH - Style.adjust(100)}
              maxItemsToScroll={1}
            />
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    gap: -1, // ensure there is no gap between the two sides of the window frame
  },
  portholeSidePillar: {
    flexGrow: 1,
    height: "100%",
    backgroundColor: Colours.neutral.white,
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
});
