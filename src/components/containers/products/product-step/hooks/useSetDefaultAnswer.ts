import { useEffect } from "react";
import { IProductStepContext } from "../product-step.context";

interface Props {
  answerKey: string;
  dynamicData: IProductStepContext["dynamicData"];
  setDynamicData: IProductStepContext["setDynamicData"];
  answerKeyDefaultValue: any;
}

export const useSetDefaultAnswer = ({ answerKey, dynamicData, setDynamicData, answerKeyDefaultValue }: Props) => {
  useEffect(() => {
    if (!dynamicData[answerKey]) {
      setDynamicData((oldState) => ({ ...oldState, [answerKey]: answerKeyDefaultValue }));
    }
  }, []);
};
