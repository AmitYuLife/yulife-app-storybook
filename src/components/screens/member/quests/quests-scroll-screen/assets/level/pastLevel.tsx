import { Text } from "@atoms";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { LEVEL_STAR_COUNT } from "@ids";
import { Colours, Style } from "@styles";
import { CheckIcon } from "@atoms/icon/check";
import { Circle, ClipPath, Defs, G, Rect, Svg } from "react-native-svg";

type Props = {
  level: {
    level: number;
    rating?: number;
    id: string;
  };
  color: string;
  unCompleteStarColor: string;
};

export const PastLevel = memo(({ level }: Props) => (
  <View style={styles.column}>
    <View style={styles.textWrapper}>
      <Text style={styles.text}>{level.level}</Text>
    </View>
    <View style={styles.stars} testID={LEVEL_STAR_COUNT(level.rating)}>
      <CheckIcon fill={Colours.darkPink} strokeWidth={1} stroke={Colours.darkPink} />
    </View>
    <Svg style={styles.svgWrapper} width={Style.adjust(52)} height={Style.adjust(52)} viewBox="0 0 100 50">
      <Defs>
        <ClipPath id="clip">
          <Rect x="0" y="0" width="100" height="50" />
        </ClipPath>
      </Defs>
      <G x={-28} y={20} rotation={-45}>
        <Circle cx="50" cy="50" r="50" clipPath="url(#clip)" fill="rgba(255,255,255,0.4)" />
      </G>
    </Svg>
  </View>
));

const styles = StyleSheet.create({
  svgWrapper: {
    overflow: "hidden",
    borderRadius: Style.adjust(26),
    borderWidth: 1,
    borderColor: Colours.neutral.white,
  },
  text: {
    fontSize: Style.SCALE_UP_AND_DOWN(19),
    lineHeight: Style.SCALE_UP_AND_DOWN(19),
    textAlign: "center",
    color: "rgb(184,131,50)",
  },
  column: {
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    marginBottom: 2,
    position: "absolute",
    bottom: 24,
  },
  stars: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 12,
  },
});

export default styles;
