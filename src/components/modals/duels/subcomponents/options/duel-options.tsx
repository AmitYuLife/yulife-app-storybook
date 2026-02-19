import { useState, useMemo, useCallback } from "react";
import { Platform, View } from "react-native";
import { Loading, BlurredWrapper } from "@atoms";
import { Button, Markdown } from "@molecules";
import styles from "./duel-options.styles";
import { DuelStepProps } from "../../duels.types";
import { useQuery } from "@apollo/client";
import WagerDropdown from "./subcomponents/wager-dropdown/wager-dropdown";
import { BRAGGING_RIGHT_OPTION, DUEL_OPTIONS_SCREEN, WAGER_OPTION } from "@ids";
import { ListPicker } from "@components/molecules";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { Navigation } from "@navigation/main";
import { t } from "@locale";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { gql } from "@graphql/__generated";
import { templateTextMarkdownStyles, StyleSheet } from "@styles";

interface IOptions {
  id: string;
  label: string;
  value: number;
}

export default function DuelOptions({
  componentId,
  opponent,
  setYucoin,
  yucoin,
  userCoins,
  submitDuel,
  isLoading,
}: DuelStepProps) {
  const [pickerAmountLabel, setPickerAmountLabel] = useState(null);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
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

  const onPressLeftIcon = () => Navigation.dismissModal(componentId);

  const showPicker = useCallback(() => setIsPickerVisible(true), []);
  const hidePicker = useCallback(() => setIsPickerVisible(false), []);

  const pickerItems = wagerOptions.map((option) => ({
    ...option,
    onPress() {
      setPickerAmountLabel(option.label);
      setYucoin(option.value);
      hidePicker();
    },
  }));

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
      <BlurredWrapper tint="light" isVisible={isPickerVisible} backgroundColor={backgroundColor}>
        <ListPicker
          onPressCancel={hidePicker}
          instruction={t("modals.duels.duel_options.instruction")}
          items={pickerItems}
        />
      </BlurredWrapper>
    </>
  );
}

const backgroundColor = Platform.select({ ios: "rgba(0,0,0,0.5)", android: "rgba(0,0,0,0.3)" });

export const markdownStyles = StyleSheet.create({
  text: templateTextMarkdownStyles.b1,
  paragraph: {
    paddingVertical: 0,
  },
});
