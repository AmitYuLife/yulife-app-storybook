import React from "react";
import { storiesOf } from "@storybook/react-native";
import PurchasesEmpty from "./purchases-empty";

function voidFunc(): void {
  return null;
}

storiesOf("PurchasesEmpty", module).add("default", () => <PurchasesEmpty onCtaPress={voidFunc} />);
