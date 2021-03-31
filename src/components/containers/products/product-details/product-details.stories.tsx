import React, { ComponentProps } from "react";
import { storiesOf } from "@storybook/react-native";
import { ProductDetailsScreen } from "./product-details.screen";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { PRODUCT_DETAILS_MODAL_FIXTURE } from "./product-details.modal.fixture";
import ProductDetailsModal from "./product-details.modal";

const NAME = "ProductDetailsScreen";

const covers = [CoverType.common, CoverType.rare, CoverType.epic];

for (const cover of covers) {
  storiesOf(NAME, module).add(cover, () => (
    <ProductDetailsScreen
      coverType={cover}
      productName="Group Life Insurance"
      productIconUri="http://res.cloudinary.com/yu-life-develop/image/upload/s--dJggb3aZ--/h_200,w_200/v1/api/local/yuscreen_products_assets/default/compass_active.png"
      benefitDescription="x salary as lump sum"
      benefitValue="6"
      yuCoinDescription="YuCoin Power"
      yuCoinValue="20"
      benefitDescriptionLong="Your loved ones will receive a single payment equal to £1000000 in the event of a claim."
      lastUpdated="Policy last updated on 17/03/2020"
      modalProps={PRODUCT_DETAILS_MODAL_FIXTURE as ComponentProps<typeof ProductDetailsModal>}
      productId={""}
    />
  ));
}
