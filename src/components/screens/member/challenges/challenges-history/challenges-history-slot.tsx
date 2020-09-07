import * as React from "react";
import { SFC } from "react";
import { Image, StyleSheet, View } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { GetCurrentQuestLevels_getCurrentQuestLevels_slots_challengesDetails } from "../../../../../graphql/_core/schema";
import { Text } from "../../../../atoms";
import styles from "./challenges-history-slot.styles";
import { getSlotImageProps } from "./challenges-history.helpers";
import { CHALLENGE_HISTORY_STARS } from "@ids";
interface IProps {
  availableAtLevel: number;
  duration: string;
  locked: boolean;
  type: string;
  challengesDetails: GetCurrentQuestLevels_getCurrentQuestLevels_slots_challengesDetails[];
  currentWorld: number;
}

const ChallengesHistorySlot: SFC<IProps> = ({
  availableAtLevel,
  duration,
  locked,
  type,
  challengesDetails,
  currentWorld,
}) => {
  return (
    <View style={styles.wrapper}>
      {locked ? (
        <View style={styles.lockedWrapper}>
          <Text bold={true}>?</Text>
          <Text bold={true}>unlock at level {availableAtLevel}</Text>
        </View>
      ) : (
        <View style={currentWorld === 3 ? styles.challengeSetWrapperMountain : styles.challengeSetWrapper}>
          <View style={styles.challengeWrapper}>
            <Text bold={true} style={styles.challengeTypeText}>
              {type}
            </Text>
            <Text style={styles.durationText}>{duration}</Text>
          </View>
          <View style={styles.resultsWrapper}>
            {challengesDetails.map((element, index) => (
              <View style={styles.challengeResultWrapper} key={`challenge-details-${index}`}>
                <Text style={styles.rewardText}>{`${element.yuCoinAwarded} yucoin`}</Text>
                <View
                  style={StyleSheet.flatten([
                    styles.starsWrapper,
                    typeof element.rating === "number" && styles.hasRating,
                  ])}
                >
                  {Array.from(Array(3)).map((_, i) => (
                    <View key={i} testID={CHALLENGE_HISTORY_STARS(i, type)}>
                      {element.rating > i ? (
                        <Image
                          style={styles.star}
                          source={require("../../../../../../assets/level-complete/star.png")}
                        />
                      ) : (
                        <Image
                          style={styles.star}
                          source={require("../../../../../../assets/level-complete/no-star.png")}
                        />
                      )}
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
          <AutoHeightImage {...getSlotImageProps(type, currentWorld)} />
        </View>
      )}
    </View>
  );
};

export default ChallengesHistorySlot;
