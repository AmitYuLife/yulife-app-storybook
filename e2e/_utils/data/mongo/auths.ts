import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';
import moment = require('moment');
import { AUTH_TEMPLATE } from "./_templates"

const type = "mongo"
const modelName ="auth"

export const AUTH_1 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        attempts: 1,
        lastAttempt: "2019-03-12T14:10:29.275+00:00",
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: customer.CUSTOMER_1.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_2 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        attempts: 1,
        lastAttempt: "2019-03-12T14:10:29.275+00:00",
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: customer.CUSTOMER_2.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_3 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_2.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_3.data.customerId
    }
} as IDatabaseItem

export const AUTH_4 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_2.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_4.data.customerId
    }
} as IDatabaseItem

export const AUTH_5 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: customer.CUSTOMER_5.data.customerId
    }
} as IDatabaseItem

export const AUTH_6 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: customer.CUSTOMER_6.data.customerId
    }
} as IDatabaseItem

export const AUTH_7 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: customer.CUSTOMER_7.data.customerId
    }
} as IDatabaseItem


export const AUTH_8 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: customer.CUSTOMER_8.data.customerId
    }
} as IDatabaseItem

export const AUTH_9 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_9.data.customerId
    }
} as IDatabaseItem

export const AUTH_10 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_10.data.customerId,
        tokenExpiration: "30s"
    }
} as IDatabaseItem

export const AUTH_11 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.333",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_11.data.customerId,
        tokenExpiration: "2 days"
    }
} as IDatabaseItem

export const AUTH_12 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.444",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_12.data.customerId,
    }
} as IDatabaseItem


export const AUTH_13 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.555",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_13.data.customerId,
    }
} as IDatabaseItem

export const AUTH_14 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.666",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_14.data.customerId,
    }
} as IDatabaseItem

export const AUTH_ARCHIVED = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.777",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_ARCHIVED.data.customerId,
    }
} as IDatabaseItem

export const AUTH_15 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_15.data.customerId,
    }
} as IDatabaseItem

export const AUTH_16 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.999",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_16.data.customerId,
    }
} as IDatabaseItem

export const AUTH_17 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_17.data.customerId,
    }
} as IDatabaseItem

export const AUTH_18 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_18.data.customerId,
    }
} as IDatabaseItem

export const AUTH_19 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_19.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_20 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_20.data.customerId,
    }
} as IDatabaseItem

export const AUTH_21 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.333",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_21.data.customerId,
    }
} as IDatabaseItem

export const AUTH_22 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_22.data.customerId,
    }
} as IDatabaseItem


export const AUTH_23 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.555",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_23.data.customerId,
    }
} as IDatabaseItem

export const AUTH_ALPHA = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.666",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_ALPHA.data.customerId,
    }
} as IDatabaseItem

export const AUTH_24 ={
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.777",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_24.data.customerId,
    }
} as IDatabaseItem

export const AUTH_25 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_25.data.customerId,
    }
} as IDatabaseItem

export const AUTH_26 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_26.data.customerId,
    }
} as IDatabaseItem


export const AUTH_27 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_27.data.customerId,
    }
} as IDatabaseItem

export const AUTH_28 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_28.data.customerId,
    }
} as IDatabaseItem

export const AUTH_29 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_29.data.customerId,
    }
} as IDatabaseItem

export const AUTH_30 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_30.data.customerId,
    }
} as IDatabaseItem

export const AUTH_31 = {
    type,
    modelName,
    data:{
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.999",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_31.data.customerId,
    }
} as IDatabaseItem

export const AUTH_32 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.000",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_32.data.customerId,
    }
} as IDatabaseItem

export const AUTH_33 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.000",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_33.data.customerId,
    }
} as IDatabaseItem

export const AUTH_34 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.000",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_34.data.customerId,
    }
} as IDatabaseItem

export const AUTH_35 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_35.data.customerId,
    }
} as IDatabaseItem

export const AUTH_36 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_36.data.customerId,
    }
} as IDatabaseItem

export const AUTH_37 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_37.data.customerId,
    }
} as IDatabaseItem

export const AUTH_38 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_38.data.customerId,
    }
} as IDatabaseItem

export const AUTH_39 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_39.data.customerId,
    }
} as IDatabaseItem

export const AUTH_40 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_40.data.customerId,
    }
} as IDatabaseItem

export const AUTH_41 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_41.data.customerId,
    }
} as IDatabaseItem

export const AUTH_42 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_42.data.customerId,
    }
} as IDatabaseItem

export const AUTH_43 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_43.data.customerId,
    }
} as IDatabaseItem

export const AUTH_44 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_44.data.customerId,
    }
} as IDatabaseItem

export const AUTH_45 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_45.data.customerId,
    }
} as IDatabaseItem

