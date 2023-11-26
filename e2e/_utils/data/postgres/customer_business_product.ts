import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { BUSINESS_PRODUCT_3, BUSINESS_PRODUCT_4_GCI, BUSINESS_PRODUCT_4_GIP, BUSINESS_PRODUCT_4_RGL, BUSINESS_PRODUCT_1_WB, BUSINESS_PRODUCT_4_GDental, BUSINESS_PRODUCT_ENDED, BUSINESS_PRODUCT_FUTURE, BUSINESS_PRODUCT_8_GHI, BUSINESS_PRODUCT_9_GDent, BUSINESS_PRODUCT_11_GDent, BUSINESS_PRODUCT_12_GDent, BUSINESS_PRODUCT_10_GDent, BUSINESS_PRODUCT_13_GHI_REWARDS, BUSINESS_PRODUCT_14_MPP_GDental, BUSINESS_PRODUCT_14_GCI, BUSINESS_PRODUCT_14_SAAS, BUSINESS_PRODUCT_14_GHI, BUSINESS_PRODUCT_14_RGL, BUSINESS_PRODUCT_4_GDental_CHOICE } from "./business_product"
import { CUSTOMER_31, CUSTOMER_32, CUSTOMER_33, CUSTOMER_34, CUSTOMER_43, CUSTOMER_48, CUSTOMER_49, CUSTOMER_51, CUSTOMER_53, CUSTOMER_74, CUSTOMER_LEAVER, CUSTOMER_FUTURE_PRODUCT, CUSTOMER_94, CUSTOMER_96, CUSTOMER_123_MPP, CUSTOMER_124_MPP, CUSTOMER_125, CUSTOMER_126_LEAVER_WELLBEING } from "./customers"
import * as cpe from "./customer_product_entity"
import moment = require('moment');

const type = "postgres"
const modelName = "customer_business_product"

export const CGP_31 = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_3.product.data.product_id,
        customer_product_id: cpe.CPE_31.data.customer_product_id,
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
        customer_product_id: cpe.CPE_32_RGL.data.customer_product_id,
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
        customer_product_id: cpe.CPE_32_GIP.data.customer_product_id,
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
        customer_product_id: cpe.CPE_32_GCI.data.customer_product_id,
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
        customer_product_id: cpe.CPE_33_RGL.data.customer_product_id,
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
        customer_product_id: cpe.CPE_33_GIP.data.customer_product_id,
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
        customer_product_id: cpe.CPE_33_GCI.data.customer_product_id,
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
        customer_product_id: cpe.CPE_34_RGL.data.customer_product_id,
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
        customer_product_id: cpe.CPE_34_GIP.data.customer_product_id,
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
        customer_product_id: cpe.CPE_34_GCI.data.customer_product_id,
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
        customer_product_id: cpe.CPE_43_WELLBEING.data.customer_product_id,
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
        customer_product_id: cpe.CPE_48_RGL.data.customer_product_id,
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
        customer_product_id: cpe.CPE_48_GIP.data.customer_product_id,
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
        customer_product_id: cpe.CPE_48_GCI.data.customer_product_id,
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
        customer_product_id: cpe.CPE_48_WELLBEING.data.customer_product_id,
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
        customer_product_id: cpe.CPE_49_RGL.data.customer_product_id,
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
        customer_product_id: cpe.CPE_49_GIP.data.customer_product_id,
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
        customer_product_id: cpe.CPE_49_GCI.data.customer_product_id,
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
        customer_product_id: cpe.CPE_49_WELLBEING.data.customer_product_id,
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
        customer_product_id: cpe.CPE_51_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
        data: {
            date_of_birth: CUSTOMER_51.data.date_of_birth,
            salary: 100000,
            country: "UK",
            externalMembershipNumber: "34343434"
        }
    }
} as IDatabaseItem

export const CGP_53_GIP = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
        customer_product_id: cpe.CPE_53_GIP.data.customer_product_id,
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
        customer_product_id: cpe.CPE_74.data.customer_product_id,
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
        customer_product_id: cpe.CPE_FUTURE_PRODUCT.data.customer_product_id,
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
        customer_product_id: cpe.CPE_BUSINESS_LEAVER.data.customer_product_id,
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
        customer_product_id: cpe.CPE_GHI_FUTURE.data.customer_product_id,
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
        customer_product_id: cpe.CPE_GHI_STARTED.data.customer_product_id,
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
        customer_product_id: cpe.CPE_93_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "year").format("YYYY-MM-DD"),
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Bir\",\"lastName\":\"Amber\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentStarted\":true,\"enrolmentChoiceConfirmed\":true}"
    }
} as IDatabaseItem

