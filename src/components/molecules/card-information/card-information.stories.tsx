import React from "react";
import { storiesOf } from "@storybook/react-native";
import CardInformation from "./card-information";
import { ScrollView } from "react-native";
import { ITextTemplateType } from "@atoms/text/text-template";

const marginBottom = 8;
const accessDetails = {
  test: [
    { name: "Title", type: "b2b" as ITextTemplateType, separator: false, style: { marginBottom } },
    { name: "Test12345", type: "b2" as ITextTemplateType, separator: true },
    { name: "Test12345", type: "h1" as ITextTemplateType, separator: false },
  ],
};

storiesOf("CardInformation", module).add("default", () => {
  return (
    <ScrollView style={{ margin: 30 }}>
      <CardInformation items={accessDetails.test} />
    </ScrollView>
  );
});
