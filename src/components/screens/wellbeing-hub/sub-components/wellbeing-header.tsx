import { memo } from "react";
import { SkeletonLoading, TextTemplate } from "@atoms";
import {
  TEXT_TEMPLATE,
  WELLBEING_HUB_BUSINESS_ACCOUNT_DROP_DOWN,
  WELLBEING_HUB_BUSINESS_ACCOUNT_NAME,
  WELLBEING_HUB_DESCRIPTION,
} from "@ids";
import { Colours, Style } from "@styles";
import Box from "@atoms/box/box";
import { BusinessAccountState, BusinessPicker } from "@components/molecules/business-picker";

interface IProps {
  title: string;
  description: string;
  testID?: string;
  businessAccountState: BusinessAccountState;
  color?: string;
  loading?: boolean;
}

const WellbeingHeader = ({
  title,
  description,
  testID,
  businessAccountState,
  color = Colours.neutral.n800,
  loading,
}: IProps) => {
  const { activeBusinessAccounts, selectedBusinessAccount } = businessAccountState;

  if (loading) {
    return (
      <Box flexDirection="row" alignItems="center">
        <Box flex={0.6}>
          <SkeletonLoading w={Style.adjust(180)} h={Style.adjust(28)} />
          <Box mt={Style.adjust(8)}>
            <SkeletonLoading w={Style.adjust(140)} h={Style.adjust(20)} />
          </Box>
          <Box mt={Style.adjust(16)}>
            <SkeletonLoading w={Style.adjust(220)} h={Style.adjust(18)} />
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <Box flex={0.6}>
        <TextTemplate type="h3" testID={testID || TEXT_TEMPLATE(title)} color={color}>
          {title}
        </TextTemplate>
        {activeBusinessAccounts.length === 0 ? null : (
          <BusinessPicker
            businessAccountState={businessAccountState}
            testIds={{
              box: WELLBEING_HUB_BUSINESS_ACCOUNT_DROP_DOWN,
              textTemplate: WELLBEING_HUB_BUSINESS_ACCOUNT_NAME(selectedBusinessAccount?.businessAccountName || ""),
            }}
            color={color}
          />
        )}
        <Box mt={Style.adjust(16)}>
          <TextTemplate type="b2" testID={WELLBEING_HUB_DESCRIPTION(description)} color={color}>
            {description}
          </TextTemplate>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(WellbeingHeader);
