import { generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework"
import { CUSTOMER_93 } from "./customers"

const type = "postgres"
const modelName = "journey_progression"

const moodMonitorSessionID_1 = generateRandomTransformedUuid()

export const JP_93_1 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_intro",
        "step_data" : "{\"enrolmentWindowId\":\"8568f6d2-0f39-4c5d-ba36-93df59c6f8ac\",\"customerProductId\":\"YUCPID0000000010\",\"employerBenefitName\":\"Level 1 | Single\",\"employerBenefitCostPence\":917,\"businessQuoteId\":\"1905133426\",\"electionOption\":\"opt-in\"}",
        "archived" : false,
    },
}

export const JP_93_2 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_select_package",
        "step_data" : "{\"selectedLevel\":\"Level 1\"}",
        "archived" : false,
    }
}

export const JP_93_3 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_select_scheme",
        "step_data" : "{\"selectedScheme\":\"Level 1 | Couple\",\"dependantsAllowed\":\"spouse\",\"selectedSchemeCostPence\":1835,\"selectedSchemeCostContributionPence\":918,\"selectedSchemeEarnRate\":4,\"employerBenefitCostPence\":917}",
        "archived" : false,
    }
}

export const JP_93_4 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_declare_spouse",
        "step_data" : "{\"spouseDependant\":[{\"firstName\":\"Steven\",\"lastName\":\"Desai\",\"sex\":\"F\",\"dateOfBirth\":\"1994-02-22\",\"type\":\"spouse\"}]}",
        "archived" : false,
    }
}

export const JP_93_5 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_summary",
        "step_data" : "{}",
        "archived" : false,
    },
}

export const JP_93_6 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_loading_summary",
        "step_data" : "{\"enrolmentChoiceConfirmed\":true}",
        "archived" : false,
    }
}

export const JP_93_7 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_choice_holding",
        "step_data" : "{}",
        "archived" : false,
    }
}
