import React, { useState, ComponentProps } from "react";
import { ProductDetailsScreen } from "./product-details.screen";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { PRODUCT_DETAILS_FIXTURES, TEST_POLICY_FIXTURES } from "./product-details.modal.fixture";
import ProductDetailsModal from "./product-details.modal";

const TEST_COVERS = [CoverType.common, CoverType.rare, CoverType.epic];

const ProductDetailsContainer = () => {
  // pending api integration
  const [coverActiveIndex, setCoverActiveIndex] = useState(0);
  const [policyActiveIndex, setPolicyActiveIndex] = useState(0);

  const TEST_cycleThroughCovers = () => {
    setCoverActiveIndex(coverActiveIndex >= TEST_COVERS.length - 1 ? 0 : coverActiveIndex + 1);
  };

  const TEST_cycleThroughPolicies = () => {
    setPolicyActiveIndex(policyActiveIndex >= TEST_POLICY_FIXTURES.length - 1 ? 0 : policyActiveIndex + 1);
  };

  return (
    <ProductDetailsScreen
      coverType={TEST_COVERS[coverActiveIndex]}
      {...TEST_POLICY_FIXTURES[policyActiveIndex]}
      modalProps={PRODUCT_DETAILS_FIXTURES[policyActiveIndex] as ComponentProps<typeof ProductDetailsModal>}
      TEST_cycle={TEST_cycleThroughCovers}
      TEST_cyclePolicy={TEST_cycleThroughPolicies}
    />
  );
};

export default ProductDetailsContainer;
