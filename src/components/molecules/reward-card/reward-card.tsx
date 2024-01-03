import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate, WorldCard } from "@atoms";
import { RemoteImage } from "@graphql/_core/schema";
import { t } from "@locale";
import { Colours, Style } from "@styles";
import { MAX_PROGRESS_WIDTH, MAX_UI_PROGRESS_PERCENTAGE, rewardCardStyles as styles } from "./reward-card.styles";
import { StarIcon } from "@atoms/icon/star-icon";

type RewardCardProps = {
  progress: number;
  target: number;
  rewardTitle: string;
  rewardQuantity: number;
  primaryColor: string;
  secondaryColor: string;
  rewardImage: RemoteImage;
};

export const RewardCard = ({
  progress,
  target,
  rewardTitle,
  rewardQuantity,
  primaryColor,
  secondaryColor,
  rewardImage,
}: RewardCardProps) => {
  const calculated = useMemo(() => {
    const filledBarWidth = {
      width: Math.max(0, MAX_PROGRESS_WIDTH * Math.min(MAX_UI_PROGRESS_PERCENTAGE, progress / target)),
    };

    return {
      filledBarWidth,
    };
  }, [progress, target]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <View style={styles.row}>
          <View style={styles.textWrapper}>
            <TextTemplate numberOfLines={2} type="l1b">{`${rewardQuantity} x ${rewardTitle}`}</TextTemplate>
            <TextTemplate type="l3">
              {t("screens.locked_reward_modal.progress_status", { target, progress })}
            </TextTemplate>
          </View>
          <View style={styles.flex} />
        </View>
        <View style={styles.barWrapper}>
          <View style={styles.emptyBar} />
          <View style={styles.barTargetWrapper}>
            <View style={styles.starIconWrapper}>
              <StarIcon size={Style.adjust(9)} color={Colours.neutral.n200} />
            </View>
          </View>
          <View style={styles.barTargetWrapperShimRight} />
          <View style={styles.barTargetWrapperShimLeft} />
          <View style={[styles.filledBar, calculated.filledBarWidth]} />
        </View>
      </View>
      {!rewardImage?.uri ? null : (
        <View style={styles.worldCardWrapper}>
          <WorldCard mainColor={primaryColor} shadowColor={secondaryColor} />
          <View style={styles.imageWrapper}>
            <Image suppressLoadingUi={true} width={Style.adjust(56)} source={{ uri: rewardImage.uri }} />
          </View>
          <View style={StyleSheet.flatten([styles.imageOverlay, { borderColor: secondaryColor }])} />
        </View>
      )}
    </View>
  );
};
