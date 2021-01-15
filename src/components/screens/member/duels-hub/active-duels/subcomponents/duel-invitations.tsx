import React, { FC, useCallback } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import { Text } from "@atoms";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_DUEL_INVITATIONS } from "@graphql/duels/getDuelInvitations.gql";
import { GetDuelInvitations } from "@graphql/_core/schema";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { DuelSkeleton } from "../../subcomponents/duel-skeleton/duel-skeleton";

const DuelInvitationsw: FC = () => {
  const { data, loading } = useQuery<GetDuelInvitations>(GQL_QUERY_GET_DUEL_INVITATIONS, {
    fetchPolicy: "cache-and-network",
  });
  const userId = useSelector(getCurrentUserId);
  const duels = data?.getDuelInvitations || [];
  const isEmpty = duels.length === 0;

  if (loading) {
    return (
      <View style={styles.skeletonWrapper}>
        <DuelSkeleton />
      </View>
    );
  }

  if (isEmpty) {
    return null;
  }

  return (
    <>
      <Text bold={true}>Invitations</Text>
      <View style={styles.wrapper}>
        {duels.map((duel, index) => {
          const opponent = duel.opponents?.find((user) => user.userId !== userId);
          const hasDeclined = duel.inviteStatus === "declined";
          return (
            <View style={styles.invitationRow} key={index}>
              <View style={styles.nameWrapper}>
                <Text style={[styles.text, styles.grayText, hasDeclined ? styles.declinedText : {}]}>
                  {opponent.name.firstName} {opponent.name.lastName}
                </Text>
              </View>
              <View style={styles.yucoinCtaWrapper}>
                <Text bold={true} style={[styles.text, styles.grayText, hasDeclined ? styles.declinedText : {}]}>
                  {duel.yucoin} YuCoin
                </Text>
                <DuelInvitationStatus duel={duel} />
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
};

const DuelInvitationStatus: FC<{ duel: GetDuelInvitations["getDuelInvitations"][0] }> = ({ duel }) => {
  const showRespondModal = useCallback(() => {
    Navigation.showModal({
      component: {
        id: MODALS.duelRespond,
        name: MODALS.duelRespond,
        passProps: {
          invitation: duel,
          duelId: duel.id,
        },
      },
    });
  }, [duel]);

  if (duel.inviteStatus === "invited") {
    return (
      <Text bold={true} style={[styles.text, styles.invitedText]}>
        Invited
      </Text>
    );
  }

  if (duel.inviteStatus === "declined") {
    return (
      <Text bold={true} style={[styles.text, styles.declinedText]}>
        Declined
      </Text>
    );
  }

  return (
    <TouchableOpacityWithDelay delay={200} onPress={showRespondModal}>
      <Text bold={true} style={[styles.text, styles.respondText]}>
        Respond
      </Text>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginVertical: Style.adjust(16),
    backgroundColor: Colours.neutral.n50,
    borderColor: Colours.neutral.n100,
    borderRadius: 8,
    borderWidth: 1,
  } as ViewStyle,
  skeletonWrapper: {
    flex: 1,
    height: Style.adjust(200),
    marginHorizontal: -Style.adjust(24),
    overflow: "hidden",
  } as ViewStyle,
  nameWrapper: {
    flex: 1,
  } as ViewStyle,
  invitationRow: {
    flexDirection: "row",
    padding: Style.adjust(8),
  } as ViewStyle,
  yucoinCtaWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(18),
  } as TextStyle,
  grayText: {
    color: Colours.neutral.n800,
  } as TextStyle,
  invitedText: {
    color: Colours.neutral.n500,
  } as TextStyle,
  declinedText: {
    color: Colours.neutral.n400,
  } as TextStyle,
  respondText: {
    textDecorationLine: "underline",
    color: Colours.primary.p600,
  } as TextStyle,
});

export default DuelInvitationsw;
