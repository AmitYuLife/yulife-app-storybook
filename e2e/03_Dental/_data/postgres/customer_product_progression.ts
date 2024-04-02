import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";

const modelName = "customer_product_progression";
const type = "postgres";

export const CUSTOMER_PROGRESSION_1 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID0000000135",
        step_id: "Bupa_Dent_01_onboarding",
        step_data: "{}",
        archived: false,
        session_id: "a03f5545-5a57-47c3-8467-ab789c5a4401",
    },
};

export const CUSTOMER_PROGRESSION_4 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID0000000135",
        step_id: "Bupa_Dent_01_checkout_payment",
        step_data:
            '{"coverType":"epic","selectedPackage":{"earnRate":6,"coverType":"epic","insuranceMonthlyPayment":2799,"productVariantId":"Bupa_Dent_01_03","value":2799,"insuranceTermYears":0,"bmiLoading":0,"riskRate":0,"riskPremiumWithLoading":0,"riskRateGenderSpec":0,"riskPremiumWlGenderSpec":0,"coverLoading":0,"insuranceCoverAmount":0,"medicalCost":0,"carrierFee":0},"worldId":"forest","customerPaymentMethodId":"YUPAYMENTMETHOD002","cardLast4":"Ending in 4242","cardBrand":"Visa","cardValidTill":"4/2024","__typename":"ConfirmedPaymentCard"}',
        archived: false,
        session_id: "a03f5545-5a57-47c3-8467-ab789c5a4401",
    },
};

export const CUSTOMER_PROGRESSION_6 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID0000000135",
        step_id: "Bupa_Dent_01_success_purchase",
        step_data:
            '{"dentalStartDate":"2022-07-16T00:00:00","subscriptionTrialId":"sub_1LIDxPGwfxr4FdJOTxnRmP78","bupaResponseDue":"2022-07-14T00:00:00","sentToBupa":true,"bupaGroupNumber":"55315653120", "successFromBupa": true, "responseFromBupa": true, "bupaMembershipNumber": "membershipNumber"}',
        archived: false,
        session_id: "a03f5545-5a57-47c3-8467-ab789c5a4401",
    },
};

export const CUSTOMER_PROGRESSION_10 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID0000000136",
        step_id: "Bupa_Dent_01_checkout_payment",
        step_data:
            '{"coverType":"common","selectedPackage":{"earnRate":2,"coverType":"common","insuranceMonthlyPayment":1299,"productVariantId":"Bupa_Dent_01_03","value":1299,"insuranceTermYears":0,"bmiLoading":0,"riskRate":0,"riskPremiumWithLoading":0,"riskRateGenderSpec":0,"riskPremiumWlGenderSpec":0,"coverLoading":0,"insuranceCoverAmount":0,"medicalCost":0,"carrierFee":0},"worldId":"forest","customerPaymentMethodId":"YUPAYMENTMETHOD002","cardLast4":"Ending in 4242","cardBrand":"Visa","cardValidTill":"4/2024","__typename":"ConfirmedPaymentCard"}',
        archived: false,
        session_id: "a03f5545-5a57-47c3-8467-ab789c5a4411",
    },
};

export const CUSTOMER_PROGRESSION_12 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID0000000136",
        step_id: "Bupa_Dent_01_success_purchase",
        step_data:
            '{"dentalStartDate":"2022-07-16T00:00:00","subscriptionTrialId":"sub_2LIDxPGwfxr4FdJOTxnRmP79","bupaResponseDue":"2022-07-14T00:00:00","sentToBupa":true,"bupaGroupNumber":"55315653121", "successFromBupa": true, "responseFromBupa": true, "bupaMembershipNumber": "membershipNumber"}',
        archived: false,
        session_id: "a03f5545-5a57-47c3-8467-ab789c5a4411",
    },
};

