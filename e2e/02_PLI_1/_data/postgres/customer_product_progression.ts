import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";

const modelName = "customer_product_progression";

export const CUSTOMER_PROGRESSION_CUSTOMER_37_1 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID0000011423",
        step_id: "Covea_FIB_02_select_package_loading",
        step_data:
            '{"hasSelectedMaxAllowedAgeToEnd":false,"selectedPackage":{"value":75,"earnRate":20,"coverType":"epic","insuranceTermYears":38,"bmiLoading":1,"riskRate":0.012017158219999999,"riskPremiumWithLoading":15.643353713455936,"riskRateGenderSpec":0.009337656725,"riskPremiumWlGenderSpec":12.15530862869887,"coverLoading":0.913509823091786,"insuranceMonthlyPayment":30.13,"insuranceCoverAmount":1425000,"productVariantId":"Covea_FIB_02_03","medicalCost":71.5,"carrierFee":1.6},"insuranceTermYears":38,"maxSumReached":false,"minSumReached":false}',
        archived: false,
        session_id: "352a1be8-e553-4a65-afa8-58c3dfc6709f",
    },
};

export const CUSTOMER_PROGRESSION_CUSTOMER_37_2 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID0000011423",
        step_id: "Covea_FIB_02_review_confirm",
        step_data:
            '{"worldId":"forest","firstName":"test","lastName":"testtest","dateOfBirth":"2000-08-08","quoteAge":22,"salary":50000,"ukResident":"Yes","highRiskOccupation":"No","height":"168cm","heightUnit":"metric","heightCm":168,"weight":"58kg","weightUnit":"metric","weightKg":58,"smokerCigaretteFrequency":"Never","smokerOtherFrequency":"Never","smokerAlternativeFrequency":"Never","drinks":"1 drink","drinkQuantity":1,"cannabisFrequency":"Never","recreationalDrugsFrequency":"Never","hadSubstanceTreatment":"No","sex":"F","highRiskDiagnosis":"No","hadRepeatedConsultations":"No","waitingForTreatmentOrResults":"No","hasUndiagnosedSymptoms":"No","covidHospitalization":"No","covidRiskFollowUp":"No","isHoldingOtherPLI":"No","reviewReached":true,"bmi":20.55,"bmiLoadingApplied":false,"smokingLoadingApplied":false,"confirmedReview":true,"hasNoPremiumsAvailable":false,"confirmedReviewAt":"2022-08-08T14:14:38+00:00","ageToEnd":60,"maxAllowedAgeToEnd":62}',
        archived: false,
        session_id: "352a1be8-e553-4a65-afa8-58c3dfc6709f",
    },
};

export const CUSTOMER_PROGRESSION_PLI_2_1 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID0000000137",
        step_id: "Covea_FIB_02_select_package_loading",
        step_data:
            '{"hasSelectedMaxAllowedAgeToEnd":false,"selectedPackage":{"value":75,"earnRate":20,"coverType":"epic","insuranceTermYears":38,"bmiLoading":1,"riskRate":0.012017158219999999,"riskPremiumWithLoading":15.643353713455936,"riskRateGenderSpec":0.009337656725,"riskPremiumWlGenderSpec":12.15530862869887,"coverLoading":0.913509823091786,"insuranceMonthlyPayment":30.13,"insuranceCoverAmount":1425000,"productVariantId":"Covea_FIB_02_03","medicalCost":71.5,"carrierFee":1.6},"insuranceTermYears":38,"maxSumReached":false,"minSumReached":false}',
        archived: false,
        session_id: "352a1be8-e553-4a65-afa8-58c3dfc6708f",
    },
};

export const CUSTOMER_PROGRESSION_PLI_2_2 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID0000000137",
        step_id: "Covea_FIB_02_review_confirm",
        step_data:
            '{"worldId":"forest","firstName":"test","lastName":"testtest","dateOfBirth":"2000-08-08","quoteAge":22,"salary":50000,"ukResident":"Yes","highRiskOccupation":"No","height":"168cm","heightUnit":"metric","heightCm":168,"weight":"58kg","weightUnit":"metric","weightKg":58,"smokerCigaretteFrequency":"Never","smokerOtherFrequency":"Never","smokerAlternativeFrequency":"Never","drinks":"1 drink","drinkQuantity":1,"cannabisFrequency":"Never","recreationalDrugsFrequency":"Never","hadSubstanceTreatment":"No","sex":"F","highRiskDiagnosis":"No","hadRepeatedConsultations":"No","waitingForTreatmentOrResults":"No","hasUndiagnosedSymptoms":"No","covidHospitalization":"No","covidRiskFollowUp":"No","isHoldingOtherPLI":"No","reviewReached":true,"bmi":20.55,"bmiLoadingApplied":false,"smokingLoadingApplied":false,"confirmedReview":true,"hasNoPremiumsAvailable":false,"confirmedReviewAt":"2022-08-08T14:14:38+00:00","ageToEnd":60,"maxAllowedAgeToEnd":62}',
        archived: false,
        session_id: "352a1be8-e553-4a65-afa8-58c3dfc6708f",
    },
};

export const CUSTOMER_PROGRESSION_PLI_3_1 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID0000000138",
        step_id: "Covea_FIB_02_medical_holding_contact",
        step_data: '{"areMedicalTestsRequested":true}',
        archived: false,
        session_id: "352a1be8-e553-4a65-afa8-58c3dfc6706f",
    },
};
