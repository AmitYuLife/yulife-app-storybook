import React, { memo, useCallback, useEffect, useMemo } from "react";
import { Share, View, ScrollView, Platform } from "react-native";
import { useDispatch } from "react-redux";
import { setOnboardingReferralsBadge } from "@redux/onboarding/onboarding.actions";
import moment from "moment";
import Logger from "@services/logging/logger";
import { GetReferralInformation_referralInformation } from "@graphql/_core/schema";
import { REFERRALS_SCREEN, REFERRALS_SCROLL_VIEW } from "@ids";
import { TextTemplate, Button, Image } from "@atoms";
import { ShareIcon } from "@atoms/icon/share-icon";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { UserAvatarCoinCard } from "@molecules";
import Markdown from "@molecules/markdown/markdown";
import { TapToCopy } from "@organisms";
import { Colours, Style } from "@styles";
import { styles, markdownStyles } from "./referrals.styles";

interface IProps {
  info: GetReferralInformation_referralInformation;
  handleClose: () => void;
  componentId: string;
}

const ReferralsScreen = ({ info, handleClose, componentId }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOnboardingReferralsBadge(false));
  }, []);

  const {
    referralLink,
    background: { uri },
    shareCTA,
    shareMessage,
    disclaimer,
    referralHistory,
    markdown: { header, historyTitle, historyEmptyMessage },
  } = info;

  const tapToCopyAnalytics = useMemo(
    () => ({
      name: "referral_link_copied",
      location: componentId,
    }),
    [componentId]
  );

  const onShare = useCallback(async () => {
    Logger.logMixpanelEvent("referral_link_shared");
    try {
      await Share.share({
        url: referralLink,
        message: Platform.select({ ios: shareMessage, android: `${shareMessage.replace(/\.$/, "")}: ${referralLink}` }),
      });
    } catch (e) {
      Logger.error(e, { file: componentId });
    }
  }, [info, referralLink, shareMessage]);

  return (
    <View testID={REFERRALS_SCREEN} style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} testID={REFERRALS_SCROLL_VIEW}>
        <View style={styles.headerWrapper}>
          <Image width={Style.DEVICE_WIDTH} loadingHeight={LOADING_IMAGE_HEIGHT} source={{ uri }} />
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
              analyticsEvent={tapToCopyAnalytics}
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
            leftIcon={<ShareIcon width={Style.adjust(14)} height={Style.adjust(15)} color={Colours.neutral.white} />}
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
        </View>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} />
    </View>
  );
};

export default memo(ReferralsScreen);

const LOADING_IMAGE_HEIGHT = (Style.DEVICE_WIDTH / 375) * 295;
