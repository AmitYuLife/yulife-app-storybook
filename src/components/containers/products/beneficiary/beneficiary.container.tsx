import React from "react";
import { BeneficiaryScreen } from "./beneficiary.screen";
import { Beneficiary } from "@components/modals/yuscreen/beneficiary/add-beneficiary-modal.screen";

interface Props {
  beneficiaries: Beneficiary[];
}
const BeneficiaryContainer = ({ beneficiaries }: Props) => {
  return <BeneficiaryScreen beneficiaries={beneficiaries} />;
};

export const BENEFICIARIES = [
  {
    id: "id_1",
    firstName: "Barry Barry Barry Barry",
    lastName: "Balotelli",
    phoneNumber: "01234567891",
    percentage: 33,
    relation: "Brother",
  },
  {
    id: "id_2",
    firstName: "Maya",
    lastName: "Balotelli",
    phoneNumber: "01234567891",
    percentage: 33,
    relation: "Wife",
  },
  {
    id: "id_3",
    firstName: "Simon",
    lastName: "Balotelli",
    phoneNumber: "01234567891",
    percentage: 34,
    relation: "Dad",
  },
];

export default BeneficiaryContainer;
