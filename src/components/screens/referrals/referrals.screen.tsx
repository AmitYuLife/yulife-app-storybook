import React, { memo } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import moment from "moment";
import { SkeletonLoading, TextTemplate } from "@atoms";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { GetReferralInformation_referralInformation } from "@graphql/_core/schema";
import { REFERRALS_SCREEN, REFERRALS_SCROLL_VIEW } from "@ids";
import { Colours, Style } from "@styles";
import { truncate } from "@services/utils";
import { UserAvatarCoinCard, UserAvatarCoinCardSkeleton } from "@components/molecules";
import { TheOwlFenceIcon } from "@atoms/icon/the-owl-fence-icon";
import { TapToCopy } from "@organisms";

interface IProps {
  info: GetReferralInformation_referralInformation;
  handleClose: () => void;
  loading: boolean;
}

const getTruncateSize = () => {
  if (Style.DEVICE_WIDTH < 321) {
    return 27;
  }

  if (Style.DEVICE_WIDTH < 361) {
    return 24;
  }

  return 29;
};

const ReferralsScreen = ({ info, handleClose, loading }: IProps) => {
  return (
    <View testID={REFERRALS_SCREEN} style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} testID={REFERRALS_SCROLL_VIEW}>
        <Image
          source={require("./assets/referral-header-background.png")}
          resizeMode="stretch"
          style={styles.headerBackgroundImage}
        />
        <View style={styles.header}>
          <View style={styles.h2}>
            <TextTemplate type="h2" textAlign="center" color={Colours.mountain.primary.m106}>
              Invite a Colleague
            </TextTemplate>
          </View>
          <TextTemplate type="b1" textAlign="center" color={Colours.mountain.primary.m106}>
            You’ll earn a bonus{" "}
            <Image source={require("@assets/icons/yucoin.png")} resizeMode="contain" style={styles.yucoin} />{" "}
            {loading ? <SkeletonLoading style={styles.rewardForReferralLoading} /> : info?.rewardForReferral || 0}{" "}
            YuCoin for every colleague who signs up using your link.
          </TextTemplate>
        </View>
        <View style={styles.body}>
          <View style={styles.tapToCopy}>
            <TapToCopy
              markdown={false}
              canCopy={true}
              customCopyText={info?.referralLink}
              text={truncate(info?.referralLink.replace("https://", ""), getTruncateSize())}
            />
            <View style={styles.disclaimer}>
              <TextTemplate type="l3" textAlign="center">
                People using this link will be able to see your name and avatar
              </TextTemplate>
            </View>
          </View>
          <TextTemplate type="h3">Your referrals</TextTemplate>
          <View style={styles.referralsWrapper}>
            {loading ? (
              <UserAvatarCoinCardSkeleton limit={4} />
            ) : (
              info?.referralHistory.map((user) => (
                <UserAvatarCoinCard
                  key={user.id}
                  name={user.name}
                  avatarUrl={user.avatarUrl}
                  subTitle={moment(user.date).format("DD/MM/YYYY")}
                  coin={user.coin}
                />
              ))
            )}

            {info?.referralHistory.length > 0 ? null : (
              <TextTemplate type="b2">
                Nobody’s used your link just yet - time for a nudge? Once they sign up with your link, their names will
                appear below.
              </TextTemplate>
            )}
          </View>
          <View style={styles.owlFenceIcon}>
            <TheOwlFenceIcon />
          </View>
        </View>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerBackgroundImage: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: Style.adjust(10),
  },
  header: {
    marginHorizontal: Style.adjust(18),
    marginTop: Style.adjust(5),
    height: Style.adjust(Style.DEVICE_WIDTH < 321 ? 315 : 247),
  },
  h2: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(8),
  },
  rewardForReferralLoading: {
    width: Style.adjust(50),
    height: Style.adjust(15),
  },
  yucoin: {
    width: Style.adjust(20),
    height: Style.adjust(20),
  },
  tapToCopy: {
    marginBottom: Style.adjust(44),
  },
  disclaimer: {
    marginTop: Style.adjust(8),
  },
  body: {
    marginHorizontal: Style.adjust(24),
  },
  referralsWrapper: {
    marginTop: Style.adjust(16),
    marginLeft: Style.adjust(5),
  },
  owlFenceIcon: {
    marginVertical: Style.adjust(40),
    alignItems: "flex-end",
  },
});

export default memo(ReferralsScreen);
