import React, { memo, useState } from "react";
import { Navigation } from "@navigation/main";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { useMutation, useQuery } from "@apollo/client";
import { Alert, View } from "react-native";
import moment from "moment";
import { DuelBackground, DuelOptions, DuelInviteIntro } from "./subcomponents";
import { DEFAULT_DUEL_AMOUNT, DuelStepProps } from "./duels.types";
import { Step } from "./duels.types";
import styles from "./duel-invite.modal.styles";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { ROUTES } from "@navigation/constants";
import { useBackHandler } from "@hooks";
import { t } from "@locale";
import { gql } from "@graphql/__generated";

const STEPS = {
  INTRO: {
    StepComponent: DuelInviteIntro,
    checkIfDisabled: () => false,
    PREV: null as Step,
    NEXT: "OPTIONS" as Step,
  },
  OPTIONS: {
    StepComponent: DuelOptions,
    checkIfDisabled: () => false,
    PREV: "INTRO" as Step,
    NEXT: "CONFIRM" as Step,
  },
};

const showInviterNotEnoughYucoinAlert = (dismiss: () => void) => {
  Alert.alert(
    t("modals.duels.duel_invite.not_enought_yucoin.heading"),
    t("modals.duels.duel_invite.not_enought_yucoin.subheading"),
    [{ text: t("labels.cta.got_it"), onPress: dismiss }]
  );
};

interface IProps {
  componentId: string;
  opponentId: string;
  isDuelsHubInNavigationStack: boolean;
  requestLocation: "leaderboards" | "search_list" | "recents" | "inspect";
  leaderboardPlacement?: number;
}

const DuelInviteContainer: React.FC<IProps> = ({
  componentId,
  opponentId,
  isDuelsHubInNavigationStack = false,
  requestLocation,
  leaderboardPlacement,
}) => {
  const dispatch = useDispatch();
  const userCoins = useSelector(getTotalCoins);
  const [step, setStep] = useState<Step>("INTRO");
  const [yucoin, setYucoin] = useState(DEFAULT_DUEL_AMOUNT);
  const [isLoading, setIsLoading] = useState(false);
  const dismiss = () => Navigation.pop(componentId);
  useBackHandler(() => {
    dismiss();
    return true;
  });

  const { StepComponent, NEXT } = STEPS[step];
  const [inviteToDuel] = useMutation(gql("InviteToDuelDocument"), {
    refetchQueries: [{ query: gql("GetDuelInvitationsDocument") }, { query: gql("GetDuelsDocument") }],
  });

  const { data, loading } = useQuery(gql("GetDuellerDetailsDocument"), {
    fetchPolicy: "no-cache",
    variables: {
      opponentId,
    },
  });

  const user = data?.getDuellerDetails?.user;
  const opponent = data?.getDuellerDetails?.opponent;
  const nextStepAlert = data?.getDuellerDetails?.nextStepAlert;

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await inviteToDuel({
        variables: {
          startDateTime: moment().add(1, "day").startOf("day").format(),
          opponentUserIds: [opponentId],
          yucoin: yucoin,
          duration: 86400,
          requestLocation,
          leaderboardPlacement,
        },
      });
      dismiss();

      if (isDuelsHubInNavigationStack) {
        await Navigation.popTo(ROUTES.duelsHub);
      } else {
        await Navigation.push(ROUTES.leaderboard, {
          component: {
            id: ROUTES.duelsHub,
            name: ROUTES.duelsHub,
          },
        });
      }

      dispatch(getUserDataStart({ types: [AppDataType.coinLedger] }));
    } catch (e) {
      setIsLoading(false);
      dismiss();
    }
  };

  const submitDuel = async () => {
    if (userCoins < yucoin) {
      showInviterNotEnoughYucoinAlert(dismiss);
      return;
    }

    Alert.alert(
      t("modals.duels.duel_invite.confirm_invitation.heading"),
      t("modals.duels.duel_invite.confirm_invitation.subheading"),
      [
        {
          text: t("labels.cta.cancel"),
          style: "cancel",
        },
        {
          text: t("labels.cta.confirm"),
          onPress: onSubmit,
        },
      ]
    );
  };

  const componentProps: DuelStepProps = {
    yucoin,
    user,
    opponent,
    loading,
    setYucoin,
    goToNextStep: () =>
      nextStepAlert
        ? Alert.alert(nextStepAlert.title, nextStepAlert.subtitle, [
            {
              text: t("labels.cta.got_it"),
              onPress: dismiss,
            },
          ])
        : setStep(NEXT),
    onDeclinePress: dismiss,
    isLoading,
    submitDuel,
    userCoins,
    componentId,
    dismiss,
  };

  return (
    <View style={styles.safeAreaWrapper}>
      <DuelBackground />
      <StepComponent {...componentProps} />
    </View>
  );
};

export default memo(DuelInviteContainer);
