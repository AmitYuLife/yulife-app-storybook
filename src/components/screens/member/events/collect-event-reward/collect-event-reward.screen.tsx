import React, { FC, memo } from "react";
import { View, StyleSheet } from "react-native";
import { TextTemplate } from "@atoms";
import EventRewardsWrapper from "@organisms/event-reward/event-rewards-wrapper";
import { Colours, Style } from "@styles";
import { IReward } from "@organisms/event-reward/event-reward";
import { ContentItemLottie as GqlLottie } from "@graphql/_core/schema";
import { ContentItemLottie } from "@components/sdui";
import { CentredScreen, Button } from "@molecules";

interface ICollectEventRewardsProps {
  title: string;
  descriptionTitle: string;
  description: string;
  cta: string;
  onCta: () => void;
  rewards: IReward[];
  lottie: GqlLottie;
}

const CollectEventRewardScreen: FC<ICollectEventRewardsProps> = ({
  title,
  descriptionTitle,
  description,
  cta,
  onCta,
  rewards,
  lottie,
}) => {
  const titleTemplate = Style.isShortToMedium() ? "b2b" : "b1b";
  const descriptionTitleTemplate = Style.isShortToMedium() ? "h3" : "h2";
  return (
    <CentredScreen>
      <View style={style.titleWrapper}>
        <TextTemplate type={titleTemplate} color={Colours.neutral.n900}>
          {title}
        </TextTemplate>
      </View>
      <View style={style.lottieWrapper}>
        <ContentItemLottie {...lottie} />
      </View>
      <TextTemplate type={descriptionTitleTemplate} color={Colours.neutral.n800}>
        {descriptionTitle}
      </TextTemplate>
      <View style={style.separator16} />
      <TextTemplate type={"b2"} textAlign="center" color={Colours.neutral.n800}>
        {description}
      </TextTemplate>
      <View style={style.rewardSeparator} />
      <EventRewardsWrapper isClaimEnabled={false} rewards={rewards} />
      <View style={style.buttonWrapper}>
        <Button size="Large" onPress={onCta} label={cta} />
      </View>
    </CentredScreen>
  );
};

const style = StyleSheet.create({
  titleWrapper: {
    marginTop: Style.adjust(20),
  },
  lottieWrapper: {
    marginTop: Style.isShortToMedium() ? Style.adjust(8) : Style.adjust(14),
    height: Style.isShortToMedium() ? Style.adjust(170) : Style.adjust(220),
    width: Style.isShortToMedium() ? Style.adjust(135) : Style.adjust(180),
  },
  separator16: {
    height: Style.isShortToMedium() ? Style.adjust(8) : Style.adjust(16),
  },
  rewardSeparator: {
    height: Style.isShortToMedium() ? Style.adjust(16) : Style.adjust(40),
  },
  buttonWrapper: {
    position: "absolute",
    bottom: Style.adjust(32),
  },
});

export default memo(CollectEventRewardScreen);
