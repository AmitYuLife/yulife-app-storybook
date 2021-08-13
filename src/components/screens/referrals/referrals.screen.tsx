import React, { memo, useCallback } from "react";
import { Share, View, ScrollView, Platform } from "react-native";
import moment from "moment";
import Logger from "@services/logging/logger";
import { GetReferralInformation_referralInformation } from "@graphql/_core/schema";
import { REFERRALS_SCREEN, REFERRALS_SCROLL_VIEW } from "@ids";
import { TextTemplate, Button, Icon, Image } from "@atoms";
import { TheOwlFenceIcon } from "@atoms/icon/the-owl-fence-icon";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { UserAvatarCoinCard } from "@molecules";
import Markdown from "@molecules/markdown/markdown";
import { TapToCopy } from "@organisms";
import { Colours, Style } from "@styles";
import { styles, markdownStyles } from "./referrals.styles";

interface IProps {
  info: GetReferralInformation_referralInformation;
  handleClose: () => void;
}

const ReferralsScreen = ({ info, handleClose }: IProps) => {
  const {
    referralLink,
    background: { uri },
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
        <View style={styles.headerWrapper}>
          <Image width={Style.DEVICE_WIDTH} source={{ uri }} />
          <View style={styles.header}>
            <Markdown text={header} markdownStyles={markdownStyles} />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.tapToCopy}>
            <TapToCopy
              markdown={false}
              canCopy={true}
              customCopyText={referralLink}
              text={referralLink.replace("https://", "")}
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
