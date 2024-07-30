import * as React from "react";
import { memo, useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { Button } from "@components/molecules";
import { GetHealthSmokingStateQuery } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { StreakIncreaseSection } from "./subcomponents/streak-increase-section";
import { MilestoneUnlockedSection } from "./subcomponents/milestone-unlocked-section";

interface ISmokingStreakCelebrationModalProps {
  onPress: () => Promise<void>;
  smokingData: GetHealthSmokingStateQuery["getHealthSmokingState"];
}

const SmokingStreakCelebrationModal = ({ onPress, smokingData }: ISmokingStreakCelebrationModalProps) => {
  const [page, setPage] = useState(0);

  const handlePress = useCallback(() => {
    if (page === 0 && smokingData?.streakCheckInOverlay?.showMilestoneUnlocked) {
      setPage(1);
    } else {
      onPress();
    }
  }, [page, onPress, smokingData]);

  if (!smokingData) {
    return null;
  }

  const {
    streakCheckInOverlay: { celebration, milestoneUnlocked },
  } = smokingData;

  const pageComponents = [
    <StreakIncreaseSection key="streak-increase" smokingData={smokingData} />,
    <MilestoneUnlockedSection key="milestone-unlocked" smokingData={smokingData} />,
  ];

  return (
    <View style={styles.outerWrapper}>
      <GenericHeadingPad />
      <View style={styles.wrapper}>
        <View style={styles.mainContentWrapper}>{pageComponents[page]}</View>
        <View style={styles.buttonSection}>
          <Button
            testID="smoking-celebration-next-button"
            translatedLabel={page === 0 ? celebration.cta : milestoneUnlocked.cta}
            onPress={handlePress}
          />
        </View>
      </View>
      <GenericHeadingAbsolute logo="yulife" onRightIconPress={Navigation.dismissAllModals} rightIcon="CLOSE" />
    </View>
  );
};

const styles = StyleSheet.create({
  outerWrapper: {
    height: "100%",
  },
  wrapper: {
    flex: 1,
    minHeight: Style.adjust(220),
    justifyContent: "space-between",
  },
  closeWrapper: { position: "absolute", top: Style.adjust(16), right: Style.adjust(16) },
  actionButtons: {
    marginBottom: Style.adjust(24),
  },
  mainContentWrapper: {
    justifyContent: "center",
    marginTop: Style.adjust(32),
    paddingBottom: Style.adjust(38),
    paddingTop: Style.adjust(30),
    borderTopLeftRadius: Style.adjust(20),
    borderTopRightRadius: Style.adjust(20),
    backgroundColor: Colours.neutral.white,
  },
  buttonSection: {
    marginBottom: Style.adjust(30),
  },
});

export default memo(SmokingStreakCelebrationModal);
