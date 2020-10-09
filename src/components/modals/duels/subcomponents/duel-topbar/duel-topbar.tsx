import React, { FC } from "react";
import { View } from "react-native";
import styles from "./duel-topbar.styles";
import { default as YuCoinAmount } from "@organisms/top-bar/subcomponents/right";
import { Close } from "@atoms";
import Center from "@organisms/top-bar/subcomponents/center";

interface IProps {
  coins: number;
  icon?: string;
  onClose: () => void;
}

const DuelInviteTopbar: FC<IProps> = ({ coins, icon, onClose }) => {
  return (
    <View style={styles.wrapper}>
      <Close style={styles.close} onPress={onClose} />
      <Center timer="" name="" colour="#FFF" logoColour="#E20177" textStyle={undefined} />
      <Icon icon={icon} coins={coins} />
    </View>
  );
};

const Icon: FC<Partial<IProps>> = ({ icon, coins }) => {
  if (icon === "coins") {
    return <YuCoinAmount shouldHighlightCoins={false} coins={coins} colour="#333333" />;
  }

  return null;
};

export default DuelInviteTopbar;
