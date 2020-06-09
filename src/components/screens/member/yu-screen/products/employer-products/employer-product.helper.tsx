import * as React from "react";
import { LifeInsurance, IncomeProtection, CriticalIllness, TravelInsurance } from "../../svg/yuser-products";

export type EmployerType = "GroupLife" | "GroupCritical" | "GroupIncome" | string;
export type PersonalType = "LifeInsurance" | "IncomeProtection" | "CriticalIllness" | "TravelInsurance" | string;

export function getPersonalProductImage(type: PersonalType): JSX.Element {
  switch (type) {
    case "LifeInsurance":
      return <LifeInsurance />;
    case "IncomeProtection":
      return <IncomeProtection />;
    case "CriticalIllness":
      return <CriticalIllness />;
    case "TravelInsurance":
      return <TravelInsurance />;
  }
}
