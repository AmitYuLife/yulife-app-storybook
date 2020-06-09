import React from "react";
import { storiesOf } from "@storybook/react-native";
import Heading from "./heading";

storiesOf("Heading")
  .add("small", () => {
    return (
      <Heading size="small" label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mauris felis." />
    );
  })
  .add("regular", () => {
    return <Heading label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mauris felis." />;
  })
  .add("large", () => {
    return (
      <Heading size="large" label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mauris felis." />
    );
  })
  .add("bold", () => {
    return (
      <Heading
        size="large"
        bold
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mauris felis."
      />
    );
  });
