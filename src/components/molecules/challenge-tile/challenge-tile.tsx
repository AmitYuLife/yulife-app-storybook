import * as React from "react";
import { FunctionComponent } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../atoms";
import assets from "./assets";
import { getImage, getImageStyle, getLockedImageStyle } from "./challenge-tile.helpers";
import styles from "./challenge-tile.styles";
import { IMAGES, Images, ChallengeType } from "./challenge-tile.types";
import { CHALLENGE_TILE } from "@ids";

const BRISK_WALK = [IMAGES.SQUIRREL, IMAGES.OTTER, IMAGES.MEERKAT, IMAGES.WOLF];
const LONG_WALK = [IMAGES.RABBIT, IMAGES.WHALE, IMAGES.DESERT_FOX, IMAGES.DEER];
const MEDITATION = [IMAGES.BIRD, IMAGES.DOLPHIN, IMAGES.CAMEL, IMAGES.OWL];
const SHORT_STROLL = [IMAGES.SNAIL, IMAGES.TORTOISE, IMAGES.BIGHORN_SHEEP, IMAGES.WHITE_BIGHORN_SHEEP];
const CYCLING = [IMAGES.HEDGEDOG, IMAGES.HEDGEDOG_FISH, IMAGES.CHAMELEON, IMAGES.BEAR];

export interface IChallengeTileProps {
  challengeType?: ChallengeType;
  currentWorld: number;
  duration?: string;
  image?: Images;
  isLocked?: boolean;
  minimumLevel?: number;
  onPress?: () => void;
  reward?: string;
}

type Props = IChallengeTileProps;

function getImageSource(challengeType: ChallengeType, currentWorld: number): Images {
  const defaultImage = SHORT_STROLL[currentWorld] ?? SHORT_STROLL[0];

  const ImagesForChallenge: Record<ChallengeType, Images> = {
    meditation: MEDITATION[currentWorld] ?? MEDITATION[0],
    "long walk": LONG_WALK[currentWorld] ?? LONG_WALK[0],
    "brisk walk": BRISK_WALK[currentWorld] ?? BRISK_WALK[0],
    cycling: CYCLING[currentWorld] ?? CYCLING[0],
    "day walk": defaultImage,
    "short stroll": defaultImage,
  };

  return ImagesForChallenge[challengeType] ?? defaultImage;
}

function ChallengeTile(props: Props) {
  const {
    challengeType,
    currentWorld,
    duration = "",
    isLocked = false,
    minimumLevel = 1,
    onPress = () => null,
    reward = "",
  } = props;

  if (!challengeType) {
    return null;
  }

  return (
    <TouchableOpacity activeOpacity={isLocked ? 1 : 0.2} onPress={onPress} style={styles.wrapper}>
      <AnimalImage image={getImageSource(challengeType, currentWorld)} isLocked={isLocked} />
      {isLocked ? (
        <LockedOverlay minimumLevel={minimumLevel} />
      ) : (
        <Content challengeType={challengeType} duration={duration} reward={reward} />
      )}
    </TouchableOpacity>
  );
}

export default ChallengeTile;

const LockedOverlay: FunctionComponent<Partial<Props>> = ({ minimumLevel }) => (
  <View style={styles.lockedOverlay}>
    <Image resizeMode="contain" style={styles.lockedImage} source={assets.lock} />
    <Text style={styles.lockedLabel} bold={true}>
      {`level ${minimumLevel}`}
    </Text>
  </View>
);

const AnimalImage: FunctionComponent<Partial<Props>> = ({ image, isLocked }) => (
  <View style={isLocked ? styles.imageWrapperLocked : styles.imageWrapper}>
    <View style={StyleSheet.flatten([styles.imageBackground, isLocked ? styles.imageBackgroundLocked : null])} />
    <Image
      testID="animal-image"
      style={isLocked ? getLockedImageStyle(image) : getImageStyle(image)}
      source={getImage(image)}
      resizeMode="contain"
    />
  </View>
);

const Content: FunctionComponent<Partial<Props>> = ({ challengeType, duration, reward }) => (
  <View style={styles.sectionBottomWrapper} testID={CHALLENGE_TILE(challengeType)}>
    <View style={styles.contentWrapper}>
      <View style={styles.contentTitleWrapper}>
        <Text bold={true} style={styles.contentTitle}>
          {challengeType}
        </Text>
      </View>
      <View style={styles.contentDurationWrapper}>
        <Text bold={true} style={styles.contentTitle}>
          {duration}
        </Text>
      </View>
      <View style={styles.contentRewardWrapper}>
        <Text style={styles.contentReward}>{reward} yucoin</Text>
      </View>
    </View>
    <View style={styles.imageWrapperNext}>
      <Image source={assets.next} resizeMode="contain" style={styles.imageNext} />
    </View>
  </View>
);
