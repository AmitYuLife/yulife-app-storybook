import { useCallback, memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";
import { TextTemplate } from "@atoms";

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

const DuelInvitations = () => {
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
      <TextTemplate type="b2b" color={Colours.neutral.n500}>
        {t("modals.duels.hub.invitations_title")}
      </TextTemplate>
      <View style={styles.wrapper}>
        {duels.map((duel, index) => {
          const opponent = duel.opponents?.find((user) => user.userId !== userId);
          const hasDeclined = duel.inviteStatus === "declined";

          return (
            <View style={styles.invitationRow} key={index}>
              <View style={styles.nameWrapper}>
                <TextTemplate
                  type={"l1"}
                  color={hasDeclined ? Colours.neutral.n800 : Colours.neutral.n400}
                  testID={DUELS_HUB_INVITATION(opponent?.name?.fullName, duel.yucoin, duel.inviteStatus)}
                >
                  {formatOpponentName(opponent?.name?.fullName)}
                </TextTemplate>
              </View>
              <View style={styles.yucoinCtaWrapper}>
                <TextTemplate type={"l1b"} color={hasDeclined ? Colours.neutral.n800 : Colours.neutral.n400}>
                  {t("yu_coin.amount", { amount: duel.yucoin })}
                </TextTemplate>
                <DuelInvitationStatus duel={duel} />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

type DuelInvitationStatusProps = {
  duel: GetDuelInvitationsQuery["getDuelInvitations"][0];
};

const DuelInvitationStatus = ({ duel }: DuelInvitationStatusProps) => {
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
      <TextTemplate type="l1b" color={Colours.neutral.n500}>
        {t("modals.duels.hub.invitations_invited")}
      </TextTemplate>
    );
  }

  if (duel.inviteStatus === "declined") {
    return (
      <TextTemplate type="l1b" color={Colours.neutral.n400}>
        {t("modals.duels.hub.invitations_declined")}
      </TextTemplate>
    );
  }

  return (
    <TouchableOpacityWithDelay delay={200} onPress={showRespondModal}>
      <TextTemplate type="l1b" decoration="underline" color={Colours.primary.p600}>
        {t("modals.duels.hub.invitations_respond")}
      </TextTemplate>
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
});

export default memo(DuelInvitations);
