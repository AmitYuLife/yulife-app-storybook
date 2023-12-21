import { useQuery } from "@apollo/client";
import { QuestDetailModal } from "./quest-detail-modal.component";
import { QuestDetailModalContainerProps } from "./quest-detail-modal.types";
import { Loading } from "@atoms";
import { memo, useMemo } from "react";
import { ChestCard } from "./__subcomponents/chest-card";
import { View } from "react-native";
import Hint from "@components/molecules/hint/hint";
import { pushToScreen } from "@navigation/root";
import { ROUTES } from "@navigation/constants";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { Navigation } from "@navigation/main";
import { GiftUnlockedStarsSvg } from "@atoms/icon/gift-unlocked-stars";
import { RewardCard } from "@components/molecules/reward-card/reward-card";
import { GetGoalMilestoneDetails } from "@graphql/_core/schema";
import { questDetailModalStyles } from "./quest-detail-modal.styles";
import { HeroLockedIcon } from "@atoms/icon/hero-locked-icon";
import { gql } from "@graphql/__generated";

export const QuestDetailModalContainer = memo((props: QuestDetailModalContainerProps) => {
  const currentRoute = useSelector(getRouteState);

  const calculated = useMemo(() => {
    const pressHint = () => {
      pushToScreen(currentRoute, {
        component: {
          id: ROUTES.sduiStatic,
          name: ROUTES.sduiStatic,
          passProps: {
            stepId: "game_mechanics_information",
            dynamicId: currentRoute,
          },
        },
      });
      Navigation.dismissOverlayWithChild();
    };

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
      pressHint,
      goals,
    };
  }, [props]);

  const { data, loading } = useQuery<GetGoalMilestoneDetails>(gql("GetGoalMilestoneDetailsDocument"), {
    variables: {
      goals: calculated.goals,
    },
    skip: !calculated.goals?.length,
    fetchPolicy: "no-cache",
  });

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
          <View style={questDetailModalStyles.listSpacer} />
          {!data?.getGoalMilestoneDetails?.list
            ? null
            : data.getGoalMilestoneDetails.list.map((dataItem, dataItemIndex) => (
                <RewardCard
                  key={dataItemIndex}
                  progress={dataItem.progress}
                  target={dataItem.target}
                  rewardQuantity={dataItem.rewardQuantity}
                  rewardTitle={dataItem.rewardTitle}
                  primaryColor={dataItem.theme.primaryColor}
                  secondaryColor={dataItem.theme.secondaryColor}
                  rewardImage={dataItem.image}
                />
              ))}
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
                onPress={calculated.pressHint}
              />
            </View>
          )}
        </>
      )}
    </QuestDetailModal>
  );
});
