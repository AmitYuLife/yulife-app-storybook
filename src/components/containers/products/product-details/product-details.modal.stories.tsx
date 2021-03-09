import React, { ComponentProps } from "react";
import { storiesOf } from "@storybook/react-native";
import ProductDetailsModal from "./product-details.modal";
import { CoverType } from "@graphql/_core/schema/globalTypes";

const defaults = {
  keyValuePairs: [
    {
      label: "Client name",
      value: "Mario Balotelli",
    },
    {
      label: "Company name",
      value: "Yulife Ltd.",
    },
    {
      label: "Policy number",
      value: "JE00827Q3481",
    },
    {
      label: "Date joined",
      value: "17/03/19",
    },
  ],
  title: "Group Life Insurance",
  content: [
    {
      type: "pair",
      content: {
        label: "Total cover",
        value: "6x salary",
      },
    },
    {
      type: "body",
      content: "In the event of a claim your loved ones will receive a single payment equal to 6x your salary.",
    },
    {
      type: "pair",
      content: {
        label: "Paid as",
        value: "Lump sum",
      },
    },
  ],
} as ComponentProps<typeof ProductDetailsModal>;

const covers = [CoverType.common, CoverType.rare, CoverType.epic];

const NAME = "ProductDetailsModal";

for (const cover of covers) {
  storiesOf(NAME, module).add(cover, () => <ProductDetailsModal coverType={cover} {...defaults} />);
}
