import React, { memo, useState, useCallback, useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { GetHealthSmokingStateQuery } from "@graphql/__generated";
import { Button } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { StreakIncreaseSection } from "./subcomponents/streak-increase-section";
import { MilestoneUnlockedSection } from "./subcomponents/milestone-unlocked-section";
import { SMOKING_CELEBRATION_NEXT_BUTTON } from "@ids";
import { LastMilestoneCelebration } from "./subcomponents/last-milestone-celebration";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";

type Page = "streakIncrease" | "milestoneUnlocked" | "lastMilestoneCelebration";

interface ISmokingStreakCelebrationModalProps {
  onPress: () => Promise<void>;
  smokingData: GetHealthSmokingStateQuery["getHealthSmokingState"];
}

const SmokingStreakCelebrationModal = ({ onPress, smokingData }: ISmokingStreakCelebrationModalProps) => {
  const [page, setPage] = useState<Page>("streakIncrease");
  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(
    smokingData?.streakCheckInOverlay?.lastMilestoneCelebration?.buttonAction
  );

  const handlePress = useCallback(() => {
    if (page === "streakIncrease") {
      if (smokingData?.streakCheckInOverlay?.showLastMilestoneCelebration) {
        return setPage("lastMilestoneCelebration");
      }

      if (smokingData?.streakCheckInOverlay?.showMilestoneUnlocked) {
        return setPage("milestoneUnlocked");
      }

      return onPress();
    }

    if (page === "milestoneUnlocked") {
      return onPress();
    }

    if (page === "lastMilestoneCelebration") {
      if (smokingData?.streakCheckInOverlay?.lastMilestoneCelebration?.buttonAction) {
        handleSduiAction();
      }

      return onPress();
    }

    return onPress();
  }, [smokingData, page, onPress, handleSduiAction]);

  const [pageContent, cta] = useMemo(() => {
    if (!smokingData) {
      return [];
    }

    const {
      streakCheckInOverlay: { celebration, milestoneUnlocked, lastMilestoneCelebration },
    } = smokingData;

    switch (page) {
      case "streakIncrease":
        return [<StreakIncreaseSection key="streak-increase" smokingData={smokingData} />, celebration.cta];
      case "milestoneUnlocked":
        return [<MilestoneUnlockedSection key="milestone-unlocked" smokingData={smokingData} />, milestoneUnlocked.cta];
      case "lastMilestoneCelebration":
        return [
          <LastMilestoneCelebration key="last-milestone-celebration" smokingData={smokingData} />,
          lastMilestoneCelebration.cta,
        ];
    }
  }, [page, smokingData]);

  if (!pageContent) {
    return null;
  }

  return (
    <View style={styles.outerWrapper}>
      <GenericHeadingPad />
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.mainContentWrapper}>{pageContent}</View>
        </View>
      </ScrollView>
      <View style={styles.buttonSection}>
        <Button testID={SMOKING_CELEBRATION_NEXT_BUTTON} translatedLabel={cta} onPress={handlePress} />
      </View>
      <GenericHeadingAbsolute logo="yulife" onRightIconPress={onPress} rightIcon="CLOSE" />
    </View>
  );
};

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
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
    flex: 1,
    justifyContent: "center",
    marginTop: Style.adjust(16),
    paddingBottom: Style.adjust(32),
    borderTopLeftRadius: Style.adjust(20),
    borderTopRightRadius: Style.adjust(20),
    backgroundColor: Colours.neutral.white,
  },
  buttonSection: {
    marginBottom: Style.adjust(30),
  },
});

export default memo(SmokingStreakCelebrationModal);
