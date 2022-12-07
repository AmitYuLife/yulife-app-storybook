import React, { useState, useMemo } from "react";
import { View } from "react-native";
import { Loading, BlurProvider, TextTemplate } from "@atoms";
import { Button } from "@molecules";
import styles from "./duel-options.styles";
import { DuelStepProps, DEFAULT_DUEL_AMOUNT_LABEL } from "../../duels.types";
import { GQL_QUERY_GET_DUEL_TEMPLATES } from "@graphql/duels/getDuelTemplates.gql";
import { useQuery } from "@apollo/client";
import { GetDuelTemplates } from "@graphql/_core/schema";
import WagerDropdown from "./subcomponents/wager-dropdown/wager-dropdown";
import { DUEL_OPTIONS_SCREEN } from "@ids";
import { ListPicker } from "@components/molecules";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { Navigation } from "@navigation/main";
import { t } from "@locale";

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
  const [pickerAmountLabel, setPickerAmountLabel] = useState(DEFAULT_DUEL_AMOUNT_LABEL);
  const { data, loading } = useQuery<GetDuelTemplates>(GQL_QUERY_GET_DUEL_TEMPLATES, {
    fetchPolicy: "network-only",
  });
  const wagers = data?.getDuelTemplates?.wagerTemplate || [];

  const wagerOptions: IOptions[] = useMemo(
    () =>
      wagers.reduce((acc, { id, yucoin: wagerYuCoin }) => {
        if (userCoins >= wagerYuCoin) {
          const label = wagerYuCoin === 0 ? `Bragging Rights!` : `${wagerYuCoin} YuCoin`;

          acc.push({
            id,
            label,
            value: wagerYuCoin,
          });
        }

        return acc;
      }, []),
    [wagers, userCoins]
  );

  const onPressLeftIcon = () => Navigation.dismissModal(componentId);

  return (
    <BlurProvider
      backgroundColor="dark"
      render={({ toggleOverlay }) => (
        <View style={styles.safeAreaView}>
          <TopBarAbsolute leftIcon="Close" onPressLeftIcon={onPressLeftIcon} rightIcon="Coins" />
          <View style={styles.wrapper} testID={DUEL_OPTIONS_SCREEN}>
            <View style={styles.description}>
              <TextTemplate type="b1" textAlign="left">
                {t("modals.duels.duel_options.header_1")}{" "}
                <TextTemplate type="b1b" textAlign="left">
                  {opponent?.firstName && opponent?.lastName
                    ? `${opponent.firstName} ${opponent.lastName}`
                    : t("modals.duels.duel_options.colleague")}
                </TextTemplate>{" "}
                {t("modals.duels.duel_options.header_2")}
              </TextTemplate>
            </View>
            <View style={styles.description}>
              <TextTemplate type="b1" textAlign="left">
                {t("modals.duels.duel_options.subheader_1")}
              </TextTemplate>
            </View>
            <View style={styles.flexRow}>
              <TextTemplate type="b1b" textAlign="left">
                {t("modals.duels.duel_options.subheader_2")}
              </TextTemplate>
            </View>
            <View>
              <WagerDropdown yucoin={yucoin} pickerAmountLabel={pickerAmountLabel} onPress={toggleOverlay} />
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              disabled={yucoin === null || isLoading}
              isLoading={isLoading}
              onPress={submitDuel}
              label="Send duel request"
            />
          </View>
          {loading ? (
            <View style={[styles.safeAreaView, styles.loadingOverlay]}>
              <Loading />
            </View>
          ) : null}
        </View>
      )}
      renderOverlay={({ toggleOverlay }) => {
        const items = wagerOptions.map((option) => ({
          ...option,
          onPress() {
            setPickerAmountLabel(option.label);
            setYucoin(option.value);
            toggleOverlay();
          },
        }));
        return <ListPicker onPressCancel={toggleOverlay} instruction="What are you duelling for?" items={items} />;
      }}
    />
  );
}
