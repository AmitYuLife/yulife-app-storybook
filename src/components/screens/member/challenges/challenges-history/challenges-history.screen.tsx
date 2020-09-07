import { Button } from "@atoms/index";
import { getSlotDuration } from "@containers/member/quests/challenges-list/challenges-list.helpers";
import { GetCurrentQuestLevels_getCurrentQuestLevels } from "@graphql/_core/schema";
import * as React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { IConnectedScreenProps } from "../../../../../typings";
import ChallengesHistorySlot from "./challenges-history-slot";
import { getBottomGradient } from "./challenges-history.helpers";
import styles from "./challenges-history.screen.styles";
import { TopBarTypes } from "@components/organisms/top-bar/top-bar.helpers";
import { TopBar, NavBar } from "@components/organisms";
import { getCurrentWorld } from "@services/utils";

interface IProps extends IConnectedScreenProps {
  level: GetCurrentQuestLevels_getCurrentQuestLevels;
  onPressActivityHistory: () => void;
  onPressCta: () => void;
}

export default function ChallengesHistory({ level, onPressActivityHistory, onLeftMenuPress }: IProps) {
  const normalizedWorld = getCurrentWorld(level.level);
  const { backgroundWrapperStyle, backgroundImage, topBarType } = getWorldStyle(normalizedWorld);

  return (
    <SafeAreaView style={styles.wrapper}>
      <SafeAreaView style={backgroundWrapperStyle}>
        <Image resizeMode="cover" style={styles.background} source={backgroundImage} />
      </SafeAreaView>
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
            slot.challengesDetails.length > 0 ? (
              <ChallengesHistorySlot
                key={slot.id}
                availableAtLevel={slot.availableAtLevel}
                duration={getSlotDuration(slot)}
                type={slot.subtype}
                locked={slot.availableAtLevel > level.level}
                challengesDetails={slot.challengesDetails}
                currentWorld={normalizedWorld}
              />
            ) : null
          )}
        </ScrollView>
        <AutoHeightImage {...getBottomGradient(normalizedWorld)} />
      </View>
      <View style={styles.buttonsWrapper}>
        <Button type="Primary" onPress={onPressActivityHistory} label="full history" />
      </View>
      <NavBar activeIndex={1} />
    </SafeAreaView>
  );
}

function getWorldStyle(currentWorld: number) {
  switch (currentWorld) {
    case 3:
      return {
        backgroundImage: require("../../../../../../assets/challenges/mountain.png"),
        backgroundWrapperStyle: StyleSheet.flatten([
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgb(59,123,209)" },
        ]),
        historyLinkColor: "rgba(255, 255, 255, 1)",
        topBarType: "mountain",
      };
    case 2:
      return {
        backgroundImage: require("../../../../../../assets/challenges/desert.png"),
        backgroundWrapperStyle: StyleSheet.flatten([
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgb(254,251,205)" },
        ]),
        historyLinkColor: "rgba(226, 1, 119, 1)",
        topBarType: "desert",
      };
    case 1:
      return {
        backgroundImage: require("../../../../../../assets/challenges/ocean.png"),
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
        backgroundImage: require("../../../../../../assets/challenges/forest.png"),
        backgroundWrapperStyle: StyleSheet.flatten([
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgb(255, 242, 142)" },
        ]),
        historyLinkColor: "rgba(226, 1, 119, 1)",
        topBarType: "default",
      };
  }
}
