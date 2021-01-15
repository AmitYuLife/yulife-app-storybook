import React, { useState, useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { useDispatch, connect } from "react-redux";
import { View, Alert, StyleSheet } from "react-native";
import { getUserStart } from "../../../redux/user/user.actions";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GQL_MUTATION_RESPOND_TO_DUEL, GQL_QUERY_GET_DUELS, RespondToDuelMutationTuple } from "@graphql/duels";
import { GetDuels_getDuels } from "@graphql/_core/schema/GetDuels";
import { GetDuellerDetails_getDuellerDetails } from "@graphql/_core/schema/GetDuellerDetails";
import moment from "moment";
import { DATE_FORMAT_WITHOUT_TZ } from "@services/utils";
import { DuelBackground } from "./subcomponents";
import { DuelStepProps, Step } from "./duels.types";
import DuelResponseIntro from "./subcomponents/duel-response-intro/duel-response-intro";
import DuelResponseOptions from "./subcomponents/duel-response-options/duel-response-options";
import { IReduxState } from "@redux/_core/reducers";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { Loading } from "@atoms";
import styles from "./duel-respond.styles";
import { GQL_QUERY_GET_DUELLER_DETAILS } from "@graphql/duels/getDuellerDetails";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { GQL_QUERY_GET_DUEL_TOMORROW } from "@graphql/duels/getDuelsTomorrow.gql";
import { GQL_QUERY_GET_DUEL_INVITATIONS } from "@graphql/duels/getDuelInvitations.gql";

interface IModalProps {
  duelId: string;
  componentId: string;
  invitation?: GetDuels_getDuels;
}

type IMapStateToProps = ReturnType<typeof mapStateToProps>;

type IProps = IModalProps & IMapStateToProps;

const DuelRespondModal: React.FC<IProps> = ({ componentId, duelId, userCoins, invitation }) => {
  const [step, setStep] = useState<Step>("INTRO");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingLabel, setLoadingLabel] = React.useState<"primary" | "secondary">(null);

  const getDuelsQuery = useQuery(GQL_QUERY_GET_DUELS, {
    fetchPolicy: "cache-and-network",
  });

  if (!invitation) {
    const duels: GetDuels_getDuels[] = getDuelsQuery?.data?.getDuels;
    invitation = duels.find(({ id }) => id === duelId);
  }

  const opponentId = invitation?.opponents[0].userId;
  const inviteStartDateTime = invitation?.opponents[0].startDateTime;

  const getDuellerDetailsQuery = useQuery(GQL_QUERY_GET_DUELLER_DETAILS, {
    fetchPolicy: "cache-and-network",
    variables: {
      opponentId,
    },
  });

  const DuellerDetails: GetDuellerDetails_getDuellerDetails = getDuellerDetailsQuery?.data?.getDuellerDetails;
  const user = DuellerDetails?.user;
  const opponent = DuellerDetails?.opponent;
  const userAvatar = user?.avatar;
  const opponentAvatar = opponent?.avatar;

  const yucoin = invitation?.yucoin;
  const duration = invitation?.duration;

  const dispatch = useDispatch();

  const startDateTime = inviteStartDateTime || moment().add(1, "day").startOf("day").format(DATE_FORMAT_WITHOUT_TZ);

  const [respondToInvite]: RespondToDuelMutationTuple = useMutation(GQL_MUTATION_RESPOND_TO_DUEL, {
    refetchQueries: [{ query: GQL_QUERY_GET_DUEL_TOMORROW }, { query: GQL_QUERY_GET_DUEL_INVITATIONS }],
  });

  const handlePress = useCallback(
    (hasAccepted: boolean) => async () => {
      setIsLoading(true);
      setLoadingLabel(hasAccepted ? "primary" : "secondary");

      try {
        await respondToInvite({
          variables: { duelId, hasAccepted, startDateTime },
        });
        setLoadingLabel(null);
        setIsLoading(false);
        await Navigation.dismissModal(componentId);
        dispatch(getUserStart());
      } catch (e) {
        setLoadingLabel(null);
        setIsLoading(false);
      }
    },
    [componentId, dispatch, duelId, respondToInvite, startDateTime]
  );

  const submitDuel = async () => {
    Alert.alert(
      `Are you sure?`,
      `Remember, if you accept this duel, you could lose ${yucoin} YuCoin. Are you happy to proceed?`,
      [
        {
          style: "cancel",
          text: "Cancel",
        },
        {
          onPress: await handlePress(true),
          text: "Confirm",
        },
      ]
    );
  };

  const loading = getDuelsQuery?.loading || getDuellerDetailsQuery?.loading;

  const componentProps: DuelStepProps = {
    yucoin,
    duration,
    user,
    opponent,
    loading,
    setYucoin: () => ({}),
    setDuration: () => ({}),
    goToNextStep: () => setStep("OPTIONS"),
    onDeclinePress: handlePress(false),
    isLoading,
    submitDuel,
    userCoins,
    loadingLabel,
  };

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <DuelBackground />
      <View style={styles.wrapper}>
        {loading ? (
          <View style={styles.loadingOverlay}>
            <Loading />
          </View>
        ) : step === "INTRO" ? (
          <DuelResponseIntro {...componentProps} />
        ) : (
          <DuelResponseOptions
            startDateTime={startDateTime}
            opponentFirstName={opponent.firstName}
            duration={duration}
            yucoin={yucoin}
            userCoins={userCoins}
            submitDuel={submitDuel}
            onDeclinePress={handlePress(false)}
            isLoading={isLoading}
            loadingLabel={loadingLabel}
            userAvatar={userAvatar}
            opponentAvatar={opponentAvatar}
          />
        )}
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

export default connect(mapStateToProps)(DuelRespondModal);
