import React, { memo, useCallback } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextTemplate, Wrapper } from "@atoms";
import { Style } from "@styles";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { useBackHandler, useTranslation } from "@hooks";
import LeaderboardConsentImage from "@components/games/sudoku/leaderboard/LeaderboardConsentImage";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { Button } from "@components/molecules";
import { UpdateSudokuLeaderboardConsent, UpdateSudokuLeaderboardConsentVariables } from "@graphql/_core/schema";
import { useMutation } from "@apollo/client";
import { GQL_MUTATION_UPDATE_SUDOKU_LEADERBOARD_CONSENT } from "@graphql/brainGames/sudoku/updateSudokuLeaderboardConsent.gql";

interface IProps {
  onConsented: () => void;
}

const SudokuLeaderboardConsentModal = ({ onConsented }: IProps) => {
  const onClose = useCallback(() => Navigation.dismissModal(MODALS.sudokuLeaderboardConsent), []);
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
    updateSudokuLeaderboardConsent({
      variables: {
        consent: true,
      },
      refetchQueries: ["GetSudokuBoard"],
      onCompleted: () => {
        onClose();
        onConsented();
      },
    });
  }, [updateSudokuLeaderboardConsent, onConsented, onClose]);

  return (
    <>
      <GenericOverlay onClose={onClose}>
        <ScrollView contentContainerStyle={styles.wrapper}>
          <Wrapper alignItems="center">
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
          </Wrapper>
        </ScrollView>
      </GenericOverlay>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },

  contentWrapper: {
    marginBottom: Style.adjust(20),
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
