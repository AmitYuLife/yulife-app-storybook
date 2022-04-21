import React, { memo } from "react";
import { Image } from "@atoms/index";
import { Button } from "@molecules";
import { GetQuestMapLevel_getQuestMapLevel } from "@graphql/_core/schema";
import { Image as RNImage, ScrollView, StyleSheet, View } from "react-native";
import { IConnectedScreenProps } from "@app/typings";
import ChallengesHistorySlot from "./challenges-history-slot";
import { getBottomGradient } from "./challenges-history.helpers";
import styles from "./challenges-history.screen.styles";
import { TopBarTypes } from "@components/organisms/top-bar/top-bar.helpers";
import { TopBar, NavBar } from "@components/organisms";
import { getCurrentWorld } from "@utils";

interface IProps extends IConnectedScreenProps {
  level: GetQuestMapLevel_getQuestMapLevel;
  onPressActivityHistory: () => void;
  onPressCta: () => void;
}

function ChallengesHistory({ level, onPressActivityHistory, onLeftMenuPress }: IProps) {
  const normalizedWorld = getCurrentWorld(level?.level);
  const { backgroundWrapperStyle, backgroundImage, topBarType } = getWorldStyle(normalizedWorld);

  return (
    <View style={styles.wrapper}>
      <View style={styles.topPad} />
      <View style={backgroundWrapperStyle}>
        <RNImage resizeMode="cover" style={styles.background} source={backgroundImage} />
      </View>
      <TopBar
        leftIcon="Back"
        menuLabel="map"
        name={`level ${level.level}`}
        onPressLeftIcon={onLeftMenuPress}
        type={topBarType as TopBarTypes}
      />
      <View style={styles.challengeSetWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >
          {level.slots.map((slot) =>
            slot.challenges.length > 0 ? (
              <ChallengesHistorySlot
                key={slot.id}
                availableAtLevel={slot.availableAtLevel}
                duration={slot.duration}
                type={slot.heading}
                image={slot.historyImage.uri}
                locked={slot.isLocked}
                challenges={slot.challenges}
                currentWorld={normalizedWorld}
              />
            ) : null
          )}
        </ScrollView>
        <Image {...getBottomGradient(normalizedWorld)} />
      </View>
      <View style={styles.buttonsWrapper}>
        <Button onPress={onPressActivityHistory} label="Full history" />
      </View>
      <NavBar activeIndex={1} />
    </View>
  );
}

export default memo(ChallengesHistory);

function getWorldStyle(currentWorld: number) {
  switch (currentWorld) {
    case 3:
      return {
        backgroundImage: require("@assets/challenges/mountain.png"),
        backgroundWrapperStyle: StyleSheet.flatten([
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgb(59,123,209)" },
        ]),
        historyLinkColor: "rgba(255, 255, 255, 1)",
        topBarType: "mountain",
      };
    case 2:
      return {
        backgroundImage: require("@assets/challenges/desert.png"),
        backgroundWrapperStyle: StyleSheet.flatten([
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgb(254,251,205)" },
        ]),
        historyLinkColor: "rgba(226, 1, 119, 1)",
        topBarType: "desert",
      };
    case 1:
      return {
        backgroundImage: require("@assets/challenges/ocean.png"),
        backgroundWrapperStyle: StyleSheet.flatten([
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgb(87,155,193)" },
        ]),
        historyLinkColor: "white",
        topBarType: "white",
      };
    case 0:
    default:
      return {
        backgroundImage: require("@assets/challenges/forest.png"),
        backgroundWrapperStyle: StyleSheet.flatten([
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgb(255, 242, 142)" },
        ]),
        historyLinkColor: "rgba(226, 1, 119, 1)",
        topBarType: "default",
      };
  }
}
