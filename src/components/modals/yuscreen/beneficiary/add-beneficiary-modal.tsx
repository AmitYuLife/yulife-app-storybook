import React, { useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { MODALS, ROUTES } from "@navigation/constants";
import { useBackHandler } from "@services/hooks/useBackHandler";
import AddBeneficiaryModalScreen from "./add-beneficiary-modal.screen";
import { useMutation } from "@apollo/react-hooks";
import {
  CreateOrUpdateBeneficiaryMutationTuple,
  GQL_MUTATION_CREATE_OR_UPDATE_BENEFICIARY,
} from "@graphql/products/createOrUpdateBeneficiary";
import { GetProductBeneficiaries_getProductBeneficiaries_beneficiaries as Beneficiary } from "@graphql/_core/schema";
import {
  RemoveBeneficiaryFromProductMutationTuple,
  GQL_MUTATION_REMOVE_BENEFICIARY_FROM_PRODUCT,
} from "@graphql/products/deleteBeneficiary";

interface IProps {
  beneficiary: Beneficiary;
  pushEditRoot?: boolean;
  productId: string;
}

export default function AddBeneficiaryModal(props: IProps) {
  const { beneficiary: beneficiaryToEdit, pushEditRoot, productId } = props;

  const [
    updateBeneficiaryForProduct,
    { loading: updateBeneficiaryLoading },
  ]: CreateOrUpdateBeneficiaryMutationTuple = useMutation(GQL_MUTATION_CREATE_OR_UPDATE_BENEFICIARY);

  const [
    removeBeneficiaryFromProduct,
    { loading: removeBeneficiaryLoading },
  ]: RemoveBeneficiaryFromProductMutationTuple = useMutation(GQL_MUTATION_REMOVE_BENEFICIARY_FROM_PRODUCT);

  const onSaveBeneficiary = useCallback(
    async (beneficiary: Beneficiary) => {
      await updateBeneficiaryForProduct({
        variables: {
          beneficiary: {
            id: beneficiary.id,
            firstName: beneficiary.firstName,
            lastName: beneficiary.lastName,
            phoneNumber: beneficiary.phoneNumber,
            relationship: beneficiary.relationship,
            productId,
          },
        },
        refetchQueries: ["GetProductBeneficiaries"],
      });
    },
    [updateBeneficiaryForProduct, productId]
  );

  const removeBeneficiary = useCallback(
    async (beneficiary: Beneficiary) => {
      await removeBeneficiaryFromProduct({
        variables: {
          productId,
          beneficiaryId: beneficiary.id,
        },
        refetchQueries: ["GetProductBeneficiaries"],
      });

      dismissModal();
    },
    [removeBeneficiaryFromProduct, productId]
  );

  const dismissModal = () => {
    Navigation.dismissModal(MODALS.addBeneficiary);
  };

  const backHandler = () => {
    dismissModal();
    return true;
  };

  useBackHandler(backHandler);

  const navigateToBeneficiaryContainer = async (beneficiary: Beneficiary) => {
    await onSaveBeneficiary(beneficiary);
    if (pushEditRoot) {
      Navigation.push(ROUTES.productDetails, {
        component: {
          id: ROUTES.beneficiary,
          name: ROUTES.beneficiary,
          passProps: {
            productId,
          },
        },
      });
      dismissModal();
    } else {
      dismissModal();
    }
  };

  return (
    <AddBeneficiaryModalScreen
      onClose={dismissModal}
      onContinue={navigateToBeneficiaryContainer}
      beneficiary={beneficiaryToEdit}
      deleteBeneficiary={removeBeneficiary}
      updateBeneficiaryLoading={updateBeneficiaryLoading}
      removeBeneficiaryLoading={removeBeneficiaryLoading}
    />
  );
}
