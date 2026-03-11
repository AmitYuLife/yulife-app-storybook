import { IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
import { v4 as uuid } from "uuid";
import moment from "moment";
import { BUSINESS_ACCOUNT_5 } from "./business";
import { CORE_JOURNEY_INSTANCE_SURVEY_PROMPT } from "../mongo/core_journey_instances";

const surveyAdminAccountAccessId = uuid();

export const SURVEY_ADMIN_ACCESS_USER = {
  type: "postgres",
  modelName: "business_access_user",
  data: {
    accountAccessId: surveyAdminAccountAccessId,
    email: generateRandomInbox(),
    firstName: "Survey",
    lastName: "Admin",
    businessPhone: "0000000000",
    signatory: false,
    authorised: true,
    hasPassword: false,
    billing: false,
    accountAccessRole: "HR",
  },
} as IDatabaseItem;

export const SURVEY_ADMIN_ACCESS = {
  type: "postgres",
  modelName: "business_access",
  data: {
    businessAccountId: BUSINESS_ACCOUNT_5.business.data.businessAccountId,
    accountAccessId: surveyAdminAccountAccessId,
    archived: false,
    permissions: JSON.stringify([]),
    isOwner: false,
    businessAccessId: uuid(),
  },
} as IDatabaseItem;

export const SURVEY_CAMPAIGN_FOR_PROMPT_TEST = {
  type: "postgres",
  modelName: "business_survey_campaign",
  data: {
    business_survey_campaign_id: uuid(),
    business_account_id: BUSINESS_ACCOUNT_5.business.data.businessAccountId,
    journey_instance_id: CORE_JOURNEY_INSTANCE_SURVEY_PROMPT.data.journeyId,
    business_survey_campaign_name: "Detox Survey Prompt Test",
    end_local_date: moment().format("YYYY-MM-DD"),
    published_at: moment().subtract(1, "day").toISOString(),
    is_closed: false,
    account_access_id: surveyAdminAccountAccessId,
  },
} as IDatabaseItem;
