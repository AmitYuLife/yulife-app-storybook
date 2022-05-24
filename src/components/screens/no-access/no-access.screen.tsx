import { TextTemplate } from "@atoms/index";
import { useTranslation } from "@hooks";
import React, { memo } from "react";
import { Image, View } from "react-native";
import styles from "./no-access.screen.styles";

const NoAccessScreen = memo(() => {
  const translations = useTranslation(["screens.noAccess.heading", "screens.noAccess.subheading"]);

  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={require("../../../../assets/purchases-empty/rewards-empty.png")} />
      <View style={styles.contentWrapper}>
        <TextTemplate type="h1" textAlign="center">
          {translations["screens.noAccess.heading"]}
        </TextTemplate>
        <TextTemplate type="b2" textAlign="center">
          {translations["screens.noAccess.subheading"]}
        </TextTemplate>
      </View>
    </View>
  );
});

export default NoAccessScreen;
