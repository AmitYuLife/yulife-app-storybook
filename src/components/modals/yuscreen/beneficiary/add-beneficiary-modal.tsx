import React, { useCallback, useEffect, useRef } from "react";
import { Alert, Keyboard } from "react-native";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { useBackHandler } from "@hooks";
import AddBeneficiaryModalScreen from "./add-beneficiary-modal.screen";
import { useMutation } from "@apollo/client";
import Logger from "@services/logging/logger";
import { GetProductBeneficiariesQuery, gql } from "@graphql/__generated";

type Beneficiary = GetProductBeneficiariesQuery["getProductBeneficiaries"]["beneficiaries"][number];

interface IProps {
  beneficiary: Beneficiary;
  pushEditRoot?: boolean;
  productId: string;
}

export default function AddBeneficiaryModal(props: IProps) {
  const { beneficiary: beneficiaryToEdit, pushEditRoot, productId } = props;
  const initialBeneficiary = useRef(null);

  useEffect(() => {
    initialBeneficiary.current = beneficiaryToEdit;

    /**
     * Event taxonomy 115
     */
    Logger.logEvent("beneficiary_edit_start", {
      type: beneficiaryToEdit ? "edit" : "new",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [updateBeneficiaryForProduct, { loading: updateBeneficiaryLoading }] = useMutation(
    gql("CreateOrUpdateBeneficiaryDocument")
  );

  const [removeBeneficiaryFromProduct, { loading: removeBeneficiaryLoading }] = useMutation(
    gql("RemoveBeneficiaryFromProductDocument")
  );

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
    Keyboard.dismiss();
    Navigation.dismissModal(MODALS.addBeneficiary);
  };

  const backHandler = () => {
    dismissModal();

    return true;
  };

  useBackHandler(backHandler);

  const navigateToBeneficiaryContainer = async (beneficiary: Beneficiary) => {
    try {
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
      }

      dismissModal();
    } catch (error) {
      Alert.alert(error.message);
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