export const CUSTOMER_PROGRESSION_17 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID0000000141",
        step_id: "Bupa_Dent_01_success_purchase",
        step_data:
            '{"dentalStartDate":"2022-07-16T00:00:00","subscriptionTrialId":"sub_1LIDxPGwfxr4FdJOTxnRmP78","bupaResponseDue":"2022-07-14T00:00:00","sentToBupa":true,"bupaGroupNumber":"55315653120", "successFromBupa": true, "responseFromBupa": true, "bupaMembershipNumber": "membershipNumber"}',
        archived: false,
        session_id: "a03f5545-5a57-47c3-8467-ac789c5a4401",
    },
};

export const CUSTOMER_DENTAL_PROGRESSION_1 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customer_product_id: "YUCPID00000001491",
        step_id: "Bupa_Dent_01_intro_start",
        step_data: '{"worldId":"forest","toothbrushEnabled":false}',
        archived: true,
        archived_at: "2023-03-10T17:27:47.678Z",
        created_at: "2023-03-10T13:55:52.134Z",
        created_by_id: null,
        modified_at: "2023-03-10T17:27:47.678Z",
        modified_by_id: null,
        archive_reason: "policy_cancelled",
        session_id: "5fa3a756-f79c-4fc9-8170-2dc416b7aed1",
    },
};

export const CUSTOMER_DENTAL_PROGRESSION_2 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customer_product_id: "YUCPID00000001491",
        step_id: "Bupa_Dent_01_select_package",
        step_data:
            '{"premiumOptions":[{"earnRate":2,"coverType":"common","insuranceMonthlyPayment":1299,"productVariantId":"Bupa_Dent_01_01","value":1299,"insuranceTermYears":0,"bmiLoading":0,"riskRate":0,"riskPremiumWithLoading":0,"riskRateGenderSpec":0,"riskPremiumWlGenderSpec":0,"coverLoading":0,"insuranceCoverAmount":0,"medicalCost":0,"carrierFee":0},{"earnRate":4,"coverType":"rare","insuranceMonthlyPayment":1899,"productVariantId":"Bupa_Dent_01_02","value":1899,"insuranceTermYears":0,"bmiLoading":0,"riskRate":0,"riskPremiumWithLoading":0,"riskRateGenderSpec":0,"riskPremiumWlGenderSpec":0,"coverLoading":0,"insuranceCoverAmount":0,"medicalCost":0,"carrierFee":0},{"earnRate":6,"coverType":"epic","insuranceMonthlyPayment":2799,"productVariantId":"Bupa_Dent_01_03","value":2799,"insuranceTermYears":0,"bmiLoading":0,"riskRate":0,"riskPremiumWithLoading":0,"riskRateGenderSpec":0,"riskPremiumWlGenderSpec":0,"coverLoading":0,"insuranceCoverAmount":0,"medicalCost":0,"carrierFee":0}],"worldId":"forest","selectedPremium":1899,"coverType":"rare"}',
        archived: true,
        archived_at: "2023-03-10T17:27:47.678Z",
        created_at: "2023-03-10T13:56:26.656Z",
        created_by_id: null,
        modified_at: "2023-03-10T17:27:47.678Z",
        modified_by_id: null,
        archive_reason: "policy_cancelled",
        session_id: "5fa3a756-f79c-4fc9-8170-2dc416b7aed1",
    },
};

export const CUSTOMER_DENTAL_PROGRESSION_3 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customer_product_id: "YUCPID00000001491",
        step_id: "Bupa_Dent_01_select_package_loading",
        step_data:
            '{"selectedPackage":{"earnRate":4,"coverType":"rare","insuranceMonthlyPayment":1899,"productVariantId":"Bupa_Dent_01_02","value":1899,"insuranceTermYears":0,"bmiLoading":0,"riskRate":0,"riskPremiumWithLoading":0,"riskRateGenderSpec":0,"riskPremiumWlGenderSpec":0,"coverLoading":0,"insuranceCoverAmount":0,"medicalCost":0,"carrierFee":0}}',
        archived: true,
        archived_at: "2023-03-10T17:27:47.678Z",
        created_at: "2023-03-10T13:56:29.855Z",
        created_by_id: null,
        modified_at: "2023-03-10T17:27:47.678Z",
        modified_by_id: null,
        archive_reason: "policy_cancelled",
        session_id: "5fa3a756-f79c-4fc9-8170-2dc416b7aed1",
    },
};

