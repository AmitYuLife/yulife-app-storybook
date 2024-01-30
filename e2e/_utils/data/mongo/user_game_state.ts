
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';

import moment = require('moment');

export const USER_GAME_STATE_2 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        "_id": generateRandomMongoId(),
        "customerId": customer.CUSTOMER_2.data.customerId,
        "userId": customer.CUSTOMER_2.data.customerId,
        "currentBalance": 0,
        "currentStreak": 0,
        "currentLevel": 1,
    }
} as IDatabaseItem

export const USER_GAME_STATE_3 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_3.data.customerId,
        userId: customer.CUSTOMER_3.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 90
    }
} as IDatabaseItem

export const USER_GAME_STATE_4 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_4.data.customerId,
        userId: customer.CUSTOMER_4.data.customerId,
        currentBalance: 15000,
        currentStreak: 0,
        currentLevel: 10
    }
} as IDatabaseItem

export const USER_GAME_STATE_6 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_6.data.customerId,
        userId: customer.CUSTOMER_6.data.customerId,
        currentBalance: 0,
        currentStreak: 1,
        currentLevel: 2,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const USER_GAME_STATE_7 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_7.data.customerId,
        userId: customer.CUSTOMER_7.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 440,
        currentStreak: 4,
        currentLevel: 5,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),

    }
} as IDatabaseItem

export const USER_GAME_STATE_8 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_8.data.customerId,
        userId: customer.CUSTOMER_8.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 320,
        currentLevel: 3,
        currentStreak: 0,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const USER_GAME_STATE_9 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_9.data.customerId,
        userId: customer.CUSTOMER_9.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 560,
        currentLevel: 7,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const USER_GAME_STATE_12 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_12.data.customerId,
        userId: customer.CUSTOMER_12.data.customerId,
        currentBalance: 27500,
        currentStreak: 0,
        currentLevel: 115
    }
} as IDatabaseItem

export const USER_GAME_STATE_13 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_13.data.customerId,
        userId: customer.CUSTOMER_13.data.customerId,
        currentBalance: 50000,
        currentStreak: 0,
        currentLevel: 175,
    }
} as IDatabaseItem


export const USER_GAME_STATE_14 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_14.data.customerId,
        userId: customer.CUSTOMER_14.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 560,
        currentLevel: 7,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem


export const USER_GAME_STATE_15 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_15.data.customerId,
        userId: customer.CUSTOMER_15.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 320,
        currentLevel: 4,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")

    }
} as IDatabaseItem

export const USER_GAME_STATE_16 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_16.data.customerId,
        userId: customer.CUSTOMER_16.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 50,
        currentLevel: 1,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")

    }
} as IDatabaseItem

export const USER_GAME_STATE_17 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_17.data.customerId,
        userId: customer.CUSTOMER_17.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 360,
        currentLevel: 2,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const USER_GAME_STATE_18 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_18.data.customerId,
        userId: customer.CUSTOMER_18.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 320,
        currentLevel: 4,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const USER_GAME_STATE_19 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_19.data.customerId,
        userId: customer.CUSTOMER_19.data.customerId,
        currentBalance: 250,
        currentStreak: 0,
        currentLevel: 1
    }
} as IDatabaseItem

export const USER_GAME_STATE_20 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_20.data.customerId,
        userId: customer.CUSTOMER_20.data.customerId,
        currentBalance: 20,
        currentStreak: 0,
        currentLevel: 1
    }
} as IDatabaseItem

export const USER_GAME_STATE_22 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_22.data.customerId,
        userId: customer.CUSTOMER_22.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 49
    }
} as IDatabaseItem

export const USER_GAME_STATE_23 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_23.data.customerId,
        userId: customer.CUSTOMER_23.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 99
    }
} as IDatabaseItem


export const USER_GAME_STATE_24 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_24.data.customerId,
        userId: customer.CUSTOMER_24.data.customerId,
        currentBalance: 20000,
        currentStreak: 0,
        currentLevel: 199
    }
} as IDatabaseItem

