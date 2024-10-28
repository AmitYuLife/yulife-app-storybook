import { useLazyQuery } from "@apollo/client";
import { LeaderboardCommunityOverlay, showFloatingModal } from "@components/modals";
import GenericSelectorModal from "@components/modals/generic-selector-modal/generic-selector-modal";
import { BattlePassLeaderboardScreen } from "@components/screens";
import { gql } from "@graphql/__generated";
import { t } from "@locale";
import { MODALS, ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { GenericFullScreenLoading } from "@organisms";
import { updateActiveSocialGroupId } from "@redux/leaderboards/leaderboards.actions";
import { getActiveSocialGroup, getSocialGroups } from "@redux/leaderboards/leaderboards.selectors";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { Style } from "@styles";
import { first } from "lodash";
import moment from "moment";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

interface IProps {
  availableDates: string[];
  templateId: string;
  updating: boolean;
  leaderboards: { socialGroupId: string; leaderboardId: string }[];
}

const BattlePassLeaderboardContainer = ({ availableDates, updating, leaderboards, templateId }: IProps) => {
  const currentUserId = useSelector(getCurrentUserId);
  const dispatch = useDispatch();
  const allSocialGroups = useSelector(getSocialGroups);
  const [selectedDate, setSelectedDate] = useState<string>(first(availableDates));
  const activeSocialGroup = useSelector(getActiveSocialGroup);

  const leaderboardId = useMemo(
    () =>
      leaderboards.find((a) => a.socialGroupId === activeSocialGroup.socialGroupId)?.leaderboardId ||
      leaderboards?.[0]?.leaderboardId,
    [leaderboards, activeSocialGroup.socialGroupId]
  );

  const [getDetails, { data, loading }] = useLazyQuery(gql("GetMobileBattlePassDonationProgressDetailsDocument"), {
    variables: {
      leaderboardId,
      templateId,
      forDate: selectedDate,
      filter: { date: selectedDate },
    },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (leaderboardId) {
          getDetails();
        }
      },
      updating ? 1000 : 0
    );

    return () => {
      clearTimeout(timer);
    };
  }, [getDetails, leaderboardId, updating]);

  const currentUserInfo = useMemo(
    () => data?.leadeboard?.find((item) => item.userId === currentUserId),
    [currentUserId, data?.leadeboard]
  );

  // Only include social groups that have a leaderboard of this type
  const socialGroups = allSocialGroups.filter((socialGroup) => {
    return leaderboards.some((a) => a.socialGroupId === socialGroup.socialGroupId);
  });

  const socialGroup = useMemo(() => {
    // We don't use activeSocialGroup directly because user might not be enrolled on that social group!
    return socialGroups.find((group) =>
      leaderboards.find(
        (leaderboard) =>
          leaderboard.socialGroupId === group.socialGroupId && leaderboard.leaderboardId === leaderboardId
      )
    );
  }, [leaderboardId, leaderboards, socialGroups]);

  const onPressDate = useCallback(async () => {
    const months = availableDates.map((dateString) => {
      return {
        label: moment(dateString).format(t("format.month_full")),
        value: dateString,
      };
    });

    const children = ({ onClose }: { onClose: () => void }) => (
      <GenericSelectorModal
        items={months}
        onClose={onClose}
        defaultValue={selectedDate}
        buttonLabel={t("overlays.leaderboard_community.button_label")}
        onConfirm={(value) => {
          setSelectedDate(value);
        }}
      />
    );

    await showFloatingModal({
      children,
      modalId: MODALS.genericSelector,
      showButton: false,
      title: t("screens.battle_pass.leaderboard.month_switcher.title"),
      paddingTop: Style.adjust(80),
    });
  }, [availableDates, selectedDate]);

  const onPressSocialGroup = useCallback(async () => {
    let selectedSocialGroup = { id: "", name: "" };

    // TODO: This is weird flow inherited from leaderboard container.. we should switch to generic selector
    const children = (
      <LeaderboardCommunityOverlay onSelect={(group) => (selectedSocialGroup = group)} socialGroups={socialGroups} />
    );

    await showFloatingModal({
      children,
      modalId: MODALS.leaderboardCommunityOverlay,
      title: t("communities"),
      buttonLabel: t("overlays.leaderboard_community.button_label"),
      paddingTop: Style.adjust(80),
      buttonOnPress: () => {
        dispatch(updateActiveSocialGroupId(selectedSocialGroup?.id));
      },
    });
  }, [dispatch, socialGroups]);

  if (loading || !data?.details || !socialGroup) {
    return <GenericFullScreenLoading onLeftIconPress={onBack} />;
  }

  return (
    <BattlePassLeaderboardScreen
      details={data.details}
      onPressDate={onPressDate}
      socialGroups={socialGroups}
      selectedDate={selectedDate}
      leaderboard={data.leadeboard}
      currentUserInfo={currentUserInfo}
      onPressSocialGroup={onPressSocialGroup}
      activeSocialGroup={socialGroup.name}
    />
  );
};

const onBack = () => Navigation.pop(ROUTES.rewards);

export default memo(BattlePassLeaderboardContainer);
