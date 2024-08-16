import React, { memo, useState, useCallback } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { GetHealthSmokingStateQuery } from "@graphql/__generated";
import { Button } from "@molecules";
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
      <ScrollView>
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
      </ScrollView>
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
    justifyContent: "center",
    marginTop: Style.adjust(16),
    paddingBottom: Style.adjust(38),
    borderTopLeftRadius: Style.adjust(20),
    borderTopRightRadius: Style.adjust(20),
    backgroundColor: Colours.neutral.white,
  },
  buttonSection: {
    marginBottom: Style.adjust(30),
  },
});

export default memo(SmokingStreakCelebrationModal);
