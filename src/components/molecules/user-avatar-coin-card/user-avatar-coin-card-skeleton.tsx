import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { SkeletonLoading } from "@atoms";
import { styles } from "./styles";
import { Style } from "@styles";

interface IProps {
  limit: number;
}

const COMMON_HEIGHT = 10;

const UserAvatarCoinCardSkeleton = ({ limit }: IProps) => (
  <>
    {Array.from({ length: limit }).map((_, i) => (
      <View key={i} style={styles.wrapper}>
        <View style={styles.userWrapper}>
          <SkeletonLoading style={skeletonStyle.avatar} />
          <View style={styles.userInfo}>
            <SkeletonLoading style={skeletonStyle.title} />
            <SkeletonLoading style={skeletonStyle.subTitle} />
          </View>
        </View>
        <View style={styles.referralCoin}>
          <SkeletonLoading style={skeletonStyle.coinValue} />
          <SkeletonLoading style={skeletonStyle.coinIcon} />
        </View>
      </View>
    ))}
  </>
);

const skeletonStyle = StyleSheet.create({
  avatar: {
    width: Style.adjust(44),
    height: Style.adjust(44),
    borderRadius: 100,
  },
  title: {
    width: Style.adjust(100),
    height: Style.adjust(COMMON_HEIGHT),
    marginBottom: Style.adjust(10),
  },
  subTitle: {
    width: Style.adjust(80),
    height: Style.adjust(COMMON_HEIGHT),
  },
  coinValue: {
    width: Style.adjust(30),
    height: Style.adjust(COMMON_HEIGHT),
    marginEnd: Style.adjust(5),
  },
  coinIcon: {
    width: Style.adjust(20),
    height: Style.adjust(20),
  },
});

export default memo(UserAvatarCoinCardSkeleton);
