import { Box, TextTemplate } from "@atoms";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { LEVEL_STAR_COUNT } from "@ids";
import { Colours, Style } from "@styles";
import { CheckIcon } from "@atoms/icon/check";
import { CIRCLE_SIZE, CIRCLE_SIZE_UNADJUSTED } from "./level.styles";

type Props = {
  level: {
    level: number;
    rating?: number;
    id: string;
  };
  color: string;
  unCompleteStarColor: string;
};

const OVERLAY_POSITION = -CIRCLE_SIZE / 2.5;
const BORDER_RADIUS = 999;

export const PastLevel = memo(({ level }: Props) => (
  <View style={styles.column}>
    <Box size={CIRCLE_SIZE_UNADJUSTED} overflow="hidden" br={BORDER_RADIUS}>
      <Box
        size={CIRCLE_SIZE_UNADJUSTED}
        borderTopLeftRadius={BORDER_RADIUS}
        borderTopRightRadius={BORDER_RADIUS}
        bg={Colours.neutral.white}
        opacity={0.5}
        top={OVERLAY_POSITION}
        left={OVERLAY_POSITION}
        transform={[{ rotate: "-45deg" }]}
      />
    </Box>
    <View style={styles.textWrapper}>
      <TextTemplate type="b2" color="rgb(184,131,50)" textAlign="center">
        {level.level}
      </TextTemplate>
    </View>
    <View style={styles.stars} testID={LEVEL_STAR_COUNT(level.rating)}>
      <CheckIcon fill={Colours.darkPink} strokeWidth={1} stroke={Colours.darkPink} />
    </View>
  </View>
));

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    position: "absolute",
    bottom: Style.adjust(24),
  },
  stars: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: Style.adjust(12),
  },
});

export default styles;
