import { memo, useEffect, useState } from "react";
import { Easing, runOnJS, useAnimatedReaction, useSharedValue, withTiming } from "react-native-reanimated";
import { Box, Image, TextTemplate } from "@atoms";
import { SMOKING_CARD } from "@ids";
import { Style } from "@styles";
import { extractNumericValue, formatAnimatedValue } from "./smoking-stats-entry.helpers";

const ICON_SIZE = 20;
const ANIMATION_DURATION = 1000;

type Props = {
  image: { uri: string; id?: string };
  value: string;
  title: string;
  animated?: boolean;
};

const SmokingStatsEntry = ({ image, value, title, animated = true }: Props) => {
  const animatedValue = useSharedValue(extractNumericValue(value));
  const [formattedValue, setFormattedValue] = useState(() => formatAnimatedValue(animatedValue.value, value));

  useEffect(() => {
    if (!animated) {
      animatedValue.value = extractNumericValue(value);
    }
  }, [animated, value]);

  useAnimatedReaction(
    () => extractNumericValue(value),
    (newNumericValue, prev) => {
      if (newNumericValue !== prev && animated) {
        animatedValue.value = withTiming(newNumericValue, {
          duration: ANIMATION_DURATION,
          easing: Easing.inOut(Easing.ease),
        });
      }
    }
  );

  useAnimatedReaction(
    () => formatAnimatedValue(animatedValue.value, value),
    (formatted) => {
      runOnJS(setFormattedValue)(formatted);
    }
  );

  return (
    <Box alignItems="center">
      <Box flexDirection="row" justifyContent="center" gap={4}>
        {image?.uri ? (
          <Image
            testID={SMOKING_CARD(image.id, value)}
            suppressLoadingUi={true}
            width={Style.adjust(ICON_SIZE)}
            height={Style.adjust(ICON_SIZE)}
            source={{ uri: image.uri }}
          />
        ) : null}
        <TextTemplate type="b1b">{formattedValue}</TextTemplate>
      </Box>
      <TextTemplate type="l3" textAlign="center">
        {title}
      </TextTemplate>
    </Box>
  );
};

export default memo(SmokingStatsEntry);
