import React from "react";
import styles from "./duel-invitation.styles";
import { Text } from "@atoms";
import { View } from "react-native";
import { DUELLER_DUEL_STATUS } from "@components/containers/member/duels-hub/duels-hub.types";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { TouchableOpacityWithDelay } from "@components/molecules";

interface IProps {
  opponent: string;
  duelId: string;
  yucoin: number;
  responseRequired: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  status: string;
}

const DuelInvitation = ({ opponent, duelId, yucoin, responseRequired, status, isFirst, isLast }: IProps) => {
  const firstItemStyle = isFirst ? styles.firstInvitationItem : {};
  const lastItemStyle = isLast ? styles.lastInvitationItem : {};

  const openDuelsResponseModal = async () => {
    await Navigation.showModal({
      component: {
        id: MODALS.duelRespond,
        name: MODALS.duelRespond,
        passProps: {
          duelId,
        },
      },
    });
  };

  return (
    <View style={[styles.wrapper, firstItemStyle, lastItemStyle]}>
      <Text style={styles.flex4}>
        <Text style={styles.text} bold={true}>
          vs.{" "}
        </Text>
        <Text style={styles.text}>{opponent}</Text>
      </Text>
      <Text style={styles.flex3}>
        <Text style={styles.text} bold={true}>
          {yucoin} YuCoin
        </Text>
      </Text>
      <TouchableOpacityWithDelay style={styles.touchable} onPress={openDuelsResponseModal}>
        <Text style={styles.flex3}>
          {status === DUELLER_DUEL_STATUS.DECLINED ? (
            <Text style={styles.text}>Declined</Text>
          ) : responseRequired ? (
            <Text style={styles.accept} bold={true}>
              Accept?
            </Text>
          ) : (
            <Text style={styles.text}>Pending</Text>
          )}
        </Text>
      </TouchableOpacityWithDelay>
    </View>
  );
};

export default DuelInvitation;
