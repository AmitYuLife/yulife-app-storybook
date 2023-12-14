import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate, WorldCard } from "@atoms";
import { RemoteImage } from "@graphql/_core/schema";
import { t } from "@locale";
import { Style } from "@styles";
import { MAX_PROGRESS_WIDTH, rewardCardStyles as styles } from "./reward-card.styles";

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
    const filledBarWidth = { width: Math.max(0, MAX_PROGRESS_WIDTH * (progress / target)) };

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
          <View style={[styles.filledBar, calculated.filledBarWidth]} />
          <View style={styles.barTargetWrapper}>
            <TextTemplate textAlign="center" type="l3b">
              {target}
            </TextTemplate>
          </View>
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
