import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
    BUSINESS_PRODUCT_13_GHI_REWARDS,
    BUSINESS_PRODUCT_14_GHI,
    BUSINESS_PRODUCT_15_GHI_REWARDS,
    BUSINESS_PRODUCT_8_GHI,
    BUSINESS_PRODUCT_16_GHI_REWARDS,
    BUSINESS_PRODUCT_17_METLIFE_GIP,
} from "./business_product";

const type = "postgres";
const modelName = "business_product_category";

export const BPC_1_GHI_1 = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_8_GHI.product.data.product_id,
        category_id: 1,
        earn_rate: 2,
        category_description: "All employees",
        is_closed: false,
        category_name: "cat1",
        enrolment_method: "external",
        election_option: "opt-out",
        version_id: 1,
        version_archived: false,
        benefit_set_product_version_id: "Bupa_GHealth_01",
        default_product_version_benefit_set_id :"Select Key | Single",
    },
};

export const BPC_GHI_REWARDS = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        category_id: 1,
        earn_rate: 2,
        category_description: "All employees",
        is_closed: false,
        category_name: "cat1",
        enrolment_method: "external",
        election_option: "opt-out",
        version_id: 1,
        version_archived: false,
        benefit_set_product_version_id: "Bupa_GHealth_01",
        default_product_version_benefit_set_id :"Select Key | Single",
    },
};

export const BPC_14_GHI = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_14_GHI.product.data.product_id,
        category_id: 1,
        category_description: "All employees",
        earn_rate: 0,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 9,
        benefit_definition: "Basic annual salary as at the date of death",
        min_entry_age: 16,
        eligibility_conditions:
            "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false,
        benefit_set_product_version_id: "Bupa_GHealth_01",
        default_product_version_benefit_set_id :"Select Key | Single",
    },
} as IDatabaseItem;

export const BPC_GHI_REWARDS_2 = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_15_GHI_REWARDS.product.data.product_id,
        category_id: 1,
        earn_rate: 2,
        category_description: "All employees",
        is_closed: false,
        category_name: "cat1",
        enrolment_method: "external",
        election_option: "opt-out",
        version_id: 1,
        version_archived: false,
        benefit_set_product_version_id: "Bupa_GHealth_01",
        default_product_version_benefit_set_id :"Select Key | Single",
    },
};

export const BPC_GHI_REWARDS_3 = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_16_GHI_REWARDS.product.data.product_id,
        category_id: 1,
        earn_rate: 2,
        category_description: "All employees",
        is_closed: false,
        category_name: "cat1",
        enrolment_method: "external",
        election_option: "opt-out",
        version_id: 1,
        version_archived: false,
        benefit_set_product_version_id: "Bupa_GHealth_01",
        default_product_version_benefit_set_id :"Select Key | Single",
    },
};

export const BPC_8_GIP = {
    type,
    modelName,
    data: {
      product_id: BUSINESS_PRODUCT_17_METLIFE_GIP.product.data.product_id,
      category_id: 1,
      category_description: "All employees",
      earn_rate: 12,
      benefit_basis: "percent_of_salary",
      multiple_or_amount: 1,
      employer_pension_scheme_contrib: 0.3,
      employee_pension_scheme_contrib: 0.05,
      ni_contributions: false,
      deferred_period: 12,
      escalation_type: "3%",
      definition_of_incapacity: "Own occupation",
      payment_period: 20,
      benefit_definition: "Basic annual salary as at the date of death",
      age_cover_ceases: 70,
      min_entry_age: 16,
      max_entry_age: 65,
      eligibility_conditions:
        "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
      category_name: "All employees",
      benefit_offset: "Fixed Amount",
      benefit_offset_amount: 598.0,
      service_qualification: 0,
      other_pension_scheme_contrib: "false",
      is_benefit_visible: false,
      isClosed: false,
      version_id: 1,
      version_archived: false,
    },
  };
