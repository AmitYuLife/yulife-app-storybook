import { FC, useCallback } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import { Text } from "@atoms";

import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { MODALS, ROUTES } from "@navigation/constants";
import { DuelSkeleton } from "../../subcomponents/duel-skeleton/duel-skeleton";
import { DUELS_HUB_INVITATION } from "@ids";
import { useQueryOnScreenSeen } from "@hooks";
import { showYuModal } from "@navigation/root";
import { t } from "@locale";
import { formatOpponentName } from "@utils/duels";
import { GetDuelInvitationsQuery, gql } from "@graphql/__generated";

const DuelInvitations: FC = () => {
  const [, { data, loading }] = useQueryOnScreenSeen(gql("GetDuelInvitationsDocument"), ROUTES.duelsHub, {
    fetchPolicy: "no-cache",
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
    <View>
      <Text bold={true}>{t("modals.duels.hub.invitations_title")}</Text>
      <View style={styles.wrapper}>
        {duels.map((duel, index) => {
          const opponent = duel.opponents?.find((user) => user.userId !== userId);
          const hasDeclined = duel.inviteStatus === "declined";

          return (
            <View style={styles.invitationRow} key={index}>
              <View style={styles.nameWrapper}>
                <Text
                  style={[styles.text, styles.grayText, hasDeclined ? styles.declinedText : {}]}
                  testID={DUELS_HUB_INVITATION(
                    opponent.name.firstName,
                    opponent.name.lastName,
                    duel.yucoin,
                    duel.inviteStatus
                  )}
                >
                  {formatOpponentName(opponent?.name?.fullName)}
                </Text>
              </View>
              <View style={styles.yucoinCtaWrapper}>
                <Text bold={true} style={[styles.text, styles.grayText, hasDeclined ? styles.declinedText : {}]}>
                  {t("yu_coin.amount", { amount: duel.yucoin })}
                </Text>
                <DuelInvitationStatus duel={duel} />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const DuelInvitationStatus: FC<{ duel: GetDuelInvitationsQuery["getDuelInvitations"][0] }> = ({ duel }) => {
  const showRespondModal = useCallback(() => {
    showYuModal({
      component: {
        id: MODALS.duelRespond,
        name: MODALS.duelRespond,
        passProps: {
          invitation: duel,
          duelId: duel.id,
          requestLocation: "duels_hub",
        },
      },
    });
  }, [duel]);

  if (duel.inviteStatus === "invited") {
    return (
      <Text bold={true} style={[styles.text, styles.invitedText]}>
        {t("modals.duels.hub.invitations_invited")}
      </Text>
    );
  }

  if (duel.inviteStatus === "declined") {
    return (
      <Text bold={true} style={[styles.text, styles.declinedText]}>
        {t("modals.duels.hub.invitations_declined")}
      </Text>
    );
  }

  return (
    <TouchableOpacityWithDelay delay={200} onPress={showRespondModal}>
      <Text bold={true} style={[styles.text, styles.respondText]}>
        {t("modals.duels.hub.invitations_respond")}
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

export default DuelInvitations;
