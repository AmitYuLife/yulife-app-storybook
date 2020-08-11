import React from "react";
import { storiesOf } from "@storybook/react-native";
import PurchasesEmpty from "./purchases-empty";

function voidFunc(): void {
  return null;
}

storiesOf("PurchasesEmpty").add("default", () => (
  <PurchasesEmpty copy={{ ctaLabel: "hi", heading: "title", subheading: "subheading" }} onCtaPress={voidFunc} />
));
