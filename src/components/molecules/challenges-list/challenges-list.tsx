import React, { memo } from "react";
import { ScrollView, View } from "react-native";
import ChallengeTile, { IChallengeTileProps } from "../challenge-tile/challenge-tile";
import styles from "./challenges-list.styles";
import { CHALLENGE_SET, CHALLENGE_SET_SCROLL } from "@ids";
import ChallengeTileLoading from "../challenge-tile/challenge-tile-loading";
import Animated, { FadeInDown } from "react-native-reanimated";

export interface IChallengesListProps {
  challenges: IChallengeTileProps[];
  tileColour?: string;
  durationColour?: string;
  durationTextColour?: string;
  loading?: boolean;
}

function ChallengeSet({ challenges, tileColour, durationColour, durationTextColour, loading }: IChallengesListProps) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
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

export default memo(ChallengeSet);
