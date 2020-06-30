import * as React from "react";
import { LifeInsurance, IncomeProtection, CriticalIllness, TravelInsurance } from "../../svg/yuser-products";

export type EmployerType = "GroupLife" | "GroupCritical" | "GroupIncome" | string;
export type PersonalType = "LifeInsurance" | "IncomeProtection" | "CriticalIllness" | "TravelInsurance" | string;

export function getPersonalProductImage(type: PersonalType): JSX.Element {
  switch (type) {
    case "LifeInsurance":
      return <LifeInsurance width={64} height={74} />;
    case "IncomeProtection":
      return <IncomeProtection width={64} height={74} />;
    case "CriticalIllness":
      return <CriticalIllness width={64} height={74} />;
    case "TravelInsurance":
      return <TravelInsurance width={64} height={74} />;
  }
}
