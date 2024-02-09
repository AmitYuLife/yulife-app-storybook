import React, { useCallback } from "react";
import { BeneficiaryScreen } from "@components/screens/products/fib/beneficiaries/beneficiary.screen";
import { useMutation, useQuery } from "@apollo/client";
import { GetProductBeneficiariesQuery, gql } from "@graphql/__generated";

type IBeneficiaries = GetProductBeneficiariesQuery["getProductBeneficiaries"]["beneficiaries"];
interface Props {
  productId: string;
}

const BeneficiaryContainer = ({ productId }: Props) => {
  const { data } = useQuery(gql("GetProductBeneficiariesDocument"), {
    variables: { productId: productId },
    fetchPolicy: "cache-and-network",
  });

  const [setShareOfBenefitForProduct, { loading: setShareLoading }] = useMutation(
    gql("SetShareOfBenefitForProductDocument")
  );

  const updateShareOfBenefit = useCallback(
    async (beneficiaries: IBeneficiaries) => {
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
