import React from "react";
import { storiesOf } from "@storybook/react-native";
import ProductDetails from "./product-details";

storiesOf("ProductDetails", module).add("charm", () => (
  <ProductDetails
    onExitConfirmed={(): void => null}
    productType="charm"
    product={{
      productId: "alpha",
      earnRate: 10,
      description: `You've earned an Alpha Charm! As an early adopter of YuLife, you earn <bold>10x</bold> YuCoin.`,
      name: "Alpha Charm",
      active: true,
      icon: "Alpha",
      policyNumber: "QQQ_001",
    }}
  />
));
