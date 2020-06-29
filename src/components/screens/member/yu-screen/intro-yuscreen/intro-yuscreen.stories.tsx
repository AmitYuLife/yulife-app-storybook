import React, { ComponentProps } from "react";
import { storiesOf } from "@storybook/react-native";
import { YuScreenIntro } from "./intro-yuscreen";

const fillers = {
  setYuscreenIntroShown: () => null,
} as ComponentProps<typeof YuScreenIntro>;

storiesOf("YuScreenIntro").add("default", () => <YuScreenIntro {...fillers} />);
