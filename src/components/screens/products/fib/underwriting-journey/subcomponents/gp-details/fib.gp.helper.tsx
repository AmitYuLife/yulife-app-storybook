import { MedicalPractices_getMedicalPractices } from "@graphql/_core/schema";

export function getPracticeAddress(practice: MedicalPractices_getMedicalPractices): string[] {
  const practiceTown =
    practice.address4 || practice.address5
      ? `${practice.address4 ?? ""} ${practice.address5 ?? ""}`
      : practice.address3;
  const address3 = practice.address4 && practice.address5 && practice.address3 ? `${practice.address3}` : "";
  const firstLine = practice.name;
  const secondLine = `${practice.address1} ${practice.address2} ${address3}`;
  const thirdLine = `${practiceTown}, ${practice.postCode}`;
  return [firstLine, secondLine, thirdLine];
}
