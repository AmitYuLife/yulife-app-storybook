/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MedicalPractices
// ====================================================

export interface MedicalPractices_getMedicalPractices_practicioners {
  organisationCode: string | null;
  name: string | null;
  parentOrganisationCode: string | null;
}

export interface MedicalPractices_getMedicalPractices {
  organisationCode: string | null;
  name: string | null;
  address1: string | null;
  address2: string | null;
  address3: string | null;
  address4: string | null;
  address5: string | null;
  postCode: string | null;
  practicioners: (MedicalPractices_getMedicalPractices_practicioners | null)[] | null;
}

export interface MedicalPractices {
  getMedicalPractices: (MedicalPractices_getMedicalPractices | null)[] | null;
}

export interface MedicalPracticesVariables {
  name: string;
}
