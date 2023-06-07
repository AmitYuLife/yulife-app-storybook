import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { BUSINESS_PRODUCT_3, BUSINESS_PRODUCT_4_GCI, BUSINESS_PRODUCT_4_GIP, BUSINESS_PRODUCT_4_RGL, BUSINESS_PRODUCT_1_WB, BUSINESS_PRODUCT_4_GDental, BUSINESS_PRODUCT_ENDED, BUSINESS_PRODUCT_FUTURE, BUSINESS_PRODUCT_8_GHI, BUSINESS_PRODUCT_9_GDent } from "./business_product"
import { CUSTOMER_31, CUSTOMER_32, CUSTOMER_33, CUSTOMER_34, CUSTOMER_43, CUSTOMER_48, CUSTOMER_49, CUSTOMER_51, CUSTOMER_53, CUSTOMER_74, CUSTOMER_LEAVER, CUSTOMER_FUTURE_PRODUCT } from "./customers"
import { CPE_31, CPE_32_GCI, CPE_32_GIP, CPE_32_RGL, CPE_33_GCI, CPE_33_GIP, CPE_33_RGL, CPE_34_GCI, CPE_34_GIP, CPE_34_RGL, CPE_43_WELLBEING, CPE_48_GCI, CPE_48_GIP, CPE_48_RGL, CPE_48_WELLBEING, CPE_49_GCI, CPE_49_GIP, CPE_49_RGL, CPE_49_WELLBEING, CPE_51_GDent, CPE_53_GIP, CPE_74, CPE_93_GDent, CPE_BUSINESS_LEAVER, CPE_FUTURE_PRODUCT, CPE_GHI_FUTURE, CPE_GHI_STARTED} from "./customer_product_entity"
import moment = require('moment');

const type = "postgres"
const modelName = "customer_business_product"

export const CGP_31 = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_3.product.data.product_id,
        customer_product_id: CPE_31.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(3, "months").toDate(),
        data:{
            salary: 60000,
            country: "UK",
            date_of_birth: CUSTOMER_31.data.date_of_birth
        }
    }
} as IDatabaseItem

export const CGP_32_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_RGL.product.data.product_id,
        customer_product_id: CPE_32_RGL.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "year").toDate(),
        data: {
            salary: 100000,
            country: "UK",
            date_of_birth: CUSTOMER_32.data.date_of_birth,  
        }
    }
} as IDatabaseItem

export const CGP_32_GIP = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
        customer_product_id: CPE_32_GIP.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "year").toDate(),
        data:{
            date_of_birth: CUSTOMER_32.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_32_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GCI.product.data.product_id,
        customer_product_id: CPE_32_GCI.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "year").toDate(),
        data:{
            date_of_birth: CUSTOMER_32.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_33_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_RGL.product.data.product_id,
        customer_product_id: CPE_33_RGL.data.customer_product_id,
        category_id: 1,
        start_date: CUSTOMER_33.data.start_date,
        data : {
            salary: 100000,
            country: "UK",
            date_of_birth: CUSTOMER_33.data.date_of_birth,
        }
    }
} as IDatabaseItem

export const CGP_33_GIP = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
        customer_product_id: CPE_33_GIP.data.customer_product_id,
        category_id: 1,
        start_date: CUSTOMER_33.data.start_date,
        data : {
            date_of_birth: CUSTOMER_33.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_33_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GCI.product.data.product_id,
        customer_product_id: CPE_33_GCI.data.customer_product_id,
        category_id: 1,
        start_date: CUSTOMER_33.data.start_date,
        data : {
            date_of_birth: CUSTOMER_33.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_34_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_RGL.product.data.product_id,
        customer_product_id: CPE_34_RGL.data.customer_product_id,
        category_id: 1,
        start_date: moment().toDate(),
        data : {
            date_of_birth: CUSTOMER_34.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_34_GIP = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
        customer_product_id: CPE_34_GIP.data.customer_product_id,
        category_id: 1,
        start_date: moment().toDate(),
        data : {
            salary: 100000,
            country: "UK",
            date_of_birth: CUSTOMER_34.data.date_of_birth,
        }
    }
} as IDatabaseItem

export const CGP_34_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GCI.product.data.product_id,
        customer_product_id: CPE_34_GCI.data.customer_product_id,
        category_id: 1,
        start_date: moment().toDate(),
        data : {
            salary: 100000,
            country: "UK",
            date_of_birth: CUSTOMER_34.data.date_of_birth,
        }
    }
} as IDatabaseItem

export const CGP_43_WELLBEING = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_1_WB.product.data.product_id,
        customer_product_id: CPE_43_WELLBEING.data.customer_product_id,
        category_id: 1,
        start_date: CUSTOMER_43.data.start_date,
        data: {
            date_of_birth: CUSTOMER_43.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    },
} as IDatabaseItem

