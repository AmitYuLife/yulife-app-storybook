import { memo } from "react";
import { ProgressBar } from "@atoms";
import { HeroCardBody as HeroCardBodyProps, HeroCardProgressMilestoneState } from "@utils/heroCards";

const HeroCardBody = ({ progress, cardWidth, cardPadding }: HeroCardBodyProps) => {
  if (!progress?.milestones?.length) {
    return null;
  }

  return (
    <ProgressBar
      type="compact"
      width={cardWidth - cardPadding * 2}
      current={progress.currentProgress}
      max={progress.maxProgress}
      milestones={progress.milestones.map((milestone) => ({
        value: milestone.progress,
        rewardClaimed: milestone.state === HeroCardProgressMilestoneState.Active,
        shouldAttractAttention: milestone.state === HeroCardProgressMilestoneState.Emphasized,
      }))}
    />
  );
};

export default memo(HeroCardBody);
