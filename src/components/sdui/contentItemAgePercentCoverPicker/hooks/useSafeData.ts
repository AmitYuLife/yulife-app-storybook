import { useEffect } from "react";
import { KeyedPricing, Age } from "./types";

interface UseSafeData {
  keyedPricing: KeyedPricing;
  policyEndAge: Age;
  onChangePolicyEndAge: (age: Age) => void;
}

export const useSafeData = ({ keyedPricing, policyEndAge, onChangePolicyEndAge }: UseSafeData) => {
  useEffect(() => {
    if (!onChangePolicyEndAge) {
      return null;
    }

    const pricingKeys = Object.keys(keyedPricing);

    if (!pricingKeys.length) {
      throw Error("No available prices!");
    }

    const defaultAge = parseInt(pricingKeys[0], 10);

    if (!keyedPricing[policyEndAge]) {
      onChangePolicyEndAge(defaultAge);
    }
  }, [keyedPricing, policyEndAge, onChangePolicyEndAge]);
};
