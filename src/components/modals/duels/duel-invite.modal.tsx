import { GQL_MUTATION_INVITE_TO_DUEL, InviteToDuelMutationTuple, GQL_QUERY_GET_DUELS_HUB_DATA } from "@graphql/duels";
import React, { useState } from "react";
import { Navigation } from "react-native-navigation";
import { useDispatch, connect } from "react-redux";
import { getUserStart } from "../../../redux/user/user.actions";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Alert, View } from "react-native";
import moment from "moment";
import { DuelBackground, DuelOptions, DuelInviteIntro } from "./subcomponents";
import { DuelStepProps } from "./duels.types";
import { Step, DEFAULT_DUEL_AMOUNT, DEFAULT_DUEL_DURATION } from "./duels.types";
import styles from "./duel-invite.modal.styles";
import { IReduxState } from "@redux/_core/reducers";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { ROUTES } from "@navigation/constants";
import { GQL_QUERY_GET_DUELLER_DETAILS } from "@graphql/duels/getDuellerDetails";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";

type IReduxProps = ReturnType<typeof mapStateToProps>;

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
}

type IDuelProps = IProps & IReduxProps;

const DuelInviteModal: React.FC<IDuelProps> = ({ componentId, opponentId, userCoins }) => {
  const dispatch = useDispatch();

  const [step, setStep] = useState<Step>("INTRO");
  const [yucoin, setYucoin] = useState(DEFAULT_DUEL_AMOUNT);
  const [duration, setDuration] = useState(DEFAULT_DUEL_DURATION);
  const [isLoading, setIsLoading] = useState(false);

  const { StepComponent, NEXT } = STEPS[step];
  const [inviteToDuel]: InviteToDuelMutationTuple = useMutation(GQL_MUTATION_INVITE_TO_DUEL, {
    refetchQueries: [{ query: GQL_QUERY_GET_DUELS_HUB_DATA }],
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
          duration: duration,
        },
      });
      await Navigation.dismissModal(componentId);
      await Navigation.push(ROUTES.leaderboards, {
        component: {
          id: ROUTES.duelsHub,
          name: ROUTES.duelsHub,
        },
      });
      dispatch(getUserStart());
    } catch (e) {
      const catchAction = () => {
        setIsLoading(false);
        Navigation.dismissModal(componentId);
      };

      const message = e?.message || "There was a problem trying to invite the user. Try again later!";
      const sanitizedMessage = message.replace("GraphQL error: ", "");
      Alert.alert("Duel invite error", sanitizedMessage, [
        {
          text: "Got it",
          onPress: () => catchAction(),
        },
      ]);
    }
  };

  const submitDuel = async () => {
    if (userCoins < yucoin) {
      showInviterNotEnoughYucoinAlert(componentId);
      return;
    }

    Alert.alert(
      "Confirm duel request",
      "If you send this duel invitation, it will be listed in your upcoming duels and will begin tomorrow",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: onSubmit,
        },
      ]
    );
  };

  const componentProps: DuelStepProps = {
    yucoin,
    duration,
    user,
    opponent,
    loading,
    setYucoin,
    setDuration,
    goToNextStep: () => setStep(NEXT),
    onDeclinePress: () => Navigation.dismissModal(componentId),
    isLoading,
    submitDuel,
    userCoins,
  };

  return (
    <View style={styles.safeAreaWrapper}>
      <DuelBackground />
      <View style={styles.wrapper}>
        <StepComponent {...componentProps} />
      </View>
      <TopBarAbsolute
        leftIcon="Close"
        onPressLeftIcon={() => Navigation.dismissModal(componentId)}
        rightIcon={step === "INTRO" ? null : "Coins"}
      />
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  userCoins: getTotalCoins(state),
});

export default connect(mapStateToProps)(DuelInviteModal);
