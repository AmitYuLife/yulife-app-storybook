import React, { memo, useMemo } from "react";
import { CHALLENGE_SCREEN } from "@ids";
import { getTheme } from "@theme";
import { t } from "@locale";
import { ChallengeBackground } from "@atoms";
import { ChallengesList, ChallengesListAccessibility, IChallengesListProps } from "@molecules";
import { View } from "react-native";
import { GenericHeadingPad, TopBarAbsolute } from "@components/organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { useBackHandler, useScreenReaderChange } from "@hooks";
import InventoryBanner from "@components/molecules/inventory-banner/inventory-banner";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";
import { Style, StyleSheet } from "@styles";
import { useSelector } from "react-redux";
import { getInventoryItemCount } from "@redux/quest-map/quest-map.selectors";

interface IChallengeListScreenProps extends IChallengesListProps {
  currentLevel?: number;
  yuniversalMap?: number;
  name: string;
  onPressLeftIcon: () => void;
  onLayout?: () => void;
  challenges: IFormattedChallenge[];
  loading?: boolean;
  openConsumables?: () => void;
}

interface IFormattedChallenge {
  heading: string;
  currentWorld: number;
  duration: string;
  id: string;
  isLocked: boolean;
  availableAtLevel: number;
  onPress: () => void;
  reward: string;
  imageUri: string;
  hasSurge?: boolean;
  hasBonus?: boolean;
  extraChallenges?: {
    value: number;
    endDate: string;
  };
}

const ChallengesListScreen = ({
  challenges,
  currentLevel,
  yuniversalMap,
  onPressLeftIcon,
  loading,
  name,
  onLayout,
  openConsumables,
}: IChallengeListScreenProps) => {
  const inventoryItemCount = useSelector(getInventoryItemCount);
  const isScreenReaderEnabled = useScreenReaderChange();
  const challengeListScreen = useMemo(() => {
    return getTheme(currentLevel, yuniversalMap)?.challengeListScreen;
  }, [currentLevel, yuniversalMap]);

  useBackHandler(() => {
    onPressLeftIcon();
    return true;
  });

  return (
    <View style={styles.wrapper} testID={CHALLENGE_SCREEN} onLayout={onLayout}>
      <GenericHeadingPad />
      <ChallengeBackground
        source={challengeListScreen.backgroundImage}
        style={challengeListScreen.style}
        backgroundColor={challengeListScreen.style.backgroundColor}
      />
      <View style={styles.challengeSetWrapper}>
        {isScreenReaderEnabled ? (
          <ChallengesListAccessibility
            challenges={challenges}
            loading={loading}
            tileColour={challengeListScreen.tileBackgroundColour}
            durationColour={challengeListScreen.durationBackgroundColour}
            durationTextColour={challengeListScreen.durationTextColour}
          />
        ) : (
          <ChallengesList
            challenges={challenges}
            loading={loading}
            tileColour={challengeListScreen.tileBackgroundColour}
            durationColour={challengeListScreen.durationBackgroundColour}
            durationTextColour={challengeListScreen.durationTextColour}
          />
        )}
        {openConsumables ? (
          <View style={styles.inventoryBanner}>
            <InventoryBanner onPress={openConsumables} amount={inventoryItemCount} />
          </View>
        ) : null}
      </View>
      <TopBarAbsolute
        type={challengeListScreen.topBarType}
        leftIcon={LeftIcon.BACK}
        menuLabel={t("labels.quest_map")}
        name={name}
        onPressLeftIcon={onPressLeftIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inventoryBanner: {
    position: "absolute",
    top: 0,
  },
  challengeSetWrapper: {
    start: 0,
    end: 0,
    bottom: 0,
    alignItems: "center",
    position: "absolute",
    top: TOP_BAR_WITH_PAD,
    justifyContent: "center",
    paddingHorizontal: Style.adjust(16),
  },
  wrapper: {
    flex: 1,
  },
});

export default memo(ChallengesListScreen);
