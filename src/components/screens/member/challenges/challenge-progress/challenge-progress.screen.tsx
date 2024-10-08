import React, { memo, useCallback } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import styles from "./challenge-progress.screen.styles";
import Exit from "./subcomponents/exit";
import ProgressBar from "./subcomponents/progress-bar";
import { BUTTON_CLOSE_CHALLENGE, CHALLENGE_PROGRESS_BAR, CHALLENGE_PROGRESS_SCREEN } from "@ids";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { Image } from "@atoms";
import { PressableWithDelay, TertiaryButton } from "@molecules";
import { Style } from "@styles";
import { fromGql } from "@organisms/top-bar/top-bar.helpers";
import { useSelector } from "react-redux";
import { getActiveChallengeAppButton } from "@redux/levels/levels.selectors";
import { IActiveLevel } from "@redux/levels/levels.types";
import { handleLinkPress, openApp } from "@services/app-link";
import { QuestionMarkIcon } from "@atoms/icon/question-mark-icon";
import { t } from "@locale";
import { TopBarType } from "@graphql/__generated";
import { getChallengeDetailsData, useGetChallengeDetails, useUserFeatures } from "@hooks";

// transparent png 1x1
const empty_uri = {
  uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=",
};
interface IChallengeProgressScreenProps extends IConnectedScreenProps {
  challengeType: IActiveLevel["subtype"];
  levelSlotId: string;
  endDateTime: string;
  userProgress: number;
  progressTargets: number[];
  unit: IActiveLevel["unit"];
  onDismissPress: () => void;
  hideExternalLinks: boolean;
  level: number;
  levelSlotTemplateId: string;
  yuniversalMap?: number;
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
  level,
  levelSlotTemplateId,
  yuniversalMap,
}: IChallengeProgressScreenProps) {
  const appButton = useSelector(getActiveChallengeAppButton);
  const { tempGameUseSettingsConfigForQuestMapV3 } = useUserFeatures();

  const { data } = useGetChallengeDetails({
    slotId: levelSlotId,
    levelSlotTemplateId,
    level,
    yuniversalMap,
    tempGameUseSettingsConfigForQuestMapV3,
    fetchPolicy: "cache-only",
  });

  const {
    heading,
    topBarType = TopBarType.Default,
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
  } = getChallengeDetailsData(data) || {};

  const handleOpenApp = useCallback(async () => {
    if (appButton?.tutorialUrl) {
      return await handleLinkPress(appButton?.tutorialUrl)();
    }

    const { iosUrl, androidUrl, appName, appStoreId, appStoreLocale, playStoreId } = appButton?.options || {};
    const url = Platform.select({
      ios: iosUrl,
      android: androidUrl,
    });

    openApp(url, { appName, appStoreId, appStoreLocale, playStoreId });
  }, [appButton]);

  const openFaqUrl = useCallback(
    async () => await handleLinkPress(appButton?.options?.faqUrl || appButton?.tutorialUrl)(),
    [appButton?.options?.faqUrl, appButton?.tutorialUrl]
  );

  const menuLabel = heading || challengeType || "";
  return (
    <View
      style={StyleSheet.flatten([styles.wrapper, { backgroundColor: backgroundColour }])}
      testID={CHALLENGE_PROGRESS_SCREEN(challengeType)}
    >
      <GenericHeadingPad />
      <Image
        width={Style.DEVICE_WIDTH}
        height={Style.DEVICE_HEIGHT}
        resizeMode="cover"
        style={styles.backgroundImage}
        source={assets.backgroundImage}
      />
      <View style={styles.itemsWrapper}>
        <View testID={CHALLENGE_PROGRESS_BAR}>
          <ProgressBar
            title={menuLabel}
            amount={userProgress}
            goals={progressTargets}
            styleType={progressBar}
            type={unit}
          />
        </View>
        <View style={styles.exitChallengeWrapper} testID={BUTTON_CLOSE_CHALLENGE}>
          <Exit onPress={onDismissPress} {...actionStyles} />
        </View>
      </View>
      {hideExternalLinks || !appButton?.title ? null : (
        <View style={styles.meditationButtonWrapper}>
          <PressableWithDelay delay={1000} onPress={openFaqUrl} style={styles.faqUrl}>
            <QuestionMarkIcon width={Style.adjust(34)} height={Style.adjust(34)} />
          </PressableWithDelay>
          <TertiaryButton
            size="Large"
            label={appButton?.title.replace(t("labels.cta.use"), t("labels.cta.open"))}
            onPress={handleOpenApp}
            height={Style.adjust(48)}
            LeftIcon={
              <>
                {!appButton?.logo?.uri ? null : (
                  <Image
                    source={{
                      uri: appButton?.logo?.uri,
                    }}
                    style={styles.buttonLogo}
                    width={appButton?.width}
                    height={appButton?.height}
                  />
                )}
              </>
            }
          />
        </View>
      )}
      <TopBarAbsolute type={fromGql(topBarType)} onPressLeftIcon={onLeftMenuPress} timer={endDateTime} />
      <NavBar activeIndex={1} />
    </View>
  );
}

export default memo(ChallengeProgressScreen);
