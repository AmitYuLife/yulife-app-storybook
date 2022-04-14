import React, { useState } from "react";
import { ScrollView } from "react-native";
import { withDesign } from "storybook-addon-designs";
import { ChipList } from "./chip-list";

const Wrapper = ({ chips }: { chips: string[] }) => {
  const [chip, setChip] = useState(chips[0]);

  return (
    <ChipList chips={chips.map((value) => ({ value, isSelected: chip === value, onPress: () => setChip(value) }))} />
  );
};

export const ChipListStory = () => (
  <ScrollView>
    <Wrapper chips={["All", "Europe", "America", "Asia", "Australia"]} />
  </ScrollView>
);

export default {
  title: "ChipList",
  component: ChipListStory,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hP6A0VWj7VesUKxEWD8byE/Rewards-2.0?node-id=594%3A9118",
    },
  },
};
