import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import moment from "moment";
import TopBar from "./top-bar";
import { TOP_BAR_TYPES } from "./top-bar.helpers";
import { LeftIcon } from "./subcomponents/left";

storiesOf("TopBar", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ position: "absolute", top: 0, left: 0, right: 0 }}>{g()}</View>
  ))
  .add("default", () => (
    <TopBar
      onPressLeftIcon={() => null}
      name={text("name", "name")}
      menuLabel={text("menuLabel", "")}
      leftIcon={LeftIcon.BACK}
      middleLabel={text("middleLabel", "middleLabel")}
      type={TOP_BAR_TYPES.DEFAULT}
      shouldHighlightCoins={boolean("shouldHighlightCoins", false)}
    />
  ))
  .add("timer", () => (
    <TopBar
      onPressLeftIcon={() => null}
      timer={moment().add(1, "minute").toString()}
      name={text("name", "")}
      menuLabel={text("menuLabel", "brisk walk")}
      leftIcon={LeftIcon.BACK}
      middleLabel={text("middleLabel", "middleLabel")}
      type={TOP_BAR_TYPES.DEFAULT}
      shouldHighlightCoins={boolean("shouldHighlightCoins", false)}
    />
  ));
