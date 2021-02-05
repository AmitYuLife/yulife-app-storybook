import React, { useState, useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { useDispatch, useSelector } from "react-redux";
import { View, Alert, StyleSheet } from "react-native";
import { getUserStart } from "../../../redux/user/user.actions";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GQL_MUTATION_RESPOND_TO_DUEL, GQL_QUERY_GET_DUELS, RespondToDuelMutationTuple } from "@graphql/duels";
import { GetDuels_getDuels } from "@graphql/_core/schema/GetDuels";
import { GetDuellerDetails_getDuellerDetails } from "@graphql/_core/schema/GetDuellerDetails";
import moment from "moment";
import { DATE_FORMAT_WITHOUT_TZ } from "@services/utils";
import { DuelBackground } from "./subcomponents";
import { DuelStepProps } from "./duels.types";
import DuelResponseIntro from "./subcomponents/duel-response-intro/duel-response-intro";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { Loading } from "@atoms";
import styles from "./duel-respond.styles";
import { GQL_QUERY_GET_DUELLER_DETAILS } from "@graphql/duels/getDuellerDetails";
import { GQL_QUERY_GET_DUEL_TOMORROW } from "@graphql/duels/getDuelsTomorrow.gql";
import { GQL_QUERY_GET_DUEL_INVITATIONS } from "@graphql/duels/getDuelInvitations.gql";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";

interface IProps {
  duelId: string;
  componentId: string;
  invitation?: GetDuels_getDuels;
  requestLocation: "leaderboards" | "search_list" | "recents";
  leaderboardPlacement: number;
}

const DuelRespondModal: React.FC<IProps> = ({
  componentId,
  duelId,
  invitation,
  requestLocation,
  leaderboardPlacement,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingLabel, setLoadingLabel] = React.useState<"primary" | "secondary">(null);
  useBackHandler(() => {
    Navigation.dismissModal(componentId);
    return true;
  });

  const userCoins = useSelector(getTotalCoins);
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

  const yucoin = invitation?.yucoin;

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
          variables: { duelId, hasAccepted, startDateTime, requestLocation, leaderboardPlacement },
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
    [componentId, dispatch, duelId, respondToInvite, startDateTime, requestLocation, leaderboardPlacement]
  );

  const submitDuel = async () => {
    const description =
      yucoin === 0
        ? "This duel is just for bragging rights, so you won't win or lose any YuCoin. Are you happy to proceed?"
        : `Remember, if you accept this duel, you could lose ${yucoin} YuCoin. Are you happy to proceed?`;

    Alert.alert(`Are you sure?`, description, [
      {
        style: "cancel",
        text: "Cancel",
      },
      {
        onPress: handlePress(true),
        text: "Confirm",
      },
    ]);
  };

  const loading = getDuelsQuery?.loading || getDuellerDetailsQuery?.loading;

  const componentProps: DuelStepProps = {
    yucoin,
    user,
    opponent,
    loading,
    goToNextStep: submitDuel,
    onDeclinePress: handlePress(false),
    isLoading,
    submitDuel,
    userCoins,
    loadingLabel,
    componentId,
  };

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <DuelBackground />
      <View style={styles.wrapper}>
        {loading ? (
          <View style={styles.loadingOverlay}>
            <Loading />
          </View>
        ) : (
          <DuelResponseIntro {...componentProps} />
        )}
      </View>
      <TopBarAbsolute leftIcon="Close" onPressLeftIcon={() => Navigation.dismissModal(componentId)} rightIcon="Coins" />
    </View>
  );
};

export default DuelRespondModal;
