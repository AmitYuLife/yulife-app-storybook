import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_10_GHI_REWARDS, BUSINESS_ACCOUNT_2, BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_5, BUSINESS_ACCOUNT_6, BUSINESS_ACCOUNT_7, BUSINESS_ACCOUNT_GDent_9, BUSINESS_ACCOUNT_GHI_8 } from './business';
import * as customer from './customers';
import moment = require('moment');


const type = "postgres"
const modelName = "business_employee"

export const BUSINESS_EMPLOYEE_1 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        "business_account_id": BUSINESS_ACCOUNT_1.data.business_account_id,
        "customer_id": customer.CUSTOMER_1.data.customerId,
        "employment_start_date": "2019-12-30T00:00:00Z",
        "employment_leave_date": "2999-12-31T00:00:00Z",
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_2 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        "business_account_id": BUSINESS_ACCOUNT_1.data.business_account_id,
        "customer_id": customer.CUSTOMER_2.data.customerId,
        "employment_start_date": "2019-12-30T00:00:00Z",
        "employment_leave_date": "2999-12-31T00:00:00Z",
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_3 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_3.data.customerId,
        employment_start_date: moment().subtract(6, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_4 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_4.data.customerId,
        employment_start_date: moment().subtract(4, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_5 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_5.data.customerId,
        employment_start_date: moment().toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_6 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_6.data.customerId,
        employment_start_date: moment().subtract(7, "days").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_7 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_7.data.customerId,
        employment_start_date: moment().subtract(26, "days").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem


export const BUSINESS_EMPLOYEE_8 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_8.data.customerId,
        employment_start_date: moment().subtract(26, "days").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_9 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_9.data.customerId,
        employment_start_date: moment().subtract(40, "days").toDate(),
        employment_leave_date: moment().add(5, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_10 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_10.data.customerId,
        employment_start_date: moment().subtract(55, "days").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_11 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_11.data.customerId,
        employment_start_date: moment().subtract(300, "days").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_12 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_12.data.customerId,
        employment_start_date: moment().subtract(6, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_13 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_13.data.customerId,
        employment_start_date: moment().subtract(6, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_14 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_14.data.customerId,
        employment_start_date: moment().subtract(6, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_15 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_15.data.customerId,
        employment_start_date: moment().subtract(6, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_16 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_16.data.customerId,
        employment_start_date: moment().subtract(6, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_17 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_17.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_18 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_18.data.customerId,
        employment_start_date: moment().subtract(13, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_19 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_19.data.customerId,
        employment_start_date: moment().subtract(13, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_20 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_20.data.customerId,
        employment_start_date: moment().subtract(13, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_21 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_21.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_22 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_22.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_23 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_23.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_ALPHA = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_ALPHA.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
        // customer_membership: "Yulife Alpha",
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_24 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_24.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_25 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_25.data.customerId,
        employment_start_date: moment().subtract(10, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_26 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_26.data.customerId,
        employment_start_date: moment().subtract(10, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_27 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_27.data.customerId,
        employment_start_date: moment().subtract(10, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_28 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_28.data.customerId,
        employment_start_date: moment().subtract(10, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_29 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_29.data.customerId,
        employment_start_date: moment().subtract(10, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_30 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_30.data.customerId,
        employment_start_date: moment().subtract(10, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_31 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
        customer_id: customer.CUSTOMER_31.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_32 = {
    type,
    modelName,
    data:{
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_32.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_33 = {
    type,
    modelName,
    data:{
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_33.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_34 = {
    type,
    modelName,
    data:{
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_34.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_35 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_35.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_36 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_36.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_37 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_37.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_38 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_38.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_39 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_39.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_40 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_40.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_41 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_41.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_MEDITOPIA_1 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_MEDITOPIA_1.data.customerId,
        employment_start_date: moment().subtract(26, "days").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_MEDITOPIA_2 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_MEDITOPIA_2.data.customerId,
        employment_start_date: moment().subtract(26, "days").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_MEDITOPIA_3 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_MEDITOPIA_3.data.customerId,
        employment_start_date: moment().subtract(26, "days").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_42 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_42.data.customerId,
        employment_start_date: moment().subtract(26, "days").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_43 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_47.data.customerId,
        employment_start_date: moment().subtract(12, "months").toDate(),
        employment_leave_date: moment().add(11, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_44 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_44.data.customerId,
        employment_start_date: moment().subtract(12, "months").toDate(),
        employment_leave_date: moment().add(11, "years").toDate()
    }
} as IDatabaseItem
        
export const BUSINESS_EMPLOYEE_PLI_2 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_PLI_2.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_46 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
        customer_id: customer.CUSTOMER_43.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_48 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
        customer_id: customer.CUSTOMER_48.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_49 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
        customer_id: customer.CUSTOMER_49.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_50 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_50.data.customerId,
        employment_start_date: moment().subtract(12, "months").toDate(),
        employment_leave_date: moment().add(11, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_51 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
        customer_id: customer.CUSTOMER_51.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_53 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
        customer_id: customer.CUSTOMER_53.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_52 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_7.data.business_account_id,
        customer_id: customer.CUSTOMER_52.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_54 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_7.data.business_account_id,
        customer_id: customer.CUSTOMER_54.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem
    
export const  BUSINESS_EMPLOYEE_55 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_7.data.business_account_id,
        customer_id: customer.CUSTOMER_55.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem
    
export const  BUSINESS_EMPLOYEE_56 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_7.data.business_account_id,
        customer_id: customer.CUSTOMER_56.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem
    
export const  BUSINESS_EMPLOYEE_57 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_7.data.business_account_id,
        customer_id: customer.CUSTOMER_57.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_58 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_7.data.business_account_id,
        customer_id: customer.CUSTOMER_58.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_60 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_60.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_61 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_61.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_63 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_63.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_64 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_64.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_65 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_65.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem
    
export const BUSINESS_EMPLOYEE_66 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_66.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_67 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_67.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_68 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_68.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_70 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_70.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_71 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_71.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem
    

export const BUSINESS_EMPLOYEE_72 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_72.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem
    
export const BUSINESS_EMPLOYEE_73 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_73.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_74 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
        customer_id: customer.CUSTOMER_74.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem
    
export const BUSINESS_EMPLOYEE_75 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_75.data.customerId,
        employment_start_date: moment().subtract(13, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem
    
export const BUSINESS_EMPLOYEE_76 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        "business_account_id": BUSINESS_ACCOUNT_1.data.business_account_id,
        "customer_id": customer.CUSTOMER_76.data.customerId,
        "employment_start_date": "2019-12-30T00:00:00Z",
        "employment_leave_date": "2999-12-31T00:00:00Z",
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_77 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_77.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_78 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_78.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_84 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_84.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem;
    
export const BUSINESS_EMPLOYEE_FIIT = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_FIIT.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_85 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_85.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem
    
export const BUSINESS_EMPLOYEE_86 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_86.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_90 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_90.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem;
    
export const BUSINESS_EMPLOYEE_FUTURE_PRODUCT = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
        customer_id: customer.CUSTOMER_FUTURE_PRODUCT.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().subtract(10, "weeks").toDate()
    }
} as IDatabaseItem;


export const BUSINESS_EMPLOYEE_LEAVER = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_LEAVER.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().subtract(10, "weeks").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_89 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
        customer_id: customer.CUSTOMER_89.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_GHI = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GHI_8.data.business_account_id,
        customer_id: customer.CUSTOMER_GHI.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "weeks").toDate()
    },
};

export const BUSINESS_EMPLOYEE_GHI_STARTED = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GHI_8.data.business_account_id,
        customer_id: customer.CUSTOMER_GHI_STARTED.data.customerId,
        employment_start_date: moment().subtract(1, "d").toDate(),
        employment_leave_date: moment().add(10, "weeks").toDate()
    },
};

export const BUSINESS_EMPLOYEE_92 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_92.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_93 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_93.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_DENTAL = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_DENTAL_1.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_DENTAL_2 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_DENTAL_2.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_PLI_3 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_PLI_3.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_PLI_4 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_PLI_4.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_PLI_5 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_PLI_5.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_PLI_6 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_PLI_6.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_PLI_7 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_PLI_7.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_PLI_9 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_PLI_9.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_PLI_10 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_PLI_10.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_94 = {
    type,
    modelName,
    data:{
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_94.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_95 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_95.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_96 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_96.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_97 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_97.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_98 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_98.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_99 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_99.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_100 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_100.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_101 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_101.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_102 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_102.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_103 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_103.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_104 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_104.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_105 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_105.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_106 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_106.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_107 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_107.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_108 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_108.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_109 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_109.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_110 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_110.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_111 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_111.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_112 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_112.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_113 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_113.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_114 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_114.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_115 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_115.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_116 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_117 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_117_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_118 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_118_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_119 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_119_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_120 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_120_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem