import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import * as customer from '../postgres/customers';
import { AUTH_TEMPLATE } from "./_templates"

const type = "mongo"
const modelName ="authpassword"

export const AUTH_1 = {
    type,
    modelName,
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

export const AUTH_51 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_51.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_53 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_53.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_GHI = {
    type,
    modelName,
    data: {
            ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.43323",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_GHI.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_GHI_STARTED = {
    type,
    modelName,
    data: {
            ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.43323",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_GHI_STARTED.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_93 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_93.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_95 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_95.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_96 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_96.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_97 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_97.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_98 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_98.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_99 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_99.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_100 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_100.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_101 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_101.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_102 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_102.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_103 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_103.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_104 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_104.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_105 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_105.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_106 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_106.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_107 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_107.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_109 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_109.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_110 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_110.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_115 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_115.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_125 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_125.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_138 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_138.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_139 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_139.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_MAXIMISE_YU = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_MAXIMISE_YU.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_140 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_140.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_141 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_141.data.customerId,
    }
}  as IDatabaseItem