export const CGP_94_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
        customer_product_id: cpe.CPE_94_GIP.data.customer_product_id,
        category_id: 1,
        start_date: moment().toDate(),
        data : {
            date_of_birth: CUSTOMER_94.data.date_of_birth,
            salary: 100000,
        }
    }
} as IDatabaseItem

export const CBP_GDENT_95 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_11_GDent.product.data.product_id,
        customer_product_id: cpe.CPE_95_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }
} as IDatabaseItem

export const CGP_96_GDental = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GDental.product.data.product_id,
        customer_product_id: cpe.CPE_96_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
        data: {
            date_of_birth: CUSTOMER_96.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CBP_GDENT_97 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_12_GDent.product.data.product_id,
        customer_product_id: cpe.CPE_97_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }
} as IDatabaseItem

export const CBP_GDENT_98 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_12_GDent.product.data.product_id,
        customer_product_id: cpe.CPE_98_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentStarted\":true,\"enrolmentChoiceConfirmed\":true}"
    }
} as IDatabaseItem

export const CBP_GDENT_99 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
        customer_product_id: cpe.CPE_99_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentClosed\":true}"
    }
} as IDatabaseItem

export const CBP_GDENT_100 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
        customer_product_id: cpe.CPE_100_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentStarted\":true,\"enrolmentChoiceConfirmed\":true,\"enrolmentClosed\":true}"
    }
} as IDatabaseItem

export const CBP_GDENT_101 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_11_GDent.product.data.product_id,
        customer_product_id: cpe.CPE_101_GDent.data.customer_product_id,
        category_id: 2,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }
} as IDatabaseItem

export const CBP_GDENT_102 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_12_GDent.product.data.product_id,
        customer_product_id: cpe.CPE_102_GDent.data.customer_product_id,
        category_id: 2,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }
} as IDatabaseItem

export const CBP_GDENT_103 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_12_GDent.product.data.product_id,
        customer_product_id: cpe.CPE_103_GDent.data.customer_product_id,
        category_id: 2,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentStarted\":true,\"enrolmentChoiceConfirmed\":true}"
    }
} as IDatabaseItem

export const CBP_GDENT_104 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
        customer_product_id: cpe.CPE_104_GDent.data.customer_product_id,
        category_id: 2,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentClosed\":true}"
    }
} as IDatabaseItem

export const CBP_GDENT_105 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
        customer_product_id: cpe.CPE_105_GDent.data.customer_product_id,
        category_id: 2,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentStarted\":true,\"enrolmentChoiceConfirmed\":true,\"enrolmentClosed\":true}"
    }
} as IDatabaseItem

export const CBP_GDENT_106 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GDental.product.data.product_id,
        customer_product_id: cpe.CPE_106_GDent.data.customer_product_id,
        category_id: 2,
        start_date: moment().subtract(1, "m").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }
} as IDatabaseItem

export const CBP_GDENT_107 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_9_GDent.product.data.product_id,
        customer_product_id: cpe.CPE_107_GDent.data.customer_product_id,
        category_id: 2,
        start_date: moment().add(1, "year").format("YYYY-MM-DD"),
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Bir\",\"lastName\":\"Amber\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentStarted\":true,\"enrolmentChoiceConfirmed\":true}"
    }
} as IDatabaseItem

export const CBP_GDENT_108 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
        customer_product_id:  cpe.CPE_108_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }
} as IDatabaseItem

export const CBP_GHI_REWARDS = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_116_GHI_REWARDS.data.customer_product_id,
        "category_id" : "1",
        "start_date" : "2023-04-26",
        "archived" : false,
        "data" : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\", \"externalMembershipNumber\":\"12121212\"}"
    }       
} as IDatabaseItem

export const CBP_GHI_REWARDS_2 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_117_GHI_REWARDS.data.customer_product_id,
        "category_id" : "1",
        "start_date" : "2023-04-26",
        "archived" : false,
        "data" : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }       
} as IDatabaseItem

export const CBP_GHI_REWARDS_3 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_118_GHI_REWARDS.data.customer_product_id,
        "category_id" : "1",
        "start_date" : "2023-04-26",
        "archived" : false,
        "data" : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }       
} as IDatabaseItem

export const CBP_GHI_REWARDS_4 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_119_GHI_REWARDS.data.customer_product_id,
        "category_id" : "1",
        "start_date" : "2023-04-26",
        "archived" : false,
        "data" : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }       
} as IDatabaseItem

