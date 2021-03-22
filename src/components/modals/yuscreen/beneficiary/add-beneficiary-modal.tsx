import React from "react";
import { Navigation } from "react-native-navigation";
import { MODALS, ROUTES } from "@navigation/constants";
import { useBackHandler } from "@services/hooks/useBackHandler";
import AddBeneficiaryModalScreen, { Beneficiary } from "./add-beneficiary-modal.screen";

interface Props {
  beneficiary: Beneficiary;
  onAddBeneficiary: (beneficiary: Beneficiary) => void;
  editBeneficiary?: (beneficiary: Beneficiary) => void;
  deleteBeneficiary?: (beneficiary: Beneficiary) => void;
}

export default function AddBeneficiaryModal(props: Props) {
  const { beneficiary: beneficiaryToEdit, onAddBeneficiary, editBeneficiary, deleteBeneficiary } = props;

  const dismissModal = () => {
    Navigation.dismissModal(MODALS.addBeneficiary);
  };

  const backHandler = () => {
    dismissModal();
    return true;
  };

  useBackHandler(backHandler);

  const navigateToBeneficiaryContainer = (beneficiary: Beneficiary) => {
    if (beneficiaryToEdit || onAddBeneficiary || editBeneficiary) {
      dismissModal();
    } else {
      Navigation.push(ROUTES.productDetails, {
        component: {
          id: ROUTES.beneficiary,
          name: ROUTES.beneficiary,
          passProps: {
            beneficiaries: [{ ...beneficiary, percentage: 100 }],
          },
        },
      });
    }
  };

  return (
    <AddBeneficiaryModalScreen
      onClose={dismissModal}
      onContinue={navigateToBeneficiaryContainer}
      beneficiary={beneficiaryToEdit}
      onAddBeneficiary={onAddBeneficiary}
      editBeneficiary={editBeneficiary}
      deleteBeneficiary={deleteBeneficiary}
    />
  );
}
