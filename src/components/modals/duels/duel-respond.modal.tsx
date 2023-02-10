import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Alert, StyleSheet } from "react-native";
import { getUserStart } from "@redux/user/user.actions";
import { useMutation, useQuery } from "@apollo/client";
import { GQL_MUTATION_RESPOND_TO_DUEL, GQL_QUERY_GET_DUELS, RespondToDuelMutationTuple } from "@graphql/duels";
import { GetDuels_getDuels } from "@graphql/_core/schema/GetDuels";
import { GetDuellerDetails_getDuellerDetails } from "@graphql/_core/schema/GetDuellerDetails";
import moment from "moment";
import { DATE_FORMAT_WITHOUT_TZ } from "@utils";
import { DuelBackground } from "./subcomponents";
import { DuelStepProps } from "./duels.types";
import DuelResponseIntro from "./subcomponents/duel-response-intro/duel-response-intro";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { Loading } from "@atoms";
import styles from "./duel-respond.styles";
import { GQL_QUERY_GET_DUELLER_DETAILS } from "@graphql/duels/getDuellerDetails";
import { useBackHandler } from "@hooks";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { filterRefetchQueries } from "@graphql/_core/filterRefetchQueries";
import { Navigation } from "@navigation/main";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { t } from "@locale";

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
    refetchQueries: filterRefetchQueries(["GetDuelInvitations"]),
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

  const dismissModal = useCallback(() => Navigation.dismissModal(componentId), [componentId]);

  const submitDuel = async () => {
    const description =
      yucoin === 0
        ? t("modals.duels.duel_respond.subheading_no_yucoin")
        : t("modals.duels.duel_respond.subheading", { yucoin });

    Alert.alert(t("modals.duels.duel_respond.heading"), description, [
      {
        style: "cancel",
        text: t("labels.cta.cancel"),
      },
      {
        onPress: handlePress(true),
        text: t("labels.cta.confirm"),
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
      <TopBarAbsolute leftIcon={LeftIcon.CLOSE} onPressLeftIcon={dismissModal} rightIcon="Coins" />
    </View>
  );
};

export default DuelRespondModal;
