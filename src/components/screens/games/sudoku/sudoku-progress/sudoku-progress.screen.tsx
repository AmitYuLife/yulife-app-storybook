import React, { memo, useCallback, useMemo } from "react";
import { View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { Button } from "@molecules";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { getActiveLevel, getCurrentLevel } from "@redux/levels/levels.selectors";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { SUDOKU_PLANET_STYLES, SUDOKU_YUNIVERSAL_STYLES } from "../sudoku-game/sudoku.config";
import { getCurrentWorldName } from "@utils";
import { gql } from "@graphql/__generated";
import { Colours, NAV_BAR, Style, StyleSheet } from "@styles";
import moment from "moment";
import { useTranslation } from "@hooks";
import { Box, Image, TextTemplate } from "@atoms";
import SudokuDate from "@components/games/sudoku/sudoku-date";
import { useGetChallengeDetails } from "@hooks";
import { getSudokuChallengeIdState } from "@redux/sudoku/sudoku.selectors";
import { sudokuStateChanged } from "@redux/sudoku/sudoku.actions";
import Logger from "@services/logging/logger";
import { useDispatch } from "react-redux";

interface IProps extends IConnectedScreenProps {
  challengeId: string;
  onDismissPress: () => void;
}

function SudokuProgressScreen({ challengeId, onDismissPress, onLeftMenuPress }: IProps) {
  const t = useTranslation([
    "labels.cta.quit",
    "labels.cta.cancel",
    "sudoku.progress.resume",
    "sudoku.progress.paused",
    "format.date_readable",
  ]);

  const { data: sudokuData } = useQuery(gql(`GetSudokuBoardDocument`), {
    fetchPolicy: "no-cache",
  });

  const activeLevel = useSelector(getActiveLevel);
  const currentLevel = useSelector(getCurrentLevel);
  const sudokuChallengeId = useSelector(getSudokuChallengeIdState);
  const dispatch = useDispatch();

  const { data: levelDetails } = useGetChallengeDetails({
    level: activeLevel.level,
    levelSlotTemplateId: activeLevel.levelSlotTemplateId,
    yuniversalMap: activeLevel.yuniversalMap,
  });

  const onResumePress = useCallback(() => {
    if (!sudokuChallengeId) {
      dispatch(sudokuStateChanged({ challengeId }));
    }

    Logger.logEvent("resume_sudoku_game", { challengeId: activeLevel.id });

    Navigation.push(ROUTES.quests, {
      component: {
        id: ROUTES.sudokuGame,
        name: ROUTES.sudokuGame,
        passProps: {
          challengeId,
        },
      },
    });
  }, [sudokuChallengeId, challengeId, dispatch, activeLevel.id]);

  const currentStyle = useMemo(() => {
    if (activeLevel.yuniversalMap) {
      return SUDOKU_YUNIVERSAL_STYLES;
    }

    const worldName = getCurrentWorldName(currentLevel);
    return SUDOKU_PLANET_STYLES[worldName];
  }, [currentLevel, activeLevel.yuniversalMap]);

  const challengeDetails = levelDetails?.getMobileQuestLevelChallengeDetails;

  const imageUri = useMemo(() => {
    return { uri: challengeDetails?.assets?.backgroundImage?.uri };
  }, [challengeDetails?.assets?.backgroundImage?.uri]);

  return (
    <>
      <Box flex={1} bg={challengeDetails?.backgroundColour} pb={NAV_BAR.getPositionBottom() + NAV_BAR.HEIGHT}>
        <Image source={imageUri} width={Style.DEVICE_WIDTH * 2} style={styles.backgroundImage} resizeMode="contain" />
        <Box flex={1} px={20} pb={30} justifyContent="space-between">
          <View>
            <GenericHeadingPad />

            <View style={styles.headerContainer}>
              <TextTemplate type="h1" color={challengeDetails?.progressBar?.progressTextColor}>
                {t["sudoku.progress.paused"]}
              </TextTemplate>
              <SudokuDate date={moment(sudokuData?.getSudokuBoard?.date).format(t["format.date_readable"])} />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              backgroundColor={Colours.neutral.white}
              textColor={Colours.products.fib.n800}
              shadowColor={Colours.sudoku.cancelShadow}
              onPress={onDismissPress}
              wrapperStyle={styles.leftButton}
              translationKey="labels.cta.cancel"
              size="Medium"
            />
            <Button
              onPress={onResumePress}
              translationKey="sudoku.progress.resume"
              size="Medium"
              wrapperStyle={styles.rightButton}
            />
          </View>
        </Box>
      </Box>
      <TopBarAbsolute type={currentStyle.topBarType} onPressLeftIcon={onLeftMenuPress} />
      <NavBar activeIndex={1} />
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: Style.adjust(5),
    paddingTop: Style.adjust(40),
    overflow: "hidden",
  },
  buttonsContainer: {
    flexDirection: "row",
    // Allow for the bottom bar
  },
  leftButton: {
    marginEnd: Style.adjust(10),
    flex: 1,
  },
  rightButton: {
    flex: 1,
    marginStart: Style.adjust(10),
  },
  planetIcon: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  backgroundImage: {
    right: 0,
    bottom: 0,
    position: "absolute",
  },
});

export default memo(SudokuProgressScreen);