export const CUSTOMER_DENTAL_PROGRESSION_4 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customer_product_id: "YUCPID00000001491",
        step_id: "Bupa_Dent_01_checkout_summary",
        step_data:
            '{"coverType":"rare","selectedPackage":{"earnRate":4,"coverType":"rare","insuranceMonthlyPayment":1899,"productVariantId":"Bupa_Dent_01_02","value":1899,"insuranceTermYears":0,"bmiLoading":0,"riskRate":0,"riskPremiumWithLoading":0,"riskRateGenderSpec":0,"riskPremiumWlGenderSpec":0,"coverLoading":0,"insuranceCoverAmount":0,"medicalCost":0,"carrierFee":0},"worldId":"forest"}',
        archived: true,
        archived_at: "2023-03-10T17:27:47.678Z",
        created_at: "2023-03-10T13:56:33.014Z",
        created_by_id: null,
        modified_at: "2023-03-10T17:27:47.678Z",
        modified_by_id: null,
        archive_reason: "policy_cancelled",
        session_id: "5fa3a756-f79c-4fc9-8170-2dc416b7aed1",
    },
};

export const CUSTOMER_DENTAL_PROGRESSION_5 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customer_product_id: "YUCPID00000001491",
        step_id: "Bupa_Dent_01_checkout_personal_details",
        step_data: '{"firstName":"User","lastName":"Irwrw","dateOfBirth":"1990-12-12","title":"Mr","quoteAge":32}',
        archived: true,
        archived_at: "2023-03-10T17:27:47.678Z",
        created_at: "2023-03-10T13:56:47.818Z",
        created_by_id: null,
        modified_at: "2023-03-10T17:27:47.678Z",
        modified_by_id: null,
        archive_reason: "policy_cancelled",
        session_id: "5fa3a756-f79c-4fc9-8170-2dc416b7aed1",
    },
};

export const CUSTOMER_DENTAL_PROGRESSION_6 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customer_product_id: "YUCPID00000001491",
        step_id: "Bupa_Dent_01_checkout_contact_details",
        step_data:
            '{"contactDetailsAddress1":"London","contactDetailsTown":"London","contactDetailsPostcode":"FA9 3UK","contactDetailsEmail":"fwafa@gmail.com","contactDetailsPhone":"0783232333","postcodeInMainlandUk":true}',
        archived: true,
        archived_at: "2023-03-10T17:27:47.678Z",
        created_at: "2023-03-10T13:56:54.156Z",
        created_by_id: null,
        modified_at: "2023-03-10T17:27:47.678Z",
        modified_by_id: null,
        archive_reason: "policy_cancelled",
        session_id: "5fa3a756-f79c-4fc9-8170-2dc416b7aed1",
    },
};

export const CUSTOMER_DENTAL_PROGRESSION_7 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customer_product_id: "YUCPID00000001491",
        step_id: "Bupa_Dent_01_checkout_declaration",
        step_data: '{"declarationConfirmationStatements":true,"declarationConfirmationTerms":true}',
        archived: true,
        archived_at: "2023-03-10T17:27:47.678Z",
        created_at: "2023-03-10T13:57:18.582Z",
        created_by_id: null,
        modified_at: "2023-03-10T17:27:47.678Z",
        modified_by_id: null,
        archive_reason: "policy_cancelled",
        session_id: "5fa3a756-f79c-4fc9-8170-2dc416b7aed1",
    },
};

