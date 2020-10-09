import React, { useEffect, useState, useMemo } from "react";
import { View, ActionSheetIOS } from "react-native";
import { Text, Button, Loading } from "@atoms/index";
import styles from "./duel-options.styles";
import { DuelStepProps } from "../../duels.types";
import { GQL_QUERY_GET_DUEL_TEMPLATES } from "@graphql/duels/getDuelTemplates.gql";
import { useQuery } from "@apollo/react-hooks";
import { GetDuelTemplates } from "@graphql/_core/schema";
import { Coins } from "@organisms/top-bar/assets";
import WagerDropdown from "./subcomponents/wager-dropdown";
import { Colours } from "@styles";

export default function DuelOptions({
  opponent,
  setYucoin,
  yucoin,
  userCoins,
  setDuration,
  submitDuel,
  isLoading,
}: DuelStepProps) {
  // Picker control values
  const [pickerYuCoinAmount, setPickerYuCoinAmount] = useState(`${yucoin} YuCoin`);
  const disabled = userCoins < 10;
  const { data, loading: areTemplatesLoading } = useQuery<GetDuelTemplates>(GQL_QUERY_GET_DUEL_TEMPLATES);
  const wagers = data?.getDuelTemplates?.wagerTemplate || [];

  useEffect(() => {
    if (wagers && wagers.length) {
      setYucoin(wagers[0].yucoin);
      setPickerYuCoinAmount(`${wagers[0].yucoin} YuCoin`);
    }
  }, [wagers, setDuration, setYucoin, setPickerYuCoinAmount]);

  const wagerOptions = useMemo(
    () =>
      wagers.reduce((acc, { id, yucoin: wagerYuCoin }) => {
        if (userCoins >= wagerYuCoin) {
          acc.push({
            label: `${wagerYuCoin} YuCoin`,
            value: wagerYuCoin,
            id,
          });
        }

        return acc;
      }, []),
    [wagers, userCoins]
  );

  const onWagerPress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: "YuCoin to wager",
        options: ["Cancel", ...wagerOptions.map(({ label }) => label)],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex !== 0) {
          const index = buttonIndex - 1;
          setYucoin(wagerOptions[index].value);
          setPickerYuCoinAmount(wagerOptions[index].label);
        }
      }
    );
  };

  return (
    <>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.description}>
            You&apos;re challenging{" "}
            <Text style={styles.description} bold={true}>
              {opponent.firstName} {opponent.lastName}
            </Text>{" "}
            to a duel, to see who can walk the most steps.
          </Text>
          <Text style={styles.description}>The duel will start tomorrow and last until the end of the day.</Text>
          <View style={styles.flexRow}>
            <Text style={styles.question} bold={true}>
              How much YuCoin to wager?
            </Text>
          </View>
          <View style={styles.dropdownWrapper}>
            <View style={styles.coinsWrapper}>
              <Coins color={disabled ? Colours.neutral.n500 : "#5A5A5C"} />
            </View>
            <WagerDropdown
              wagerOptions={wagerOptions}
              disabled={disabled}
              yucoin={yucoin}
              pickerYuCoinAmount={pickerYuCoinAmount}
              onWagerPress={onWagerPress}
              setYucoin={setYucoin}
              setPickerYuCoinAmount={setPickerYuCoinAmount}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          disabled={disabled || isLoading}
          isLoading={isLoading}
          onPress={submitDuel}
          label="Send duel request"
          type="Primary"
        />
      </View>
      {areTemplatesLoading ? (
        <View style={styles.loadingOverlay}>
          <Loading />
        </View>
      ) : null}
    </>
  );
}
