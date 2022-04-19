import * as React from "react";
import { CollectEventRewardScreen } from "@screens";
import { IReward } from "@organisms/event-reward/event-reward";
interface IProps {
  title: string;
  descriptionTitle: string;
  description: string;
  cta: string;
  onCta: (rewardIds: string[]) => void;
  rewards: IReward[];
}

const lottie = {
  __typename: "ContentItemLottie",
  id: "event-reward-lottie",
  uri:
    "https://yulife-local.imgix.net/events/lottie/trophy-2022-02-28-T-14-22-00.json?ixlib=js-3.2.1&s=ebcbcc7051307804cabcf5d732c5613f",
  autoPlay: true,
  loop: false,
  aspectRatio: 1,
  styles: null as any,
  onAnimationEnd: null as any,
};

export default function CollectEventRewardModal({ title, descriptionTitle, description, cta, onCta, rewards }: IProps) {
  return (
    <CollectEventRewardScreen
      title={title}
      descriptionTitle={descriptionTitle}
      description={description}
      cta={cta}
      onCta={onCta}
      rewards={rewards}
      lottie={lottie}
    />
  );
}
