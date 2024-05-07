import moment from "moment";
import * as customer from "../postgres/customers";
import { JOURNEY_STEP_UI_01, JOURNEY_STEP_UI_02, JOURNEY_STEP_UI_03, JOURNEY_STEP_UI_04, JOURNEY_STEP_UI_05, JOURNEY_STEP_UI_06, JOURNEY_STEP_UI_07, JOURNEY_STEP_UI_08, JOURNEY_STEP_UI_11, JOURNEY_STEP_UI_12, JOURNEY_STEP_UI_13, JOURNEY_STEP_UI_14, JOURNEY_STEP_UI_15, JOURNEY_STEP_UI_16, JOURNEY_STEP_UI_17, JOURNEY_STEP_UI_18 } from "./core_journey_step_ui";

const model = "user_journey_state"

export const USER_JOURNEY_STATE_01 = {
    type:"mongo",
    modelName:model,
    data:
    {
    "_id" : "6627908bad09032b591d5470",
    "journeyId" : "health_questionnaire",
    "triggerSourceId" : "initial",
    "userId" : customer.CUSTOMER_73.data.customerId,
    "__v" : 0,
    "createdAt" : "2024-04-23T10:42:19.959+0000",
    requiresUserStateForAccess: true,
    static:true,
    published:true,
    status:"pending",
    "steps" : [
        {
            "stepId" : "health_questionnaire_initial",
            "animateProgressBar" : false,
            "progressBarValue" : 0,
            "isAQuestion" : false
        },
        {
            "stepId" : JOURNEY_STEP_UI_01.data.externalId,
            "animateProgressBar" : false,
            "progressBarValue" : 0,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_02.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 2,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_03.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 5,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_04.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 7,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_05.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 10,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_06.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 12,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_07.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 15,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_08.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 17,
            "isAQuestion" : true
        },
        {
            "stepId" : "health_questionnaire_submission",
            "animateProgressBar" : false,
            "progressBarValue" : 0,
            "isAQuestion" : false
        }
    ],
    "uiAccess" : {
        "eventPanel" : {
            "alwaysOn" : false,
            "validation" : {
                "type" : "object",
                "properties" : {
                    "dateNow" : {
                        "type" : "string",
                        "anyOf" : [
                            {
                                "format" : "date",
                                "formatMinimum" : moment().subtract(7, "days").format("YYYY-MM-DD"),
                                "formatMaximum" : moment().add(7, "days").format("YYYY-MM-DD"),
                            },
                            {
                                "format" : "date",
                                "formatMinimum" : "2024-05-06",
                                "formatMaximum" : "2024-05-13"
                            },
                            {
                                "format" : "date",
                                "formatMinimum" : "2024-05-20",
                                "formatMaximum" : "2024-05-27"
                            }
                        ]
                    }
                },
                "required" : [
                    "dateNow"
                ],
                "additionalProperties" : false
            }
        }
    },
    "updatedAt" : "2024-04-23T10:42:19.959+0000"
    }
}


