import { TextTemplate } from "@atoms";
import { Colours } from "@styles";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { withDesign } from "storybook-addon-designs";
import BoxOption from "./box-option";

const BoxOptionWrapper = ({ children }: Partial<React.ComponentProps<typeof BoxOption>>) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <BoxOption
      isSelected={isSelected}
      onPress={() => setIsSelected((s) => !s)}
      selectedStyle={{
        backgroundColor: Colours.neutral.white,
        borderColor: Colours.metallic.m100,
      }}
    >
      {children}
    </BoxOption>
  );
};

export const BoxOptionStory = () => (
  <ScrollView>
    <BoxOptionWrapper>
      <TextTemplate type="b2b">Here</TextTemplate>
    </BoxOptionWrapper>
  </ScrollView>
);

export default {
  title: "BoxOption",
  component: BoxOptionStory,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hP6A0VWj7VesUKxEWD8byE/Rewards-2.0?node-id=594%3A9118",
    },
  },
};
