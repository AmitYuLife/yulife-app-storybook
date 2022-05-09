import React, { useContext, memo } from "react";
import { ContentItemAgePercentCoverPicker as GqlProps } from "@graphql/_core/schema";
import { ContentItemAgePercentCoverPicker } from "@components/sdui";
import { useSetDefaultAnswer } from "../../hooks/useSetDefaultAnswer";
import { ProductStepContext } from "../../product-step.context";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

export const ProductStepAgePercentCoverPicker = memo((props: GqlProps) => {
  const productStepContext = useContext(ProductStepContext);
  const dispatch = useDispatch();
  const { dynamicData, setDynamicData } = useContext(ProductStepContext);
  const {
    answerKeyAge,
    answerKeyAgeDefaultValue,
    answerKeyPercent,
    answerKeyPercentDefaultValue,
    answerKeyCoverType,
    answerKeyCoverTypeDefaultValue,
    answerKeyMaxSalaryPercent,
    answerKeyMaxSalaryPercentDefaultValue,
  } = props;

  useSetDefaultAnswer({
    answerKey: answerKeyAge,
    answerKeyDefaultValue: answerKeyAgeDefaultValue,
    dynamicData,
    setDynamicData,
  });
  useSetDefaultAnswer({
    answerKey: answerKeyPercent,
    answerKeyDefaultValue: answerKeyPercentDefaultValue,
    dynamicData,
    setDynamicData,
  });
  useSetDefaultAnswer({
    answerKey: answerKeyCoverType,
    answerKeyDefaultValue: answerKeyCoverTypeDefaultValue,
    dynamicData,
    setDynamicData,
  });
  useSetDefaultAnswer({
    answerKey: answerKeyMaxSalaryPercent,
    answerKeyDefaultValue: answerKeyMaxSalaryPercentDefaultValue,
    dynamicData,
    setDynamicData,
  });

  const policyEndAge = dynamicData[props.answerKeyAge];
  const salaryPercent = dynamicData[props.answerKeyPercent];
  const coverType = dynamicData[props.answerKeyCoverType];
  const handleChangePolicyEndAge = (newAge: number) =>
    setDynamicData((oldState) => ({ ...oldState, [answerKeyAge]: newAge }));
  const handleChangeSalaryPercent = (newSalaryPercent: number) =>
    setDynamicData((oldState) => ({ ...oldState, [answerKeyPercent]: newSalaryPercent }));
  const handleChangeCover = (newCoverType: CoverType) =>
    setDynamicData((oldState) => ({ ...oldState, [answerKeyCoverType]: newCoverType }));
  const handleChangeMaxSalaryPercent = (newMaxSalaryPercent: number) =>
    setDynamicData((oldState) => ({ ...oldState, [answerKeyMaxSalaryPercent]: newMaxSalaryPercent }));

  const handlePressCustomAgeViewCallback = () => {
    dispatch(
      logMixpanelEventActionCreator("button_pressed", {
        button_id: "custom_length_viewed",
        location: productStepContext.stepId,
        cs_product: "Covea_FIB",
      })
    );
  };

  return (
    <ContentItemAgePercentCoverPicker
      {...props}
      onChangePolicyEndAge={handleChangePolicyEndAge}
      onChangeSalaryPercent={handleChangeSalaryPercent}
      onChangeCover={handleChangeCover}
      onChangeMaxSalaryPercent={handleChangeMaxSalaryPercent}
      salaryPercent={salaryPercent as number}
      policyEndAge={policyEndAge as number}
      coverType={coverType as CoverType}
      onToggleAgeScroller={handlePressCustomAgeViewCallback}
    />
  );
});
