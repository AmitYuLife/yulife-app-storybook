import React, { memo, useMemo } from "react";
import { View } from "react-native";
import { GetReferralInformationQuery } from "@graphql/__generated";
import { REFERRALS_IMAGE_URI, REFERRALS_INVITE_BUTTON, REFERRALS_QR_CODE } from "@ids";
import { Image, TextTemplate } from "@atoms";
import { SecondaryButton } from "@molecules";
import Markdown from "@molecules/markdown/markdown";
import { TapToCopy } from "@organisms";
import { Colours, Style } from "@styles";
import { styles, markdownStyles } from "./referrals.styles";
import { MixpanelEvent } from "@services/logging/types";
import { t } from "@locale";
import QRCode from "react-qr-code";
import { InviteIcon } from "@atoms/icon/invite-icon";

type Item = GetReferralInformationQuery["referralInformation"]["referralHistory"][0];

interface IHeaderProps {
  onShare: () => void;
  info: GetReferralInformationQuery["referralInformation"];
  componentId: string;
  data: (string | Item)[];
}

const QR_CODE_SIZE = Style.adjust(84);

const ReferralsHeader = ({ onShare, data, info, componentId }: IHeaderProps) => {
  const tapToCopyAnalytics = useMemo(
    () => ({
      name: "referral_link_copied" as MixpanelEvent,
      location: componentId,
    }),
    [componentId]
  );

  if (!info) {
    return null;
  }

  const {
    referralLink,
    background: { uri },
    shareCTA,
    disclaimer,
    markdown: { header, historyTitle, historyEmptyMessage },
  } = info;

  return (
    <View>
      <View style={styles.headerWrapper}>
        <Image
          width={Style.DEVICE_WIDTH}
          loadingHeight={LOADING_IMAGE_HEIGHT}
          source={{ uri }}
          testID={REFERRALS_IMAGE_URI(uri)}
        />
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
        <View style={styles.qrCode} testID={REFERRALS_QR_CODE}>
          <QRCode size={QR_CODE_SIZE} value={referralLink} viewBox={`0 0 ${QR_CODE_SIZE} ${QR_CODE_SIZE} `} />
        </View>
        <TextTemplate type="l2b" textAlign="center">
          {t("screens.referrals.or")}
        </TextTemplate>
        <SecondaryButton
          wrapperStyle={styles.shareButton}
          onPress={onShare}
          size="Large"
          translatedLabel={shareCTA}
          leftIcon={<InviteIcon size={16} />}
          testID={REFERRALS_INVITE_BUTTON}
        />
        <View style={styles.disclaimer}>
          <TextTemplate type="l3" textAlign="center" color={Colours.inkSubtle}>
            {disclaimer}
          </TextTemplate>
        </View>
        <Markdown text={historyTitle} />
        {data?.length ? null : <Markdown text={historyEmptyMessage} />}
      </View>
    </View>
  );
};

const LOADING_IMAGE_HEIGHT = (Style.DEVICE_WIDTH / 375) * 295;

export default memo(ReferralsHeader);