export const USER_JOURNEY_STATE_02 = {
    type:"mongo",
    modelName:model,
    data:
    {
    "_id" : "6627908bad09032b591d5471",
    "journeyId" : "health_questionnaire",
    "triggerSourceId" : "initial",
    "userId" : customer.CUSTOMER_44.data.customerId,
    "__v" : 0,
    "createdAt" : "2024-04-23T10:42:19.959+0000",
    requiresUserStateForAccess: true,
    static:true,
    published:true,
    status:"completed",
    "steps" : [
        {
        "stepId" : "health_questionnaire_initial",
        "animateProgressBar" : false,
        "progressBarValue" : 0,
        "isAQuestion" : false
        },
        {
        "stepId" : JOURNEY_STEP_UI_01.data.externalId,
        "animateProgressBar" : false,
        "progressBarValue" : 0,
        "isAQuestion" : true
        },
        {
        "stepId" : JOURNEY_STEP_UI_02.data.externalId,
        "animateProgressBar" : true,
        "progressBarValue" : 2,
        "isAQuestion" : true
        },
        {
        "stepId" : JOURNEY_STEP_UI_03.data.externalId,
        "animateProgressBar" : true,
        "progressBarValue" : 5,
        "isAQuestion" : true
        },
        {
        "stepId" : JOURNEY_STEP_UI_04.data.externalId,
        "animateProgressBar" : true,
        "progressBarValue" : 7,
        "isAQuestion" : true
        },
        {
        "stepId" : JOURNEY_STEP_UI_05.data.externalId,
        "animateProgressBar" : true,
        "progressBarValue" : 10,
        "isAQuestion" : true
        },
        {
        "stepId" : JOURNEY_STEP_UI_06.data.externalId,
        "animateProgressBar" : true,
        "progressBarValue" : 12,
        "isAQuestion" : true
        },
        {
        "stepId" : JOURNEY_STEP_UI_07.data.externalId,
        "animateProgressBar" : true,
        "progressBarValue" : 15,
        "isAQuestion" : true
        },
        {
        "stepId" : JOURNEY_STEP_UI_08.data.externalId,
        "animateProgressBar" : true,
        "progressBarValue" : 17,
        "isAQuestion" : true
        },
        {
        "stepId" : "health_questionnaire_submission",
        "animateProgressBar" : false,
        "progressBarValue" : 0,
        "isAQuestion" : false
        }
    ],
    "uiAccess" : {
        "eventPanel" : {
            "alwaysOn" : false,
            "validation" : {
                "type" : "object",
                "properties" : {
                    "dateNow" : {
                        "type" : "string",
                        "anyOf" : [
                            {
                                "format" : "date",
                                "formatMinimum" : moment().subtract(7, "days").format("YYYY-MM-DD"),
                                "formatMaximum" : moment().add(7, "days").format("YYYY-MM-DD"),
                            },
                            {
                                "format" : "date",
                                "formatMinimum" : "2024-05-06",
                                "formatMaximum" : "2024-05-13"
                            },
                            {
                                "format" : "date",
                                "formatMinimum" : "2024-05-20",
                                "formatMaximum" : "2024-05-27"
                            }
                        ]
                    }
                },
                "required" : [
                    "dateNow"
                ],
                "additionalProperties" : false
            }
        }
    },
    "updatedAt" : "2024-04-23T10:42:19.959+0000"
    }
}


export const USER_JOURNEY_STATE_03 = {
    type:"mongo",
    modelName:model,
    data:
    {
    "_id" : "6627908bad09032b591d5999",
    "journeyId" : "health_questionnaire",
    "triggerSourceId" : "initial",
    "userId" : customer.CUSTOMER_44.data.customerId,
    "__v" : 0,
    "createdAt" : "2024-04-23T10:42:19.959+0000",
    requiresUserStateForAccess: true,
    static:true,
    published:true,
    status:"pending",
    "steps" : [
        {
            "stepId" : "health_questionnaire_initial",
            "animateProgressBar" : false,
            "progressBarValue" : 0,
            "isAQuestion" : false
        },
        {
            "stepId" : JOURNEY_STEP_UI_11.data.externalId,
            "animateProgressBar" : false,
            "progressBarValue" : 0,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_12.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 2,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_13.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 5,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_14.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 7,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_15.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 10,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_16.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 12,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_17.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 15,
            "isAQuestion" : true
        },
        {
            "stepId" : JOURNEY_STEP_UI_18.data.externalId,
            "animateProgressBar" : true,
            "progressBarValue" : 17,
            "isAQuestion" : true
        },
        {
            "stepId" : "health_questionnaire_submission",
            "animateProgressBar" : false,
            "progressBarValue" : 0,
            "isAQuestion" : false
        }
    ],
    "uiAccess" : {
        "eventPanel" : {
            "alwaysOn" : false,
            "validation" : {
                "type" : "object",
                "properties" : {
                    "dateNow" : {
                        "type" : "string",
                        "anyOf" : [
                            {
                                "format" : "date",
                                "formatMinimum" : moment().subtract(7, "days").format("YYYY-MM-DD"),
                                "formatMaximum" : moment().add(7, "days").format("YYYY-MM-DD"),
                            },
                            {
                                "format" : "date",
                                "formatMinimum" : "2024-05-06",
                                "formatMaximum" : "2024-05-13"
                            },
                            {
                                "format" : "date",
                                "formatMinimum" : "2024-05-20",
                                "formatMaximum" : "2024-05-27"
                            }
                        ]
                    }
                },
                "required" : [
                    "dateNow"
                ],
                "additionalProperties" : false
            }
        }
    },
    "updatedAt" : "2024-04-23T10:42:19.959+0000"
    }
}