export const CUSTOMER_DENTAL_PROGRESSION_8 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customer_product_id: "YUCPID00000001491",
        step_id: "Bupa_Dent_01_checkout_payment",
        step_data:
            '{"coverType":"rare","selectedPackage":{"earnRate":4,"coverType":"rare","insuranceMonthlyPayment":1899,"productVariantId":"Bupa_Dent_01_02","value":1899,"insuranceTermYears":0,"bmiLoading":0,"riskRate":0,"riskPremiumWithLoading":0,"riskRateGenderSpec":0,"riskPremiumWlGenderSpec":0,"coverLoading":0,"insuranceCoverAmount":0,"medicalCost":0,"carrierFee":0},"worldId":"forest","customerPaymentMethodId":"YUPAYMETHOD0003781","cardLast4":"Ending in 4242","cardBrand":"Visa","cardValidTill":"4/2024","__typename":"ConfirmedPaymentCard"}',
        archived: true,
        archived_at: "2023-03-10T17:27:47.678Z",
        created_at: "2023-03-10T13:57:29.565Z",
        created_by_id: null,
        modified_at: "2023-03-10T17:27:47.678Z",
        modified_by_id: null,
        archive_reason: "policy_cancelled",
        session_id: "5fa3a756-f79c-4fc9-8170-2dc416b7aed1",
    },
};

export const CUSTOMER_DENTAL_PROGRESSION_9 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customer_product_id: "YUCPID00000001491",
        step_id: "Bupa_Dent_01_sanctions_check_loading",
        step_data:
            '{"sanctionsResult":{"content":{"data":{"id":"SKIP","ref":"SKIP","hits":[]}}},"sanctionsFound":false,"sanctionsReached":true}',
        archived: true,
        archived_at: "2023-03-10T17:27:47.678Z",
        created_at: "2023-03-10T13:57:56.309Z",
        created_by_id: null,
        modified_at: "2023-03-10T17:27:47.678Z",
        modified_by_id: null,
        archive_reason: "policy_cancelled",
        session_id: "5fa3a756-f79c-4fc9-8170-2dc416b7aed1",
    },
};

export const CUSTOMER_DENTAL_PROGRESSION_10 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customer_product_id: "YUCPID00000001491",
        step_id: "Bupa_Dent_01_success_purchase",
        step_data:
            '{"dentalStartDate":"2023-04-01T00:00:00","subscriptionTrialId":"sub_1Mk6SMGwfxr4FdJOUsSeztSv","bupaResponseDue":"2023-03-21T00:00:00","sentToBupa":true,"bupaGroupNumber":"55315563623","successFromBupa":true,"responseFromBupa":true,"bupaMembershipNumber":"00000000000000","cancelledDental":true,"cancelledDateDental":"2023-03-10T17:27:47","sentCancellationToBupa":true}',
        archived: true,
        archived_at: "2023-03-10T17:27:47.678Z",
        created_at: "2023-03-10T13:58:03.067Z",
        created_by_id: null,
        modified_at: "2023-03-10T17:27:47.678Z",
        modified_by_id: null,
        archive_reason: "policy_cancelled",
        session_id: "5fa3a756-f79c-4fc9-8170-2dc416b7aed1",
    },
};

export const CUSTOMER_DENTAL_PROGRESSION_11 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customer_product_id: "YUCPID00000001491",
        step_id: "Bupa_Dent_01_policy_holding",
        step_data: "{}",
        archived: true,
        archived_at: "2023-03-10T17:27:47.678Z",
        created_at: "2023-03-10T13:58:49.214Z",
        created_by_id: null,
        modified_at: "2023-03-10T17:27:47.678Z",
        modified_by_id: null,
        archive_reason: "policy_cancelled",
        session_id: "5fa3a756-f79c-4fc9-8170-2dc416b7aed1",
    },
};

export const CUSTOMER_PROGRESSION_DENTAL_RENEWAL_1 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID00000011420",
        step_id: "Bupa_Dent_01_onboarding",
        step_data: "{}",
        archived: false,
        session_id: "a03f5545-5a57-47c3-8467-ab789c5a4402",
    },
};

