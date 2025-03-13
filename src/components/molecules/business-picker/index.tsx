import Box from "@atoms/box/box";
import { TouchableOpacityWithDelay } from "..";
import { Style } from "@styles";
import { TextTemplate } from "@atoms";
import { backgroundColour, colour, styles } from "./styles";
import { DropdownSolidIcon } from "@atoms/icon/dropdown-solid-icon";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import GenericSelectorModal from "@components/modals/generic-selector-modal/generic-selector-modal";
import { showFloatingModal } from "@components/modals";
import { MODALS } from "@navigation/constants";
import { t } from "@locale";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

export type BusinessAccount = {
  businessAccountId: string;
  businessAccountName: string;
  id: string;
};

export type BusinessAccountState = {
  setSelectedBusinessAccount: React.Dispatch<React.SetStateAction<BusinessAccount>>;
  activeBusinessAccounts: BusinessAccount[];
  selectedBusinessAccount: BusinessAccount | undefined;
};

interface BusinessPickerProps {
  testIds?: {
    textTemplate?: string;
    box?: string;
  };
  businessAccountState: BusinessAccountState;
}

export const BusinessPicker = ({ businessAccountState, testIds }: BusinessPickerProps) => {
  const dispatch = useDispatch();

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

  const hasBusinessSelector = activeBusinessAccounts.length > 1;

  return (
    <TouchableOpacityWithDelay style={styles.info} onPress={onPress} disabled={!hasBusinessSelector}>
      <Box flexDirection="row" mv={8}>
        <TextTemplate type="l1b" color={colour} testID={testIds?.textTemplate || undefined}>
          {selectedBusinessAccount?.businessAccountName}
        </TextTemplate>
        {!hasBusinessSelector ? null : (
          <Box
            testID={testIds?.box || undefined}
            bg={backgroundColour}
            br={100}
            width={20}
            height={20}
            justifyContent="center"
            alignItems="center"
            ml={8}
            pt={2}
          >
            <DropdownSolidIcon colour={colour} width={8} height={8} />
          </Box>
        )}
      </Box>
    </TouchableOpacityWithDelay>
  );
};
