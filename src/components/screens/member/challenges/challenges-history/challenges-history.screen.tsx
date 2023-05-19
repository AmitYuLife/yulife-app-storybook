import React, { memo } from "react";
import { Button } from "@molecules";
import { GetQuestMapLevel_getQuestMapLevel } from "@graphql/_core/schema";
import { Image as RNImage, ScrollView, View } from "react-native";
import { IConnectedScreenProps } from "@app/typings";
import ChallengesHistorySlot from "./challenges-history-slot";
import styles from "./challenges-history.screen.styles";
import { NavBar, TopBarAbsolute, GenericHeadingPad } from "@components/organisms";
import { getCurrentWorld } from "@utils";
import { getTheme } from "@theme";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { t } from "@locale";
import { SudokuHistoryButton } from "@components/games/sudoku/sudoku-history-button";

interface IProps extends IConnectedScreenProps {
  level: GetQuestMapLevel_getQuestMapLevel;
  yuniversalMap?: number;
  name: string;
  onPressActivityHistory: () => void;
  onPressCta: () => void;
  componentId?: string;
  showSudokuLeaderboard?: boolean;
}

function ChallengesHistory({
  level,
  yuniversalMap,
  componentId,
  name,
  onPressActivityHistory,
  showSudokuLeaderboard,
  onLeftMenuPress,
}: IProps) {
  const normalizedWorld = getCurrentWorld(level?.level);
  const { challengeHistoryScreen } = getTheme(level?.level, yuniversalMap);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={challengeHistoryScreen.style}>
        <RNImage resizeMode="cover" style={styles.background} source={challengeHistoryScreen.backgroundImage} />
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
                type={slot.subtype}
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
        {showSudokuLeaderboard ? <SudokuHistoryButton level={level.level} componentId={componentId} /> : null}
        <Button onPress={onPressActivityHistory} label={t("screens.challenges.history.full_button_label")} />
      </View>
      <TopBarAbsolute
        leftIcon={LeftIcon.BACK}
        menuLabel={t("screens.challenges.history.menu_label")}
        name={name}
        onPressLeftIcon={onLeftMenuPress}
        type={challengeHistoryScreen.topBarType}
      />
      <NavBar activeIndex={1} />
    </View>
  );
}

export default memo(ChallengesHistory);
