import React from "react";
import { View } from "react-native";
import { Text, Button } from "@atoms";
import styles from "./duel-response-options.styles";
import { getDaysAndMinutesFromSeconds } from "@services/utils";

interface IProps {
  startDateTime: string;
  opponentFirstName: string;
  duration: number;
  userCoins: number;
  yucoin: number;
  isLoading: boolean;
  userAvatar: string;
  opponentAvatar: string;
  submitDuel: () => Promise<void>;
  onDeclinePress: () => Promise<void>;
  loadingLabel: "primary" | "secondary";
}

const Options: React.FC<IProps> = ({
  startDateTime,
  opponentFirstName,
  duration,
  yucoin,
  userCoins,
  isLoading,
  submitDuel,
  onDeclinePress,
  loadingLabel,
}) => {
  const disabled = yucoin > userCoins;
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>
            {opponentFirstName} has invited you to a{" "}
            <Text style={styles.description} bold={true}>
              {getDaysAndMinutesFromSeconds(duration)} challenge{" "}
            </Text>
            and they have wagered{" "}
            <Text style={styles.description} bold={true}>
              {yucoin} YuCoin
            </Text>
            .
          </Text>
          <Text style={styles.description}>
            Whoever does the most steps tomorrow wins the duel and takes home the prize!
          </Text>
        </View>
      </View>
      <View style={styles.ctaWrapper}>
        <Button
          disabled={disabled || isLoading}
          isLoading={isLoading && loadingLabel === "primary"}
          label="Accept the duel"
          onPress={submitDuel}
          type="Primary"
        />
        <Button
          isLoading={isLoading && loadingLabel === "secondary"}
          disabled={!startDateTime}
          wrapperStyle={styles.buttonWrapperSecondary}
          label="Decline"
          type="Secondary"
          onPress={onDeclinePress}
        />
      </View>
    </>
  );
};

export default Options;
