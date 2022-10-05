import React, { memo, useCallback, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import moment from "moment";
import useInterval from "@use-it/interval";
import { Loading, Pad, TextTemplate } from "@atoms";
import {
  GetMobileGameWeeklies,
  ClaimMobileGameWeeklyRewards as ClaimWeeklies,
  ClaimMobileGameWeeklyRewardsVariables as ClaimWeekliesVars,
} from "@graphql/_core/schema";
import { Style } from "@styles";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { useMutation, useQuery } from "@apollo/client";
import { GQL_QUERY_GET_GAME_WEEKLIES, GQL_MUTATION_CLAIM_WEEKLY_GAME_REWARDS } from "@graphql/weeklies";
import { getTimeRemaining, noop } from "@utils";
import { DETOX_ENABLED } from "@services/socket";
import { Clock } from "@atoms/icon/clock";
import { ClaimableActivityProgress } from "@organisms";
import { useTranslation } from "@hooks";
import { useDispatch } from "react-redux";
import { getUserStart } from "@redux/user/user.actions";
import { Button } from "@components/molecules";
import { JoinWeeklyGoal, JoinWeeklyGoalVariables } from "@graphql/_core/schema/JoinWeeklyGoal";
import { GQL_MUTATION_JOIN_WEEKLY_GOAL } from "@graphql/weeklies/joinWeeklyGoal.gql";

const handleCloseOverlay = () => Navigation.dismissOverlay(MODALS.blurredOverlay);

export const WeeklyQuestsModal = memo(() => {
  const dispatch = useDispatch();
  const [selectedEvent, selectEvent] = useState<number | null>(null);
  const t = useTranslation([
    "screens.weekly_quests.title",
    "screens.weekly_quests.time_remaining",
    "screens.weekly_quests.accept_challenge",
    "screens.weekly_quests.choose_challenge",
  ]);
  const { data, loading: weekliesLoading } = useQuery<GetMobileGameWeeklies>(GQL_QUERY_GET_GAME_WEEKLIES, {
    fetchPolicy: "no-cache",
  });
  const [claim] = useMutation<ClaimWeeklies, ClaimWeekliesVars>(GQL_MUTATION_CLAIM_WEEKLY_GAME_REWARDS, {
    refetchQueries: ["GetMobileGameWeeklies", "GetQuestMap"],
  });

  const [join, { loading: joinLoading }] = useMutation<JoinWeeklyGoal, JoinWeeklyGoalVariables>(
    GQL_MUTATION_JOIN_WEEKLY_GOAL,
    {
      refetchQueries: ["GetMobileGameWeeklies", "GetQuestMap"],
    }
  );

  const joinWeekly = useCallback(() => {
    if (selectedEvent) {
      join({ variables: { goalId: data?.getMobileGameWeeklies?.activityProgress?.[selectedEvent].id } });
    }
  }, [data?.getMobileGameWeeklies?.activityProgress, join, selectedEvent]);

  const eventNotSelected = useMemo(() => selectedEvent === null, [selectedEvent]);

  if (!data?.getMobileGameWeeklies?.id) {
    return null;
  }

  const { endDateTime, activityProgress, hasJoined } = data.getMobileGameWeeklies;

  if (weekliesLoading) {
    return <Loading />;
  }

  return (
    <View>
      <TextTemplate type="h2" textAlign="center">
        {t["screens.weekly_quests.title"]}
      </TextTemplate>
      <View style={styles.remainingTime}>
        <TextTemplate type="l1" textAlign="center">
          {t["screens.weekly_quests.time_remaining"]}
        </TextTemplate>
        <View style={styles.clock}>
          <Clock width={16} height={16} />
        </View>
        <RemainingTime endDateTime={endDateTime} />
      </View>
      {activityProgress.map((activity, index) => {
        const onPress = !hasJoined
          ? () => selectEvent(index)
          : !activity.isClaimable
          ? noop
          : async () => {
              try {
                await claim({ variables: { rewardIds: [activity.id] } });
                dispatch(getUserStart());
              } catch (e) {
                //
              }
            };

        return (
          <ClaimableActivityProgress
            key={activity.id}
            {...activity}
            onPress={onPress}
            iconUrl={activity.iconUrl.uri}
            isCompleted={activity.isClaimed}
            isJoined={activity.isJoined}
            isSelected={index === selectedEvent}
          />
        );
      })}
      {hasJoined ? null : (
        <>
          <Pad height={Style.adjust(30)} />
          <Button
            disabled={eventNotSelected}
            isLoading={joinLoading}
            label={
              eventNotSelected
                ? t["screens.weekly_quests.choose_challenge"]
                : t["screens.weekly_quests.accept_challenge"]
            }
            onPress={joinWeekly}
          />
        </>
      )}
      <Pad height={Style.adjust(96)} />
    </View>
  );
});

const styles = StyleSheet.create({
  activity: {
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
    paddingBottom: Style.adjust(16),
  },
  activityProgress: {
    marginTop: Style.adjust(16),
  },
  remainingTime: {
    marginTop: Style.adjust(8),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  clock: {
    marginHorizontal: Style.adjust(4),
  },
});

type RemainingTimeProps = {
  endDateTime: string;
};

const REFRESH_TIME = 1000 * 60;

const RemainingTime = ({ endDateTime }: RemainingTimeProps) => {
  const [time, setTime] = useState<string>(getTimeRemaining(endDateTime, "short").time);

  const handleTimeDisplay = useCallback(() => {
    if (moment().isSameOrAfter(endDateTime)) {
      handleCloseOverlay();
      return;
    }

    setTime(getTimeRemaining(endDateTime, "short").time);
  }, [endDateTime]);

  useInterval(handleTimeDisplay, !DETOX_ENABLED && time ? REFRESH_TIME : null);

  return <TextTemplate type="l1">{time}</TextTemplate>;
};
