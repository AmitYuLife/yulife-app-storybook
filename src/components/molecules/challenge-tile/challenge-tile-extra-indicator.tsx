import { Box, TextTemplate, TimeCounter } from "@atoms";
import { EXTRA_CHALLENGE_INDICATOR } from "@ids";
import { Colours, Style, StyleSheet } from "@styles";
import { memo } from "react";
import { View } from "react-native";

interface IExtraChallengeIndicator {
  value: number;
  time: string;
}

const ChallengeTileExtraIndicator = ({ value, time }: IExtraChallengeIndicator) => {
  return (
    <Box
      style={styles.extraChallengeContainer}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      gap={5}
    >
      <Box gap={10} style={styles.extraChallengeTag} center={true}>
        <TextTemplate
          type="l3b"
          color={Colours.neutral.white}
          lineHeight={Style.adjust(14)}
          testID={EXTRA_CHALLENGE_INDICATOR(value)}
        >
          +{value}
        </TextTemplate>
      </Box>
      <View style={styles.timeContainer}>
        <TextTemplate type={"l3b"} color={Colours.primary.p600} lineHeight={Style.adjust(14)}>
          <TimeCounter time={time} />
        </TextTemplate>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  extraChallengeContainer: {
    height: Style.adjust(22),
    backgroundColor: Colours.neutral.white,
    borderRadius: 200,
    paddingStart: Style.adjust(2),
    paddingEnd: Style.adjust(5),
  },
  extraChallengeTag: {
    backgroundColor: Colours.primary.p600,
    height: Style.adjust(20),
    minWidth: Style.adjust(20),
    borderRadius: Style.adjust(100),
  },
  timeContainer: {
    width: Style.adjust(44),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default memo(ChallengeTileExtraIndicator);
