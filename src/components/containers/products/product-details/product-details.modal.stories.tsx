import React, { ComponentProps } from "react";
import { storiesOf } from "@storybook/react-native";
import ProductDetailsModal from "./product-details.modal";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { PRODUCT_DETAILS_MODAL_FIXTURE } from "./product-details.modal.fixture";

const covers = [CoverType.common, CoverType.rare, CoverType.epic];

const defaults = PRODUCT_DETAILS_MODAL_FIXTURE as ComponentProps<typeof ProductDetailsModal>;

const NAME = "ProductDetailsModal";

for (const cover of covers) {
  storiesOf(NAME, module).add(cover, () => <ProductDetailsModal coverType={cover} {...defaults} />);
}
