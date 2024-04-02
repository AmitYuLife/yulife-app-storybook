import { CUSTOMER_34 } from "../../_data";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment from "moment"

export const COIN_MULTIPLIER_1 = {
    type: "mongo",
    modelName: "core_coin_multipliers",
    data: {
        _id: generateRandomMongoId,
        startDate: moment().toISOString(),
        expireDate: moment().add(1, "d").toISOString(),
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        isEnabled: true,
        description: "Test Surge",
        type: "challenge",
        multiple: 10,
        restrictToUserIds: [
            CUSTOMER_34.data.customerId
        ]
    }
} as IDatabaseItem