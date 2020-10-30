/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MedicalPractices
// ====================================================

export interface MedicalPractices_getMedicalPractices_practicioners {
  /**
   * Practicioner unique code
   */
  organisationCode: string | null;
  /**
   * Practicioner name
   */
  name: string | null;
  /**
   * Medical practice unique code where practicioner practice
   */
  parentOrganisationCode: string | null;
}

export interface MedicalPractices_getMedicalPractices {
  /**
   * Medical practice unique code
   */
  organisationCode: string | null;
  /**
   * Medical practice name
   */
  name: string | null;
  /**
   * Medical practice address line 1
   */
  address1: string | null;
  /**
   * Medical practice address line 2
   */
  address2: string | null;
  /**
   * Medical practice address line 3
   */
  address3: string | null;
  /**
   * Medical practice address line 4
   */
  address4: string | null;
  /**
   * Medical practice address line 5
   */
  address5: string | null;
  /**
   * Medical practice postcode
   */
  postCode: string | null;
  /**
   * List of practicioners available for a practice
   */
  practicioners: (MedicalPractices_getMedicalPractices_practicioners | null)[] | null;
}

export interface MedicalPractices {
  /**
   * Returns a list of medical practices with practitioners available. It accepts medical practice name or postcode as input
   */
  getMedicalPractices: (MedicalPractices_getMedicalPractices | null)[] | null;
}

export interface MedicalPracticesVariables {
  name: string;
}