export const AUTH_46 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_46.data.customerId,
    }
} as IDatabaseItem

export const AUTH_47 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_47.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_48 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_48.data.customerId,
    }
} as IDatabaseItem

export const AUTH_49 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_49.data.customerId,
    }
} as IDatabaseItem

export const AUTH_50 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_50.data.customerId,
    }
} as IDatabaseItem

export const AUTH_51 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_51.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_53 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_53.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_52 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_52.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_54 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_54.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_55 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_55.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_56 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_56.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_57 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_57.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_58 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_58.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_MEDITOPIA_1 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: customer.CUSTOMER_MEDITOPIA_1.data.customerId
    }
} as IDatabaseItem

export const AUTH_MEDITOPIA_2 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: customer.CUSTOMER_MEDITOPIA_2.data.customerId
    }
} as IDatabaseItem

export const AUTH_MEDITOPIA_3 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: customer.CUSTOMER_MEDITOPIA_3.data.customerId
    }
} as IDatabaseItem

export const AUTH_DENTAL_1 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.444",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_1.data.customerId,
    }
} as IDatabaseItem

export const AUTH_DENTAL_2 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.444",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_2.data.customerId,
    }
} as IDatabaseItem

export const AUTH_PLI_2 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_PLI_2.data.customerId,
    }
} as IDatabaseItem

export const AUTH_PLI_3 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_PLI_3.data.customerId,
    }
} as IDatabaseItem

export const AUTH_PLI_4 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_PLI_4.data.customerId,
    }
} as IDatabaseItem

export const AUTH_PLI_5 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_PLI_5.data.customerId,
    }
} as IDatabaseItem

export const AUTH_PLI_6 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_PLI_6.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_PLI_7 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_PLI_7.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_PLI_9 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_PLI_9.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_PLI_10 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_PLI_10.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_60 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_60.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_61 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_61.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_63 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_63.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_64 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_64.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_65 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_65.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_66 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_66.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_67 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_67.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_68 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_68.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_71 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_71.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_72 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_72.data.customerId,
    }
}  as IDatabaseItem




export const AUTH_69 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_69.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_70 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_70.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_73 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_73.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_74 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_74.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_75 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_75.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_76 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        attempts: 1,
        lastAttempt: "2019-03-12T14:10:29.275+00:00",
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: customer.CUSTOMER_76.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_77 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_77.data.customerId,
    }
} as IDatabaseItem

export const AUTH_78 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_78.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_79 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_79.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_80 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_80.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_81 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_81.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_82 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_82.data.customerId,
    }
} as IDatabaseItem

export const AUTH_83 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_83.data.customerId,
    }
} as IDatabaseItem

export const AUTH_84 = {
  type: "mongo",
  modelName: "auth",
  data: {
      ...AUTH_TEMPLATE.data,
      lastIp: "35.176.60.44422",
      _id: generateRandomMongoId(),
      userId: customer.CUSTOMER_84.data.customerId,
  }
} as IDatabaseItem

export const AUTH_85 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_85.data.customerId,
    }
  } as IDatabaseItem

  export const AUTH_FIIT = {
    type: "mongo",
    modelName: "auth",
    data: {
      ...AUTH_TEMPLATE.data,
      lastIp: "35.176.60.44422",
      _id: generateRandomMongoId(),
      userId: customer.CUSTOMER_FIIT.data.customerId,
    },
  } as IDatabaseItem;

export const AUTH_86 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_86.data.customerId,
    }
}  as IDatabaseItem
      
export const AUTH_FUTURE_PRODUCT = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.41129",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_FUTURE_PRODUCT.data.customerId,
    }
} as IDatabaseItem

  export const AUTH_LEAVER = {
        type: "mongo",
        modelName: "auth",
        data: {
            ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.43323",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_LEAVER.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_GHI = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.43323",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_GHI.data.customerId,
},
} as IDatabaseItem;

export const AUTH_GHI_STARTED = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.43323",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_GHI_STARTED.data.customerId,
},
} as IDatabaseItem;

export const AUTH_89 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_89.data.customerId,
    }
}  as IDatabaseItem


export const AUTH_90 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_90.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_91 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_91.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_92 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_92.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_93 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_93.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_94 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_94.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_95 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_95.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_96 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_96.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_97 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_97.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_98 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_98.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_99 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_99.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_100 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_100.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_101 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_101.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_102 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_102.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_103 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_103.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_104 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_104.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_105 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_105.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_106 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_106.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_107 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_107.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_108 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_108.data.customerId,
    }
}  as IDatabaseItem


export const AUTH_109 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_109.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_110 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_110.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_111 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_111.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_112 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_112.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_113 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_113.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_114 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_114.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_115 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_115.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_116 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
    }
}  as IDatabaseItem