export const USER_GAME_STATE_35 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_35.data.customerId,
        userId: customer.CUSTOMER_35.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 3080,
        currentStreak: 5,
        currentLevel: 6,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_36 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_36.data.customerId,
            userId: customer.CUSTOMER_36.data.customerId,
            currentBalance: 100000,
            currentStreak: 0,
            currentLevel: 90
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_37 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_37.data.customerId,
            userId: customer.CUSTOMER_37.data.customerId,
            currentBalance: 100000,
            currentStreak: 0,
            currentLevel: 90
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_38 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            "_id": generateRandomMongoId(),
            "customerId": customer.CUSTOMER_38.data.customerId,
            "userId": customer.CUSTOMER_38.data.customerId,
            "currentBalance": 0,
            "currentStreak": 0,
            "currentLevel": 1,
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_39 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_39.data.customerId,
            userId: customer.CUSTOMER_39.data.customerId,
            currentBalance: 20000,
            currentStreak: 0,
            currentLevel: 201,
            yuniversalMap: 1,
            yuniversalLevel: 1
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_40 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_40.data.customerId,
            userId: customer.CUSTOMER_40.data.customerId,
            currentBalance: 20000,
            currentStreak: 0,
            currentLevel: 49,
        }
    } as IDatabaseItem


    export const USER_GAME_STATE_41 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_41.data.customerId,
            userId: customer.CUSTOMER_41.data.customerId,
            currentBalance: 27500,
            currentStreak: 0,
            currentLevel: 149
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_44 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_44.data.customerId,
            userId: customer.CUSTOMER_44.data.customerId,
            currentBalance: 0,
            currentStreak: 0,
            currentLevel: 90
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_MEDITOPIA_2 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_MEDITOPIA_2.data.customerId,
            userId: customer.CUSTOMER_MEDITOPIA_2.data.customerId,
            currentBalance: 350,
            currentStreak: 0,
            currentLevel: 10
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_MEDITOPIA_3 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_MEDITOPIA_3.data.customerId,
            userId: customer.CUSTOMER_MEDITOPIA_3.data.customerId,
            currentBalance: 550,
            currentStreak: 0,
            currentLevel: 15,
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_42 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_42.data.customerId,
            userId: customer.CUSTOMER_42.data.customerId,
            activeStreakId: "YU_STREAK_001",
            currentBalance: 320,
            currentStreak: 5,
            currentLevel: 51,
            nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_47 = {
        type:"mongo",
        modelName:"user_game_state",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_47.data.customerId,
            userId: customer.CUSTOMER_47.data.customerId,
            currentBalance: 500,
            currentStreak: 1,
            currentLevel: 1
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_50 = {
        type:"mongo",
        modelName:"user_game_state",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_50.data.customerId,
            userId: customer.CUSTOMER_50.data.customerId,
            currentBalance: 500,
            currentStreak: 1,
            currentLevel: 1
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_52 = {
        type:"mongo",
        modelName:"user_game_state",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_52.data.customerId,
            userId: customer.CUSTOMER_52.data.customerId,
            currentBalance: 500,
            currentStreak: 1,
            currentLevel: 1
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_54 = {
        type:"mongo",
        modelName:"user_game_state",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_54.data.customerId,
            userId: customer.CUSTOMER_54.data.customerId,
            currentBalance: 400,
            currentStreak: 2,
            currentLevel: 2
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_55 = {
        type:"mongo",
        modelName:"user_game_state",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_55.data.customerId,
            userId: customer.CUSTOMER_55.data.customerId,
            currentBalance: 401,
            currentStreak: 3,
            currentLevel: 2
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_56 = {
        type:"mongo",
        modelName:"user_game_state",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_56.data.customerId,
            userId: customer.CUSTOMER_56.data.customerId,
            currentBalance: 451,
            currentStreak: 3,
            currentLevel: 3
        }
    } as IDatabaseItem


    export const USER_GAME_STATE_57 = {
        type:"mongo",
        modelName:"user_game_state",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_57.data.customerId,
            userId: customer.CUSTOMER_57.data.customerId,
            currentBalance: 455,
            currentStreak: 4,
            currentLevel: 4
        }
    } as IDatabaseItem


    export const USER_GAME_STATE_58 = {
        type:"mongo",
        modelName:"user_game_state",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_58.data.customerId,
            userId: customer.CUSTOMER_58.data.customerId,
            currentBalance: 465,
            currentStreak: 5,
            currentLevel: 4
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_60 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_60.data.customerId,
            userId: customer.CUSTOMER_60.data.customerId,
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 49,
            nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_61 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_61.data.customerId,
            userId: customer.CUSTOMER_61.data.customerId,
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 51
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_63 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_63.data.customerId,
            userId: customer.CUSTOMER_63.data.customerId,
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 199
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_64 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_64.data.customerId,
            userId: customer.CUSTOMER_64.data.customerId,
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 201
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_65 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_65.data.customerId,
            userId: customer.CUSTOMER_65.data.customerId,
            currentBalance: 220,
            currentStreak: 0,
            currentLevel: 21
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_66 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_66.data.customerId,
            userId: customer.CUSTOMER_66.data.customerId,
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 201
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_67 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_67.data.customerId,
            userId: customer.CUSTOMER_67.data.customerId,
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 251
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_68 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_68.data.customerId,
            userId: customer.CUSTOMER_68.data.customerId,
            currentBalance: 17500,
            currentStreak: 0,
            yuniversalMap: 1,
            yuniversalLevel: 1,
            currentLevel: 201,
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_69 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_69.data.customerId,
            userId: customer.CUSTOMER_69.data.customerId,
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 200,
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_70 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_70.data.customerId,
            userId: customer.CUSTOMER_70.data.customerId,
            currentBalance: 17500,
            currentStreak: 0,
            yuniversalMap: 1,
            yuniversalLevel: 7,
            currentLevel: 201,
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_71 = {
        type:"mongo",
        modelName:"user_game_state",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_71.data.customerId,
            userId: customer.CUSTOMER_71.data.customerId,
            currentBalance: 500,
            currentStreak: 1,
            currentLevel: 1
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_72 = {
        type:"mongo",
        modelName:"user_game_state",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_72.data.customerId,
            userId: customer.CUSTOMER_72.data.customerId,
            currentBalance: 500,
            currentStreak: 1,
            currentLevel: 152
        }
    } as IDatabaseItem

    export const USER_GAME_STATE_73 = {
        type: "mongo",
        modelName: "user_game_state",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_73.data.customerId,
            userId: customer.CUSTOMER_73.data.customerId,
            activeStreakId: "YU_STREAK_001",
            currentBalance: 360,
            currentLevel: 2,
            nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
        }
    } as IDatabaseItem


export const USER_GAME_STATE_75 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_75.data.customerId,
        userId: customer.CUSTOMER_75.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 320,
        currentLevel: 4,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const USER_GAME_STATE_76 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        "_id": generateRandomMongoId(),
        "customerId": customer.CUSTOMER_76.data.customerId,
        "userId": customer.CUSTOMER_76.data.customerId,
        "currentBalance": 0,
        "currentStreak": 0,
        "currentLevel": 1,
    }
} as IDatabaseItem

export const USER_GAME_STATE_77 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_77.data.customerId,
        userId: customer.CUSTOMER_77.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 360,
        currentLevel: 2,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const USER_GAME_STATE_78 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_78.data.customerId,
        userId: customer.CUSTOMER_78.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        yuniversalMap: 1,
        yuniversalLevel: 7,
        currentLevel: 201,
    }
} as IDatabaseItem

