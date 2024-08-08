import { useQuery } from "@apollo/client";
import { QuestDetailModalContainerProps } from "./quest-detail-modal.types";
import { Loading, TextTemplate } from "@atoms";
import { memo, useMemo } from "react";
import { ChestCard } from "./__subcomponents/chest-card";
import { StyleSheet, TextStyle, View } from "react-native";
import Hint from "@components/molecules/hint/hint";
import { GiftUnlockedStarsSvg } from "@atoms/icon/gift-unlocked-stars";
import { RewardCard } from "@components/molecules/reward-card/reward-card";
import { HeroLockedIcon } from "@atoms/icon/hero-locked-icon";
import { gql } from "@graphql/__generated";
import { useDispatch } from "react-redux";
import { Style } from "@styles";
import { QUEST_DETAIL_HALF_MODAL } from "@ids";
import { NextAvailableAt } from "./__subcomponents/next-available-at";
import { ScrollableContentOverlay } from "@modals";

export const QuestDetailModalContainer = memo((props: QuestDetailModalContainerProps) => {
  const { displayChestCard, nextAvailableAt } = props;

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
        marginTop: displayChestCard ? Style.adjust(-8) : 0,
      },
    };
  }, [displayChestCard, props]);

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

  const modalContents = useMemo(() => {
    if (loading) {
      return (
        <View>
          <Loading />
        </View>
      );
    }

    return (
      <>
        <View style={styles.textWrapper}>
          {nextAvailableAt ? (
            <NextAvailableAt nextAvailableAt={nextAvailableAt} />
          ) : calculated.heading ? (
            <TextTemplate textAlign="center" type="h2">
              {calculated.heading}
            </TextTemplate>
          ) : null}
        </View>
        <>
          {!displayChestCard ? null : <ChestCard />}
          {!data?.getGoalMilestoneDetails?.list?.length ? null : (
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
            <View style={styles.hintWrapper}>
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
      </>
    );
  }, [
    calculated.heading,
    calculated.rewardCardWrapperStyle,
    data?.getGoalMilestoneDetails,
    loading,
    pressHint,
    displayChestCard,
    nextAvailableAt,
  ]);

  return (
    <ScrollableContentOverlay
      HeaderIcon={<HeroLockedIcon />}
      ctaLabel={calculated.ctaLabel}
      ctaDismissLabel={calculated.dismissLabel}
      onPressCta={props.onPressCta}
      onPressClose={props.onPressClose}
      onPressCtaDismiss={props.onPressCtaDismiss}
      testId={QUEST_DETAIL_HALF_MODAL(calculated.heading)}
    >
      {modalContents}
    </ScrollableContentOverlay>
  );
});

export const styles = StyleSheet.create({
  textWrapper: {
    marginBottom: Style.adjust(24),
    textAlign: "center",
  } as TextStyle,
  hintWrapper: { marginTop: Style.adjust(8) },
});
