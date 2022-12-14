import React, { memo } from "react";
import { Button } from "@molecules";
import { GetQuestMapLevel_getQuestMapLevel } from "@graphql/_core/schema";
import { Image as RNImage, ScrollView, View } from "react-native";
import { IConnectedScreenProps } from "@app/typings";
import ChallengesHistorySlot from "./challenges-history-slot";
import styles from "./challenges-history.screen.styles";
import { TopBar, NavBar } from "@components/organisms";
import { getCurrentWorld } from "@utils";
import { getTheme } from "@theme";

interface IProps extends IConnectedScreenProps {
  level: GetQuestMapLevel_getQuestMapLevel;
  yuniversalMap?: number;
  name: string;
  onPressActivityHistory: () => void;
  onPressCta: () => void;
}

function ChallengesHistory({ level, yuniversalMap, name, onPressActivityHistory, onLeftMenuPress }: IProps) {
  const normalizedWorld = getCurrentWorld(level?.level);
  const { challengeHistoryScreen } = getTheme(level?.level, yuniversalMap);

  return (
    <View style={styles.wrapper}>
      <View style={styles.topPad} />
      <View style={challengeHistoryScreen.style}>
        <RNImage resizeMode="cover" style={styles.background} source={challengeHistoryScreen.backgroundImage} />
      </View>
      <View style={styles.topBarWrapper}>
        <TopBar
          leftIcon="Back"
          menuLabel="map"
          name={name}
          onPressLeftIcon={onLeftMenuPress}
          type={challengeHistoryScreen.topBarType}
        />
      </View>
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
                yuniversalMap={yuniversalMap}
              />
            ) : null
          )}
        </ScrollView>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button onPress={onPressActivityHistory} label="Full history" />
      </View>
      <NavBar activeIndex={1} />
    </View>
  );
}

export default memo(ChallengesHistory);
