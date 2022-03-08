import React from "react";
import { ScrollView } from "react-native";
import { ConnectCheckList } from "@molecules";
import { withDesign } from "storybook-addon-designs";

export const ConnectCheckListStories = () => {
  return (
    <ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1, alignItems: "center", margin: 24 }}>
      <ConnectCheckList setSelectedFitkitPlatform={() => null} />
    </ScrollView>
  );
};

export default {
  title: "ConnectCheckListStories",
  component: ConnectCheckListStories,
  decorators: [withDesign],
};

ConnectCheckListStories.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/aqR7gakwbE3MMtwvneCo4J/Intro-Copy-%26-Samsung-Health?node-id=246%3A5068",
  },
};
