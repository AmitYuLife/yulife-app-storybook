import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { USER_34 } from './users';


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
        restrictedToUserIds: [ USER_34.data.userId ],
        isEnabled: true,
        description: "Test Surge",
        type: "challenge",
        multiple: 10
    }
} as IDatabaseItem