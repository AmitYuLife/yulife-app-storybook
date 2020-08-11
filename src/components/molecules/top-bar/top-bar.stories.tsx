import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import moment from "moment";
import TopBar, { TOP_BAR_TYPES } from "./top-bar";

storiesOf("TopBar", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ position: "absolute", top: 0, left: 0, right: 0 }}>{g()}</View>
  ))
  .add("default", () => (
    <TopBar
      onPressLeftIcon={() => null}
      coins={number("coins", 0)}
      name={text("name", "name")}
      menuLabel={text("menuLabel", "")}
      leftIcon={TopBar.LeftIcon.BACK}
      middleLabel={text("middleLabel", "middleLabel")}
      type={TOP_BAR_TYPES.DEFAULT}
      shouldHighlightCoins={boolean("shouldHighlightCoins", false)}
    />
  ))
  .add("timer", () => (
    <TopBar
      onPressLeftIcon={() => null}
      coins={number("coins", 0)}
      timer={moment().add(1, "minute").toString()}
      name={text("name", "")}
      menuLabel={text("menuLabel", "brisk walk")}
      leftIcon={TopBar.LeftIcon.BACK}
      middleLabel={text("middleLabel", "middleLabel")}
      type={TOP_BAR_TYPES.DEFAULT}
      shouldHighlightCoins={boolean("shouldHighlightCoins", false)}
    />
  ));