export const USER_GAME_STATE_79 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_79.data.customerId,
        userId: customer.CUSTOMER_79.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 250,
    }
} as IDatabaseItem

export const USER_GAME_STATE_80 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_80.data.customerId,
        userId: customer.CUSTOMER_80.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 400,
    }
} as IDatabaseItem

export const USER_GAME_STATE_81 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_81.data.customerId,
        userId: customer.CUSTOMER_81.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 201,
    }
} as IDatabaseItem

export const USER_GAME_STATE_83 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_83.data.customerId,
        userId: customer.CUSTOMER_83.data.customerId,
        currentBalance: 0,
        currentStreak: 0,
        currentLevel: 1,
    }
} as IDatabaseItem

export const USER_GAME_STATE_84 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_84.data.customerId,
        userId: customer.CUSTOMER_84.data.customerId,
        currentBalance: 500,
        currentStreak: 1,
        currentLevel: 152
    }
} as IDatabaseItem

export const USER_GAME_STATE_FIIT = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_FIIT.data.customerId,
    userId: customer.CUSTOMER_FIIT.data.customerId,
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 5,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_86 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_86.data.customerId,
        userId: customer.CUSTOMER_86.data.customerId,
        currentBalance: 500,
        currentStreak: 1,
        currentLevel: 152
    }
} as IDatabaseItem

export const USER_GAME_STATE_89 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_89.data.customerId,
        userId: customer.CUSTOMER_89.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 400
    }
} as IDatabaseItem

export const USER_GAME_STATE_90 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_90.data.customerId,
        userId: customer.CUSTOMER_90.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        yuniversalMap: 2,
        yuniversalLevel: 7,
        currentLevel: 401,
    }
} as IDatabaseItem

