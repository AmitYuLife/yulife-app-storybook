import { memo, useCallback } from "react";
import { TextInput, ScrollView } from "react-native";
import { Colours, StyleSheet } from "@styles";
import { Box, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Pressable } from "@molecules/index";
import { useTheme } from "@modules/themes/hooks/useTheme";

interface ITournament {
  id: string;
  name: string;
  teamName: string | null;
}

interface ITournamentDebugScreenProps {
  steps: string;
  onStepsChange: (value: string) => void;
  onAddSteps: () => void;
  onEndSelectedTournament: () => void;
  onCreateActiveTournament: () => void;
  isEndTournamentLoading: boolean;
  isResetDataLoading: boolean;
  onLeftIconPress: () => void;
  tournaments: ITournament[];
  selectedTournamentId: string | null;
  onSelectTournament: (id: string) => void;
  tournamentsLoading: boolean;
}

const TournamentDebugScreen = ({
  steps,
  onStepsChange,
  onAddSteps,
  onEndSelectedTournament,
  onCreateActiveTournament,
  isEndTournamentLoading,
  isResetDataLoading,
  onLeftIconPress,
  tournaments,
  selectedTournamentId,
  onSelectTournament,
  tournamentsLoading,
}: ITournamentDebugScreenProps) => {
  const { theme } = useTheme();
  const primaryColor = theme.colors.primary.p500;
  const noSelection = !selectedTournamentId;

  const renderButton = useCallback(
    (label: string, onPress: () => void, isLoading: boolean, disabled?: boolean) => (
      <Pressable
        enableAnimation={true}
        br={8}
        p={14}
        alignItems="center"
        bg={primaryColor}
        opacity={isLoading || disabled ? 0.4 : 1}
        onPress={onPress}
        disabled={isLoading || disabled}
      >
        <TextTemplate type="l1b" color="white">
          {isLoading ? "Loading..." : label}
        </TextTemplate>
      </Pressable>
    ),
    [primaryColor]
  );

  return (
    <Box flex={1} bg={Colours.neutral.n50}>
      <GenericHeadingPad />
      <GenericHeadingAbsolute heading="Tournament Debug" onLeftIconPress={onLeftIconPress} />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Box gap={8}>
          <TextTemplate type="b1b">Tournament Setup</TextTemplate>
          {renderButton("Create Active Tournament", onCreateActiveTournament, isResetDataLoading)}
        </Box>

        <Box mt={16} gap={8}>
          <TextTemplate type="b1b">Add Steps</TextTemplate>
          <TextInput
            value={steps}
            onChangeText={onStepsChange}
            keyboardType="number-pad"
            placeholder="Number of steps"
            style={styles.input}
          />
          {renderButton("Add Steps", onAddSteps, isResetDataLoading)}
        </Box>

        <Box my={16} h={1} bg={Colours.neutral.n200} />

        <TextTemplate type="b1b">Select Tournament</TextTemplate>

        {tournamentsLoading ? <TextTemplate type="l1">Loading tournaments...</TextTemplate> : null}

        {!tournamentsLoading && tournaments.length === 0 ? (
          <TextTemplate type="l1">No active tournaments found</TextTemplate>
        ) : null}

        {tournaments.map((t) => {
          const isSelected = selectedTournamentId === t.id;
          return (
            <Pressable
              key={t.id}
              enableAnimation={true}
              br={8}
              p={12}
              borderWidth={isSelected ? 2 : 1}
              borderColor={isSelected ? primaryColor : Colours.neutral.n100}
              bg={isSelected ? Colours.neutral.n50 : "white"}
              onPress={() => onSelectTournament(t.id)}
            >
              <TextTemplate type="l1b">{t.name}</TextTemplate>
              {t.teamName ? <TextTemplate type="l2">Team: {t.teamName}</TextTemplate> : null}
              <TextTemplate type="l2">{t.id}</TextTemplate>
            </Pressable>
          );
        })}

        {!noSelection ? (
          <Box mt={16} gap={8}>
            <TextTemplate type="l2b">End Tournament</TextTemplate>
            {renderButton("End Selected Tournament Early", onEndSelectedTournament, isEndTournamentLoading)}
          </Box>
        ) : null}
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingTop: 80,
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: Colours.neutral.n200,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "white",
  },
});

export default memo(TournamentDebugScreen);
