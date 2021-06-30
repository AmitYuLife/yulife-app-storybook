import React from "react";
import { storiesOf } from "@storybook/react-native";
import HeadingAndCopy from "./heading-and-copy";
import { ScrollView } from "react-native";

storiesOf("HeadingAndCopy", module).add("default", () => {
  return (
    <ScrollView style={{ margin: 30 }}>
      <HeadingAndCopy
        title="Accessing YuDoc"
        markdown="To create a profile and request services you will need your policy number, found below."
      />
      <HeadingAndCopy
        title="Accessing YuDoc"
        markdown="To create a profile and request services you will need your policy number, found below."
      />
      <HeadingAndCopy
        title="Accessing YuDoc"
        markdown="To create a profile and request services you will need your policy number, found below."
      />
      <HeadingAndCopy
        title="Accessing YuDoc"
        markdown="To create a profile and request services you will need your policy number, found below."
      />
    </ScrollView>
  );
});
