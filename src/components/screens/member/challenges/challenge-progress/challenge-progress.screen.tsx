import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import styles from "./challenge-progress.screen.styles";
import Exit from "./subcomponents/exit";
import ProgressBar from "./subcomponents/progress-bar";
import { ChallengeType } from "@molecules/challenge-tile/challenge-tile.types";
import { BUTTON_CLOSE_CHALLENGE, CHALLENGE_PROGRESS_BAR } from "@ids";
import { NavBar } from "@components/organisms";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { Image } from "@atoms";
import { SecondaryButton } from "@molecules";
import { ExternalAppLinksOverlay } from "./subcomponents/external-app-links-overlay";
import { Style } from "@styles";
import { TopBarType } from "@graphql/_core/schema/globalTypes";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS } from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import { GetQuestMapLevelChallengeDetails, GetQuestMapLevelChallengeDetailsVariables } from "@graphql/_core/schema";
import { fromGql } from "@organisms/top-bar/top-bar.helpers";

// transparent png 1x1
const empty_uri = {
  uri:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=",
};
interface IProps extends IConnectedScreenProps {
  challengeType: ChallengeType;
  levelSlotId: string;
  endDateTime: string;
  userProgress: number;
  progressTargets: number[];
  unit: "steps" | "minutes";
  onDismissPress: () => void;
  hideExternalLinks: boolean;
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
  hideExternalLinks,
}: IProps) {
  const [showOverlay, setShowOverlay] = React.useState(false);

  const { secondaryButtonCtaLabel } = getButtonCtaLabel(challengeType);

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
      backgroundImage: empty_uri,
      detailsImage: empty_uri,
      tileImage: empty_uri,
      historyImage: empty_uri,
    },
    actionStyles = {
      primaryColour: "white",
      secondaryColour: "#BCBCBC",
    },
  } = data?.getQuestMapLevelChallengeDetails || {};

  React.useEffect(() => {
    if (!hideExternalLinks) {
      setShowOverlay(true);
    }
  }, [!hideExternalLinks]);

  return (
    <View style={StyleSheet.flatten([styles.wrapper, { backgroundColor: backgroundColour }])}>
      <View style={styles.pad} />
      <Image
        width={Style.DEVICE_WIDTH}
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
      {hideExternalLinks ? null : (
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

const getButtonCtaLabel = (challengeType: ChallengeType) => {
  switch (challengeType) {
    case "fiit":
      return {
        secondaryButtonCtaLabel: "Open Fiit",
      };
    case "meditation":
      return {
        secondaryButtonCtaLabel: "Open a meditation app",
      };
    default:
      return {};
  }
};
