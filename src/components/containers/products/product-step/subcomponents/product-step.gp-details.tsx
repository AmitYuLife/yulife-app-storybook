import React, { memo, useCallback, useContext, useMemo } from "react";
import { ContentItemGpDetails } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";
import { LOCAL_GP_ANSWER_KEY } from "../utils";
import { MedicalPracticesQuery } from "@graphql/__generated";

type MedicalPractices = MedicalPracticesQuery["getMedicalPractices"][number];
type MedicalPractitioners = MedicalPractices["practicioners"][number];

type GpDetails = {
  [LOCAL_GP_ANSWER_KEY.GpPractice]: string;
  [LOCAL_GP_ANSWER_KEY.GpAddress]: string;
  [LOCAL_GP_ANSWER_KEY.GpPostcode]: string;
  [LOCAL_GP_ANSWER_KEY.GpTown]: string;
  [LOCAL_GP_ANSWER_KEY.GpName]: string;
};

const formatGpDetails = (practice: MedicalPractices): Omit<GpDetails, "gpName"> => ({
  gpPractice: practice.name,
  gpAddress: [practice.address1, practice.address2, practice.address3].filter(Boolean).join(" "),
  gpTown:
    practice.address4 || practice.address5
      ? [practice.address4, practice.address5].filter(Boolean).join(" ")
      : practice.address3,
  // Allow addresses with no postcode to pass string validation.
  gpPostcode: practice.postCode || " ",
});

export const ProductStepContentItemGpDetails = memo(() => {
  const { dynamicData, setDynamicData } = useContext(ProductStepContext);

  const fields = useMemo<GpDetails>(
    () => ({
      [LOCAL_GP_ANSWER_KEY.GpPractice]: dynamicData[LOCAL_GP_ANSWER_KEY.GpPractice] as string,
      [LOCAL_GP_ANSWER_KEY.GpAddress]: dynamicData[LOCAL_GP_ANSWER_KEY.GpAddress] as string,
      [LOCAL_GP_ANSWER_KEY.GpPostcode]: dynamicData[LOCAL_GP_ANSWER_KEY.GpPostcode] as string,
      [LOCAL_GP_ANSWER_KEY.GpTown]: dynamicData[LOCAL_GP_ANSWER_KEY.GpTown] as string,
      [LOCAL_GP_ANSWER_KEY.GpName]: dynamicData[LOCAL_GP_ANSWER_KEY.GpName] as string,
    }),
    [dynamicData]
  );

  const onCompletePractise = useCallback(
    (practice: MedicalPractices) => {
      const gpDetails = formatGpDetails(practice);
      setDynamicData((oldState) => ({
        ...oldState,
        ...gpDetails,
      }));
    },
    [setDynamicData]
  );

  const onCompleteGp = useCallback(
    ({ name: gpName }: Pick<MedicalPractitioners, "name">) => {
      setDynamicData((oldState) => ({
        ...oldState,
        gpName,
      }));
    },
    [setDynamicData]
  );

  const onUpdateFormField = useCallback(
    (key: string, value: string) => {
      setDynamicData((oldState) => ({
        ...oldState,
        [key]: value,
      }));
    },
    [setDynamicData]
  );

  return (
    <ContentItemGpDetails
      onCompletePractise={onCompletePractise}
      onCompleteGp={onCompleteGp}
      onUpdateFormField={onUpdateFormField}
      fields={fields}
    />
  );
});
