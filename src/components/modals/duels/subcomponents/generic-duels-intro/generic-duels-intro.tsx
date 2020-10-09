import * as React from "react";
import { Animated, View } from "react-native";
import { Text, Button } from "@atoms/index";
import { DuelAvatar } from "../avatar/duel-avatar";
import styles from "./generic-duels-intro.styles";
import { DuelStepProps } from "../../duels.types";

interface IGenericDuelsIntro extends Partial<DuelStepProps> {
  type: "invite" | "response";
  heading: string;
  primaryBtnLabel: string;
  secondaryBtnLabel?: string;
}

function GenericDuelsIntro({
  type,
  heading,
  primaryBtnLabel,
  secondaryBtnLabel,
  opponent,
  user,
  loading,
  goToNextStep,
  onDeclinePress,
  isLoading,
  loadingLabel,
}: IGenericDuelsIntro) {
  const opacity = new Animated.Value(0);
  const fadeAnim = Animated.timing(opacity, {
    toValue: 1,
    duration: 400,
    useNativeDriver: true,
  });

  React.useEffect(() => {
    fadeAnim.start();
    return fadeAnim.stop;
  }, [fadeAnim]);

  if (loading) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <View style={styles.titleSection}>
        <Text style={type === "invite" ? styles.headingInvite : styles.headingResponse}>{heading}</Text>
      </View>
      <View style={styles.avatarSection}>
        <DuelAvatar uri={user?.avatar} />
        <DuelAvatar uri={opponent?.avatar} reverse={true} />
      </View>
      <View style={styles.versusSection}>
        <View style={styles.flex120}>
          <Text style={styles.youText} bold={true}>
            You
          </Text>
        </View>
        <View style={styles.flex50}>
          <Text bold={true} style={styles.vsText}>
            VS
          </Text>
        </View>
        <View style={styles.flex120}>
          {opponent && opponent.firstName && opponent.lastName ? (
            <>
              <Text style={styles.opponentNameText} bold={true}>
                {opponent?.firstName}
              </Text>
              <Text style={styles.opponentNameText} bold={true}>
                {opponent?.lastName}
              </Text>
            </>
          ) : (
            <Text bold={true} style={styles.opponentFallback}>
              ?
            </Text>
          )}
        </View>
      </View>
      <View style={styles.buttonSection}>
        <Button onPress={goToNextStep} label={primaryBtnLabel} type="Primary" />
        {secondaryBtnLabel ? (
          <Button
            isLoading={(isLoading || loading) && loadingLabel === "secondary"}
            disabled={(isLoading || loading) && loadingLabel === "secondary"}
            onPress={onDeclinePress}
            label={secondaryBtnLabel}
            type="Secondary"
            wrapperStyle={styles.secondaryBtnWrapper}
          />
        ) : null}
      </View>
    </Animated.View>
  );
}

export default GenericDuelsIntro;
