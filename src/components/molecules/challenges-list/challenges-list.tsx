import React, { memo, useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ChallengeTile, { IChallengeTileProps } from "../challenge-tile/challenge-tile";
import { CHALLENGE_SET, CHALLENGE_SET_SCROLL } from "@ids";
import ChallengeTileLoading from "../challenge-tile/challenge-tile-loading";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Style } from "@styles";
import { useSelector } from "react-redux";
import { getRewardsTabSettings } from "@redux/rewards-tab/rewards-tab.selectors";

export interface IChallengesListProps {
  challenges: IChallengeTileProps[];
  tileColour?: string;
  durationColour?: string;
  durationTextColour?: string;
  loading?: boolean;
}

function ChallengeSet({ challenges, tileColour, durationColour, durationTextColour, loading }: IChallengesListProps) {
  const { hasDonationBattlepass } = useSelector(getRewardsTabSettings);
  const scrollContentStyles = useMemo(() => {
    return {
      ...styles.contentContainer,
      ...(hasDonationBattlepass ? styles.enterpriseScrollView : {}),
    };
  }, [hasDonationBattlepass]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={scrollContentStyles}
      testID={CHALLENGE_SET_SCROLL}
      scrollEnabled={!loading}
    >
      <View testID={CHALLENGE_SET} style={styles.wrapper}>
        <Animated.View style={styles.leftColumnWrapper} entering={FadeInDown.delay(200).duration(500)}>
          {!loading
            ? challenges
                ?.filter((_, i) => !(i % 2))
                ?.map((challenge) => (
                  <ChallengeTile
                    key={challenge.heading}
                    pictureAlign="left"
                    tileColour={tileColour}
                    durationColour={durationColour}
                    durationTextColour={durationTextColour}
                    {...challenge}
                  />
                ))
            : Array.from({ length: 3 }).map((_, i) => <ChallengeTileLoading tileColour={tileColour} key={i} />)}
        </Animated.View>
        <Animated.View style={styles.rightColumnWrapper} entering={FadeInDown.delay(300).duration(500)}>
          {!loading
            ? challenges
                ?.filter((_, i) => i % 2)
                ?.map((challenge) => (
                  <ChallengeTile
                    key={challenge.heading}
                    pictureAlign="right"
                    tileColour={tileColour}
                    durationColour={durationColour}
                    durationTextColour={durationTextColour}
                    {...challenge}
                  />
                ))
            : Array.from({ length: 3 }).map((_, i) => <ChallengeTileLoading tileColour={tileColour} key={i} />)}
        </Animated.View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  leftColumnWrapper: {
    marginEnd: 8,
  },
  rightColumnWrapper: {
    marginTop: 37,
    marginStart: 8,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollView: {
    height: Style.DEVICE_HEIGHT,
    width: "100%",
  },
  contentContainer: { paddingBottom: Style.SCALE_UP_AND_DOWN(30) },
  enterpriseScrollView: {
    paddingTop: Style.adjust(84),
  },
});

export default memo(ChallengeSet);
