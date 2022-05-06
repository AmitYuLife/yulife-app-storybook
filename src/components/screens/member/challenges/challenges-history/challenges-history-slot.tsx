import * as React from "react";
import { Image as RNImage, StyleSheet, View } from "react-native";
import { GetQuestMapLevel_getQuestMapLevel_slots_challenges } from "@graphql/_core/schema";
import { Image, Text } from "@atoms";
import styles from "./challenges-history-slot.styles";
import { getSlotImageProps } from "./challenges-history.helpers";
import { CHALLENGE_HISTORY_STARS } from "@ids";
import { Colours } from "@styles";

interface IProps {
  availableAtLevel: number;
  duration: string;
  locked: boolean;
  type: string;
  challenges: GetQuestMapLevel_getQuestMapLevel_slots_challenges[];
  image: string;
  currentWorld: number;
  yuniversalMap?: number;
}

const ChallengesHistorySlot: React.FC<IProps> = ({
  availableAtLevel,
  duration,
  locked,
  type,
  challenges,
  currentWorld,
  yuniversalMap,
  image,
}) => {
  const textColour = yuniversalMap ? Colours.neutral.white : Colours.darkGray;

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
            <Text bold={true} style={StyleSheet.flatten([styles.challengeTypeText, { color: textColour }])}>
              {type}
            </Text>
            <Text style={StyleSheet.flatten([styles.durationText, { color: textColour }])}>{duration}</Text>
          </View>
          <View style={styles.resultsWrapper}>
            {challenges.map((element, index) => (
              <View style={styles.challengeResultWrapper} key={`challenge-details-${index}`}>
                <Text
                  style={StyleSheet.flatten([styles.rewardText, { color: textColour }])}
                >{`${element.reward} yucoin`}</Text>
                <View
                  style={StyleSheet.flatten([
                    styles.starsWrapper,
                    typeof element.rating === "number" && styles.hasRating,
                  ])}
                >
                  {Array.from(Array(3)).map((_, i) => (
                    <View key={i} testID={CHALLENGE_HISTORY_STARS(i, type)}>
                      {element.rating > i ? (
                        <RNImage style={styles.star} source={require("@assets/level-complete/star.png")} />
                      ) : (
                        <RNImage style={styles.star} source={require("@assets/level-complete/no-star.png")} />
                      )}
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
          <Image {...getSlotImageProps(type, currentWorld, yuniversalMap)} source={{ uri: image }} />
        </View>
      )}
    </View>
  );
};

export default React.memo(ChallengesHistorySlot);
