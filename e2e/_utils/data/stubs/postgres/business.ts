import { generateRandomMongoId } from '_utils/data/utils';
import { IDatabaseItem } from '../../types';


export const BUSINESS_ACCOUNT_1 = {
    type: "postgres",
    modelName: "business",
    data: {
        business_account_id: generateRandomMongoId(),
        business_account_name: 'YU LIFE LTD',
        product_type: "Instant Group",
        coupon: null,
        yu_doctor: null,
        insurance_monthly_payment: null,
        status: null,
        hubspot_id: '3395752702',
        employees_insured: null,
        trust: null,
        assumed_age: null,
        created_at: '2020-04-20T16:51:26Z',
        created_by_id: '0.49.0',
        modified_at: '2020-04-20T16:52:19Z',
        modified_by_id: '0.49.0',
        stripe_account_id: null,
        email_template: null,
        archived: false,
    }
} as IDatabaseItem


export const BUSINESS_ACCOUNT_2 = {
    type:"postgres",
    modelName:"business",
    data: {
        business_account_id: generateRandomMongoId(),
        business_account_name: 'Dunder Mifflin',
        product_type: "Instant Group",
        coupon: null,
        yu_doctor: null,
        insurance_monthly_payment: null,
        status: null,
        hubspot_id: '01234567',
        employees_insured: null,
        trust: null,
        assumed_age: null,
        created_at: '2020-04-20T16:51:26Z',
        created_by_id: '0.49.0',
        modified_at: '2020-04-20T16:52:19Z',
        modified_by_id: '0.49.0',
        stripe_account_id: null,
        email_template: null,
        archived: false,
        rate_table_version: '2020-01-24T00:00:00Z'
    }
} as IDatabaseItem