import { AnimatedPlants } from "@components/molecules/animated-plants/animated-plants";
import { Navigation } from "@navigation/main";
import { useNavigation } from "@navigation/navigation.context";
import { GenericHeadingAbsolute } from "@organisms";
import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { COMPONENT_PROPS } from "./fixtures";
import { Box, TextTemplate } from "@atoms";
import { AnimationModes } from "./types";
import { Colours } from "@styles";

const SmokingJourneyPlants = () => {
  const { componentId } = useNavigation();
  const [animationState, setAnimationState] = useState(COMPONENT_PROPS[AnimationModes.reset]);

  return (
    <Box flex={1} bg={Colours.neutral.n20}>
      <ScrollView>
        <Box h={100} />
        <Box flexDirection="row" justifyContent="space-around">
          {Object.keys(AnimationModes).map((mode) => (
            <TouchableOpacity
              key={mode}
              onPress={() => setAnimationState(COMPONENT_PROPS[mode as keyof typeof AnimationModes])}
            >
              <TextTemplate color={Colours.primary.p600} type="b2b">
                {mode}
              </TextTemplate>
            </TouchableOpacity>
          ))}
        </Box>
        <Box h={200} />
        <AnimatedPlants {...animationState} />
      </ScrollView>
      <GenericHeadingAbsolute onLeftIconPress={() => Navigation.pop(componentId)} />
    </Box>
  );
};

export default SmokingJourneyPlants;
