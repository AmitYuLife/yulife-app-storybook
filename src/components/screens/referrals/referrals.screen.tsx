import React, { memo, useCallback } from "react";
import { Share, View, ScrollView, Image, Platform } from "react-native";
import moment from "moment";
import { TextTemplate, Button, Icon } from "@atoms";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { GetReferralInformation_referralInformation } from "@graphql/_core/schema";
import { REFERRALS_SCREEN, REFERRALS_SCROLL_VIEW } from "@ids";
import { Colours, Style } from "@styles";
import { truncate } from "@services/utils";
import { UserAvatarCoinCard } from "@components/molecules";
import { TheOwlFenceIcon } from "@atoms/icon/the-owl-fence-icon";
import { TapToCopy } from "@organisms";
import Markdown from "@components/molecules/markdown/markdown";
import { styles, markdownStyles } from "./referrals.styles";
import Logger from "@services/logging/logger";

interface IProps {
  info: GetReferralInformation_referralInformation;
  handleClose: () => void;
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

const ReferralsScreen = ({ info, handleClose }: IProps) => {
  const {
    referralLink,
    shareCTA,
    shareMessage,
    disclaimer,
    referralHistory,
    markdown: { header, historyTitle, historyEmptyMessage },
  } = info;

  const onShare = useCallback(async () => {
    try {
      await Share.share({
        url: referralLink,
        message: Platform.select({ ios: shareMessage, android: `${shareMessage.replace(/\.$/, "")}: ${referralLink}` }),
      });
    } catch (e) {
      Logger.error(e, { file: "referrals.screen" });
    }
  }, [info]);

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
          <Markdown text={header} markdownStyles={markdownStyles} />
        </View>
        <View style={styles.body}>
          <View style={styles.tapToCopy}>
            <TapToCopy
              markdown={false}
              canCopy={true}
              customCopyText={referralLink}
              text={truncate(referralLink.replace("https://", ""), getTruncateSize())}
            />
          </View>
          <TextTemplate type="l2b" textAlign="center">
            OR
          </TextTemplate>
          <Button
            wrapperStyle={styles.shareButton}
            onPress={onShare}
            size="Medium"
            label={shareCTA}
            leftIcon={
              <Icon.ShareIcon width={Style.adjust(14)} height={Style.adjust(15)} color={Colours.neutral.white} />
            }
          />
          <View style={styles.disclaimer}>
            <TextTemplate type="l3" textAlign="center">
              {disclaimer}
            </TextTemplate>
          </View>
          <Markdown text={historyTitle} />
          {referralHistory.length > 0 ? null : <Markdown text={historyEmptyMessage} />}
          <View style={styles.referralsWrapper}>
            {referralHistory.map((user) => (
              <UserAvatarCoinCard
                key={user.id}
                name={user.name}
                avatarUrl={user.avatarUrl}
                subTitle={moment(user.date).format("DD/MM/YYYY")}
                coin={user.coin}
              />
            ))}
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

export default memo(ReferralsScreen);
