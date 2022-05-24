import { TextTemplate } from "@atoms/index";
import { Button, CentredScreen } from "@molecules";
import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import styles from "./offline.screen.styles";
import { getCurrentWorld } from "@utils";
import { CenteredScreenImages } from "@molecules/centred-screen/centred-screen";
import { Colours } from "@styles";
import { useTranslation } from "@hooks";

interface IProps {
  level: number;
  onPress: () => void;
}

const OfflineScreen = ({ level, onPress }: IProps) => {
  const normalizedWorld = getCurrentWorld(level);
  const { centerScreenStyle, textColour } = getWorldStyle(normalizedWorld);
  const translations = useTranslation([
    "screens.offline.heading",
    "screens.offline.subheading",
    "screens.offline.ctaLabel",
  ]);

  return (
    <CentredScreen {...centerScreenStyle}>
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <TextTemplate type="h1" color={textColour} textAlign="center">
            {translations["screens.offline.heading"]}
          </TextTemplate>
          <TextTemplate type="b2" color={textColour} textAlign="center">
            {translations["screens.offline.subheading"]}
          </TextTemplate>
          <View style={styles.buttonWrapper}>
            <Button onPress={onPress} size="Medium" label={translations["screens.offline.ctaLabel"]} />
          </View>
        </View>
      </View>
    </CentredScreen>
  );
};

export default memo(OfflineScreen);

function getWorldStyle(
  currentWorld: number
): { textColour: string; centerScreenStyle: { footerImage: CenteredScreenImages; style: ViewStyle } } {
  switch (currentWorld) {
    case 3:
      return {
        textColour: Colours.darkGray,
        centerScreenStyle: { footerImage: "gray_mountain", style: { backgroundColor: "rgb(235,235,235)" } },
      };
    case 2:
      return {
        textColour: Colours.darkGray,
        centerScreenStyle: { footerImage: "gray_desert", style: { backgroundColor: "rgb(235,235,235)" } },
      };
    case 1:
      return {
        textColour: Colours.neutral.white,
        centerScreenStyle: { footerImage: "gray_ocean", style: { backgroundColor: "#747474" } },
      };
    default:
      return {
        textColour: Colours.darkGray,
        centerScreenStyle: { footerImage: "gray_forest", style: { backgroundColor: "rgb(235, 235, 235)" } },
      };
  }
}
