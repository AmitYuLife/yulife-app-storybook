import React, { memo, useCallback } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import styles from "./challenge-progress.screen.styles";
import Exit from "./subcomponents/exit";
import ProgressBar from "./subcomponents/progress-bar";
import { ChallengeType } from "@molecules/challenge-tile/challenge-tile.types";
import { BUTTON_CLOSE_CHALLENGE, CHALLENGE_PROGRESS_BAR } from "@ids";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { Image } from "@atoms";
import { PressableWithDelay, SecondaryButton, TertiaryButton } from "@molecules";
import { ExternalAppLinksOverlay } from "./subcomponents/external-app-links-overlay";
import { Style } from "@styles";
import { TopBarType } from "@graphql/_core/schema/globalTypes";
import { useQuery } from "@apollo/client";
import { GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS } from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import { GetQuestMapLevelChallengeDetails, GetQuestMapLevelChallengeDetailsVariables } from "@graphql/_core/schema";
import { fromGql } from "@organisms/top-bar/top-bar.helpers";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getActiveChallengeAppButton } from "@redux/levels/levels.selectors";
import { handleLinkPress, openApp, openFiit } from "@services/app-link";
import { Fiit } from "@atoms/icon/fiit-icon";
import { QuestionMarkIcon } from "@atoms/icon/question-mark-icon";
import { t } from "@locale";

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
  const features = useSelector(getUserFeatures);
  const appButton = useSelector(getActiveChallengeAppButton);

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

  const handleOpenApp = useCallback(async () => {
    if (appButton?.tutorialUrl) {
      return await handleLinkPress(appButton?.tutorialUrl)();
    }

    const { iosUrl, androidUrl, appName, appStoreId, appStoreLocale, playStoreId } = appButton?.options;
    const url = Platform.select({
      ios: iosUrl,
      android: androidUrl,
    });

    openApp(url, { appName, appStoreId, appStoreLocale, playStoreId });
  }, [appButton]);

  const handleOpenFiit = useCallback(() => openFiit(), []);
  const openFaqUrl = useCallback(
    async () => await handleLinkPress(appButton?.options?.faqUrl || appButton?.tutorialUrl)(),
    [appButton?.options?.faqUrl, appButton?.tutorialUrl]
  );

  return (
    <View style={StyleSheet.flatten([styles.wrapper, { backgroundColor: backgroundColour }])}>
      <GenericHeadingPad />
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
          {!features?.newMediaPlayer ? (
            <SecondaryButton
              backgroundColor={actionStyles.primaryColour}
              borderColor={actionStyles.primaryColour}
              textColor={actionStyles.secondaryColour}
              onPress={() => setShowOverlay(true)}
              label={secondaryButtonCtaLabel}
              size="Medium"
            />
          ) : (
            <>
              {/* @TODO: Delete this when Fiit goes live, this a temp solution until Fiit media player goes live */}
              {!appButton ? (
                <TertiaryButton
                  size="Large"
                  label={t("screens.challenges.progress.open_fit_app")}
                  onPress={handleOpenFiit}
                  height={Style.adjust(48)}
                  LeftIcon={<Fiit colour="black" width={41} height={30} />}
                />
              ) : (
                <>
                  <PressableWithDelay onPress={openFaqUrl} style={styles.faqUrl}>
                    <QuestionMarkIcon width={Style.adjust(34)} height={Style.adjust(34)} />
                  </PressableWithDelay>
                  <TertiaryButton
                    size="Large"
                    label={appButton?.title}
                    onPress={handleOpenApp}
                    height={Style.adjust(48)}
                    LeftIcon={
                      <>
                        {!appButton?.logo?.uri ? null : (
                          <Image
                            source={{
                              uri: appButton?.logo?.uri,
                            }}
                            width={appButton?.width}
                            height={appButton?.height}
                          />
                        )}
                      </>
                    }
                  />
                </>
              )}
            </>
          )}
        </View>
      )}
      <TopBarAbsolute
        type={fromGql(topBarType)}
        menuLabel={challengeType}
        onPressLeftIcon={onLeftMenuPress}
        timer={endDateTime}
      />
      <NavBar activeIndex={1} additionalBottom={2} />

      {/* @TODO: Delete this when our new meditation be released to everyone */}
      {features?.newMediaPlayer ? null : (
        <ExternalAppLinksOverlay showScreen={showOverlay} setShowScreen={setShowOverlay} />
      )}
      {/*  */}
    </View>
  );
}

export default memo(ChallengeProgressScreen);

const getButtonCtaLabel = (challengeType: ChallengeType) => {
  switch (challengeType) {
    case "fiit":
      return {
        secondaryButtonCtaLabel: t("screens.challenges.progress.secondary_button_fiit_label"),
      };
    case "meditation":
      return {
        secondaryButtonCtaLabel: t("screens.challenges.progress.secondary_button_meditation_label"),
      };
    default:
      return {};
  }
};
