import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import HorizontalScroller from "./horizontal-scroller";

storiesOf("HorizontalScroller", module)
  .addDecorator((g: () => React.Component) => (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>{g()}</View>
  ))
  .add("default", () => <HorizontalScroller items={Array.from({ length: 50 }).map((_, i) => i)} />);
