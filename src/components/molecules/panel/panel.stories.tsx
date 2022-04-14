import React from "react";
import { ScrollView } from "react-native";
import { withDesign } from "storybook-addon-designs";
import Panel from "./panel";

const onClose = () => console.log("closed");

export const PanelStories = () => (
  <ScrollView>
    {[0, 1, 2, 3].map((currentWorld) => (
      <Panel
        key={currentWorld}
        title="Stay tuned!"
        description="The next event will start soon."
        currentWorld={currentWorld}
        onClose={onClose}
      />
    ))}
  </ScrollView>
);

export default {
  title: "Panel",
  component: PanelStories,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/IOfxRbpijIIG5JnM7iisb3/Event-System?node-id=3462%3A168943",
    },
  },
};
