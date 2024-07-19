import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { GetHealthSmokingStateQuery } from "@graphql/__generated";
import { Style } from "@styles";
import { CheckIcon } from "@atoms/icon/check-icon";
import { InfoPanel } from "@components/molecules";

export const MilestoneUnlockedSection = ({
  smokingData,
}: {
  smokingData: GetHealthSmokingStateQuery["getHealthSmokingState"];
}) => {
  const {
    streakCheckInOverlay: { milestoneUnlocked },
  } = smokingData;

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.titleContainer}>
        <TextTemplate type="h3" textAlign="center">
          {milestoneUnlocked.title}
        </TextTemplate>
      </View>

      <View style={styles.milestonePlantSection}>
        <Image source={milestoneUnlocked.image} width={Style.adjust(190)} height={Style.adjust(190)} />
      </View>

      <View style={styles.statisticsContainer}>
        {milestoneUnlocked.statistics.map((stat) => (
          <View key={stat} style={styles.statContainer}>
            <CheckIcon size={Style.adjust(20)} />
            <TextTemplate type="l1" textAlign="left">
              {stat}
            </TextTemplate>
          </View>
        ))}
      </View>

      {milestoneUnlocked.infoBox.title && milestoneUnlocked.infoBox.description ? (
        <View style={styles.infoBoxContainer}>
          <InfoPanel
            type="info"
            titleMarkdown={milestoneUnlocked.infoBox.title}
            markdown={milestoneUnlocked.infoBox.description}
            showIcon={true}
          />
        </View>
      ) : null}
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
  infoBoxContainer: {
    paddingHorizontal: Style.adjust(30),
    paddingTop: Style.adjust(18),
  },
  milestonePlantSection: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Style.adjust(12),
  },
  statisticsContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Style.adjust(18),
    paddingBottom: Style.adjust(12),
    paddingHorizontal: Style.adjust(30),
  },
  statContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Style.adjust(8),
    marginBottom: Style.adjust(8),
    width: Style.adjust(160),
  },
});
