import React, { memo, useCallback } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextTemplate, Wrapper } from "@atoms";
import { Style, TOP_BAR } from "@styles";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { useBackHandler, useTranslation } from "@hooks";
import LeaderboardConsentImage from "@components/games/sudoku/leaderboard/LeaderboardConsentImage";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { Button } from "@components/molecules";
import { UpdateSudokuLeaderboardConsent, UpdateSudokuLeaderboardConsentVariables } from "@graphql/_core/schema";
import { useMutation } from "@apollo/client";
import { GQL_MUTATION_UPDATE_SUDOKU_LEADERBOARD_CONSENT } from "@graphql/brainGames/sudoku/updateSudokuLeaderboardConsent.gql";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

interface IProps {
  onConsented?: () => void;
}

const SudokuLeaderboardConsentModal = ({ onConsented }: IProps) => {
  const onClose = useCallback(() => Navigation.dismissModal(MODALS.sudokuLeaderboardConsent), []);
  const dispatch = useDispatch();
  const [updateSudokuLeaderboardConsent, { loading }] = useMutation<
    UpdateSudokuLeaderboardConsent,
    UpdateSudokuLeaderboardConsentVariables
  >(GQL_MUTATION_UPDATE_SUDOKU_LEADERBOARD_CONSENT);

  const t = useTranslation([
    "sudoku.leaderboard_consent.title",
    "sudoku.leaderboard_consent.description",
    "sudoku.leaderboard_consent.confirm",
  ]);

  useBackHandler(() => {
    onClose();
    return true;
  });

  const onSubmit = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("leaderboard_toggle", {
        name: "sudoku",
        isActive: true,
      })
    );

    updateSudokuLeaderboardConsent({
      variables: {
        consent: true,
      },
      onCompleted: () => {
        onClose();
        if (onConsented) {
          onConsented();
        }
      },
    });
  }, [dispatch, updateSudokuLeaderboardConsent, onClose, onConsented]);

  return (
    <>
      <GenericOverlay onClose={onClose}>
        <ScrollView contentContainerStyle={styles.wrapper}>
          <Wrapper alignItems="center">
            <View>
              <View style={styles.contentWrapper}>
                <LeaderboardConsentImage width={Style.DEVICE_WIDTH} />
                <View style={styles.textWrapper}>
                  <View style={styles.titleWrapper}>
                    <TextTemplate type={"h1"} textAlign="center">
                      {t["sudoku.leaderboard_consent.title"]}
                    </TextTemplate>
                  </View>
                  <TextTemplate type={"b2"} textAlign="center">
                    {t["sudoku.leaderboard_consent.description"]}
                  </TextTemplate>
                </View>
              </View>
              <Button onPress={onSubmit} isLoading={loading} label={t["sudoku.leaderboard_consent.confirm"]} />
            </View>
          </Wrapper>
        </ScrollView>
      </GenericOverlay>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    minHeight: Style.DEVICE_HEIGHT - TOP_BAR.TOP_BAR_WITH_PAD,
    paddingBottom: Style.adjust(80),
    justifyContent: "space-between",
  },

  contentWrapper: {
    flex: 1,
    marginBottom: Style.adjust(30),
  },

  textWrapper: {
    paddingHorizontal: 25,
  },

  titleWrapper: {
    marginTop: Style.adjust(30),
    marginBottom: Style.adjust(20),
  },
});

export default memo(SudokuLeaderboardConsentModal);