export const CUSTOMER_PROGRESSION_DENTAL_RENEWAL_2 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID00000011420",
        step_id: "Bupa_Dent_01_checkout_summary",
        step_data:
            '{"coverType":"epic","selectedPackage":{"earnRate":6,"coverType":"epic","insuranceMonthlyPayment":2799,"productVariantId":"Bupa_Dent_01_03","value":2799,"insuranceTermYears":0,"bmiLoading":0,"riskRate":0,"riskPremiumWithLoading":0,"riskRateGenderSpec":0,"riskPremiumWlGenderSpec":0,"coverLoading":0,"insuranceCoverAmount":0,"medicalCost":0,"carrierFee":0},"worldId":"forest"}',
        archived: false,
        session_id: "a03f5545-5a57-47c3-8467-ab789c5a4402",
    },
};

export const CUSTOMER_PROGRESSION_DENTAL_RENEWAL_3 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID00000011420",
        step_id: "Bupa_Dent_01_select_package_loading",
        step_data:
            '{"selectedPackage":{"earnRate":6,"coverType":"epic","insuranceMonthlyPayment":2799,"productVariantId":"Bupa_Dent_01_03","value":2799,"insuranceTermYears":0,"bmiLoading":0,"riskRate":0,"riskPremiumWithLoading":0,"riskRateGenderSpec":0,"riskPremiumWlGenderSpec":0,"coverLoading":0,"insuranceCoverAmount":0,"medicalCost":0,"carrierFee":0}}',
        archived: false,
        session_id: "a03f5545-5a57-47c3-8467-ab789c5a4402",
    },
};

export const CUSTOMER_PROGRESSION_DENTAL_RENEWAL_4 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID00000011420",
        step_id: "Bupa_Dent_01_checkout_payment",
        step_data:
            '{"coverType":"epic","selectedPackage":{"earnRate":6,"coverType":"epic","insuranceMonthlyPayment":2799,"productVariantId":"Bupa_Dent_01_03","value":2799,"insuranceTermYears":0,"bmiLoading":0,"riskRate":0,"riskPremiumWithLoading":0,"riskRateGenderSpec":0,"riskPremiumWlGenderSpec":0,"coverLoading":0,"insuranceCoverAmount":0,"medicalCost":0,"carrierFee":0},"worldId":"forest","customerPaymentMethodId":"YUPAYMENTMETHOD002","cardLast4":"Ending in 4242","cardBrand":"Visa","cardValidTill":"4/2024","__typename":"ConfirmedPaymentCard"}',
        archived: false,
        session_id: "a03f5545-5a57-47c3-8467-ab789c5a4402",
    },
};

export const CUSTOMER_PROGRESSION_DENTAL_RENEWAL_5 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID00000011420",
        step_id: "Bupa_Dent_01_policy_holding",
        step_data: "{}",
        archived: false,
        session_id: "a03f5545-5a57-47c3-8467-ab789c5a4402",
    },
};

export const CUSTOMER_PROGRESSION_DENTAL_RENEWAL_6 = {
    type,
    modelName,
    data: {
        customer_product_progression_id: generateRandomPostgresId(),
        customerProductId: "YUCPID00000011420",
        step_id: "Bupa_Dent_01_success_purchase",
        step_data:
            '{"dentalStartDate":"2022-07-16T00:00:00","subscriptionTrialId":"sub_1LIDxPGwfxr4FdJOTxnRmP78","bupaResponseDue":"2022-07-14T00:00:00","sentToBupa":true,"bupaGroupNumber":"55315653120", "successFromBupa": true, "responseFromBupa": true, "bupaMembershipNumber": "membershipNumber"}',
        archived: false,
        session_id: "a03f5545-5a57-47c3-8467-ab789c5a4402",
    },
};
