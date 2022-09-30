import { GQL_MUTATION_INVITE_TO_DUEL, GQL_QUERY_GET_DUELS, InviteToDuelMutationTuple } from "@graphql/duels";
import React, { useState } from "react";
import { Navigation } from "react-native-navigation";
import { useDispatch, useSelector } from "react-redux";
import { getUserStart } from "@redux/user/user.actions";
import { useMutation, useQuery } from "@apollo/client";
import { Alert, View } from "react-native";
import moment from "moment";
import { DuelBackground, DuelOptions, DuelInviteIntro } from "./subcomponents";
import { DEFAULT_DUEL_AMOUNT, DuelStepProps } from "./duels.types";
import { Step } from "./duels.types";
import styles from "./duel-invite.modal.styles";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { ROUTES } from "@navigation/constants";
import { GQL_QUERY_GET_DUELLER_DETAILS } from "@graphql/duels/getDuellerDetails";
import { GQL_QUERY_GET_DUEL_INVITATIONS } from "@graphql/duels/getDuelInvitations.gql";
import { useBackHandler } from "@hooks";

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

const showInviterNotEnoughYucoinAlert = (componentId: string) => {
  Alert.alert("Not enough YuCoin", "Do more challenges and come back later!", [
    { text: "Got it", onPress: () => Navigation.dismissModal(componentId) },
  ]);
};

interface IProps {
  componentId: string;
  opponentId: string;
  isDuelsHubInNavigationStack: boolean;
  requestLocation: "leaderboards" | "search_list" | "recents";
  leaderboardPlacement: number;
}

const DuelInviteModal: React.FC<IProps> = ({
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
  useBackHandler(() => {
    Navigation.dismissModal(componentId);
    return true;
  });

  const { StepComponent, NEXT } = STEPS[step];
  const [inviteToDuel]: InviteToDuelMutationTuple = useMutation(GQL_MUTATION_INVITE_TO_DUEL, {
    refetchQueries: [{ query: GQL_QUERY_GET_DUEL_INVITATIONS }, { query: GQL_QUERY_GET_DUELS }],
  });

  const { data, loading } = useQuery(GQL_QUERY_GET_DUELLER_DETAILS, {
    fetchPolicy: "cache-and-network",
    variables: {
      opponentId,
    },
  });

  const user = data?.getDuellerDetails?.user;
  const opponent = data?.getDuellerDetails?.opponent;

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
      await Navigation.dismissModal(componentId);

      if (isDuelsHubInNavigationStack) {
        await Navigation.popTo(ROUTES.duelsHub);
      } else {
        await Navigation.push(ROUTES.leaderboards, {
          component: {
            id: ROUTES.duelsHub,
            name: ROUTES.duelsHub,
          },
        });
      }

      dispatch(getUserStart());
    } catch (e) {
      setIsLoading(false);
      Navigation.dismissModal(componentId);
    }
  };

  const submitDuel = async () => {
    if (userCoins < yucoin) {
      showInviterNotEnoughYucoinAlert(componentId);
      return;
    }

    Alert.alert("Confirm invitation?", "If accepted, it will be listed in your upcoming duels and begin tomorrow", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Confirm",
        onPress: onSubmit,
      },
    ]);
  };

  const componentProps: DuelStepProps = {
    yucoin,
    user,
    opponent,
    loading,
    setYucoin,
    goToNextStep: () => setStep(NEXT),
    onDeclinePress: () => Navigation.dismissModal(componentId),
    isLoading,
    submitDuel,
    userCoins,
    componentId,
  };

  return (
    <View style={styles.safeAreaWrapper}>
      <DuelBackground />
      <StepComponent {...componentProps} />
    </View>
  );
};

export default DuelInviteModal;
