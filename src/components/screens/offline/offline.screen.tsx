import { Button, Text } from "@atoms/index";
import { GetMobileCopy_getMobileCopy_screens_offline as OfflineCopy } from "@graphql/_core/schema";
import * as React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import styles from "./offline.screen.styles";
import { getCurrentWorld } from "@utils";
import { CentredScreen } from "@molecules";
import { CenteredScreenImages } from "@molecules/centred-screen/centred-screen";

interface IProps {
  level: number;
  onPress: () => void;
  copy: OfflineCopy;
}

export default function OfflineScreen({ copy, level, onPress }: IProps) {
  const normalizedWorld = getCurrentWorld(level);
  const { centerScreenStyle, textStyle } = getWorldStyle(normalizedWorld);

  return (
    <CentredScreen {...centerScreenStyle}>
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <Text style={StyleSheet.flatten([styles.heading, textStyle])} bold={true}>
            {copy.heading}
          </Text>
          <Text style={StyleSheet.flatten([styles.subheading, textStyle])}>{copy.subheading}</Text>
          <View style={styles.buttonWrapper}>
            <Button onPress={onPress} size="Medium" label={copy.ctaLabel} />
          </View>
        </View>
      </View>
    </CentredScreen>
  );
}

function getWorldStyle(
  currentWorld: number
): { textStyle: TextStyle; centerScreenStyle: { footerImage: CenteredScreenImages; style: ViewStyle } } {
  switch (currentWorld) {
    case 3:
      return {
        textStyle: {},
        centerScreenStyle: { footerImage: "gray_mountain", style: { backgroundColor: "rgb(235,235,235)" } },
      };
    case 2:
      return {
        textStyle: {},
        centerScreenStyle: { footerImage: "gray_desert", style: { backgroundColor: "rgb(235,235,235)" } },
      };
    case 1:
      return {
        textStyle: { color: "white" },
        centerScreenStyle: { footerImage: "gray_ocean", style: { backgroundColor: "#747474" } },
      };
    default:
      return {
        textStyle: {},
        centerScreenStyle: { footerImage: "gray_forest", style: { backgroundColor: "rgb(235, 235, 235)" } },
      };
  }
}
