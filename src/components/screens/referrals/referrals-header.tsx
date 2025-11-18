import { memo, useMemo } from "react";
import { View } from "react-native";
import { GetReferralInformationQuery } from "@graphql/__generated";
import { REFERRALS_BUSINESS_ACCOUNT_DROP_DOWN, REFERRALS_BUSINESS_ACCOUNT_NAME } from "@ids";
import Markdown from "@molecules/markdown/markdown";
import { CodeAndLinkCopy } from "@organisms";
import { styles, markdownStyles } from "./referrals.styles";
import { MixpanelEvent } from "@services/logging/types";
import { Item } from "./referrals.screen";
import { BusinessAccountState, BusinessPicker } from "@components/molecules/business-picker";
import { Box } from "@atoms";

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
    codeDisclaimer,
    shareButton,
    markdown: { headerTitle, historyTitle, codeHistoryEmptyMessage, shareBoxTitle },
  } = info;

  return (
    <View>
      <View>
        <View style={styles.header}>
          <Markdown text={headerTitle} markdownStyles={markdownStyles} />
          <Box alignItems="center">
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
          </Box>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.codeAndLinkCopy}>
          <CodeAndLinkCopy
            code={referralCode}
            onShare={onShare}
            title={shareBoxTitle}
            disclaimer={codeDisclaimer}
            buttonText={shareButton}
            analyticsEvent={tapToCopyAnalytics}
          />
        </View>
      </View>

      <View style={styles.listContentBackground}>
        <Box mh={24}>
          <Markdown text={historyTitle} />
          {data?.length ? null : <Markdown text={codeHistoryEmptyMessage} />}
        </Box>
      </View>
    </View>
  );
};

export default memo(ReferralsHeader);
