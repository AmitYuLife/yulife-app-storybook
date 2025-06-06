import { generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_5, CUSTOMER_6 } from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "journey_progression";

const moodMonitorSessionID_1 = generateRandomTransformedUuid();
const moodMonitorSessionID_2 = generateRandomTransformedUuid();

export const MM1 = {
  type,
  modelName,
  data: {
    journey_progression_id: generateRandomTransformedUuid(),
    customer_id: CUSTOMER_5.data.customerId,
    journey_id: "daily_survey",
    journey_session_id: moodMonitorSessionID_1,
    step_id: "daily_survey_intro",
    step_data: "{}",
    archived: false,
  },
};

export const MM1_UPDATE = {
  type,
  modelName,
  updateKey: "journey_progression_id",
  data: {
    journey_progression_id: MM1.data.journey_progression_id,
    created_at: moment().subtract(2, "days").format(),
    modified_at: moment().subtract(2, "days").format(),
  },
};

export const MM2 = {
  type,
  modelName,
  data: {
    journey_progression_id: generateRandomTransformedUuid(),
    customer_id: CUSTOMER_5.data.customerId,
    journey_id: "daily_survey",
    journey_session_id: moodMonitorSessionID_1,
    step_id: "daily_survey_rested_today",
    step_data: '{"yuCoinRewardDay":true,"question1":"1"}',
    archived: false,
  },
};

export const MM2_UPDATE = {
  type,
  modelName,
  updateKey: "journey_progression_id",
  data: {
    journey_progression_id: MM2.data.journey_progression_id,
    created_at: moment().subtract(2, "days").format(),
    modified_at: moment().subtract(2, "days").format(),
  },
};

export const MM3 = {
  type,
  modelName,
  data: {
    journey_progression_id: generateRandomTransformedUuid(),
    customer_id: CUSTOMER_5.data.customerId,
    journey_id: "daily_survey",
    journey_session_id: moodMonitorSessionID_1,
    step_id: "daily_survey_your_day_so_far",
    step_data: '{"yuCoinRewardDay":true,"question2":"2"}',
    archived: false,
  },
};

export const MM3_UPDATE = {
  type,
  modelName,
  updateKey: "journey_progression_id",
  data: {
    journey_progression_id: MM3.data.journey_progression_id,
    created_at: moment().subtract(2, "days").format(),
    modified_at: moment().subtract(2, "days").format(),
  },
};

export const MM4 = {
  type,
  modelName,
  data: {
    journey_progression_id: generateRandomTransformedUuid(),
    customer_id: CUSTOMER_5.data.customerId,
    journey_id: "daily_survey",
    journey_session_id: moodMonitorSessionID_1,
    step_id: "daily_survey_how_you_feel_today",
    step_data: '{"yuCoinRewardDay":true,"question3":"Happy"}',
    archived: false,
  },
};

export const MM4_UPDATE = {
  type,
  modelName,
  updateKey: "journey_progression_id",
  data: {
    journey_progression_id: MM4.data.journey_progression_id,
    created_at: moment().subtract(2, "days").format(),
    modified_at: moment().subtract(2, "days").format(),
  },
};

export const MM5 = {
  type,
  modelName,
  data: {
    journey_progression_id: generateRandomTransformedUuid(),
    customer_id: CUSTOMER_5.data.customerId,
    journey_id: "daily_survey",
    journey_session_id: moodMonitorSessionID_1,
    step_id: "daily_survey_how_you_felt_this_week",
    step_data: '{"yuCoinRewardDay":true}',
    archived: false,
  },
};

export const MM5_UPDATE = {
  type,
  modelName,
  updateKey: "journey_progression_id",
  data: {
    journey_progression_id: MM5.data.journey_progression_id,
    created_at: moment().subtract(2, "days").format(),
    modified_at: moment().subtract(2, "days").format(),
  },
};

export const MM6 = {
  type,
  modelName,
  data: {
    journey_progression_id: generateRandomTransformedUuid(),
    customer_id: CUSTOMER_5.data.customerId,
    journey_id: "daily_survey",
    journey_session_id: moodMonitorSessionID_1,
    step_id: "daily_survey_mood_history",
    step_data: "{}",
    archived: false,
  },
};

export const MM6_UPDATE = {
  type,
  modelName,
  updateKey: "journey_progression_id",
  data: {
    journey_progression_id: MM6.data.journey_progression_id,
    created_at: moment().subtract(2, "days").format(),
    modified_at: moment().subtract(2, "days").format(),
  },
};

