import React from "react";
import { ScrollView, View } from "react-native";
import { withDesign } from "storybook-addon-designs";
import InfoMessageTooltipPopup from "./info-tooltip-popup";

const INFO_TEXT =
  "From now you will be able to participate in future individual and community events. In community events you can work together with your colleagues and friends to achieve goals and win prizes.";
const TITLE = "Title";
const BUTTON_LABEL = "Got it";

export const TooltipPopupStory = () => (
  <ScrollView>
    <View style={{ height: 600, width: 300 }}>
      <InfoMessageTooltipPopup
        x={10}
        y={30}
        infoText={INFO_TEXT}
        beakPosition={"leftTop"}
        title={TITLE}
        buttonLabel={BUTTON_LABEL}
      />
      <InfoMessageTooltipPopup
        x={10}
        y={280}
        infoText={INFO_TEXT}
        beakPosition={"leftCenter"}
        title={TITLE}
        buttonLabel={BUTTON_LABEL}
      />
      <InfoMessageTooltipPopup
        x={10}
        y={530}
        infoText={INFO_TEXT}
        beakPosition={"leftBottom"}
        title={TITLE}
        buttonLabel={BUTTON_LABEL}
      />
    </View>
  </ScrollView>
);

export default {
  title: "TooltipPopup",
  component: TooltipPopupStory,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/aNnODOQlMlk38LrQVs63oq/App-System?node-id=7496%3A21012",
    },
  },
};
