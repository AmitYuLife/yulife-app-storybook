import React, { memo, useState, useMemo, useCallback } from "react";
import { CHALLENGE_SCREEN } from "@ids";
import { getTheme } from "@theme";
import { t } from "@locale";
import { ChallengeBackground } from "@atoms";
import { ChallengesList, IChallengesListProps } from "@molecules/index";
import { View } from "react-native";
import styles from "./challenges-list.screen.styles";
import { GenericHeadingPad, TopBarAbsolute } from "@components/organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { useBackHandler } from "@hooks";

interface IChallengeListScreenProps extends IChallengesListProps {
  currentLevel?: number;
  yuniversalMap?: number;
  name: string;
  onPressLeftIcon: () => void;
  onLayout?: () => void;
  challenges: IFormattedChallenge[];
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
}

const ChallengesListScreen = ({
  challenges,
  currentLevel,
  yuniversalMap,
  onPressLeftIcon,
  name,
  onLayout,
}: IChallengeListScreenProps) => {
  const [hideChallengeTiles, setHideChallengeTiles] = useState<boolean>(true);
  const challengeListScreen = useMemo(() => {
    return getTheme(currentLevel, yuniversalMap)?.challengeListScreen;
  }, [currentLevel, yuniversalMap]);

  // No idea why this timeout is needed... it's likely not
  const showChallengeTiles = useCallback(() => {
    setTimeout(() => {
      setHideChallengeTiles(false);
    }, 120);
  }, []);

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
        onLayout={showChallengeTiles}
      />
      <View style={styles.challengeSetWrapper}>
        {hideChallengeTiles ? null : (
          <ChallengesList
            challenges={challenges}
            tileColour={challengeListScreen.tileBackgroundColour}
            durationColour={challengeListScreen.durationBackgroundColour}
            durationTextColour={challengeListScreen.durationTextColour}
          />
        )}
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

export default memo(ChallengesListScreen);
