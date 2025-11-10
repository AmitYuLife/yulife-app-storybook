import { memo, useMemo } from "react";
import { View } from "react-native";
import { GetReferralInformationQuery } from "@graphql/__generated";
import { REFERRALS_BUSINESS_ACCOUNT_DROP_DOWN, REFERRALS_BUSINESS_ACCOUNT_NAME, REFERRALS_IMAGE_URI } from "@ids";
import { Image } from "@atoms";
import Markdown from "@molecules/markdown/markdown";
import { CodeAndLinkCopy } from "@organisms";
import { Style } from "@styles";
import { styles, markdownStyles } from "./referrals.styles";
import { MixpanelEvent } from "@services/logging/types";
import { Item } from "./referrals.screen";
import { BusinessAccountState, BusinessPicker } from "@components/molecules/business-picker";

interface IHeaderProps {
  info: GetReferralInformationQuery["referralInformation"];
  componentId: string;
  data: Item[];
  businessAccountState: BusinessAccountState;
  onShare: () => Promise<void>;
}

const ReferralsHeader = ({ data, info, componentId, businessAccountState, onShare }: IHeaderProps) => {
  const tapToCopyAnalytics = useMemo(
    () => ({
      name: "referral_link_copied" as MixpanelEvent,
      location: componentId,
    }),
    [componentId]
  );

  const { activeBusinessAccounts } = businessAccountState;

  if (!info) {
    return null;
  }

  const {
    referralCode,
    background: { uri },
    codeDisclaimer,
    shareButton,
    markdown: { headerSubtitle, headerTitle, historyTitle, codeHistoryEmptyMessage, shareBoxTitle },
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
          <Markdown text={headerTitle} markdownStyles={markdownStyles} />
          {activeBusinessAccounts.length === 0 ? null : (
            <BusinessPicker
              businessAccountState={businessAccountState}
              testIds={{
                box: REFERRALS_BUSINESS_ACCOUNT_DROP_DOWN,
                textTemplate: REFERRALS_BUSINESS_ACCOUNT_NAME(
                  businessAccountState.selectedBusinessAccount.businessAccountName
                ),
              }}
            />
          )}
          <Markdown text={headerSubtitle} markdownStyles={markdownStyles} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.tapToCopy}>
          <CodeAndLinkCopy
            code={referralCode}
            onShare={onShare}
            title={shareBoxTitle}
            disclaimer={codeDisclaimer}
            buttonText={shareButton}
            analyticsEvent={tapToCopyAnalytics}
          />
        </View>
        <Markdown text={historyTitle} />
        {data?.length ? null : <Markdown text={codeHistoryEmptyMessage} />}
      </View>
    </View>
  );
};

const LOADING_IMAGE_HEIGHT = (Style.DEVICE_WIDTH / 375) * 295;

export default memo(ReferralsHeader);
