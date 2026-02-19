import { useState, useMemo, useCallback, FC, memo } from "react";
import { Platform, View } from "react-native";
import { BlurredWrapper, Loading } from "@atoms";
import { Button, Markdown } from "@molecules";
import styles from "./duel-options.styles";
import { DuelStepProps } from "../../duels.types";
import { useQuery } from "@apollo/client";
import WagerDropdown from "./subcomponents/wager-dropdown/wager-dropdown";
import { BRAGGING_RIGHT_OPTION, DUEL_OPTIONS_SCREEN, WAGER_OPTION } from "@ids";
import { ListPicker } from "@components/molecules";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { t } from "@locale";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { gql } from "@graphql/__generated";
import { templateTextMarkdownStyles, StyleSheet } from "@styles";
import { useModal } from "@modules/modals/useModal";

interface IOptions {
  id: string;
  label: string;
  value: number;
}

const DuelOptions: FC<DuelStepProps> = ({ dismiss, opponent, setYucoin, yucoin, userCoins, submitDuel, isLoading }) => {
  const [pickerAmountLabel, setPickerAmountLabel] = useState(null);
  const { showModal } = useModal();
  const { data, loading } = useQuery(gql("GetDuelTemplatesDocument"), {
    fetchPolicy: "network-only",
  });
  const wagers = data?.getDuelTemplates?.wagerTemplate || [];

  const wagerOptions: IOptions[] = useMemo(
    () =>
      wagers.reduce((acc, { id, yucoin: wagerYuCoin }) => {
        if (userCoins >= wagerYuCoin) {
          const label =
            wagerYuCoin === 0
              ? t("modals.duels.duel_options.bragging_rights_option")
              : `${wagerYuCoin} ${t("yu_coin.camel_case")}`;

          acc.push({
            id,
            label,
            value: wagerYuCoin,
            testID: wagerYuCoin === 0 ? BRAGGING_RIGHT_OPTION : WAGER_OPTION(wagerYuCoin),
          });
        }

        return acc;
      }, []),
    [wagers, userCoins]
  );

  const onPressLeftIcon = dismiss;

  const pickerItems = wagerOptions.map((option) => ({
    ...option,
    onPress() {
      setPickerAmountLabel(option.label);
      setYucoin(option.value);
    },
  }));

  const showPicker = useCallback(() => {
    showModal(({ onClose }) => (
      <BlurredWrapper tint="light" isVisible={true} backgroundColor={backgroundColor}>
        <ListPicker
          onPressCancel={onClose}
          instruction={t("modals.duels.duel_options.instruction")}
          items={pickerItems.map((item) => ({
            ...item,
            onPress() {
              item.onPress();
              onClose();
            },
          }))}
        />
      </BlurredWrapper>
    ));
  }, [pickerItems, showModal]);

  return (
    <>
      <View style={styles.safeAreaView}>
        <TopBarAbsolute leftIcon={LeftIcon.CLOSE} onPressLeftIcon={onPressLeftIcon} rightIcon="Coins" />
        <View style={styles.wrapper} testID={DUEL_OPTIONS_SCREEN}>
          <View style={styles.description}>
            <Markdown
              markdownStyles={markdownStyles}
              text={t("modals.duels.duel_options.header", {
                name: opponent?.fullName || t("modals.duels.duel_options.colleague"),
              })}
            />
          </View>
          <View style={styles.description}>
            <Markdown markdownStyles={markdownStyles} text={t("modals.duels.duel_options.subheader_1")} />
          </View>
          <View style={styles.flexRow}>
            <Markdown markdownStyles={markdownStyles} text={t("modals.duels.duel_options.subheader_2")} />
          </View>
          <View>
            <WagerDropdown
              yucoin={yucoin}
              pickerAmountLabel={pickerAmountLabel || t("modals.duels.duel_options.select_wager")}
              onPress={showPicker}
            />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            disabled={yucoin === null || isLoading}
            isLoading={isLoading}
            onPress={submitDuel}
            translationKey="modals.duels.duel_options.button_label"
          />
        </View>
        {loading ? (
          <View style={[styles.safeAreaView, styles.loadingOverlay]}>
            <Loading />
          </View>
        ) : null}
      </View>
    </>
  );
};

const backgroundColor = Platform.select({ ios: "rgba(0,0,0,0.5)", android: "rgba(0,0,0,0.3)" });

export const markdownStyles = StyleSheet.create({
  text: templateTextMarkdownStyles.b1,
  paragraph: {
    paddingVertical: 0,
  },
});

export default memo(DuelOptions);
