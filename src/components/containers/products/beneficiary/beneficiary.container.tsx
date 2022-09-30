import React, { useCallback } from "react";
import { BeneficiaryScreen } from "@components/screens/products/fib/beneficiaries/beneficiary.screen";
import { useMutation, useQuery } from "@apollo/client";
import { GQL_QUERY_GET_PRODUCT_BENEFICIARIES } from "@graphql/products/getProductBeneficiaries";
import {
  GetProductBeneficiaries,
  GetProductBeneficiaries_getProductBeneficiaries_beneficiaries as Beneficiary,
} from "@graphql/_core/schema";
import {
  GQL_MUTATION_SET_SHARE_OF_BENEFIT_FOR_PRODUCT,
  SetShareOfBenefitForProductMutationTuple,
} from "@graphql/products/setShareOfBenefitForProduct";

interface Props {
  productId: string;
}

const BeneficiaryContainer = ({ productId }: Props) => {
  const { data } = useQuery<GetProductBeneficiaries>(GQL_QUERY_GET_PRODUCT_BENEFICIARIES, {
    variables: { productId: productId },
    fetchPolicy: "cache-and-network",
  });

  const [
    setShareOfBenefitForProduct,
    { loading: setShareLoading },
  ]: SetShareOfBenefitForProductMutationTuple = useMutation(GQL_MUTATION_SET_SHARE_OF_BENEFIT_FOR_PRODUCT);

  const updateShareOfBenefit = useCallback(
    async (beneficiaries: Beneficiary[]) => {
      const shares = beneficiaries.map((b) => ({
        beneficiaryId: b.id,
        percentage: b.shareOfBenefit,
      }));

      await setShareOfBenefitForProduct({
        variables: {
          productId: productId,
          shares,
        },
        refetchQueries: ["GetProductBeneficiaries"],
      });
    },
    [setShareOfBenefitForProduct, productId]
  );

  return (
    <BeneficiaryScreen
      beneficiaries={data?.getProductBeneficiaries?.beneficiaries}
      updateShareOfBenefit={updateShareOfBenefit}
      setShareLoading={setShareLoading}
      productId={productId}
    />
  );
};

export default BeneficiaryContainer;
