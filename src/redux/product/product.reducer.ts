/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProductStore } from "./product.types";
import { CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";

export { IProductStore } from "./product.types";

export const getInitialState = (): IProductStore => ({
  fib: {
    answers: {
      contactDetails: {
        firstAddressLine: "",
        secondAddressLine: "",
        townOrCity: "",
        postCode: "",
        personalEmail: "",
        phoneNumber: "",
      },
      height: {
        unit: "cm",
        cm: "",
        ft: "",
        in: "",
      },
      weight: {
        unit: "kg",
        kg: "",
        st: "",
        lb: "",
      },
      weeklyAlcoholDrinks: "",
      birthDay: "",
      birthMonth: "",
      birthYear: "",
      firstName: "",
      lastName: "",
      medicalConsent: false,
      previewMedicalTests: false,
      existingCovers: [],
      medicalHistory: {},
    },
    gpDetails: {
      practiceName: "",
      practiceAddress: "",
      practiceTown: "",
      practicePostCode: "",
      gpName: "",
    },
    salary: 0,
    selectedPackage: CoverType.epic,
    quoteDate: "",
    lastQuestionId: "",
    hasPriceChanged: false,
    actualCost: 0,
    medicalInvestigationRequired: false,
    rejected: false,
    productEntityId: "",
    latestQuoteId: "",
    status: "none",
    fibStyle: YuWorld.forest,
    sumAssured: 0,
  },
});

function personalProductReducer(state: IProductStore = getInitialState()) {
  return state;
}

export default personalProductReducer;