export const USER_GAME_STATE_91 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_91.data.customerId,
        userId: customer.CUSTOMER_91.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 401
    }
} as IDatabaseItem

export const USER_GAME_STATE_92 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_92.data.customerId,
        userId: customer.CUSTOMER_92.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_LEAVER = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_LEAVER.data.customerId,
        userId: customer.CUSTOMER_LEAVER.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_94 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_94.data.customerId,
        userId: customer.CUSTOMER_94.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_109 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_109.data.customerId,
        userId: customer.CUSTOMER_109.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_110 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_110.data.customerId,
        userId: customer.CUSTOMER_110.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_111 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_111.data.customerId,
        userId: customer.CUSTOMER_111.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_112 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_112.data.customerId,
        userId: customer.CUSTOMER_112.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_113 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_113.data.customerId,
        userId: customer.CUSTOMER_113.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_114 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_114.data.customerId,
        userId: customer.CUSTOMER_114.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_115 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_115.data.customerId,
        userId: customer.CUSTOMER_115.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_116 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 80
    }
} as IDatabaseItem

export const USER_GAME_STATE_117 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_117_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_117_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        yuniversalMap: 2,
        yuniversalLevel: 1,
        currentLevel: 401,
    }
} as IDatabaseItem

export const USER_GAME_STATE_118 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_118_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_118_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 123
    }
} as IDatabaseItem

export const USER_GAME_STATE_119 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_119_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_119_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 211
    }
} as IDatabaseItem

export const USER_GAME_STATE_120 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_120_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_120_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 177
    }
} as IDatabaseItem

export const USER_GAME_STATE_121 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 241
    }
} as IDatabaseItem

export const USER_GAME_STATE_122 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_122.data.customerId,
        userId: customer.CUSTOMER_122.data.customerId,
        currentBalance: 500,
        currentStreak: 1,
        currentLevel: 50,
    }
} as IDatabaseItem

export const USER_GAME_STATE_123 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_123_MPP.data.customerId,
        userId: customer.CUSTOMER_123_MPP.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 50,
    }
} as IDatabaseItem

export const USER_GAME_STATE_124 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_124_MPP.data.customerId,
        userId: customer.CUSTOMER_124_MPP.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 50,
    }
} as IDatabaseItem

export const USER_GAME_STATE_125 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_125.data.customerId,
        userId: customer.CUSTOMER_125.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 50,
    }
} as IDatabaseItem

export const USER_GAME_STATE_126 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
        userId: customer.CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
        currentBalance: 10000,
        currentStreak: 0,
        currentLevel: 28,
    }
} as IDatabaseItem

export const USER_GAME_STATE_127 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_127_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_127_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 241
    }
} as IDatabaseItem

export const USER_GAME_STATE_128 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_128_WELLBEING_ELIGIBILITY.data.customerId,
        userId: customer.CUSTOMER_128_WELLBEING_ELIGIBILITY.data.customerId,
        currentBalance: 10000,
        currentStreak: 0,
        currentLevel: 36
    }
} as IDatabaseItem

export const USER_GAME_STATE_129 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_129_WELLBEING_ELIGIBILITY.data.customerId,
        userId: customer.CUSTOMER_129_WELLBEING_ELIGIBILITY.data.customerId,
        currentBalance: 10000,
        currentStreak: 0,
        currentLevel: 36
    }
} as IDatabaseItem

export const USER_GAME_STATE_130 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
        userId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
        currentBalance: 10000,
        currentStreak: 0,
        currentLevel: 36
    }
} as IDatabaseItem

export const USER_GAME_STATE_131 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_131_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_131_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 50
    }
} as IDatabaseItem

export const USER_GAME_STATE_132 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_132.data.customerId,
        userId: customer.CUSTOMER_132.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 320,
        currentLevel: 1,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")

    }
} as IDatabaseItem

export const USER_GAME_STATE_133 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_133_GHI_FUTURE.data.customerId,
        userId: customer.CUSTOMER_133_GHI_FUTURE.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 22
    }
} as IDatabaseItem

export const USER_GAME_STATE_DENTAL_RENEW = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_DENTAL_RENEW.data.customerId,
        userId: customer.CUSTOMER_DENTAL_RENEW.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 22
    }
} as IDatabaseItem

export const USER_GAME_STATE_DENTAL_RENEW_2 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
        userId: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 22
    }
} as IDatabaseItem