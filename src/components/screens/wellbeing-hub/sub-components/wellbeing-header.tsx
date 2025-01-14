import React, { memo, useCallback, useMemo } from "react";
import { Image, TextTemplate } from "@atoms";
import { TEXT_TEMPLATE, WELLBEING_HUB_BUSINESS_ACCOUNT_DROP_DOWN, WELLBEING_HUB_BUSINESS_ACCOUNT_NAME } from "@ids";
import { Style } from "@styles";
import { StyleSheet } from "react-native";
import { DropdownSolidIcon } from "@atoms/icon/dropdown-solid-icon";
import { useDispatch } from "react-redux";
import { showFloatingModal } from "@components/modals";
import { MODALS } from "@navigation/constants";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { t } from "@locale";
import { TouchableOpacityWithDelay } from "@components/molecules";
import GenericSelectorModal from "@components/modals/generic-selector-modal/generic-selector-modal";
import { BusinessAccountState } from "../wellbeing-hub";
import Box from "@atoms/box/box";

interface IProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  iconUrl?: string;
  testID?: string;
  businessAccountState: BusinessAccountState;
}

const colour = "#345E8C";

const WellbeingHeader = ({ title, description, icon, iconUrl, testID, businessAccountState }: IProps) => {
  const dispatch = useDispatch();
  const hasIcon = icon || iconUrl;

  const iconStyle = useMemo(() => (hasIcon ? 0.6 : 0.9), [hasIcon]);

  const { activeBusinessAccounts, selectedBusinessAccount, setSelectedBusinessAccount } = businessAccountState;

  const handleModalButtonPress = useCallback(
    (selectedBusinessCustomerId: string) => {
      const currentBusinessAccountSelection =
        activeBusinessAccounts.find((ba) => ba?.businessAccountId === selectedBusinessCustomerId) ||
        selectedBusinessAccount;

      setSelectedBusinessAccount(currentBusinessAccountSelection);
    },
    [activeBusinessAccounts, selectedBusinessAccount, setSelectedBusinessAccount]
  );

  const onPress = useCallback(async () => {
    const items = activeBusinessAccounts.map((activeBusinessAccount) => {
      return {
        label: activeBusinessAccount?.businessAccountName,
        value: activeBusinessAccount?.businessAccountId,
      };
    });

    const children = ({ onClose }: { onClose: () => void }) => (
      <GenericSelectorModal
        items={items}
        onClose={onClose}
        defaultValue={selectedBusinessAccount?.businessAccountId}
        buttonLabel={t("overlays.business_account.button_label")}
        onConfirm={handleModalButtonPress}
      />
    );

    await showFloatingModal({
      children,
      modalId: MODALS.businessAccountsOverlay,
      title: t("overlays.business_account.title"),
      showButton: false,
      paddingTop: Style.adjust(80),
    });

    dispatch(
      logMixpanelEventActionCreator("modal_viewed", {
        name: "business_account_overlay",
      })
    );
  }, [activeBusinessAccounts, dispatch, selectedBusinessAccount?.businessAccountId, handleModalButtonPress]);

  const hideBusinessSelector = activeBusinessAccounts.length <= 1;

  return (
    <Box flexDirection="row" alignItems="center">
      <Box flex={iconStyle}>
        <TextTemplate type="h3" testID={testID || TEXT_TEMPLATE(title)}>
          {title}
        </TextTemplate>
        {activeBusinessAccounts.length === 0 ? null : (
          <TouchableOpacityWithDelay style={styles.info} onPress={onPress} disabled={hideBusinessSelector}>
            <Box flexDirection="row" mv={Style.adjust(8)}>
              <TextTemplate
                type="l1b"
                color={colour}
                testID={WELLBEING_HUB_BUSINESS_ACCOUNT_NAME(selectedBusinessAccount?.businessAccountName)}
              >
                {selectedBusinessAccount?.businessAccountName}
              </TextTemplate>
              {hideBusinessSelector ? null : (
                <Box
                  testID={WELLBEING_HUB_BUSINESS_ACCOUNT_DROP_DOWN}
                  bg={backgroundColour}
                  br={100}
                  width={Style.adjust(20)}
                  height={Style.adjust(20)}
                  justifyContent="center"
                  alignItems="center"
                  ml={Style.adjust(8)}
                  pt={Style.adjust(2)}
                >
                  <DropdownSolidIcon colour={colour} width={8} height={8} />
                </Box>
              )}
            </Box>
          </TouchableOpacityWithDelay>
        )}
        <Box mt={Style.adjust(16)}>
          <TextTemplate type="b2">{description}</TextTemplate>
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

const backgroundColour = "#BBD8F6";

const styles = StyleSheet.create({
  info: {
    flexDirection: "column",
  },
});

export default memo(WellbeingHeader);
