import * as React from "react";
import { PureComponent, SFC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../atoms";
import assets from "./assets";
import { getImage, getImageStyle, getLockedImageStyle } from "./challenge-tile.helpers";
import styles from "./challenge-tile.styles";
import { IMAGES, Images } from "./challenge-tile.types";

export interface IChallengeTileProps {
  challengeType?: string;
  currentWorld: number;
  duration?: string;
  image?: Images;
  isImageBackgroundFlipped?: boolean;
  isLocked?: boolean;
  minimumLevel?: number;
  onPress?: () => void;
  reward?: string;
}

const BRISK_WALK = [IMAGES.SQUIRREL, IMAGES.OTTER, IMAGES.MEERKAT, IMAGES.WOLF];
const LONG_WALK = [IMAGES.RABBIT, IMAGES.WHALE, IMAGES.DESERT_FOX, IMAGES.DEER];
const MEDITATION = [IMAGES.BIRD, IMAGES.DOLPHIN, IMAGES.CAMEL, IMAGES.OWL];
const SHORT_STROLL = [IMAGES.SNAIL, IMAGES.TORTOISE, IMAGES.BIGHORN_SHEEP, IMAGES.WHITE_BIGHORN_SHEEP];

type Props = IChallengeTileProps;

class ChallengeTile extends PureComponent<Props> {
  public static Images = IMAGES;

  public getImage = (challengeType: string, currentWorld: number): Images => {
    switch (challengeType) {
      case "meditation":
        return MEDITATION[currentWorld] || MEDITATION[0];
      case "long walk":
        return LONG_WALK[currentWorld] || LONG_WALK[0];
      case "brisk walk":
        return BRISK_WALK[currentWorld] || BRISK_WALK[0];
      case "short stroll":
      default:
        return SHORT_STROLL[currentWorld] || SHORT_STROLL[0];
    }
  };

  public render() {
    const {
      challengeType = "",
      currentWorld,
      duration = "",
      isImageBackgroundFlipped = false,
      isLocked = false,
      minimumLevel = 1,
      onPress = (): any => null,
      reward = "",
    } = this.props;

    return !challengeType ? null : (
      <TouchableOpacity onPress={onPress} style={styles.wrapper}>
        <AnimalImage
          image={this.getImage(challengeType, currentWorld)}
          isLocked={isLocked}
          isImageBackgroundFlipped={isImageBackgroundFlipped}
        />
        {isLocked ? (
          <LockedOverlay minimumLevel={minimumLevel} isImageBackgroundFlipped={isImageBackgroundFlipped} />
        ) : (
          <ContentWrapper challengeType={challengeType} duration={duration} reward={reward} />
        )}
      </TouchableOpacity>
    );
  }
}

export default ChallengeTile;

const LockedOverlay: SFC<Partial<Props>> = ({ isImageBackgroundFlipped, minimumLevel }) => (
  <View
    style={StyleSheet.flatten([styles.lockedOverlay, isImageBackgroundFlipped ? styles.lockedOverlayFlipped : null])}
  >
    <Image resizeMode="contain" style={styles.lockedImage} source={assets.lock} />
    <Text style={styles.lockedLabel} bold={true}>
      {`level ${minimumLevel}`}
    </Text>
  </View>
);

const AnimalImage: SFC<Partial<Props>> = ({ image, isLocked, isImageBackgroundFlipped }) => (
  <View style={isLocked ? styles.imageWrapperLocked : styles.imageWrapper}>
    <View
      style={StyleSheet.flatten([
        styles.imageBackground,
        isLocked ? styles.imageBackgroundLocked : null,
        isImageBackgroundFlipped ? styles.imageBackgroundFlipped : null,
      ])}
    />
    <Image
      style={isLocked ? getLockedImageStyle(image) : getImageStyle(image)}
      source={getImage(image)}
      resizeMode="contain"
    />
  </View>
);

const ContentWrapper: SFC<Partial<Props>> = ({ challengeType, duration, reward }) => (
  <View style={styles.sectionBottomWrapper}>
    <Content challengeType={challengeType} duration={duration} reward={reward} />
    <View style={styles.imageWrapperNext}>
      <Image source={assets.next} resizeMode="contain" style={styles.imageNext} />
    </View>
  </View>
);

const Content: SFC<Partial<Props>> = ({ challengeType, duration, reward }) => (
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
);
