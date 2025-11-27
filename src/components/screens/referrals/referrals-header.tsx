import { memo, useMemo } from "react";
import { View } from "react-native";
import { GetReferralInformationQuery } from "@graphql/__generated";
import { REFERRALS_BUSINESS_ACCOUNT_DROP_DOWN, REFERRALS_BUSINESS_ACCOUNT_NAME, REFERRALS_IMAGE_URI } from "@ids";
import Markdown from "@molecules/markdown/markdown";
import { CodeAndLinkCopy } from "@organisms";
import { styles, markdownStyles } from "./referrals.styles";
import { MixpanelEvent } from "@services/logging/types";
import { Item } from "./referrals.screen";
import { BusinessAccountState, BusinessPicker } from "@components/molecules/business-picker";
import { Box, Image, SkeletonLoading } from "@atoms";
import { Style } from "@styles";

interface IHeaderProps {
  info: GetReferralInformationQuery["referralInformation"];
  componentId: string;
  data: Item[];
  businessAccountState: BusinessAccountState;
  onShare: () => Promise<void>;
  loading: boolean;
}

const ReferralsHeader = ({ data, info, componentId, businessAccountState, onShare, loading }: IHeaderProps) => {
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
      <Box overflow="hidden" height={500}>
        {info?.background?.uri ? (
          <Image
            style={styles.backgroundImageWrapper}
            width={Style.DEVICE_WIDTH}
            source={{ uri: info.background.uri }}
            testID={REFERRALS_IMAGE_URI(info.background.uri)}
            height={Style.DEVICE_HEIGHT}
            resizeMode="cover"
          />
        ) : null}

        <View style={styles.titleWrapper}>
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

        <View style={styles.codeCopyWrapper}>
          <CodeAndLinkCopy
            code={referralCode}
            onShare={onShare}
            title={shareBoxTitle}
            disclaimer={codeDisclaimer}
            buttonText={shareButton}
            analyticsEvent={tapToCopyAnalytics}
          />
        </View>
      </Box>

      <Box bg="white" borderTopRightRadius={16} borderTopLeftRadius={16} pt={24} ph={24} top={-20}>
        <Markdown text={historyTitle} />
        {loading ? <SkeletonLoading style={styles.emptyMessageSkeleton} /> : null}
        {!loading && !data?.length ? <Markdown text={codeHistoryEmptyMessage} /> : null}
      </Box>
    </View>
  );
};

export default memo(ReferralsHeader);
