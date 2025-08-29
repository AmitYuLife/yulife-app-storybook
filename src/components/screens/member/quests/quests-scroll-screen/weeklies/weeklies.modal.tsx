import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Image, View } from "react-native";
import moment from "moment";

import { Loading, Pad, TextTemplate } from "@atoms";
import { Style, Colours, StyleSheet } from "@styles";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { useMutation, useQuery } from "@apollo/client";
import { getTimeRemaining } from "@utils";
import { DETOX_ENABLED } from "@services/socket";
import { ActivityClaimable } from "@organisms";
import { useTranslation } from "@hooks";
import { useDispatch } from "react-redux";
import { Button } from "@components/molecules";
import { IFloatingModalContentProps } from "@components/modals/floating-modals/floating-modal";
import colours from "@styles/colours";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { RadioIcon } from "@atoms/icon/radio-icon";
import { gql } from "@graphql/__generated";

const handleCloseOverlay = () => Navigation.dismissOverlay(MODALS.blurredOverlay);

const CLAIMED_ICON = require("@assets/icons/trophy.png");

export const WeeklyQuestsModal = memo(({ onClose, setIcon }: IFloatingModalContentProps) => {
  const [selectedEvent, selectEvent] = useState<number | null>(-1);
  const dispatch = useDispatch();
  const t = useTranslation([
    "screens.weekly_quests.reward",
    "screens.weekly_quests.claimable_activity",
    "screens.weekly_quests.claimed_activity",
    "screens.weekly_quests.title",
    "screens.weekly_quests.pick_challenge",
    "screens.weekly_quests.quest_resets_in",
    "screens.weekly_quests.accept_challenge",
    "labels.cta.lets_go",
  ]);
  const {
    data,
    loading: weekliesLoading,
    refetch,
  } = useQuery(gql("GetMobileGameWeekliesDocument"), {
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: true,
  });
  const [claim, { loading: claimLoading }] = useMutation(gql("ClaimMobileGameWeeklyRewardsDocument"), {
    refetchQueries: ["GetMobileGameWeeklies", "GetQuestMap"],
  });

  const [join, { loading: joinLoading }] = useMutation(gql("JoinWeeklyGoalDocument"), {
    refetchQueries: ["GetMobileGameWeeklies", "GetQuestMap"],
  });

  const joinWeekly = useCallback(async () => {
    const goalId = data?.getMobileGameWeeklies?.activityProgress?.[selectedEvent]?.id;
    await join({ variables: { goalId } });
    selectEvent(-1);
  }, [data?.getMobileGameWeeklies?.activityProgress, join, selectedEvent]);

  const eventNotSelected = useMemo(() => selectedEvent === -1, [selectedEvent]);

  const activeActivity = useMemo(
    () => data?.getMobileGameWeeklies?.activityProgress?.find((e) => e.isJoined),
    [data?.getMobileGameWeeklies?.activityProgress]
  );

  const claimReward = useCallback(async () => {
    await claim({ variables: { rewardIds: [activeActivity?.id] } });
    dispatch(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivity] }));

    await refetch();
    setIcon(CLAIMED_ICON);
  }, [activeActivity, claim, dispatch, setIcon, refetch]);

  const { endDateTime, activityProgress, hasJoined } = data?.getMobileGameWeeklies || {};

  const description = useMemo(
    () =>
      getWeekliesDescription({
        t,
        hasJoined,
        isClaimed: activeActivity?.isClaimed,
        isClaimable: activeActivity?.isClaimable,
      }),
    [activeActivity, hasJoined, t]
  );

  if (!data?.getMobileGameWeeklies?.id) {
    return <Loading />;
  }

  return (
    <View>
      <View>
        <RemainingTime endDateTime={endDateTime} isClaimed={activeActivity?.isClaimed} />
        <Pad height={Style.adjust(18)} />
        <TextTemplate type="h2" textAlign="center">
          {t["screens.weekly_quests.title"]}
        </TextTemplate>
        <Pad height={Style.adjust(8)} />
        <TextTemplate type="b2" textAlign="center">
          {description}
        </TextTemplate>
        <Pad height={Style.adjust(14)} />

        {activityProgress.map((activity, index) => {
          const onPress = !hasJoined ? () => selectEvent(index) : undefined;

          return (
            <ActivityClaimable
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
      </View>
      {!activeActivity ? null : (
        <>
          <Pad height={Style.adjust(32)} />

          <TextTemplate type="b1b" textAlign="center">
            {t["screens.weekly_quests.reward"]}
          </TextTemplate>
          <Pad height={Style.adjust(14)} />

          <ClaimableYucoin isClaimed={activeActivity?.isClaimed} coins={activeActivity?.yuCoinSubTotal} />
          <Pad height={Style.adjust(32)} />
        </>
      )}
      {hasJoined ? null : (
        <>
          <Pad height={Style.adjust(30)} />
          <Button
            disabled={eventNotSelected}
            isLoading={joinLoading || weekliesLoading}
            translationKey="labels.cta.lets_go"
            onPress={joinWeekly}
          />
        </>
      )}
      {activeActivity && !activeActivity?.isClaimable ? (
        <Button isLoading={joinLoading} translationKey="labels.cta.close" onPress={onClose} />
      ) : null}
      {activeActivity?.isClaimable && !activeActivity?.isClaimed ? (
        <Button isLoading={claimLoading || weekliesLoading} translationKey="labels.cta.claim" onPress={claimReward} />
      ) : null}
      <Pad height={Style.adjust(36)} />
    </View>
  );
});

const getWeekliesDescription = ({
  hasJoined,
  isClaimable,
  isClaimed,
  t,
}: {
  t: Record<string, string>;
  hasJoined: boolean;
  isClaimable: boolean;
  isClaimed: boolean;
}) => {
  if (!hasJoined) {
    return t["screens.weekly_quests.pick_challenge"];
  }

  if (hasJoined && !isClaimable && !isClaimed) {
    return "";
  }

  if (isClaimable && !isClaimed) {
    return t["screens.weekly_quests.claimable_activity"];
  }

  if (isClaimed) {
    return t["screens.weekly_quests.claimed_activity"];
  }
};

const ClaimableYucoin = ({ coins, isClaimed }: { coins: string; isClaimed: boolean }) => {
  const style = useMemo(
    () => ({
      ...styles.claimableYucoin,
      ...(isClaimed ? { backgroundColor: "rgb(239, 246, 243)", borderColor: "rgb(103,189,100)" } : {}),
    }),
    [isClaimed]
  );

  return (
    <View style={styles.claimableYucoinContainer}>
      <View style={style}>
        {!isClaimed ? null : (
          <View style={styles.selectedCheck}>
            <RadioIcon width={Style.adjust(24)} height={Style.adjust(24)} checked={true} />
          </View>
        )}

        <Image source={require("@assets/icons/yucoin.png")} style={styles.yucoin} />
        <TextTemplate type="l1b" color={isClaimed ? colours.status.su400 : undefined}>
          {coins}
        </TextTemplate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  claimableYucoinContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  yucoin: {
    width: Style.adjust(38),
    height: Style.adjust(38),
    marginBottom: Style.adjust(12),
  },
  claimableYucoin: {
    paddingHorizontal: Style.adjust(20),
    paddingVertical: Style.adjust(12),
    backgroundColor: Colours.neutral.white,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgb(232,231,235)",
  },
  selectedCheck: {
    position: "absolute",
    top: -8,
    width: 24,
    height: 24,
    right: -8,
  },
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

type IRemainingTimeProps = {
  endDateTime: string;
  isClaimed?: boolean;
};

const REFRESH_TIME = 1000 * 60;

const RemainingTime = ({ endDateTime, isClaimed }: IRemainingTimeProps) => {
  const [time, setTime] = useState<string>(getTimeRemaining(endDateTime, "short").time);

  const handleTimeDisplay = useCallback(() => {
    if (moment().isSameOrAfter(endDateTime)) {
      handleCloseOverlay();
      return;
    }

    setTime(getTimeRemaining(endDateTime, "short").time);
  }, [endDateTime]);

  const t = useTranslation(["screens.weekly_quests.quest_resets_in", "screens.weekly_quests.come_back_in"]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        handleTimeDisplay();
      },
      !DETOX_ENABLED && time ? REFRESH_TIME : null
    );

    return () => clearInterval(interval);
  }, [handleTimeDisplay, time]);

  return (
    <View style={styles.remainingTime}>
      <TextTemplate type="b2" textAlign="center">
        {!isClaimed ? t["screens.weekly_quests.quest_resets_in"] : t["screens.weekly_quests.come_back_in"]}{" "}
        <TextTemplate type="b2b" color={Colours.primary.p600}>
          {time}
        </TextTemplate>
      </TextTemplate>
    </View>
  );
};
