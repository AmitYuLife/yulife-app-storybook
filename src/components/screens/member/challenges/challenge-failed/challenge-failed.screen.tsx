import { LevelLine, Stars, Text } from "@atoms";
import * as React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import styles from "./challenge-failed.screen.styles";
import { CenteredScreenImages } from "@molecules/centred-screen/centred-screen";
import { Button, CentredScreen } from "@molecules";
import { t } from "@locale";

interface IProps {
  level?: number;
  yuniversalMap?: number;
  loading: boolean;
  onPress: () => void;
  currentWorld: number;
}

export default function ChallengeFailedScreen({ level, yuniversalMap, onPress, loading, currentWorld }: IProps) {
  const { backgroundImage, backgroundStyle, textStyle, lineColour = "rgb(226, 226, 226)" } = getStyle(
    currentWorld,
    yuniversalMap
  );

  return (
    <CentredScreen
      style={StyleSheet.flatten([styles.wrapper, backgroundStyle]) as ViewStyle}
      footerImage={backgroundImage as CenteredScreenImages}
    >
      <View style={styles.ratingWrapper}>
        <Stars />
        <View style={styles.levelWrapper}>
          <View style={styles.levelLineWrapper}>
            <LevelLine colour={lineColour} />
          </View>
          <Text style={StyleSheet.flatten([styles.level, textStyle])}>
            {yuniversalMap
              ? t("screens.challenge_failed.stage", { level })
              : t("screens.challenge_failed.level", { level })}
          </Text>
        </View>
      </View>
      <Text bold={true} style={StyleSheet.flatten([styles.heading, textStyle])}>
        {t("screens.challenge_failed.heading")}
      </Text>
      <Text style={StyleSheet.flatten([styles.secondaryText, textStyle])}>{t("screens.challenge_failed.footer")}</Text>
      <Button
        isLoading={loading}
        wrapperStyle={styles.cta}
        onPress={onPress}
        label={t("screens.challenge_failed.cta_label")}
        size="Medium"
      />
    </CentredScreen>
  );
}

function getStyle(currentWorld: number, yuniversalMap?: number) {
  if (yuniversalMap) {
    return {
      backgroundImage: "yuniversal_1" as CenteredScreenImages,
      textStyle: { color: "white" },
      lineColour: "white",
    };
  }

  switch (currentWorld) {
    case 3:
      return {
        backgroundImage: "challenge_mountain",
        backgroundStyle: { backgroundColor: "rgb(255, 226, 230)" },
      };
    case 2:
      return {
        backgroundImage: "challenge_failed_desert",
        backgroundStyle: { backgroundColor: "#fffbcd" },
      };
    case 1:
      return {
        backgroundImage: "challenge_failed_ocean",
        backgroundStyle: null,
      };
    case 0:
    default:
      return {
        backgroundImage: "challenge_failed_forest",
        backgroundStyle: null,
      };
  }
}
