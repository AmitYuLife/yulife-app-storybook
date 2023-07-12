import React, { memo, useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { Button } from "@molecules";
import { useQuery } from "@apollo/client";
import { GetQuestMapLevelChallengeDetails, GetSudokuBoard } from "@graphql/_core/schema";
import { useSelector } from "react-redux";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { SUDOKU_PLANET_STYLES, SUDOKU_YUNIVERSAL_STYLES } from "../sudoku-game/sudoku.config";
import { getCurrentWorldName } from "@utils";
import { GQL_QUERY_GET_SUDOKU_BOARDS } from "@graphql/brainGames/sudoku/getSudokuBoards.gql";
import { Colours, Style } from "@styles";
import moment from "moment";
import { GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS } from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import { useTranslation } from "@hooks";
import { Image, TextTemplate } from "@atoms";
import SudokuDate from "@components/games/sudoku/sudoku-date";

interface IProps extends IConnectedScreenProps {
  levelSlotId: string;
  reward?: number;
  onDismissPress: () => void;
}

function SudokuProgressScreen({ levelSlotId, onDismissPress, onLeftMenuPress }: IProps) {
  const t = useTranslation([
    "labels.cta.quit",
    "labels.cta.cancel",
    "sudoku.progress.resume",
    "sudoku.progress.paused",
    "format.date_readable",
  ]);

  const { data: sudokuData } = useQuery<GetSudokuBoard>(GQL_QUERY_GET_SUDOKU_BOARDS, {
    fetchPolicy: "no-cache",
  });

  const { data: levelDetails } = useQuery<GetQuestMapLevelChallengeDetails>(GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS, {
    variables: { levelSlotId: levelSlotId },
  });

  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);

  const onResumePress = useCallback(() => {
    Navigation.push(ROUTES.quests, {
      component: {
        id: ROUTES.sudokuGame,
        name: ROUTES.sudokuGame,
        passProps: {
          levelSlotId,
        },
      },
    });
  }, [levelSlotId]);

  const currentStyle = useMemo(() => {
    if (yuniversalMap) {
      return SUDOKU_YUNIVERSAL_STYLES;
    }

    const worldName = getCurrentWorldName(currentLevel);
    return SUDOKU_PLANET_STYLES[worldName];
  }, [currentLevel, yuniversalMap]);

  const wrapperStyles = useMemo(
    () => [styles.wrapper, { backgroundColor: levelDetails?.getQuestMapLevelChallengeDetails?.backgroundColour }],
    [levelDetails]
  );

  const imageUri = useMemo(() => {
    return { uri: levelDetails?.getQuestMapLevelChallengeDetails?.assets?.backgroundImage?.uri };
  }, [levelDetails?.getQuestMapLevelChallengeDetails?.assets?.backgroundImage?.uri]);

  return (
    <>
      <View style={wrapperStyles}>
        <Image source={imageUri} width={Style.DEVICE_WIDTH * 2} style={styles.backgroundImage} resizeMode="contain" />

        <View style={styles.contentContainer}>
          <View>
            <GenericHeadingPad />

            <View style={styles.headerContainer}>
              <TextTemplate
                type="h1"
                color={levelDetails?.getQuestMapLevelChallengeDetails?.progressBar?.progressTextColor}
              >
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
              label={t["labels.cta.cancel"]}
              size="Medium"
            />
            <Button
              onPress={onResumePress}
              label={t["sudoku.progress.resume"]}
              size="Medium"
              wrapperStyle={styles.rightButton}
            />
          </View>
        </View>
      </View>
      <TopBarAbsolute type={currentStyle.topBarType} onPressLeftIcon={onLeftMenuPress} />
      <NavBar activeIndex={1} additionalBottom={2} />
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
    paddingBottom: Style.adjust(120),
  },
  leftButton: {
    marginRight: Style.adjust(10),
    flex: 1,
  },
  rightButton: {
    flex: 1,
    marginLeft: Style.adjust(10),
  },
  planetIcon: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Style.adjust(20),
    justifyContent: "space-between",
  },
  wrapper: {
    minHeight: Style.DEVICE_HEIGHT,
  },
  backgroundImage: {
    right: 0,
    bottom: 0,
    position: "absolute",
  },
});

export default memo(SudokuProgressScreen);
