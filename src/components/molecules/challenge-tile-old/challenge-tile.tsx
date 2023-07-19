import React, { ComponentProps, FC, memo, useMemo } from "react";
import { FunctionComponent } from "react";
import { Image as RNImage, StyleSheet, View } from "react-native";
import styles from "./challenge-tile.styles";
import { CHALLENGE_TILE, CHALLENGE_REWARD } from "@ids";
import { Colours, Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { getCurrentLocale, t } from "@locale";

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
    <TextTemplate type="b2b">{t("screens.challenge_list.level_locked", { availableAtLevel })}</TextTemplate>
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
            tintColor={Colours.neutral.n200}
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

const LINE_HEIGHT = Style.adjust(18);

type TextTemplateType = ComponentProps<typeof TextTemplate>["type"];

const getFontType = (): { heading: TextTemplateType; yuCoin: TextTemplateType } => {
  const currentLocale = getCurrentLocale();

  if (currentLocale === "ja-JP") {
    return { heading: "l3b", yuCoin: "l2" };
  }

  return { heading: "b2b", yuCoin: "l2" };
};

const Content: FC<Partial<Props>> = memo(({ heading, isCompleted, duration, reward }) => {
  const fonts = useMemo(getFontType, []);

  return (
    <View style={styles.sectionBottomWrapper} testID={CHALLENGE_TILE(heading)}>
      <View style={styles.contentWrapper}>
        <View>
          <TextTemplate type={fonts.heading} lineHeight={LINE_HEIGHT}>
            {heading}
          </TextTemplate>
        </View>
        <View>
          <TextTemplate type={fonts.heading} lineHeight={LINE_HEIGHT}>
            {duration}
          </TextTemplate>
        </View>
        <View style={styles.contentRewardWrapper}>
          <TextTemplate type={fonts.yuCoin} testID={CHALLENGE_REWARD(reward)}>
            {!isCompleted ? `${reward} ${t("yu_coin.camel_case")}` : t("screens.challenge_list.level_completed")}
          </TextTemplate>
        </View>
      </View>
      <View style={styles.imageWrapperNext}>
        <RNImage source={require("@assets/icons/next.png")} resizeMode="contain" style={styles.imageNext} />
      </View>
    </View>
  );
});
