import React, { memo, useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import LeaderboardSettingsScreen from "@screens/member/leaderboard-settings/leaderboard-settings.screen";
import { useSelector, useDispatch } from "react-redux";
import { t } from "@locale";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { showYuModal } from "@navigation/root";
import { getSocialGroups } from "@redux/leaderboards/leaderboards.selectors";
import { useMutation } from "@apollo/client";
import { updateSocialGroupLeaderboardConsents } from "@redux/leaderboards/leaderboards.actions";
import { IChangeConsentProps } from "@organisms/leaderboard-toggle/leaderboard-toggle";
import { gql } from "@graphql/__generated";
import { queryYuScreenLayout } from "@redux/yu-screen/yu-screen.actions";

interface IProps {
  componentId: string;
}

const LeaderboardSettingsContainer = ({ componentId }: IProps) => {
  const [updateConsentMutation] = useMutation(gql("UpdateMobileSocialLeaderboardConsentsDocument"));
  const dispatch = useDispatch();
  const socialGroups = useSelector(getSocialGroups);

  const leaderboards = useMemo(
    () =>
      socialGroups?.flatMap((socialGroup) =>
        socialGroup.leaderboards?.map((leaderboard) => ({
          ...leaderboard,
          socialGroupId: socialGroup.socialGroupId,
          socialGroupName: socialGroup.name,
        }))
      ),
    [socialGroups]
  );

  const dismissModal = useCallback(() => {
    Navigation.dismissModal(MODALS.generic);
  }, []);

  const updateConsent = useCallback(
    async ({ name, socialGroupId, leaderboardId, consent }: IChangeConsentProps) => {
      logMixpanelEventActionCreator("leaderboard_toggle", {
        name,
        isActive: consent,
      });

      await updateConsentMutation({ variables: { consents: [{ id: leaderboardId, consent }] } });

      dispatch(updateSocialGroupLeaderboardConsents({ socialGroupId, leaderboards: [{ leaderboardId, consent }] }));
      dispatch(queryYuScreenLayout());

      dismissModal();
    },
    [dismissModal, dispatch, updateConsentMutation]
  );

  const onChangeConsent = useCallback(
    ({ name, socialGroupId, leaderboardId, consent }: IChangeConsentProps) => {
      const passProps = !consent
        ? {
            ctaLabel: t("screens.leaderboard.turn_board_off.ctaLabel"),
            ctaLabelSecondary: t("screens.leaderboard.turn_board_off.ctaLabelSecondary"),
            heading: t("screens.leaderboard.turn_board_off.heading"),
            onPress: () => Navigation.dismissModal(MODALS.generic),
            onPressSecondary: () => {
              updateConsent({ name, socialGroupId, leaderboardId, consent });
            },
            subheading: t("screens.leaderboard.turn_board_off.subheading"),
          }
        : {
            ctaLabel: t("screens.leaderboard.turn_board_on.ctaLabel"),
            ctaLabelSecondary: t("screens.leaderboard.turn_board_on.ctaLabelSecondary"),
            heading: t("screens.leaderboard.turn_board_on.heading"),
            onPress: () => {
              updateConsent({ name, socialGroupId, leaderboardId, consent });
            },
            onPressSecondary: dismissModal,
            subheading: t("screens.leaderboard.turn_board_on.subheading"),
          };

      showYuModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps,
        },
      });
    },
    [dismissModal, updateConsent]
  );

  const onRightIconPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  const onLeftIconPress = useCallback(() => Navigation.pop(ROUTES.settings), []);
  return (
    <LeaderboardSettingsScreen
      leaderboards={leaderboards}
      onLeftIconPress={onLeftIconPress}
      onChangeConsent={onChangeConsent}
      onRightIconPress={onRightIconPress}
    />
  );
};

export default memo(LeaderboardSettingsContainer);