export const MM_2_1 = {
  type,
  modelName,
  data: {
    journey_progression_id: generateRandomTransformedUuid(),
    customer_id: CUSTOMER_6.data.customerId,
    journey_id: "daily_survey",
    journey_session_id: moodMonitorSessionID_2,
    step_id: "daily_survey_intro",
    step_data: "{}",
    archived: false,
  },
};

export const MM_2_1_UPDATE = {
  type,
  modelName,
  updateKey: "journey_progression_id",
  data: {
    journey_progression_id: MM_2_1.data.journey_progression_id,
    created_at: moment().subtract(1, "days").format(),
    modified_at: moment().subtract(1, "days").format(),
  },
};

export const MM_2_2 = {
  type,
  modelName,
  data: {
    journey_progression_id: generateRandomTransformedUuid(),
    customer_id: CUSTOMER_6.data.customerId,
    journey_id: "daily_survey",
    journey_session_id: moodMonitorSessionID_2,
    step_id: "daily_survey_rested_today",
    step_data: '{"yuCoinRewardDay":true,"question1":"1"}',
    archived: false,
  },
};

export const MM_2_2_UPDATE = {
  type,
  modelName,
  updateKey: "journey_progression_id",
  data: {
    journey_progression_id: MM_2_2.data.journey_progression_id,
    created_at: moment().subtract(1, "days").format(),
    modified_at: moment().subtract(1, "days").format(),
  },
};

export const MM_2_3 = {
  type,
  modelName,
  data: {
    journey_progression_id: generateRandomTransformedUuid(),
    customer_id: CUSTOMER_6.data.customerId,
    journey_id: "daily_survey",
    journey_session_id: moodMonitorSessionID_2,
    step_id: "daily_survey_your_day_so_far",
    step_data: '{"yuCoinRewardDay":true,"question2":"2"}',
    archived: false,
  },
};

export const MM_2_3_UPDATE = {
  type,
  modelName,
  updateKey: "journey_progression_id",
  data: {
    journey_progression_id: MM_2_3.data.journey_progression_id,
    created_at: moment().subtract(1, "days").format(),
    modified_at: moment().subtract(1, "days").format(),
  },
};

export const MM_2_4 = {
  type,
  modelName,
  data: {
    journey_progression_id: generateRandomTransformedUuid(),
    customer_id: CUSTOMER_6.data.customerId,
    journey_id: "daily_survey",
    journey_session_id: moodMonitorSessionID_2,
    step_id: "daily_survey_how_you_feel_today",
    step_data: '{"yuCoinRewardDay":true,"question3":"Happy"}',
    archived: false,
  },
};

export const MM_2_4_UPDATE = {
  type,
  modelName,
  updateKey: "journey_progression_id",
  data: {
    journey_progression_id: MM_2_4.data.journey_progression_id,
    created_at: moment().subtract(1, "days").format(),
    modified_at: moment().subtract(1, "days").format(),
  },
};

export const MM_2_5 = {
  type,
  modelName,
  data: {
    journey_progression_id: generateRandomTransformedUuid(),
    customer_id: CUSTOMER_6.data.customerId,
    journey_id: "daily_survey",
    journey_session_id: moodMonitorSessionID_2,
    step_id: "daily_survey_how_you_felt_this_week",
    step_data: '{"yuCoinRewardDay":true}',
    archived: false,
  },
};

export const MM_2_5_UPDATE = {
  type,
  modelName,
  updateKey: "journey_progression_id",
  data: {
    journey_progression_id: MM_2_5.data.journey_progression_id,
    created_at: moment().subtract(1, "days").format(),
    modified_at: moment().subtract(1, "days").format(),
  },
};

export const MM_2_6 = {
  type,
  modelName,
  data: {
    journey_progression_id: generateRandomTransformedUuid(),
    customer_id: CUSTOMER_6.data.customerId,
    journey_id: "daily_survey",
    journey_session_id: moodMonitorSessionID_2,
    step_id: "daily_survey_mood_history",
    step_data: "{}",
    archived: false,
  },
};

export const MM_2_6_UPDATE = {
  type,
  modelName,
  updateKey: "journey_progression_id",
  data: {
    journey_progression_id: MM_2_6.data.journey_progression_id,
    created_at: moment().subtract(1, "days").format(),
    modified_at: moment().subtract(1, "days").format(),
  },
};
