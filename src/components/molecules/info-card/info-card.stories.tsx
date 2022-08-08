import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import InfoCard from "./info-card";
import { LockHeartIcon } from "@atoms/icon/lock-heart-icon";
import { GPRequestIcon } from "@atoms/icon/gp-request-icon";
import { HandshakeHeartIcon } from "@atoms/icon/handshake-heart-icon";
import { NotVisibleEyeIcon } from "@atoms/icon/not-visible-eye-icon";
import { NotVisibleGuyIcon } from "@atoms/icon/not-visible-guy-icon";
import { PowerUpIcon } from "@atoms/icon/power-up-icon";
import { SignedContractIcon } from "@atoms/icon/signed-contract-icon";
import { YuCoinPileIcon } from "@atoms/icon/yucoin-pile-icon";
import { TextTemplate } from "@atoms";
import { withDesign } from "storybook-addon-designs";

const ICONS = [
  LockHeartIcon,
  GPRequestIcon,
  HandshakeHeartIcon,
  NotVisibleEyeIcon,
  NotVisibleGuyIcon,
  PowerUpIcon,
  SignedContractIcon,
  YuCoinPileIcon,
];

export const InfoCardStory = () => {
  return (
    <View style={{ backgroundColor: "#FAFAFE" }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ margin: 24 }}>
        <TextTemplate type="b1b">Cards with titles</TextTemplate>
        {ICONS.map((Icon, index) => (
          <View key={index} style={styles.wrapper}>
            <InfoCard
              icon={<Icon />}
              title="Subheading"
              description="Your description goes here. Maximum of 3 lines is ideal in this section."
            />
          </View>
        ))}

        <View style={styles.wrapper}>
          <TextTemplate type="b1b">Cards with no titles</TextTemplate>
          {ICONS.map((Icon, index) => (
            <View key={index} style={styles.wrapper}>
              <InfoCard
                icon={<Icon />}
                description="Your description goes here. Maximum of 3 lines is ideal in this section."
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default {
  title: "InfoCardStory",
  component: InfoCardStory,
  decorators: [withDesign],
  parameters: {
    layout: "centered",
  },
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
});
