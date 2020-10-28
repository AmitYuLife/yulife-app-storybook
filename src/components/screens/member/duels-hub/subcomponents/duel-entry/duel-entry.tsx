import React from "react";
import styles from "./duel-entry.styles";
import { Text } from "@atoms";
import { View } from "react-native";
import { DUELLER_DUEL_STATUS } from "@components/containers/member/duels-hub/duels-hub.types";
import { DuelImage } from "../";

interface IProps {
  opponent: string;
  yucoin: number;
  date?: string;
  isActive?: boolean;
  status?: string;
  isFirst?: boolean;
  isLast?: boolean;
  uri?: string;
}

const DuelEntry = ({ opponent, yucoin, date, isActive, status, isFirst, isLast, uri }: IProps) => {
  const wrapperStyle = isActive ? styles.activeWrapper : styles.wrapper;
  const firstItemStyle = isFirst ? styles.firstItem : {};
  const lastItemStyle = isLast ? styles.lastItem : {};

  return (
    <View style={[wrapperStyle, firstItemStyle, lastItemStyle]}>
      <View style={styles.yumojiSection}>
        <DuelImage uri={uri} />
        <View style={styles.centered}>
          {isActive ? (
            <Text>
              <Text style={styles.text} bold={true}>
                vs.{" "}
              </Text>
              <Text style={styles.text}>{opponent}</Text>
            </Text>
          ) : (
            <View style={styles.pastDuelTextWrapper}>
              <Text numberOfLines={1}>
                <Text style={styles.text} bold={true}>
                  vs.{" "}
                </Text>
                <Text style={styles.text}>{opponent}</Text>
              </Text>
              <Text style={styles.date}>{date}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.duelStatusWrapper}>
        <DuelStatus status={status} yucoin={yucoin} />
      </View>
    </View>
  );
};

const DuelStatus: React.FC<Partial<IProps>> = ({ status, yucoin }) => {
  if (status === DUELLER_DUEL_STATUS.DECLINED) {
    return <Text>Declined</Text>;
  }

  if (status === DUELLER_DUEL_STATUS.DRAW) {
    return <Text>Draw</Text>;
  }

  if ([DUELLER_DUEL_STATUS.WON, DUELLER_DUEL_STATUS.LOST].includes(status as DUELLER_DUEL_STATUS)) {
    const hasWon = status === DUELLER_DUEL_STATUS.WON;
    const style = hasWon ? styles.victory : styles.defeat;
    if (yucoin === 0) {
      return <Text style={style}>0 YuCoin</Text>;
    }

    const icon = hasWon ? "+" : "-";
    return (
      <Text style={style}>
        {icon} {Math.abs(yucoin)} YuCoin
      </Text>
    );
  }

  if (status === DUELLER_DUEL_STATUS.PENDING_SUBMISSION) {
    return <Text>Pending</Text>;
  }

  return <Text>{yucoin} YuCoin</Text>;
};

export default DuelEntry;
