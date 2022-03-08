import React from "react";
import { ScrollView, View } from "react-native";
import Icon from "./index";
import { withDesign } from "storybook-addon-designs";

export const Icons = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      {Object.keys(Icon).map((item) => (
        <View key={item}>
          {React.createElement((Icon as any)[item])}
          <Pad />
        </View>
      ))}
    </ScrollView>
  );
};

const Pad = ({ height = 24 }) => <View style={{ height }} />;

export default {
  title: "Icons",
  component: Icons,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/QQgTuZO6eNRfWUDTTmsov3/Surge-Signposting-MVP?node-id=594%3A34643",
    },
  },
};
