import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import GenericScreen from "./generic.screen";

const voidFunc: () => void = () => null;

storiesOf("GenericScreen", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <GenericScreen
      ctaLabel="Cta label"
      heading="Heading"
      subheading="Subheading"
      ctaLabelSecondary="Label 2"
      onPress={voidFunc}
      onPressSecondary={voidFunc}
    />
  ));
