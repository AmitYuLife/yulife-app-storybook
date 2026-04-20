import { ScrollView } from "react-native";
import React, { memo } from "react";

import { Colours, Style } from "@styles";
import { Box, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet } from "@styles";
import { PADDING_TOP } from "@styles/top-bar.styles";

interface ITournamentHowToPlayScreenProps {
  aboutTitle?: string;
  aboutMarkdown?: string;
  onClose: () => void;
}

const TournamentHowToPlayScreen = ({ aboutTitle, aboutMarkdown, onClose }: ITournamentHowToPlayScreenProps) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Box flexGrow={1} bg={Colours.neutral.white}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: bottom + Style.adjust(40) }}
      >
        <Box px={24}>
          <TextTemplate type="h2" color={Colours.neutral.n900}>
            {aboutTitle || "How to play"}
          </TextTemplate>
          {aboutMarkdown ? (
            <Box mt={16}>
              <TextTemplate type="b2" color={Colours.neutral.n900}>
                {aboutMarkdown}
              </TextTemplate>
            </Box>
          ) : null}
        </Box>
      </ScrollView>
      <GenericHeadingAbsolute
        heading={<Box />}
        color={Colours.neutral.n900}
        rightIcon="CLOSE"
        onRightIconPress={onClose}
        backgroundColor={Colours.neutral.white}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingTop: PADDING_TOP + Style.adjust(44),
  },
});

export default memo(TournamentHowToPlayScreen);
