import React, { FC, memo, useMemo } from "react";
import { FunctionComponent } from "react";
import { Image as RNImage, StyleSheet, View } from "react-native";
import styles from "./challenge-tile.styles";
import { CHALLENGE_TILE, CHALLENGE_REWARD } from "@ids";
import { Style } from "@styles";
import { Image, Text } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { t } from "@locale";

export interface IChallengeTileProps {
  heading?: string;
  duration?: string;
  isLocked?: boolean;
  availableAtLevel?: number;
  onPress?: () => void;
  reward?: string;
  imageUri: string;
  pictureAlign?: "left" | "right";
  isCompleted?: boolean;
}

type Props = IChallengeTileProps;

function ChallengeTile(props: Props) {
  const {
    heading,
    duration = "",
    isLocked = false,
    availableAtLevel = 1,
    onPress = () => null,
    reward = "",
    imageUri,
    pictureAlign,
    isCompleted,
  } = props;

  if (!heading) {
    return null;
  }

  return (
    <TouchableOpacityWithDelay activeOpacity={isLocked ? 1 : 0.2} onPress={onPress} style={styles.wrapper}>
      <>
        <AnimalImage imageUri={imageUri} isLocked={isLocked} pictureAlign={pictureAlign} isCompleted={isCompleted} />
        {isLocked ? (
          <LockedOverlay availableAtLevel={availableAtLevel} />
        ) : (
          <Content heading={heading} duration={duration} reward={reward} isCompleted={isCompleted} />
        )}
      </>
    </TouchableOpacityWithDelay>
  );
}

export default memo(ChallengeTile);

const LockedOverlay: FunctionComponent<Partial<Props>> = ({ availableAtLevel }) => (
  <View style={styles.lockedOverlay}>
    <RNImage resizeMode="contain" style={styles.lockedImage} source={require("@assets/icons/lock.png")} />
    <Text style={styles.lockedLabel} bold={true}>
      {t("screens.challenge_list.level_locked", { availableAtLevel })}
    </Text>
  </View>
);

const AnimalImage: FC<Partial<Props>> = memo(({ imageUri, isCompleted, isLocked, pictureAlign }) => {
  const style = useMemo(() => {
    return [styles.remoteImage, pictureAlign === "left" ? { left: 0 } : { right: 0 }];
  }, [pictureAlign]);

  const lockedStyle = useMemo(() => {
    return [...style, { opacity: 0.6 }];
  }, [style]);

  return (
    <>
      <View style={isLocked ? styles.imageWrapperLocked : styles.imageWrapper}>
        <View style={StyleSheet.flatten([styles.imageBackground, isLocked ? styles.imageBackgroundLocked : null])} />
        <Image
          source={{ uri: imageUri }}
          width={Style.adjust(165)}
          height={Style.adjust(165)}
          theme="light"
          style={style}
        />
        {isCompleted ? (
          <Image
            tintColor={"gray"}
            source={{ uri: imageUri }}
            width={Style.adjust(165)}
            height={Style.adjust(165)}
            theme="light"
            style={lockedStyle}
          />
        ) : null}
      </View>
    </>
  );
});

const Content: FC<Partial<Props>> = memo(({ heading, isCompleted, duration, reward }) => (
  <View style={styles.sectionBottomWrapper} testID={CHALLENGE_TILE(heading)}>
    <View style={styles.contentWrapper}>
      <View>
        <Text bold={true} style={styles.contentTitle}>
          {heading}
        </Text>
      </View>
      <View>
        <Text bold={true} style={styles.contentTitle}>
          {duration}
        </Text>
      </View>
      <View style={styles.contentRewardWrapper}>
        <Text style={styles.contentReward} testID={CHALLENGE_REWARD(reward)}>
          {!isCompleted ? `${reward} ${t("yu_coin.camel_case")}` : t("screens.challenge_list.level_completed")}
        </Text>
      </View>
    </View>
    <View style={styles.imageWrapperNext}>
      <RNImage source={require("@assets/icons/next.png")} resizeMode="contain" style={styles.imageNext} />
    </View>
  </View>
));