export const CBP_GHI_REWARDS_5 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_120_GHI_REWARDS.data.customer_product_id,
        "category_id" : "1",
        "start_date" : "2023-04-26",
        "archived" : false,
        "data" : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }       
} as IDatabaseItem

export const CBP_GHI_REWARDS_6 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_121_GHI_REWARDS.data.customer_product_id,
        "category_id" : "1",
        "start_date" : "2023-04-26",
        "archived" : false,
        "data" : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }       
} as IDatabaseItem

export const CBP_123_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_GCI.product.data.product_id,
        customer_product_id: cpe.CPE_123_GCI.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "year").toDate(),
        data:{
            date_of_birth: CUSTOMER_123_MPP.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CBP_123_GDENT = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_MPP_GDental.product.data.product_id,
        customer_product_id: cpe.CPE_123_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentStarted\":true,\"enrolmentChoiceConfirmed\":true,\"enrolmentClosed\":true}"
    }
} as IDatabaseItem

export const CBP_123_SAAS = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_SAAS.product.data.product_id,
        customer_product_id: cpe.CPE_123_SaaS.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "y").toDate(),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentStarted\":true,\"enrolmentChoiceConfirmed\":true,\"enrolmentClosed\":true}"
    }
} as IDatabaseItem

export const CBP_123_GHI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_GHI.product.data.product_id,
        customer_product_id: cpe.CPE_123_GHI.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "y").toDate(),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentStarted\":true,\"enrolmentChoiceConfirmed\":true,\"enrolmentClosed\":true}"
    }
} as IDatabaseItem

export const CBP_123_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_RGL.product.data.product_id,
        customer_product_id: cpe.CPE_123_RGL.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "d").toDate(),
        data:{
            date_of_birth: CUSTOMER_123_MPP.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CBP_124_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_GCI.product.data.product_id,
        customer_product_id: cpe.CPE_124_GCI.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "year").toDate(),
        data:{
            date_of_birth: CUSTOMER_124_MPP.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CBP_124_GDENT = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_MPP_GDental.product.data.product_id,
        customer_product_id: cpe.CPE_124_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentStarted\":true,\"enrolmentChoiceConfirmed\":true,\"enrolmentClosed\":true}"
    }
} as IDatabaseItem

export const CBP_124_SAAS = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_SAAS.product.data.product_id,
        customer_product_id: cpe.CPE_124_SaaS.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "y").toDate(),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentStarted\":true,\"enrolmentChoiceConfirmed\":true,\"enrolmentClosed\":true}"
    }
} as IDatabaseItem

export const CBP_124_GHI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_GHI.product.data.product_id,
        customer_product_id: cpe.CPE_124_GHI.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "y").toDate(),
        archived : false,
        data : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\",\"enrolmentStarted\":true,\"enrolmentChoiceConfirmed\":true,\"enrolmentClosed\":true}"
    }
} as IDatabaseItem

export const CBP_124_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_RGL.product.data.product_id,
        customer_product_id: cpe.CPE_124_RGL.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "d").toDate(),
        data:{
            date_of_birth: CUSTOMER_124_MPP.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CGP_125_GDental_Choice = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GDental_CHOICE.product.data.product_id,
        customer_product_id: cpe.CPE_125_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
        data: {
            date_of_birth: CUSTOMER_125.data.date_of_birth,
            salary: 100000,
            country: "UK",
            externalMembershipNumber: "56565656"
        }
    }
} as IDatabaseItem

export const CGP_126_WELLBEING_LEAVER = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_1_WB.product.data.product_id,
        customer_product_id: cpe.CPE_126_WELLBEING.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "years").toDate(),
        data: {
            salary: 60000,
            country: "UK",
            date_of_birth: CUSTOMER_126_LEAVER_WELLBEING.data.date_of_birth,
        }
    }
} as IDatabaseItem

export const CBP_GHI_REWARDS_7 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_127_GHI_REWARDS.data.customer_product_id,
        "category_id" : "1",
        "start_date" : "2023-04-26",
        "archived" : false,
        "data" : "{\"salary\":10000,\"workplacePostcode\":\"NW1 1LX\",\"country\":\"GB\",\"jobTitle\":\"Software Engineer\",\"dateOfBirth\":\"2000-01-21\",\"firstName\":\"Sarah\",\"lastName\":\"Smith\",\"sexAtBirth\":\"F\",\"addressLineOne\":\"57 Market St\",\"addressLineTwo\":\"Huddersfield\",\"addressPostCode\":\"HD3 4HX\",\"title\":\"Mrs\"}"
    }       
} as IDatabaseItem