export const CGP_48_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_RGL.product.data.product_id,
        customer_product_id: CPE_48_RGL.data.customer_product_id,
        category_id: 1,
        start_date: CUSTOMER_48.data.start_date,
        data: {
            date_of_birth: CUSTOMER_48.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_48_GIP = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
        customer_product_id: CPE_48_GIP.data.customer_product_id,
        category_id: 1,
        start_date: CUSTOMER_48.data.start_date,
        data: {
            date_of_birth: CUSTOMER_48.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_48_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GCI.product.data.product_id,
        customer_product_id: CPE_48_GCI.data.customer_product_id,
        category_id: 1,
        start_date: CUSTOMER_48.data.start_date,
        data: {
            date_of_birth: CUSTOMER_48.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_48_WELLBEING = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_1_WB.product.data.product_id,
        customer_product_id: CPE_48_WELLBEING.data.customer_product_id,
        category_id: 1,
        start_date: CUSTOMER_48.data.start_date,
        data: {
            date_of_birth: CUSTOMER_48.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_49_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_RGL.product.data.product_id,
        customer_product_id: CPE_49_RGL.data.customer_product_id,
        category_id: 1,
        start_date: CUSTOMER_49.data.start_date,
        data: {
            date_of_birth: CUSTOMER_49.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_49_GIP = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
        customer_product_id: CPE_49_GIP.data.customer_product_id,
        category_id: 1,
        start_date: CUSTOMER_49.data.start_date,
        data: {
            date_of_birth: CUSTOMER_49.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_49_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GCI.product.data.product_id,
        customer_product_id: CPE_49_GCI.data.customer_product_id,
        category_id: 1,
        start_date: CUSTOMER_49.data.start_date,
        data: {
            date_of_birth: CUSTOMER_49.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_49_WELLBEING = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_1_WB.product.data.product_id,
        customer_product_id: CPE_49_WELLBEING.data.customer_product_id,
        category_id: 1,
        start_date: CUSTOMER_49.data.start_date,
        data: {
            date_of_birth: CUSTOMER_49.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_51_GDental = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GDental.product.data.product_id,
        customer_product_id: CPE_51_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
        data: {
            date_of_birth: CUSTOMER_51.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_53_GIP = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
        customer_product_id: CPE_53_GIP.data.customer_product_id,
        category_id: 1,
        start_date: CUSTOMER_53.data.start_date,
        data: {
            date_of_birth: CUSTOMER_53.data.date_of_birth,    
            salary: 100000,
            country: "UK",  
        }
    }
} as IDatabaseItem

export const CGP_74 = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_3.product.data.product_id,
        customer_product_id: CPE_74.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(3, "months").toDate(),
        data:{
            salary: 60000,
            country: "UK",
            date_of_birth: CUSTOMER_74.data.date_of_birth
        }
    }
} as IDatabaseItem


export const CGP_FUTURE_PRODUCT = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_FUTURE.product.data.product_id,
        customer_product_id: CPE_FUTURE_PRODUCT.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(2, "weeks").toDate(),
        data: {
            salary: 60000,
            country: "UK",
            date_of_birth: CUSTOMER_FUTURE_PRODUCT.data.date_of_birth,
        }
    }
}

export const CGP_LEAVER = {
    type,
    modelName,
    business_product_id: BUSINESS_PRODUCT_ENDED.product.data.product_id,
    data: {
        business_product_id: BUSINESS_PRODUCT_ENDED.product.data.product_id,
        customer_product_id: CPE_BUSINESS_LEAVER.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(3, "months").toDate(),
        data: {
            salary: 60000,
            country: "UK",
            date_of_birth: CUSTOMER_LEAVER.data.date_of_birth,
        }
    }
} as IDatabaseItem

export const CBP_GHI_FUTURE = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_8_GHI.product.data.product_id,
        customer_product_id: CPE_GHI_FUTURE.data.customer_product_id,
        "category_id" : "1",
        "start_date" : "2023-04-26",
        "archived" : false,
        "data" : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }       
} as IDatabaseItem

export const CBP_GHI_STARTED = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_8_GHI.product.data.product_id,
        customer_product_id: CPE_GHI_STARTED.data.customer_product_id,
        "category_id" : "1",
        "start_date" : "2023-04-26",
        "archived" : false,
        "data" : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }       
} as IDatabaseItem

export const CBP_GDENT_93 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_9_GDent.product.data.product_id,
        customer_product_id: CPE_93_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "year").format("YYYY-MM-DD"),
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Bir\",\"lastName\":\"Amber\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentStarted\":true,\"enrolmentChoiceConfirmed\":true}"
    }
} as IDatabaseItem