import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { IConnectedScreenProps } from "../../../../../typings";
import styles from "./challenge-progress.screen.styles";
import Exit from "./subcomponents/exit";
import ProgressBar from "./subcomponents/progress-bar";
import { ChallengeType } from "@molecules/challenge-tile/challenge-tile.types";
import { BUTTON_CLOSE_CHALLENGE, CHALLENGE_PROGRESS_BAR } from "@ids";
import { NavBar } from "@components/organisms";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { SecondaryButton } from "@atoms";
import { ExternalAppLinksOverlay } from "./subcomponents/external-app-links-overlay";
import { Style } from "@styles";
import { TopBarType } from "@graphql/_core/schema/globalTypes";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS } from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import { GetQuestMapLevelChallengeDetails, GetQuestMapLevelChallengeDetailsVariables } from "@graphql/_core/schema";
import { fromGql } from "@organisms/top-bar/top-bar.helpers";

interface IProps extends IConnectedScreenProps {
  challengeType: ChallengeType;
  levelSlotId: string;
  endDateTime: string;
  userProgress: number;
  progressTargets: number[];
  unit: "steps" | "minutes";
  onDismissPress: () => void;
}

function ChallengeProgressScreen({
  challengeType,
  levelSlotId,
  endDateTime,
  onDismissPress,
  onLeftMenuPress,
  progressTargets,
  unit,
  userProgress,
}: IProps) {
  const [showOverlay, setShowOverlay] = React.useState(false);

  const { hasExternalLinks, secondaryButtonCtaLabel } = getHasExternalLinks(challengeType);

  const { data } = useQuery<GetQuestMapLevelChallengeDetails, GetQuestMapLevelChallengeDetailsVariables>(
    GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS,
    {
      variables: { levelSlotId },
      fetchPolicy: "cache-only",
    }
  );

  const {
    topBarType = TopBarType.DEFAULT,
    backgroundColour = "rgb(255,255,255)",
    progressBar = {
      name: "black",
      barColor: "rgb(233, 233, 233)",
      goalTextColor: "black",
      progressColor: "black",
      progressGoalEmpty: "rgb(233, 233, 233)",
      progressGoalFilled: "#000",
      progressStarEmpty: "#FFF",
      progressStarFilled: "#F1AF00",
      progressTextColor: "black",
    },
    assets = {
      backgroundImage: null,
      detailsImage: null,
      tileImage: null,
      historyImage: null,
    },
    actionStyles = {
      primaryColour: "white",
      secondaryColour: "#BCBCBC",
    },
  } = data?.getQuestMapLevelChallengeDetails || {};

  React.useEffect(() => {
    if (hasExternalLinks) {
      setShowOverlay(true);
    }
  }, [hasExternalLinks]);

  return (
    <View style={StyleSheet.flatten([styles.wrapper, { backgroundColor: backgroundColour }])}>
      <View style={styles.pad} />
      <AutoHeightImage
        width={Style.DEVICE_WIDTH}
        resizeMethod="resize"
        resizeMode="cover"
        style={styles.backgroundImage}
        source={assets.backgroundImage}
      />
      <View style={styles.itemsWrapper}>
        <View testID={CHALLENGE_PROGRESS_BAR}>
          <ProgressBar amount={userProgress} goals={progressTargets} styleType={progressBar} type={unit} />
        </View>
        <View style={styles.exitChallengeWrapper} testID={BUTTON_CLOSE_CHALLENGE}>
          <Exit onPress={onDismissPress} {...actionStyles} />
        </View>
      </View>
      {!hasExternalLinks ? null : (
        <View style={styles.meditationButtonWrapper}>
          <SecondaryButton
            backgroundColor={actionStyles.primaryColour}
            borderColor={actionStyles.primaryColour}
            textColor={actionStyles.secondaryColour}
            onPress={() => setShowOverlay(true)}
            label={secondaryButtonCtaLabel}
            size="Medium"
          />
        </View>
      )}
      <TopBarAbsolute
        type={fromGql(topBarType)}
        menuLabel={challengeType}
        onPressLeftIcon={onLeftMenuPress}
        timer={endDateTime}
      />
      <NavBar activeIndex={1} additionalBottom={2} />
      <ExternalAppLinksOverlay showScreen={showOverlay} setShowScreen={setShowOverlay} />
    </View>
  );
}

export default memo(ChallengeProgressScreen);

const getHasExternalLinks = (challengeType: ChallengeType) => {
  switch (challengeType) {
    case "fiit":
      return {
        hasExternalLinks: true,
        secondaryButtonCtaLabel: "Open Fiit",
      };
    case "meditation":
      return {
        hasExternalLinks: true,
        secondaryButtonCtaLabel: "Open a meditation app",
      };
    default:
      return {
        hasExternalLinks: false,
      };
  }
};
