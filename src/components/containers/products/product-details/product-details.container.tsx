import React, { useState } from "react";
import { ProductDetailsScreen } from "./product-details.screen";
import { CoverType } from "@graphql/_core/schema/globalTypes";

const TEST_COVERS = [CoverType.common, CoverType.rare, CoverType.epic];

const ProductDetailsContainer = () => {
  // pending api integration
  const [coverActiveIndex, setCoverActiveIndex] = useState(0);

  const TEST_cycleThroughCovers = () => {
    setCoverActiveIndex(coverActiveIndex >= TEST_COVERS.length - 1 ? 0 : coverActiveIndex + 1);
  };

  return (
    <ProductDetailsScreen
      coverType={TEST_COVERS[coverActiveIndex]}
      productName="Group Life Insurance"
      productIconUri="http://res.cloudinary.com/yu-life-develop/image/upload/s--dJggb3aZ--/h_200,w_200/v1/api/local/yuscreen_products_assets/default/compass_active.png"
      benefitDescription="x salary as lump sum"
      benefitValue="6"
      yuCoinDescription="YuCoin Power"
      yuCoinValue="20"
      benefitDescriptionLong="Your loved ones will receive a single payment equal to £1000000 in the event of a claim."
      lastUpdated="Policy last updated on 17/03/2020"
      TEST_cycle={TEST_cycleThroughCovers}
    />
  );
};

export default ProductDetailsContainer;
