import React, { memo, useCallback, useContext } from "react";
import {
  ContentItemGpDetails as GqlGpDetails,
  MedicalPractices_getMedicalPractices,
  MedicalPractices_getMedicalPractices_practicioners,
} from "@graphql/_core/schema";
import { ContentItemGpDetails } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";
import { SduiActionType } from "@graphql/_core/schema/globalTypes";
import { useDispatch } from "react-redux";
import { useDynamicOnChange } from "../hooks/useDynamicOnChange";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

type Props = GqlGpDetails;

export const ProductStepContentItemGpDetails = memo((props: Props) => {
  const { productId, stepId } = useContext(ProductStepContext);

  const dispatch = useDispatch();

  const { value } = useDynamicOnChange<string>(props.answerKey);

  const onComplete = useCallback(
    (
      practice: MedicalPractices_getMedicalPractices,
      gp: MedicalPractices_getMedicalPractices_practicioners,
      dispatchType: SduiActionType
    ) => {
      const data = {
        gpPractice: practice.name,
        gpAddress: [practice.address1, practice.address2, practice.address3].filter(Boolean).join(" "),
        gpTown:
          practice.address4 || practice.address5
            ? [practice.address4, practice.address5].filter(Boolean).join(" ")
            : practice.address3,
        gpPostcode: practice.postCode,
        gpName: gp.name,
      };

      dispatch({
        type: dispatchType,
        payload: { dynamicData: data, stepId, productId },
      });

      dispatch(logMixpanelEventActionCreator("checkout_details_submitted", { type: "gp", cs_product: productId }));
    },
    [productId, stepId, dispatch]
  );

  return <ContentItemGpDetails {...props} onComplete={onComplete} value={value} />;
});
