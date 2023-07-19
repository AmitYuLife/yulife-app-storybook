import React, { memo } from "react";
import { ScrollView, View } from "react-native";
import OldChallengeTile from "../challenge-tile-old/challenge-tile";
import ChallengeTile, { IChallengeTileProps } from "../challenge-tile/challenge-tile";
import styles from "./challenges-list.styles";
import { CHALLENGE_SET, CHALLENGE_SET_SCROLL } from "@ids";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";

export interface IChallengesListProps {
  challenges: IChallengeTileProps[];
}

function ChallengeSet({ challenges }: IChallengesListProps) {
  const features = useSelector(getUserFeatures);
  const TileComponent = features?.newChallengeList ? ChallengeTile : OldChallengeTile;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      testID={CHALLENGE_SET_SCROLL}
    >
      <View testID={CHALLENGE_SET} style={styles.wrapper}>
        <View style={styles.leftColumnWrapper}>
          {challenges
            ?.filter((_, i) => !(i % 2))
            ?.map((challenge, index) => (
              <TileComponent key={index} pictureAlign="left" {...challenge} />
            ))}
        </View>
        <View style={styles.rightColumnWrapper}>
          {challenges
            .filter((_, i) => i % 2)
            .map((challenge, index) => (
              <TileComponent key={index} pictureAlign="right" {...challenge} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default memo(ChallengeSet);
