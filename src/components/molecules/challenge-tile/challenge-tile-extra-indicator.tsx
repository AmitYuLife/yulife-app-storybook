import { Stack, TextTemplate, TimeCounter } from "@atoms";
import { Colours, Style } from "@styles";
import { memo } from "react";
import { StyleSheet, View } from "react-native";

interface IExtraChallengeIndicator {
  value: number;
  time: string;
}

const ChallengeTileExtraIndicator = ({ value, time }: IExtraChallengeIndicator) => {
  return (
    <Stack
      style={styles.extraChallengeContainer}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={Style.adjust(5)}
    >
      <Stack style={styles.extraChallengeTag} center={true}>
        <TextTemplate type="l3b" color={Colours.neutral.white} lineHeight={Style.adjust(14)}>
          +{value}
        </TextTemplate>
      </Stack>
      <View style={styles.timeContainer}>
        <TextTemplate type={"l3b"} color={Colours.primary.p600} lineHeight={Style.adjust(14)}>
          <TimeCounter time={time} />
        </TextTemplate>
      </View>
    </Stack>
  );
};

const styles = StyleSheet.create({
  extraChallengeContainer: {
    height: Style.adjust(22),
    backgroundColor: Colours.neutral.white,
    borderRadius: 200,
    paddingLeft: Style.adjust(2),
    paddingRight: Style.adjust(5),
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
