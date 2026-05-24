import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_36 } from "../postgres/customers";

export const webhook_1 = {
    modelName: "mixpanelwebhook",
    type: "mongo",
    data: {
        _id: generateRandomMongoId(),
        affectedCustomerIds: CUSTOMER_36.data.customerId,
        coinMultiplierIds: [],
        multiple: 1,
        daysValidFor: 1,
        label: "Test app store feedback",
        action: "APP_STORE_REVIEW_PROMPT",
        promptAfterSeconds: 6,
        enabled: true,
        secret: "e2e-test-mixpanel-webhook-secret",
        __v: 0,
        // "promptAfterEvent": "CHALLENGE_START_SUCCESS"
    },
} as IDatabaseItem;
