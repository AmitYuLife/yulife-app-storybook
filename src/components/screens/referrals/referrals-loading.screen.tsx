import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { SkeletonLoading } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { UserAvatarCoinCardSkeleton } from "@molecules";
import { Style } from "@styles";

interface IProps {
  handleClose: () => void;
}

const ReferralsLoadingScreen = ({ handleClose }: IProps) => (
  <View style={styles.wrapper}>
    <GenericHeadingPad />
    <View style={styles.body}>
      <SkeletonLoading style={styles.skeletonShort} />
      <SkeletonLoading style={styles.skeletonLong} />
      <SkeletonLoading style={styles.skeletonShort} />
      <SkeletonLoading style={styles.skeletonLong} />
      <SkeletonLoading style={styles.skeletonShort} />
      <SkeletonLoading style={styles.skeletonLong} />
      <SkeletonLoading style={styles.skeletonHistoryTitle} />
      <View style={styles.referralsWrapper}>
        <UserAvatarCoinCardSkeleton limit={4} />
      </View>
    </View>
    <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  body: {
    marginHorizontal: Style.adjust(24),
  },
  referralsWrapper: {
    marginTop: Style.adjust(16),
    marginStart: Style.adjust(5),
  },
  skeletonShort: {
    width: "100%",
    height: Style.adjust(32),
    marginTop: Style.adjust(12),
  },
  skeletonLong: {
    width: "100%",
    height: Style.adjust(90),
    marginTop: Style.adjust(12),
  },
  skeletonHistoryTitle: {
    width: Style.adjust(146),
    height: Style.adjust(34),
    marginTop: Style.adjust(60),
  },
});

export default memo(ReferralsLoadingScreen);
