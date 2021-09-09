import React, { memo } from "react";
import { Image, View } from "react-native";
import { TextTemplate } from "@atoms";
import { styles } from "./styles";
import { DuelImage } from "@components/screens/member/duels-hub/subcomponents";
import { truncate } from "@utils";

interface IProps {
  name: string;
  subTitle?: string;
  avatarUrl: string;
  coin: string | number;
}

const UserAvatarCoinCard = ({ name, subTitle, avatarUrl, coin }: IProps) => (
  <View style={styles.wrapper}>
    <View style={styles.userWrapper}>
      <DuelImage uri={avatarUrl} size="medium" />
      <View style={styles.userInfo}>
        <TextTemplate type="b2b">{truncate(name, 25)}</TextTemplate>
        <TextTemplate type="b2">{subTitle}</TextTemplate>
      </View>
    </View>
    <View style={styles.referralCoin}>
      <TextTemplate type="b2b">{coin || 0}</TextTemplate>
      <Image source={require("@assets/icons/yucoin.png")} resizeMode="contain" style={styles.yucoin} />
    </View>
  </View>
);

export default memo(UserAvatarCoinCard);
