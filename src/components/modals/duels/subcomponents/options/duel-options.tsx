import React, { useState, useMemo } from "react";
import { View } from "react-native";
import { Text, Loading, BlurProvider } from "@atoms";
import { Button } from "@molecules";
import styles from "./duel-options.styles";
import { DuelStepProps, DEFAULT_DUEL_AMOUNT_LABEL } from "../../duels.types";
import { GQL_QUERY_GET_DUEL_TEMPLATES } from "@graphql/duels/getDuelTemplates.gql";
import { useQuery } from "@apollo/react-hooks";
import { GetDuelTemplates } from "@graphql/_core/schema";
import WagerDropdown from "./subcomponents/wager-dropdown/wager-dropdown";
import { DUEL_OPTIONS_SCREEN } from "@ids";
import { ListPicker } from "@components/molecules";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { Navigation } from "react-native-navigation";

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
            <Text style={styles.description}>
              You&apos;re challenging{" "}
              <Text style={styles.description} bold={true}>
                {opponent.firstName} {opponent.lastName}
              </Text>{" "}
              to a duel. Whoever registers the most steps during the duel, wins!
            </Text>
            <Text style={styles.description}>
              The duel starts tomorrow and lasts all day. Results announcing the winner will appear the next morning.
            </Text>
            <View style={styles.flexRow}>
              <Text style={styles.question} bold={true}>
                What are you duelling for?
              </Text>
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
