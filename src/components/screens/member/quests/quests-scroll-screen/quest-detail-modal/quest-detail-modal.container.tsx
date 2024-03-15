import { useQuery } from "@apollo/client";
import { QuestDetailModal } from "./quest-detail-modal.component";
import { QuestDetailModalContainerProps } from "./quest-detail-modal.types";
import { Loading } from "@atoms";
import { memo, useMemo } from "react";
import { ChestCard } from "./__subcomponents/chest-card";
import { View } from "react-native";
import Hint from "@components/molecules/hint/hint";
import { GiftUnlockedStarsSvg } from "@atoms/icon/gift-unlocked-stars";
import { RewardCard } from "@components/molecules/reward-card/reward-card";
import { questDetailModalStyles } from "./quest-detail-modal.styles";
import { HeroLockedIcon } from "@atoms/icon/hero-locked-icon";
import { gql } from "@graphql/__generated";
import { useDispatch } from "react-redux";
import { Style } from "@styles";

export const QuestDetailModalContainer = memo((props: QuestDetailModalContainerProps) => {
  const dispatch = useDispatch();

  const calculated = useMemo(() => {
    const goals = !props.goals
      ? []
      : props.goals.reduce((acc, goal) => {
          if (!goal.milestoneId) {
            return acc;
          }

          return [...acc, { goalId: goal.goalId, milestoneId: goal.milestoneId }];
        }, []);

    return {
      heading: props.heading,
      HeaderIcon: HeroLockedIcon,
      ctaLabel: props.ctaLabelSubmit,
      dismissLabel: props.ctaLabelReject,
      goals,
      rewardCardWrapperStyle: {
        marginTop: props.displayChestCard ? Style.adjust(-8) : 0,
      },
    };
  }, [props]);

  const { data, loading } = useQuery(gql("GetGoalMilestoneDetailsDocument"), {
    variables: {
      goals: calculated.goals,
    },
    fetchPolicy: "no-cache",
  });

  const pressHint = useMemo(
    () =>
      data?.getGoalMilestoneDetails?.hint?.onPress ? () => dispatch(data.getGoalMilestoneDetails.hint.onPress) : null,
    [data]
  );

  return (
    <QuestDetailModal
      heading={calculated.heading}
      HeaderIcon={calculated.HeaderIcon}
      ctaLabel={calculated.ctaLabel}
      onPressCta={props.onPressCta}
      onPressClose={props.onPressClose}
      onPressCtaDismiss={props.onPressCtaDismiss}
      dismissLabel={calculated.dismissLabel}
      nextAvailableAt={props.nextAvailableAt}
    >
      {loading ? (
        <View>
          <Loading />
        </View>
      ) : (
        <>
          {!props.displayChestCard ? null : <ChestCard />}
          {!data?.getGoalMilestoneDetails?.list ? null : (
            <View style={calculated.rewardCardWrapperStyle}>
              {data.getGoalMilestoneDetails.list.map((dataItem, dataItemIndex) => (
                <RewardCard
                  key={dataItemIndex}
                  progress={dataItem.progress}
                  target={dataItem.target}
                  rewardQuantity={dataItem.rewardQuantity}
                  rewardTitle={dataItem.rewardTitle}
                  primaryColor={dataItem.theme.primaryColor}
                  secondaryColor={dataItem.theme.secondaryColor}
                  overlayColor={dataItem.theme.overlayColor}
                  rewardImage={dataItem.image}
                  overlayImage={dataItem.overlayImage}
                />
              ))}
            </View>
          )}
          {!data?.getGoalMilestoneDetails?.hint ? null : (
            <View style={questDetailModalStyles.hintWrapper}>
              <Hint
                label={data.getGoalMilestoneDetails.hint.label}
                description=""
                markdownDescription={data.getGoalMilestoneDetails.hint.description}
                image={
                  data.getGoalMilestoneDetails.hint.image || {
                    Element: <GiftUnlockedStarsSvg />,
                  }
                }
                onPress={pressHint}
              />
            </View>
          )}
        </>
      )}
    </QuestDetailModal>
  );
});
