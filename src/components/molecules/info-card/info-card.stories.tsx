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
import { YugiGPIcon } from "@atoms/icon/yugi-gp-icon";
import { TextTemplate } from "@atoms";
import { Hyperlink } from "@molecules";
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
  YugiGPIcon,
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

        <View style={styles.wrapper}>
          <TextTemplate type="b1b">Cards with custom body</TextTemplate>
          <View style={styles.wrapper}>
            <InfoCard
              icon={<YugiGPIcon />}
              customBody={
                <>
                  <TextTemplate type="b2">
                    Your description goes here. Maximum of 3 lines is ideal in this section.
                  </TextTemplate>
                  <View style={{ marginTop: 28 }}>
                    <Hyperlink title="See details" url="https://yulife.com" />
                  </View>
                </>
              }
            />
          </View>
        </View>
        <View style={{ marginBottom: 50 }} />
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
