import React, { memo, useMemo } from "react";
import { Image, TextTemplate } from "@atoms";
import {
  TEXT_TEMPLATE,
  WELLBEING_HUB_BUSINESS_ACCOUNT_DROP_DOWN,
  WELLBEING_HUB_BUSINESS_ACCOUNT_NAME,
  WELLBEING_HUB_DESCRIPTION,
} from "@ids";
import { Style } from "@styles";
import Box from "@atoms/box/box";
import { BusinessAccountState, BusinessPicker } from "@components/molecules/business-picker";

interface IProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  iconUrl?: string;
  testID?: string;
  businessAccountState: BusinessAccountState;
}

const WellbeingHeader = ({ title, description, icon, iconUrl, testID, businessAccountState }: IProps) => {
  const hasIcon = icon || iconUrl;

  const iconStyle = useMemo(() => (hasIcon ? 0.6 : 0.9), [hasIcon]);

  const { activeBusinessAccounts, selectedBusinessAccount } = businessAccountState;

  return (
    <Box flexDirection="row" alignItems="center">
      <Box flex={iconStyle}>
        <TextTemplate type="h3" testID={testID || TEXT_TEMPLATE(title)}>
          {title}
        </TextTemplate>
        {activeBusinessAccounts.length === 0 ? null : (
          <BusinessPicker
            businessAccountState={businessAccountState}
            testIds={{
              box: WELLBEING_HUB_BUSINESS_ACCOUNT_DROP_DOWN,
              textTemplate: WELLBEING_HUB_BUSINESS_ACCOUNT_NAME(selectedBusinessAccount?.businessAccountName),
            }}
          />
        )}
        <Box mt={Style.adjust(16)}>
          <TextTemplate type="b2" testID={WELLBEING_HUB_DESCRIPTION(description)}>
            {description}
          </TextTemplate>
        </Box>
      </Box>

      {!hasIcon ? null : (
        <Box flex={0.4} alignItems="flex-end">
          {icon || (
            <Image source={{ uri: iconUrl }} width={Style.adjust(87)} height={Style.adjust(160)} theme="light" />
          )}
        </Box>
      )}
    </Box>
  );
};

export default memo(WellbeingHeader);
