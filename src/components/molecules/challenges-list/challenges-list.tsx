import React, { memo } from "react";
import { ScrollView, View } from "react-native";
import ChallengeTile, { IChallengeTileProps } from "../challenge-tile/challenge-tile";
import styles from "./challenges-list.styles";
import { CHALLENGE_SET } from "@ids";

export interface IChallengesListProps {
  challenges: IChallengeTileProps[];
}

function ChallengeSet({ challenges }: IChallengesListProps) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View testID={CHALLENGE_SET} style={styles.wrapper}>
        <View style={styles.leftColumnWrapper}>
          {challenges
            ?.filter((_, i) => !(i % 2))
            ?.map((challenge, index) => (
              <ChallengeTile key={index} pictureAlign="left" {...challenge} />
            ))}
        </View>
        <View style={styles.rightColumnWrapper}>
          {challenges
            .filter((_, i) => i % 2)
            .map((challenge, index) => (
              <ChallengeTile key={index} pictureAlign="right" {...challenge} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default memo(ChallengeSet);
