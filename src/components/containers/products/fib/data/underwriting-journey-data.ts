import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { ChipProps } from "@atoms/chip/chip";
import {
  BIRTHDAY_ICON,
  HAZARDOUS_OCCUPATION_ICON,
  NAME_ICON,
  UK_FLAG_ICON,
  HEIGHT_ICON,
  WEIGHT_ICON,
  SMOKING_ICON,
  ALCOHOL_ICON,
  DRUGS_ICON,
  DRUGS_COUNSELLING_ICON,
  MEDICAL_HISTORY_ICON,
  MEDICAL_HISTORY_PAST_CONSULTATIONS_ICON,
  OUTSTANDING_MEDICAL_INVESTIGATIONS_ICON,
  CIRCLE_WITH_ELLIPSES_ICON,
  PERSON_FACEMASK_ICON,
  FINANCIAL_QUESTIONS_ICON,
} from "@atoms/fib/svg-assets/underwriting/svg-strings";
import {
  DIABETES_ICON,
  HEART_DISEASE_ICON,
  STROKE_ICON,
  LIVER_KIDNEY_DISEASE_ICON,
  MULTIPLE_SCLEROSIS_ICON,
  NEUROLOGICAL_DISORDERS_ICON,
  HIV_AIDS_ICON,
  MENTAL_ILLNESS_ICON,
} from "@atoms/fib/svg-assets/underwriting/medical-history-svg-strings";
import { ChipIconType } from "@atoms/chip/chip.types";
import { Colours } from "@styles";

interface OtherQuestionResponse {
  id: string;
  answer: string;
}

export interface UnderwritingJourneyScreen {
  id: string;
  heading: string;
  icon: string;
  title: string;
  reviewAnswerTitle?: string;
  question: string;
  content?: React.ReactNode;
  accumulatedProgress: number;
  firstButton: {
    label: string;
    actionId: string;
    answersIdToInvalidate?: string[];
    actionIdReview?: string;
  };
  secondButton?: {
    label: string;
    actionId: string;
    answersIdToInvalidate?: string[];
    actionIdReview?: string;
  };
  previousButton?: {
    actionId: string;
    actionIdReview?: string;
  };
  children?: UnderwritingJourneyChild[];
  order?: number;
  dependsOnOtherResponses?: OtherQuestionResponse[];
  category?: string;
  nextQuestionBeforeQuit?: string;
}

export interface UnderwritingJourneyChild {
  type: string;
  text?: string;
  icon?: string;
  title?: string;
  description?: string;
  showDelimiter?: boolean;
  chips?: ChipProps[];
  radioInputOptions?: any;
  style?: StyleSheet.NamedStyles<ViewStyle | TextStyle>;
}

export const FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID = "fib_your_date_of_birth";
export const FIB_UK_RESIDENT_SCREEN_ID = "fib_uk_resident";
export const FIB_MEMBER_OF_ARMED_FORCES_SCREEN_ID = "fib_member_of_armed_forces";
export const FIB_LIFESTYLE_HEIGHT_AND_WEIGHT_SCREEN_ID = "fib_lifestyle_height_and_weight";
export const FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID = "fib_lifestyle_smoking_cigarettes";
export const FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID = "fib_lifestyle_smoking_cigarettes_amount";
export const FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID = "fib_lifestyle_smoking_cigars";
export const FIB_LIFESTYLE_SMOKING_VAPES_SCREEN_ID = "fib_lifestyle_smoking_vapes";
export const FIB_LIFESTYLE_ALCOHOL_SCREEN_ID = "fib_lifestyle_alcohol";
export const FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID = "fib_lifestyle_drugs_councelling";
export const FIB_MEDICAL_HISTORY_SCREEN_ID = "fib_medical_history";
export const FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID = "fib_medical_three_or_more_consultation";
export const FIB_MEDICAL_JOURNEY_EARS_NOSE_THROAT_SCREEN_ID = "fib_medical_journey_ears_nose_throat";
export const FIB_MEDICAL_JOURNEY_EYE_SCREEN_ID = "fib_medical_journey_eye";
export const FIB_MEDICAL_JOURNEY_KIDNEYS_BLADDER_SCREEN_ID = "fib_medical_journey_kidneys_bladder";
export const FIB_MEDICAL_JOURNEY_LUNGS_SCREEN_ID = "fib_medical_journey_lungs";
export const FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID = "fib_medical_journey_minor_injuries";
export const FIB_MEDICAL_JOURNEY_MUSCLES_JOINTS_SCREEN_ID = "fib_medical_journey_muscles_joints";
export const FIB_MEDICAL_JOURNEY_PREGNANCY_SCREEN_ID = "fib_medical_journey_pregnancy";
export const FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID = "fib_medical_journey_skin";
export const FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID = "fib_medical_journey_other";
export const FIB_MEDICAL_OUTSTANDING_MEDICAL_INVESTIGATIONS_SCREEN_ID =
  "fib_medical_outstanding_medical_investigations";
export const FIB_MEDICAL_OTHER_SYMPTOMS_SCREEN_ID = "fib_medical_other_symptoms";
export const FIB_MEDICAL_COVID_ISOLATION_SCREEN_ID = "fib_medical_covid_isolation";
export const FIB_MEDICAL_COVID_SYMPTOMS_SCREEN_ID = "fib_medical_covid_symptoms";
export const FIB_FINANCIAL_QUESTIONS_SCREEN_ID = "fib_financial_questions";
export const FIB_FINANCIAL_COVER_LIST_SCREEN_ID = "fib_financial_cover_list";
export const FIB_LIFESTYLE_DRUGS_SCREEN_ID = "fib_lifestyle_drugs";

export const FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID = "fib_medical_journey_high_blood_pressure";
export const FIB_HIGH_CHOLESTEROL_SCREEN_ID = "fib_medical_journey_high_cholesterol";
export const FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN = "fib_medical_journey_high_blood_pressure_readings_satisfactory";
export const FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN = "fib_medical_journey_high_cholesterol_readings_satisfactory";
export const FIB_DIGESTIVE_SCREEN_ID = "fib_medical_journey_digestive";
export const FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID = "fib_medical_journey_three_year_medical_history";
export const FIB_ENTER_YOUR_NAME = "fib_enter_your_name";
export const FIB_ENTER_YOUR_DATE_OF_BIRTH = "fib_enter_your_date_of_birth";
export const FIB_LIFESTYLE_HEIGHT_SCREEN_ID = "fib_lifestyle_height";
export const FIB_LIFESTYLE_WEIGHT_SCREEN_ID = "fib_lifestyle_weight";
export const FIB_FINANCIAL_CUSTOM_COVER_FORM_SCREEN_ID = "fib_financial_custom_cover_form";

export const FIB_HOSPITAL_STAY_SCREEN_ID = "fib_medical_journey_hospital_stay";
export const FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID = "fib_medical_journey_daily_activity_restrictions";
export const FIB_SYMPTOMS_RESOLVED_SCREEN_ID = "fib_medical_journey_symptoms_resolved";
export const FIB_CONDITION_STABLE_SCREEN_ID = "fib_medical_journey_condition_stable";

export const FIB_MEDICAL_FOLLOW_UP_QUESTIONS = [
  FIB_HOSPITAL_STAY_SCREEN_ID,
  FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID,
  FIB_SYMPTOMS_RESOLVED_SCREEN_ID,
  FIB_CONDITION_STABLE_SCREEN_ID,
];

export const MEDICAL_CHIPS_QUESTIONS = [
  FIB_DIGESTIVE_SCREEN_ID,

  FIB_MEDICAL_JOURNEY_EARS_NOSE_THROAT_SCREEN_ID,

  FIB_MEDICAL_JOURNEY_EYE_SCREEN_ID,

  FIB_MEDICAL_JOURNEY_KIDNEYS_BLADDER_SCREEN_ID,

  FIB_MEDICAL_JOURNEY_LUNGS_SCREEN_ID,

  FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID,

  FIB_MEDICAL_JOURNEY_MUSCLES_JOINTS_SCREEN_ID,

  FIB_MEDICAL_JOURNEY_PREGNANCY_SCREEN_ID,

  FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,

  FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID,
];

export const FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID = "fib_review_screen";

export const RELEVANT_SCREEN_ID_FOR_PRICES_UPDATES = [
  FIB_ENTER_YOUR_DATE_OF_BIRTH,
  FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID,
  FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID,
  FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID,
  FIB_LIFESTYLE_SMOKING_VAPES_SCREEN_ID,
  FIB_LIFESTYLE_HEIGHT_SCREEN_ID,
  FIB_LIFESTYLE_WEIGHT_SCREEN_ID,
];

export const SMOKING_QUESTIONS_SCREEN_IDS = [
  FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID,
  FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID,
  FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID,
  FIB_LIFESTYLE_SMOKING_VAPES_SCREEN_ID,
];

export const FOLLOW_UP_SMOKING_ANSWERS_TRIGGER = ["In the past month", "In the past 6 months", "In the past 12 months"];

export const FINAL_PROGRESS = 2400;

export enum ACCUMULATED_PROGRESS {
  FIB_ENTER_YOUR_NAME = 100,
  FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID = 200,
  FIB_ENTER_YOUR_DATE_OF_BIRTH = 250,
  FIB_UK_RESIDENT_SCREEN_ID = 300,
  FIB_MEMBER_OF_ARMED_FORCES_SCREEN_ID = 400,
  FIB_LIFESTYLE_HEIGHT_SCREEN_ID = 500,
  FIB_LIFESTYLE_WEIGHT_SCREEN_ID = 600,
  FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID = 700,
  FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID = 750,
  FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID = 800,
  FIB_LIFESTYLE_SMOKING_VAPES_SCREEN_ID = 900,
  FIB_LIFESTYLE_ALCOHOL_SCREEN_ID = 1000,
  FIB_LIFESTYLE_DRUGS_SCREEN_ID = 1100,
  FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID = 1200,
  FIB_MEDICAL_HISTORY_SCREEN_ID = 1300,
  FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID = 1400,
  FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID = 1420,
  FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID = 1420,
  FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN = 1425,
  FIB_HIGH_CHOLESTEROL_SCREEN_ID = 1430,
  FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN = 1435,
  FIB_DIGESTIVE_SCREEN_ID = 1440,
  FIB_MEDICAL_JOURNEY_EARS_NOSE_THROAT_SCREEN_ID = 1450,
  FIB_MEDICAL_JOURNEY_EYE_SCREEN_ID = 1460,
  FIB_MEDICAL_JOURNEY_KIDNEYS_BLADDER_SCREEN_ID = 1470,
  FIB_MEDICAL_JOURNEY_LUNGS_SCREEN_ID = 1480,
  FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID = 1490,
  FIB_MEDICAL_JOURNEY_MUSCLES_JOINTS_SCREEN_ID = 1500,
  FIB_MEDICAL_JOURNEY_PREGNANCY_SCREEN_ID = 1510,
  FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID = 1520,
  FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID = 1530,
  FIB_HOSPITAL_STAY_SCREEN_ID = 1540,
  FIB_SYMPTOMS_RESOLVED_SCREEN_ID = 1550,
  FIB_CONDITION_STABLE_SCREEN_ID = 1560,
  FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID = 1570,
  FIB_MEDICAL_OUTSTANDING_MEDICAL_INVESTIGATIONS_SCREEN_ID = 1700,
  FIB_MEDICAL_OTHER_SYMPTOMS_SCREEN_ID = 1800,
  FIB_MEDICAL_COVID_ISOLATION_SCREEN_ID = 1900,
  FIB_MEDICAL_COVID_SYMPTOMS_SCREEN_ID = 2000,
  FIB_FINANCIAL_QUESTIONS_SCREEN_ID = 2100,
  FIB_FINANCIAL_OTHER_COVER_SCREEN_ID = 2350,
  FIB_FINANCIAL_COVER_LIST_SCREEN_ID = FINAL_PROGRESS,
  FIB_FINANCIAL_CUSTOM_COVER_FORM_SCREEN_ID = FINAL_PROGRESS,
}

const _data: UnderwritingJourneyScreen[] = [
  {
    id: FIB_ENTER_YOUR_NAME,
    heading: "About You",
    icon: NAME_ICON,
    title: "Name",
    question: "Okay! Let’s start with the easy stuff: is this your name?",
    firstButton: { label: "Continue", actionId: FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID },
    previousButton: { actionId: FIB_ENTER_YOUR_NAME },
    children: [{ type: "inputFullName" }],
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_ENTER_YOUR_NAME,
  },
  {
    id: FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID,
    heading: "About You",
    icon: BIRTHDAY_ICON,
    title: "Birthday",
    question: "And is this your birthday?",
    firstButton: { label: "No", actionId: FIB_ENTER_YOUR_DATE_OF_BIRTH },
    secondButton: { label: "Yes", actionId: FIB_UK_RESIDENT_SCREEN_ID },
    previousButton: { actionId: FIB_ENTER_YOUR_NAME },
    children: [
      {
        type: "copyBirthday",
      },
    ],
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID,
  },
  {
    id: FIB_ENTER_YOUR_DATE_OF_BIRTH,
    heading: "About You",
    icon: BIRTHDAY_ICON,
    title: "Birthday",
    question: "Okay, what is the correct date?",
    children: [
      {
        type: "inputBirth",
      },
    ],
    firstButton: { label: "Continue", actionId: FIB_UK_RESIDENT_SCREEN_ID },
    previousButton: { actionId: FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID },
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID,
  },
  {
    id: FIB_UK_RESIDENT_SCREEN_ID,
    heading: "About You",
    icon: UK_FLAG_ICON,
    title: "UK Residency",
    question: "Are you a British Citizen or Resident in the UK?",
    firstButton: { label: "No", actionId: FIB_MEMBER_OF_ARMED_FORCES_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_MEMBER_OF_ARMED_FORCES_SCREEN_ID },
    previousButton: { actionId: FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID },
    children: [
      {
        type: "markdown",
        text:
          "You are considered a resident if: \n\n- You have indefinite leave to remain in the UK, Channel Islands, Isle of Man or Gibraltar; or\n\n- You are an EU or EEA national living permanently in the UK, Channel Islands, Isle of Man or Gibraltar; or\n\n- You have resided in the UK, Channel Islands, Isle of Man or Gibraltar for the last 12 months, live there permanently and will continue to do so.",
      },
    ],
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_UK_RESIDENT_SCREEN_ID,
  },
  {
    id: FIB_MEMBER_OF_ARMED_FORCES_SCREEN_ID,
    heading: "About You",
    icon: HAZARDOUS_OCCUPATION_ICON,
    title: "Hazardous occupation",
    question:
      "Are you a member of the armed forces, territorial army or reservists, or employed in any of the following hazardous occupations:",
    firstButton: { label: "No", actionId: FIB_LIFESTYLE_HEIGHT_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_LIFESTYLE_HEIGHT_SCREEN_ID },
    previousButton: { actionId: FIB_UK_RESIDENT_SCREEN_ID },
    children: [
      {
        type: "markdown",
        text: `- Commercial diving;\n- Commercial aviation (as pilot or crew);\n- Offshore work (including gas or oil platforms);\n- Offshore fishing; or\n- Working with explosives.`,
      },
    ],
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEMBER_OF_ARMED_FORCES_SCREEN_ID,
  },
  {
    id: FIB_LIFESTYLE_HEIGHT_SCREEN_ID,
    heading: "Lifestyle",
    icon: HEIGHT_ICON,
    title: "Height",
    question: "Getting a bit more personal now... I’m a whopping 16ft 4in tall, what about you?",
    firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_WEIGHT_SCREEN_ID },
    previousButton: { actionId: FIB_MEMBER_OF_ARMED_FORCES_SCREEN_ID },
    children: [
      {
        type: "inputHeight",
      },
    ],
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_LIFESTYLE_HEIGHT_SCREEN_ID,
  },
  {
    id: FIB_LIFESTYLE_WEIGHT_SCREEN_ID,
    heading: "Lifestyle",
    icon: WEIGHT_ICON,
    title: "Weight",
    question: "I weigh in at a modest 800kg, you?",
    firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID },
    previousButton: { actionId: FIB_LIFESTYLE_HEIGHT_SCREEN_ID },
    children: [
      {
        type: "markdown",
        text: "If you are pregnant, congrats! Let me know your pre-pregnancy weight.",
      },
      {
        type: "inputWeight",
      },
    ],
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_LIFESTYLE_WEIGHT_SCREEN_ID,
  },
  {
    id: FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID,
    heading: "Lifestyle",
    category: "fib_lifestyle_smoking_cigarettes",
    icon: SMOKING_ICON,
    title: "Smoking",
    reviewAnswerTitle: "Smoking cigarettes",
    question: "When was the last time you smoked a cigarette?",
    firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID },
    previousButton: { actionId: FIB_LIFESTYLE_WEIGHT_SCREEN_ID },
    nextQuestionBeforeQuit: FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID,
    children: [
      {
        type: "radioInput",
        radioInputOptions: [
          {
            label: "In the past month",
            value: "In the past month",
          },
          {
            label: "In the past 6 months",
            value: "In the past 6 months",
          },
          {
            label: "In the past 12 months",
            value: "In the past 12 months",
          },
          {
            label: "1 to 5 years ago",
            value: "1 to 5 years ago",
          },
          {
            label: "6 to 10 years ago",
            value: "6 to 10 years ago",
          },
          {
            label: "More than 10 years ago",
            value: "More than 10 years ago",
          },
          {
            label: "Never",
            value: "Never",
          },
        ],
      },
    ],
  },
  {
    id: FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID,
    heading: "Lifestyle",
    icon: SMOKING_ICON,
    title: "Smoking",
    category: "fib_lifestyle_smoking_cigarettes",
    reviewAnswerTitle: "Smoking cigarettes amount",
    question: "How many cigarettes do you or did you smoke per day?",
    firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID },
    previousButton: { actionId: FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID },
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID,
    children: [
      {
        type: "radioInput",
        radioInputOptions: [
          {
            label: "40 or more per day",
            value: "40 or more per day",
          },
          {
            label: "30-39 per day",
            value: "30-39 per day",
          },
          {
            label: "21-29 per day",
            value: "21-29 per day",
          },
          {
            label: "10-20 per day",
            value: "10-20 per day",
          },
          {
            label: "1-9 per day",
            value: "1-9 per day",
          },
          {
            label: "Less than 1 per day",
            value: "Less than 1 per day",
          },
          {
            label: "Less than 1 per week",
            value: "Less than 1 per week",
          },
          {
            label: "Less than 1 per month",
            value: "Less than 1 per month",
          },
        ],
      },
    ],
  },
  {
    id: FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID,
    heading: "Lifestyle",
    icon: SMOKING_ICON,
    title: "Smoking",
    reviewAnswerTitle: "Smoking cigars, pipes or shisha",
    question: "When was the last time you smoked cigars, pipes or shisha?",
    firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_SMOKING_VAPES_SCREEN_ID },
    previousButton: { actionId: FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID },
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID,
    children: [
      {
        type: "radioInput",
        radioInputOptions: [
          {
            label: "In the past month",
            value: "In the past month",
          },
          {
            label: "In the past 6 months",
            value: "In the past 6 months",
          },
          {
            label: "In the past 12 months",
            value: "In the past 12 months",
          },
          {
            label: "1 to 5 years ago",
            value: "1 to 5 years ago",
          },
          {
            label: "6 to 10 years ago",
            value: "6 to 10 years ago",
          },
          {
            label: "More than 10 years ago",
            value: "More than 10 years ago",
          },
          {
            label: "Never",
            value: "Never",
          },
        ],
      },
    ],
  },
  {
    id: FIB_LIFESTYLE_SMOKING_VAPES_SCREEN_ID,
    heading: "Lifestyle",
    icon: SMOKING_ICON,
    title: "Smoking",
    reviewAnswerTitle: "Smoking e-cigarettes, vapes or another nicotine substitute",
    question:
      "When was the last time you used e-cigarettes, vapes or another nicotine substitutes such as nicotine gum or patches?",
    firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_ALCOHOL_SCREEN_ID },
    previousButton: { actionId: FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID },
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_LIFESTYLE_SMOKING_VAPES_SCREEN_ID,
    children: [
      {
        type: "radioInput",
        radioInputOptions: [
          {
            label: "In the past month",
            value: "In the past month",
          },
          {
            label: "In the past 6 months",
            value: "In the past 6 months",
          },
          {
            label: "In the past 12 months",
            value: "In the past 12 months",
          },
          {
            label: "1 to 5 years ago",
            value: "1 to 5 years ago",
          },
          {
            label: "6 to 10 years ago",
            value: "6 to 10 years ago",
          },
          {
            label: "More than 10 years ago",
            value: "More than 10 years ago",
          },
          {
            label: "Never",
            value: "Never",
          },
        ],
      },
    ],
  },
  {
    id: FIB_LIFESTYLE_ALCOHOL_SCREEN_ID,
    heading: "Lifestyle",
    icon: ALCOHOL_ICON,
    title: "Alcohol",
    question: "Cheers! How much do you drink in an average week?",
    firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_DRUGS_SCREEN_ID },
    previousButton: { actionId: FIB_LIFESTYLE_SMOKING_VAPES_SCREEN_ID },
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_LIFESTYLE_ALCOHOL_SCREEN_ID,
    children: [
      {
        type: "markdown",
        text:
          "1 drink is a glass of wine, pint of beer or cider, or a double measure of spirits (for a human, anyway).",
      },
      {
        type: "inputAlcohol",
      },
    ],
  },
  {
    id: FIB_LIFESTYLE_DRUGS_SCREEN_ID,
    heading: "Lifestyle",
    icon: DRUGS_ICON,
    title: "Drugs",
    question: "Have you used recreational drugs in the last 5 years?",
    firstButton: { label: "No", actionId: FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID },
    previousButton: { actionId: FIB_LIFESTYLE_ALCOHOL_SCREEN_ID },
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_LIFESTYLE_DRUGS_SCREEN_ID,
    children: [
      {
        type: "markdown",
        text:
          "Examples of recreational drugs include ecstasy, cocaine, heroin, amphetamines and anabolic steroids.\n\nI won’t count cannabis if it's no more than 1 or 2 tobacco-free joints a week. I’m not like those other giraffes. I’m a cool giraffe.",
      },
    ],
  },
  {
    id: FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID,
    heading: "Lifestyle",
    icon: DRUGS_COUNSELLING_ICON,
    title: "Drugs Councelling",
    question:
      "Have you ever been advised to receive treatment, counselling, or attend a support group to manage your alcohol or drug use?",
    firstButton: { label: "No", actionId: FIB_MEDICAL_HISTORY_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_MEDICAL_HISTORY_SCREEN_ID },
    previousButton: { actionId: FIB_LIFESTYLE_DRUGS_SCREEN_ID },
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID,
  },
  {
    id: FIB_MEDICAL_HISTORY_SCREEN_ID,
    heading: "Medical",
    icon: MEDICAL_HISTORY_ICON,
    title: "Medical Diagnosis",
    question: "Have you been diagnosed with one of the following?",
    firstButton: { label: "No", actionId: FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID },
    previousButton: { actionId: FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID },
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_HISTORY_SCREEN_ID,
    children: [
      {
        type: "medicalHistory",
        showDelimiter: false,
        icon: DIABETES_ICON,
        title: "Diabetes",
        description:
          "A disease in which the body’s ability to produce or respond to the hormone insulin is compromised",
      },
      {
        type: "medicalHistory",
        showDelimiter: false,
        icon: HEART_DISEASE_ICON,
        title: "Heart disease",
        description: "A disease or disorder of the heart or arteries",
      },
      {
        type: "medicalHistory",
        showDelimiter: false,
        icon: STROKE_ICON,
        title: "Stroke",
        description: "Stroke (including mini stroke), or TIA brain haemorrhage",
      },
      {
        type: "medicalHistory",
        showDelimiter: false,
        icon: LIVER_KIDNEY_DISEASE_ICON,
        title: "Liver & kidney disease",
        description:
          "Cirrhosis of the liver or impaired liver function, Polycystic Kidney Disease or impaired kidney function",
      },
      {
        type: "medicalHistory",
        showDelimiter: false,
        icon: MULTIPLE_SCLEROSIS_ICON,
        title: "Multiple sclerosis",
        description:
          "A disease where the immune system attacks the protective sheath that covers nerve fibers and causes communication problems between your brain and the rest of your body",
      },
      {
        type: "medicalHistory",
        showDelimiter: false,
        icon: NEUROLOGICAL_DISORDERS_ICON,
        title: "Neurological disorders",
        description: "Motor Neurone Disease, Huntington’s",
      },
      {
        type: "medicalHistory",
        showDelimiter: false,
        icon: HIV_AIDS_ICON,
        title: "HIV/AIDS",
        description: "A virus that damages the cells in your immune system",
      },
      {
        type: "medicalHistory",
        showDelimiter: false,
        icon: MENTAL_ILLNESS_ICON,
        title: "Severe mental illness",
        description: "A mental illness which has resulted in any suicide attempt, overdose or overnight inpatient stay",
      },
    ],
  },
  {
    id: FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID,
    heading: "Medical",
    icon: MEDICAL_HISTORY_PAST_CONSULTATIONS_ICON,
    title: "Three Or More Consultations In Last 3 Years",
    question:
      "Have you required 3 or more consultations in the last 3 years from a healthcare professional for a medical or mental health condition, symptom, illness or injury? ",
    firstButton: { label: "No", actionId: FIB_MEDICAL_OUTSTANDING_MEDICAL_INVESTIGATIONS_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID },
    nextQuestionBeforeQuit: FIB_MEDICAL_OUTSTANDING_MEDICAL_INVESTIGATIONS_SCREEN_ID,
    previousButton: { actionId: FIB_MEDICAL_HISTORY_SCREEN_ID },
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID,
  },
  {
    id: FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID,
    category: "fib_medical_journey",
    heading: "Medical",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.89124 13.3275H19.9968V6.7169H15.4686L13.1218 4.37012H6.89124V13.3275Z" stroke="${Colours.neutral.n800}" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.9928 4.91602H19.9995V6.55422" stroke="${Colours.neutral.n800}" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.4381 7.64258V11.4272" stroke="${Colours.neutral.n800}" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.336 9.54297H11.5514" stroke="${Colours.neutral.n800}" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.38372 8.85271C4.97679 7.31891 2.87805 6.6705 2.87805 4.00336V1.09375H11.9099V3.98132C11.8894 6.6705 10.0263 6.99127 7.38372 8.85271Z" fill="white" stroke="${Colours.neutral.n800}" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.38552 8.89648C10.0281 10.9226 11.8912 11.0787 11.8912 13.7458V16.6334H2.85938V13.7679C2.85938 11.0787 5.27559 10.595 7.38552 8.89648Z" fill="white" stroke="${Colours.neutral.n800}" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0.996094 1.09375H13.7144" stroke="${Colours.neutral.n800}" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0.996094 16.6553H13.7144" stroke="${Colours.neutral.n800}" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Three Year Medical History",
    reviewAnswerTitle: "Three Year Medical History Detail",
    question: "Select all the conditions for which you required consultations",
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID,
    children: [
      {
        type: "chiplist",
        chips: [
          {
            id: FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID,
            active: false,
            label: "High Blood Pressure",
            icon: ChipIconType.HIGH_BLOOD_PRESSURE,
          },
          {
            id: FIB_HIGH_CHOLESTEROL_SCREEN_ID,
            active: false,
            label: "High Cholesterol",
            icon: ChipIconType.HIGH_CHOLESTEROL,
          },
          {
            id: FIB_MEDICAL_JOURNEY_EARS_NOSE_THROAT_SCREEN_ID,
            active: false,
            label: "Ear, nose, throat",
            icon: ChipIconType.EARS_NOSE_THROAT,
          },
          {
            id: FIB_DIGESTIVE_SCREEN_ID,
            relatedId: [FIB_DIGESTIVE_SCREEN_ID],
            active: false,
            label: "Digestive",
            icon: ChipIconType.DIGESTIVE,
          },
          {
            id: FIB_MEDICAL_JOURNEY_KIDNEYS_BLADDER_SCREEN_ID,
            active: false,
            label: "Kidneys & bladder",
            icon: ChipIconType.KIDNEYS_BLADDER,
          },
          {
            id: FIB_MEDICAL_JOURNEY_EYE_SCREEN_ID,
            active: false,
            label: "Eye",
            icon: ChipIconType.EYE,
          },
          {
            id: FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID,
            active: false,
            label: "Minor injuries",
            icon: ChipIconType.MINOR_INJURIES,
          },
          {
            id: FIB_MEDICAL_JOURNEY_LUNGS_SCREEN_ID,
            active: false,
            label: "Lungs",
            icon: ChipIconType.LUNGS,
          },
          {
            id: FIB_MEDICAL_JOURNEY_PREGNANCY_SCREEN_ID,
            active: false,
            label: "Pregnancy",
            icon: ChipIconType.PREGNANCY,
          },
          {
            id: FIB_MEDICAL_JOURNEY_MUSCLES_JOINTS_SCREEN_ID,
            active: false,
            label: "Muscles & Joints",
            icon: ChipIconType.MUSCLES_JOINTS,
          },
          {
            id: FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,
            active: false,
            label: "Skin",
            icon: ChipIconType.SKIN,
          },
          {
            id: FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID,
            active: false,
            label: "Other",
            icon: ChipIconType.OTHER,
          },
        ],
      },
    ],
    firstButton: { label: "Continue", actionId: FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID },
    previousButton: { actionId: FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID },
  },
  {
    id: FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID,
    category: "fib_medical_journey_high_blood",
    heading: "Medical",
    title: "Blood Pressure",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.1894 7.72534H6.26953V16.2395H18.1894V7.72534Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.9011 3.35083H5.84358C3.62436 3.35083 1.80864 5.25331 1.80864 7.57857C1.80864 9.90382 3.62436 11.8063 5.84358 11.8063" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.9297 20.4966H18.6125C20.7532 20.4966 22.5047 18.5809 22.5047 16.2395C22.5047 13.8981 20.7532 11.9824 18.6125 11.9824" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.0817 5.17106C14.0222 5.17106 14.7846 4.40867 14.7846 3.46822C14.7846 2.52777 14.0222 1.76538 13.0817 1.76538C12.1413 1.76538 11.3789 2.52777 11.3789 3.46822C11.3789 4.40867 12.1413 5.17106 13.0817 5.17106Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.1618 20.4143C13.1618 21.2951 12.4893 21.9997 11.6487 21.9997H8.82422V18.7937H11.6487C12.4893 18.7937 13.1618 19.5336 13.1618 20.4143Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.8736 10.6161C13.4217 10.1674 12.6743 10.1674 12.2224 10.6161L11.8921 10.8405L11.6662 10.6161C11.2143 10.1674 10.4669 10.1674 10.015 10.6161C9.56305 11.0648 9.56305 11.7897 9.99758 12.2385L11.6662 13.9471C11.8226 14.1025 12.0659 14.1025 12.205 13.9471L13.891 12.2385C14.3255 11.7897 14.3255 11.0648 13.8736 10.6161Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    question: "Has your blood pressure been checked by a medical professional in the last 12 months?",
    firstButton: {
      label: "No",
      actionId: FIB_HIGH_CHOLESTEROL_SCREEN_ID,
      answersIdToInvalidate: [FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN],
    },
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID,
    secondButton: { label: "Yes", actionId: FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN },
    previousButton: { actionId: FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID },
  },
  {
    id: FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN,
    category: "fib_medical_journey_high_blood",
    heading: "Medical",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.2381 21.8H5.603C4.83667 21.8 4.20117 21.1956 4.20117 20.4264V4.74875C4.20117 3.99783 4.81797 3.37512 5.603 3.37512H18.2568C19.0231 3.37512 19.6586 3.97952 19.6586 4.74875V20.4447C19.6399 21.1956 19.0231 21.8 18.2381 21.8Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10"/>
    <path d="M14.838 4.38235H8.93164V3.15524C8.93164 2.40432 9.54844 1.79993 10.3148 1.79993H13.4735C14.2399 1.79993 14.8567 2.40432 14.8567 3.15524V4.38235H14.838Z" fill="white" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10"/>
    <path d="M12.5371 15.1328H7.53711V18.4661H12.5371V15.1328Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5371 11.7367V12.633H7.53711V8.46631H10.0371" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.61914 10.1328L10.4395 10.9661L12.5358 8.88281" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN,
    title: "Blood Pressure Readings Satisfactory?",
    question: "Were your last blood pressure readings normal or satisfactory?",
    firstButton: { label: "No", actionId: FIB_HIGH_CHOLESTEROL_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_HIGH_CHOLESTEROL_SCREEN_ID },
    previousButton: { actionId: FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID },
  },
  {
    id: FIB_HIGH_CHOLESTEROL_SCREEN_ID,
    category: FIB_HIGH_CHOLESTEROL_SCREEN_ID,
    heading: "Medical",
    title: "Cholesterol Check",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.1894 7.72534H6.26953V16.2395H18.1894V7.72534Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.9011 3.35083H5.84358C3.62436 3.35083 1.80864 5.25331 1.80864 7.57857C1.80864 9.90382 3.62436 11.8063 5.84358 11.8063" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.9297 20.4966H18.6125C20.7532 20.4966 22.5047 18.5809 22.5047 16.2395C22.5047 13.8981 20.7532 11.9824 18.6125 11.9824" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.0817 5.17106C14.0222 5.17106 14.7846 4.40867 14.7846 3.46822C14.7846 2.52777 14.0222 1.76538 13.0817 1.76538C12.1413 1.76538 11.3789 2.52777 11.3789 3.46822C11.3789 4.40867 12.1413 5.17106 13.0817 5.17106Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.1618 20.4143C13.1618 21.2951 12.4893 21.9997 11.6487 21.9997H8.82422V18.7937H11.6487C12.4893 18.7937 13.1618 19.5336 13.1618 20.4143Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.8736 10.6161C13.4217 10.1674 12.6743 10.1674 12.2224 10.6161L11.8921 10.8405L11.6662 10.6161C11.2143 10.1674 10.4669 10.1674 10.015 10.6161C9.56305 11.0648 9.56305 11.7897 9.99758 12.2385L11.6662 13.9471C11.8226 14.1025 12.0659 14.1025 12.205 13.9471L13.891 12.2385C14.3255 11.7897 14.3255 11.0648 13.8736 10.6161Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    question: "Has your cholesterol been checked by a medical professional in the last 12 months?",
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_HIGH_CHOLESTEROL_SCREEN_ID,
    firstButton: {
      label: "No",
      actionId: FIB_DIGESTIVE_SCREEN_ID,
      answersIdToInvalidate: [FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN],
    },
    secondButton: { label: "Yes", actionId: FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN },
    previousButton: { actionId: FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN },
  },
  {
    id: FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN,
    category: FIB_HIGH_CHOLESTEROL_SCREEN_ID,
    heading: "Medical",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.2381 21.8H5.603C4.83667 21.8 4.20117 21.1956 4.20117 20.4264V4.74875C4.20117 3.99783 4.81797 3.37512 5.603 3.37512H18.2568C19.0231 3.37512 19.6586 3.97952 19.6586 4.74875V20.4447C19.6399 21.1956 19.0231 21.8 18.2381 21.8Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10"/>
    <path d="M14.838 4.38235H8.93164V3.15524C8.93164 2.40432 9.54844 1.79993 10.3148 1.79993H13.4735C14.2399 1.79993 14.8567 2.40432 14.8567 3.15524V4.38235H14.838Z" fill="white" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10"/>
    <path d="M12.5371 15.1328H7.53711V18.4661H12.5371V15.1328Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5371 11.7367V12.633H7.53711V8.46631H10.0371" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.61914 10.1328L10.4395 10.9661L12.5358 8.88281" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Cholesterol Readings Satisfactory?",
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN,
    question: "Were your last cholesterol readings normal or satisfactory?",
    firstButton: { label: "No", actionId: FIB_DIGESTIVE_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_DIGESTIVE_SCREEN_ID },
    previousButton: { actionId: FIB_HIGH_CHOLESTEROL_SCREEN_ID },
  },
  {
    id: FIB_DIGESTIVE_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_DIGESTIVE_SCREEN_ID,
    category: "fib_medical_journey",
    heading: "Medical",
    title: "Digestive",
    reviewAnswerTitle: "Digestive Issues",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.00209 20.8526C6.85297 17.7109 6.98386 17.1873 6.98386 17.1873C8.62018 19.8054 11.2382 20.4599 11.2382 20.4599C18.5689 22.6198 24.0014 12.2784 19.158 7.10768C15.1654 3.44236 11.8273 6.84587 11.8273 6.84587C9.2747 6.84587 10.2565 2.78784 10.2565 2.78784H7.50748C7.50748 2.78784 5.2821 8.67853 11.0419 10.1839C11.0419 10.1839 11.8928 12.6711 9.9292 15.3547C9.9292 15.3547 6.32935 11.9511 4.16942 15.6819C4.16942 15.6819 3.05675 17.8418 2.79492 20.8526H5.2821H6.00209Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.1621 8.08942C15.1621 8.08942 18.1729 7.76216 18.2384 11.2311" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    question: "Were all of your digestive issues in the list below?",
    firstButton: {
      label: "No",
      actionId: FIB_MEDICAL_JOURNEY_EARS_NOSE_THROAT_SCREEN_ID,
      actionIdReview: FIB_HOSPITAL_STAY_SCREEN_ID,
    },
    secondButton: {
      label: "Yes",
      actionId: FIB_MEDICAL_JOURNEY_EARS_NOSE_THROAT_SCREEN_ID,
      actionIdReview: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
    },
    previousButton: { actionId: FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN },
    children: [
      {
        type: "markdown",
        text:
          "- Appendicitis\n- Constipation\n- Dyspepsia\n- Food poisoning\n- Gallbladder stones\n- Hernia\n- Rectal / anal abscess\n- Indigestion\n- Irritable bowel syndrome",
      },
    ],
  },
  {
    id: FIB_MEDICAL_JOURNEY_EARS_NOSE_THROAT_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_JOURNEY_EARS_NOSE_THROAT_SCREEN_ID,
    category: "fib_medical_journey",
    heading: "Medical",
    title: "Ears, Nose, Throat",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.2008 22.2L12.4008 22.2C11.7773 17.2422 7.77969 16.815 5.40078 17.0395C5.38438 16.7401 5.34612 16.6341 5.28049 16.4657C7.29846 16.1289 9.30078 15.9 9.30078 15.9C7.88984 14.3098 5.98516 14.8984 5.00078 15.1042V14.8892C5.00078 14.8892 5.01406 14.6323 4.80078 14.5013C11.6094 11.3956 12.9383 19.4499 13.2008 22.2Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.3013 17.293C16.4065 18.4377 17.8024 22.337 17.8024 22.337H9.30177C9.30177 22.337 9.1944 19.9939 7.85219 20.0833C6.50998 20.1906 4.95302 20.2801 5.25726 18.4914C5.32884 18.0263 5.34674 17.6328 5.31094 17.3287C5.29305 17.0426 5.23936 16.81 5.16778 16.6491C5.02461 16.2555 4.84565 16.1125 4.84565 16.1125L4.77406 15.3612L4.73827 15.0571C4.73827 15.0571 4.68458 14.8962 4.45193 14.7709C4.30876 14.6994 3.96874 14.5742 3.6645 14.449C2.7876 14.1091 3.03814 13.501 3.57502 12.8571C4.23718 12.0701 5.4899 11.0684 4.39824 9.65535C4.39824 9.65535 3.25289 -0.182349 15.2791 2.16081C15.2791 2.16081 22.2227 3.41288 20.2721 11.9448C20.29 11.9448 19.7531 14.3417 17.3013 17.293Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5 11.9935C12.7039 11.6386 13.3564 10.9997 14.3352 11.2836C15.5587 11.6386 15.495 14.6357 13.3557 15.0636" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    question: "Were all of your ear, nose, and throat issues in the list below?",
    firstButton: {
      label: "No",
      actionId: FIB_MEDICAL_JOURNEY_EYE_SCREEN_ID,
      actionIdReview: FIB_HOSPITAL_STAY_SCREEN_ID,
    },
    secondButton: {
      label: "Yes",
      actionId: FIB_MEDICAL_JOURNEY_EYE_SCREEN_ID,
      actionIdReview: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
    },
    previousButton: { actionId: FIB_DIGESTIVE_SCREEN_ID },
    children: [
      {
        type: "markdown",
        text:
          "- Deafness\n- Earache\n- Grommets\n- Laryngitis\n- Nasal polyp\n- Pharyngitis\n- Rhinitis\n- Sinusitis\n- Throat infection\n- Tonsillitis",
      },
    ],
  },
  {
    id: FIB_MEDICAL_JOURNEY_EYE_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_JOURNEY_EYE_SCREEN_ID,
    category: "fib_medical_journey",
    heading: "Medical",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.2004 11.95C20.1605 15.5375 16.3355 17.8999 12.0006 17.8999C7.66569 17.8999 3.84075 15.5375 1.80078 11.95C3.84075 8.36258 7.66569 6.00012 12.0006 6.00012C16.3355 6.00012 20.0755 8.36258 22.2004 11.95Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.998 16.1999C14.3451 16.1999 16.2479 14.2972 16.2479 11.95C16.2479 9.60283 14.3451 7.70007 11.998 7.70007C9.65081 7.70007 7.74805 9.60283 7.74805 11.95C7.74805 14.2972 9.65081 16.1999 11.998 16.1999Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Eye",
    reviewAnswerTitle: "Eye Issues",
    question: "Were all of your eye issues in the list below?",
    firstButton: {
      label: "No",
      actionId: FIB_MEDICAL_JOURNEY_KIDNEYS_BLADDER_SCREEN_ID,
      actionIdReview: FIB_HOSPITAL_STAY_SCREEN_ID,
    },
    secondButton: {
      label: "Yes",
      actionId: FIB_MEDICAL_JOURNEY_KIDNEYS_BLADDER_SCREEN_ID,
      actionIdReview: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
    },
    previousButton: { actionId: FIB_MEDICAL_JOURNEY_EARS_NOSE_THROAT_SCREEN_ID },
    children: [
      {
        type: "markdown",
        text: "- Blindness\n- Cataract\n- Conjunctivitis\n- Detached retina\n- Glaucoma\n- Stye",
      },
    ],
  },
  {
    id: FIB_MEDICAL_JOURNEY_KIDNEYS_BLADDER_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_JOURNEY_KIDNEYS_BLADDER_SCREEN_ID,
    category: "fib_medical_journey",
    heading: "Medical",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.28497 5.03931C8.43778 5.75691 9.63355 6.71355 9.21489 8.38779C8.79627 10.062 5.50763 10.0619 5.02923 11.7363C4.64651 13.0758 5.56737 13.4942 6.28497 13.8291" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.09264 5.54516C6.00932 5.20038 6.12014 4.83597 6.35559 4.57068C6.93192 3.9213 7.31438 2.96302 5.92682 2.34633C3.77402 1.38953 2.09961 3.54234 2.09961 4.97754C2.09961 6.41275 2.81721 8.80476 4.97002 8.56556C6.43274 8.40303 6.37709 6.72215 6.09264 5.54516Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.9287 14.0674C17.6463 13.7325 18.8049 13.0758 18.4221 11.7363C17.9437 10.0619 15.0737 10.062 14.6551 8.38779C14.2889 6.92317 15.0136 5.75691 17.1665 5.03931" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.6031 8.56556C20.7559 8.80476 21.4735 6.41275 21.4735 4.97754C21.4735 3.54234 19.7991 1.38953 17.6463 2.34633C16.2716 2.95727 16.6342 3.90346 17.2014 4.55243C17.4426 4.82838 17.5501 5.2092 17.4599 5.56442C17.1613 6.7404 17.1483 8.40392 18.6031 8.56556Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.4686 22.2001V17.6553C8.93776 17.7509 5.92383 17.4161 5.92383 15.5025C5.92383 13.1104 9.51184 11.436 11.1862 11.436C12.8607 11.436 17.1663 12.1536 17.1663 15.5025C17.1663 17.2247 14.4394 17.6553 13.0999 17.6553V22.2001" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Kidneys & Bladder",
    reviewAnswerTitle: "Kidneys & Bladder Issues",
    question: "Were all of your kidney & bladder issues in the list below?",
    firstButton: {
      label: "No",
      actionId: FIB_MEDICAL_JOURNEY_LUNGS_SCREEN_ID,
      actionIdReview: FIB_HOSPITAL_STAY_SCREEN_ID,
    },
    secondButton: {
      label: "Yes",
      actionId: FIB_MEDICAL_JOURNEY_LUNGS_SCREEN_ID,
      actionIdReview: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
    },
    previousButton: { actionId: FIB_MEDICAL_JOURNEY_EYE_SCREEN_ID },
    children: [
      {
        type: "markdown",
        text: "- Bladder stone(s)\n- Kidney stone(s)\n- Urine infection\n- Cystitis",
      },
    ],
  },
  {
    id: FIB_MEDICAL_JOURNEY_LUNGS_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_JOURNEY_LUNGS_SCREEN_ID,
    category: "fib_medical_journey",
    heading: "Medical",
    title: "Lungs",
    reviewAnswerTitle: "Lungs Issues",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.00781 15.2564C9.00781 15.2564 11.2325 13.2165 11.752 10.0224V2.40015" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.644 15.1766C14.644 15.1766 12.0468 13.3617 11.75 10.0225" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.11479 6.82834C8.11479 6.82834 5.59177 5.66685 2.17828 12.8536C-0.789967 19.6047 3.73662 20.6936 6.03701 20.3307C8.33741 19.9677 9.52471 18.7336 9.00526 15.104C8.33741 11.5469 10.5636 7.98983 8.11479 6.82834Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.535 6.82834C15.535 6.82834 18.058 5.66685 21.4715 12.8536C24.4398 19.6047 19.9132 20.6936 17.6128 20.3307C15.3124 19.9677 14.1251 18.7336 14.6445 15.104C15.2382 11.5469 13.012 7.98983 15.535 6.82834Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    question: "Were all of your lung issues in the list below?",
    children: [
      {
        type: "markdown",
        text:
          "- Asthma treated with inhalers only or no treatment\n- Hay fever\n- Single attack of bronchitis\n- Chest infection",
      },
    ],
    firstButton: {
      label: "No",
      actionId: FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID,
      actionIdReview: FIB_HOSPITAL_STAY_SCREEN_ID,
    },
    secondButton: {
      label: "Yes",
      actionId: FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID,
      actionIdReview: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
    },
    previousButton: { actionId: FIB_MEDICAL_JOURNEY_KIDNEYS_BLADDER_SCREEN_ID },
  },
  {
    id: FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID,
    category: "fib_medical_journey",
    heading: "Medical",
    title: "Minor Injuries",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.65579 15.348L9.65579 3.19207C9.65579 2.16116 10.4915 1.32544 11.5224 1.32544V1.32544C12.5533 1.32544 13.3891 2.16116 13.3891 3.19207L13.3891 10.2716C13.3891 10.2716 20.8784 10.431 20.6735 15.348C20.4686 20.2649 19.1483 22.1999 19.1483 22.1999L9.65579 22.1999L3.81959 14.9621C3.52674 14.599 3.55483 14.0734 3.88472 13.7436V13.7436C4.89419 12.7341 6.50979 12.6694 7.59678 13.5948L9.65579 15.348Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.99805 2.99985V6.59985H13.798V2.99985C13.798 1.67437 12.7235 0.599854 11.398 0.599854C10.0726 0.599854 8.99805 1.67437 8.99805 2.99985Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2"/>
    </svg>
    `,
    question: "Were all of your minor injuries in the list below?",
    children: [
      {
        type: "markdown",
        text:
          "- Cuts\n- Broken bones\n- Dislocation\n- Muscle injury\n- Repetitive strain injury\n- Sprains and strains\n- Whiplash.",
      },
    ],
    firstButton: {
      label: "No",
      actionId: FIB_MEDICAL_JOURNEY_MUSCLES_JOINTS_SCREEN_ID,
      actionIdReview: FIB_HOSPITAL_STAY_SCREEN_ID,
    },
    secondButton: {
      label: "Yes",
      actionId: FIB_MEDICAL_JOURNEY_MUSCLES_JOINTS_SCREEN_ID,
      actionIdReview: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
    },
    previousButton: { actionId: FIB_MEDICAL_JOURNEY_LUNGS_SCREEN_ID },
  },
  {
    id: FIB_MEDICAL_JOURNEY_MUSCLES_JOINTS_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_JOURNEY_MUSCLES_JOINTS_SCREEN_ID,
    category: "fib_medical_journey",
    heading: "Medical",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8187 15.8804C15.8187 15.8804 13.7465 10.2273 7.93222 13.5198C7.93222 13.5198 6.04566 10.9728 3.38592 12.122C0.726182 13.2713 1.59214 20.726 4.65393 21.1298C6.21709 21.4633 8.39612 20.7881 8.39612 20.7881C8.39612 20.7881 12.6641 22.7449 16.963 20.9745C21.2618 19.204 22.1897 17.2782 22.1897 17.2782C22.1897 17.2782 22.6214 12.8294 18.1073 8.27045C17.0106 7.05446 16.1702 6.14093 15.5291 5.45611C14.262 4.10275 12.642 3.20086 10.8556 2.70492V2.70492C10.165 2.51319 9.42433 2.66205 8.86143 3.10574L8.58356 3.32476C7.82223 3.92484 7.52101 4.93915 7.8314 5.8575V5.8575C8.2133 6.98741 9.22665 7.82117 10.4111 7.68114C11.0659 7.60373 11.7824 7.442 12.3857 7.12119C12.3857 7.12119 16.4372 8.58107 14.4888 13.8615" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 15.3292C9 15.3292 9.6 14.7292 10.8 14.4292C12 14.1292 13.2 16.2292 13.2 16.2292" stroke="${Colours.neutral.n800}" stroke-width="1.2"/>
    </svg>
    `,
    title: "Muscles & Joints",
    reviewAnswerTitle: "Muscles & Joints Issues",
    question: "Were all of your muscle & joint issues in the list below?",
    children: [
      {
        type: "markdown",
        text:
          "- Arthritis in one joint only\n- Back problems\n- Bunion\n- Bursitis\n- Carpal tunnel syndrome\n- Cartilage\n- Ligament muscle or tendon trouble\n- Chronic fatigue syndrome\n- Fibrositis/fibromyalgia\n- Frozen shoulder\n- Sciatica\n- Slipped disc\n- Tennis elbow",
      },
    ],
    firstButton: {
      label: "No",
      actionId: FIB_MEDICAL_JOURNEY_PREGNANCY_SCREEN_ID,
      actionIdReview: FIB_HOSPITAL_STAY_SCREEN_ID,
    },
    secondButton: {
      label: "Yes",
      actionId: FIB_MEDICAL_JOURNEY_PREGNANCY_SCREEN_ID,
      actionIdReview: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
    },
    previousButton: { actionId: FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID },
  },
  {
    id: FIB_MEDICAL_JOURNEY_PREGNANCY_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_JOURNEY_PREGNANCY_SCREEN_ID,
    category: "fib_medical_journey",
    heading: "Medical",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4645 11.8922C18.4645 7.25555 14.7058 3.49683 10.0692 3.49683C5.43255 3.49683 1.67383 7.25555 1.67383 11.8922C1.67383 16.5288 5.43255 20.2875 10.0692 20.2875C12.7011 20.2875 15.0501 19.0764 16.5894 17.1812" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.3643 13.7761C14.3131 13.7761 15.0822 13.2303 15.0822 12.557C15.0822 11.8837 14.3131 11.3379 13.3643 11.3379C12.4156 11.3379 11.6465 11.8837 11.6465 12.557C11.6465 13.2303 12.4156 13.7761 13.3643 13.7761Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.084 12.557C15.084 12.557 16.1092 12.6678 16.7741 13.9423C17.4391 15.2169 19.9051 15.4108 20.4038 12.8894C20.6606 11.1941 21.687 11.7072 22.2001 11.7073" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.82904 10.8666C5.1963 10.8666 5.49402 10.5689 5.49402 10.2016C5.49402 9.83434 5.1963 9.53662 4.82904 9.53662C4.46178 9.53662 4.16406 9.83434 4.16406 10.2016C4.16406 10.5689 4.46178 10.8666 4.82904 10.8666Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.10053 8.37292C8.46778 8.37292 8.7655 8.0752 8.7655 7.70795C8.7655 7.34069 8.46778 7.04297 8.10053 7.04297C7.73327 7.04297 7.43555 7.34069 7.43555 7.70795C7.43555 8.0752 7.73327 8.37292 8.10053 8.37292Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.39935 16.9623C9.76661 16.9623 10.0643 16.6646 10.0643 16.2973C10.0643 15.93 9.76661 15.6323 9.39935 15.6323C9.0321 15.6323 8.73438 15.93 8.73438 16.2973C8.73438 16.6646 9.0321 16.9623 9.39935 16.9623Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.4423 8.62219C14.8096 8.62219 15.1073 8.32447 15.1073 7.95721C15.1073 7.58996 14.8096 7.29224 14.4423 7.29224C14.0751 7.29224 13.7773 7.58996 13.7773 7.95721C13.7773 8.32447 14.0751 8.62219 14.4423 8.62219Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Pregnancy",
    reviewAnswerTitle: "Pregnancy Issues",
    question: "Were all of your issues relating to pregnancy in the list below?",
    children: [
      {
        type: "markdown",
        text:
          "- Regular pregnancy check ups/scans\n- Abortion\n- Eclampsia\n- Fertility treatment\n- Any complications from which you have fully recovered",
      },
    ],
    firstButton: {
      label: "No",
      actionId: FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,
      actionIdReview: FIB_HOSPITAL_STAY_SCREEN_ID,
    },
    secondButton: {
      label: "Yes",
      actionId: FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,
      actionIdReview: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
    },
    previousButton: { actionId: FIB_MEDICAL_JOURNEY_MUSCLES_JOINTS_SCREEN_ID },
  },
  {
    id: FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,
    category: "fib_medical_journey",
    heading: "Medical",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.7078 17.1783C16.8196 18.3146 18.2052 22.185 18.2052 22.185H9.76749C9.76749 22.185 9.66091 19.8592 8.32864 19.948C6.99637 20.0545 5.45093 20.1433 5.75292 18.3678C5.82397 17.9062 5.84173 17.5156 5.80621 17.2138C5.78844 16.9297 5.73515 16.6989 5.6641 16.5391C5.52199 16.1485 5.34435 16.0065 5.34435 16.0065L5.2733 15.2608L5.23777 14.959C5.23777 14.959 5.18448 14.7992 4.95355 14.6749C4.81144 14.6039 4.47394 14.4796 4.17195 14.3554C3.30154 14.018 3.55023 13.4144 4.08314 12.7752C4.74039 11.994 5.98384 10.9998 4.90026 9.5972C4.90026 9.5972 3.76339 -0.167674 15.7005 2.15814C15.7005 2.15814 22.5928 3.40094 20.6566 11.8697C20.6744 11.8697 20.1414 14.2488 17.7078 17.1783Z" stroke="${Colours.neutral.n800}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9802 16.8811C11.6684 16.769 11.3247 16.9308 11.2125 17.2427C11.1004 17.5545 11.2623 17.8982 11.5741 18.0103C11.8859 18.1225 12.2296 17.9606 12.3417 17.6488C12.4539 17.337 12.292 16.9933 11.9802 16.8811Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2"/>
    <path d="M12.0486 12.3958C11.7367 12.2836 11.3931 12.4455 11.2809 12.7573C11.1688 13.0691 11.3306 13.4128 11.6424 13.525C11.9543 13.6371 12.2979 13.4753 12.4101 13.1634C12.5222 12.8516 12.3604 12.5079 12.0486 12.3958Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2"/>
    <path d="M8.66966 14.6194C8.35784 14.5073 8.01415 14.6691 7.902 14.9809C7.78985 15.2928 7.95171 15.6365 8.26353 15.7486C8.57535 15.8607 8.91904 15.6989 9.03119 15.3871C9.14333 15.0753 8.98147 14.7316 8.66966 14.6194Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2"/>
    <path d="M8.42356 11.1348C8.11174 11.0226 7.76805 11.1845 7.65591 11.4963C7.54376 11.8081 7.70562 12.1518 8.01744 12.264C8.32925 12.3761 8.67295 12.2143 8.78509 11.9024C8.89724 11.5906 8.73538 11.2469 8.42356 11.1348Z" fill="${Colours.neutral.n800}" stroke="${Colours.neutral.n800}" stroke-width="1.2"/>
    </svg>
    `,
    title: "Skin",
    reviewAnswerTitle: "Skin Issues",
    question: "Were all of your skin issues in the list below?",
    children: [
      {
        type: "markdown",
        text:
          "- Acne\n- Athlete's foot\n- Dermatitis\n- Eczema\n- Fungal infections\n- Herpes\n- Psoriasis\n- Verruca\n- Vitiligo",
      },
    ],
    firstButton: {
      label: "No",
      actionId: FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID,
      actionIdReview: FIB_HOSPITAL_STAY_SCREEN_ID,
    },
    secondButton: {
      label: "Yes",
      actionId: FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID,
      actionIdReview: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
    },
    previousButton: { actionId: FIB_MEDICAL_JOURNEY_PREGNANCY_SCREEN_ID },
  },
  {
    id: FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID,
    category: "fib_medical_journey",
    heading: "Medical",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.9 18.9997C14.9258 18.9997 19 14.9255 19 9.89976C19 4.87399 14.9258 0.799805 9.9 0.799805C4.87424 0.799805 0.800049 4.87399 0.800049 9.89976C0.800049 14.9255 4.87424 18.9997 9.9 18.9997Z" stroke="${Colours.neutral.n800}" stroke-width="1.50412"/>
    <path d="M5.54131 10.6642C5.96365 10.6642 6.30601 10.3218 6.30601 9.89947C6.30601 9.47713 5.96365 9.13477 5.54131 9.13477C5.11898 9.13477 4.77661 9.47713 4.77661 9.89947C4.77661 10.3218 5.11898 10.6642 5.54131 10.6642Z" stroke="${Colours.neutral.n800}" stroke-width="1.50412"/>
    <path d="M9.89996 10.6642C10.3223 10.6642 10.6647 10.3218 10.6647 9.89947C10.6647 9.47713 10.3223 9.13477 9.89996 9.13477C9.47762 9.13477 9.13525 9.47713 9.13525 9.89947C9.13525 10.3218 9.47762 10.6642 9.89996 10.6642Z" stroke="${Colours.neutral.n800}" stroke-width="1.50412"/>
    <path d="M14.4881 10.6642C14.9104 10.6642 15.2528 10.3218 15.2528 9.89947C15.2528 9.47713 14.9104 9.13477 14.4881 9.13477C14.0658 9.13477 13.7234 9.47713 13.7234 9.89947C13.7234 10.3218 14.0658 10.6642 14.4881 10.6642Z" stroke="${Colours.neutral.n800}" stroke-width="1.50412"/>
    </svg>
    `,
    title: "Other",
    reviewAnswerTitle: "Other Issues",
    question: "Were all of your other issues in the list below?",
    children: [
      {
        type: "markdown",
        text:
          "- Normal cervical smear not requiring any treatment\n- Allergic reactions\n- Common cold\n- Cosmetic surgery\n- Epilepsy diagnosed more than 1 year ago\n- Ganglion\n- Glandular fever\n- Hyperthyroidism\n- Hypothyroidism\n- Influenza (flu)\n- Migraine\n- Piles (haemorrhoids)\n- Sebaceous cyst\n- Shingles\n- Thrush\n- Varicose veins",
      },
    ],
    firstButton: { label: "No", actionId: FIB_HOSPITAL_STAY_SCREEN_ID, actionIdReview: FIB_HOSPITAL_STAY_SCREEN_ID },
    secondButton: {
      label: "Yes",
      actionId: FIB_HOSPITAL_STAY_SCREEN_ID,
      actionIdReview: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
    },
    previousButton: { actionId: FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID },
  },
  {
    id: FIB_HOSPITAL_STAY_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_HOSPITAL_STAY_SCREEN_ID,
    category: "fib_medical_journey",
    dependsOnOtherResponses: [
      {
        id: FIB_DIGESTIVE_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_EARS_NOSE_THROAT_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_EYE_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_KIDNEYS_BLADDER_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_LUNGS_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_MUSCLES_JOINTS_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_PREGNANCY_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID,
        answer: "No",
      },
    ],
    heading: "Medical",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.4116 21.9998C6.36231 18.4895 6.50855 17.9044 6.50855 17.9044C8.33687 20.8297 11.2621 21.561 11.2621 21.561C19.4529 23.9743 25.5228 12.4195 20.1111 6.64212C15.65 2.54675 11.9203 6.3496 11.9203 6.3496C9.06818 6.3496 10.1651 1.81543 10.1651 1.81543H7.09361C7.09361 1.81543 4.60713 8.39728 11.0427 10.0793C11.0427 10.0793 11.9934 12.8583 9.79948 15.8567C9.79948 15.8567 5.77726 12.0539 3.36389 16.2224C3.36389 16.2224 2.12067 18.6357 1.82812 21.9998H4.60713H5.4116Z" stroke="${Colours.neutral.n800}" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6484 7.73919C15.6484 7.73919 19.0125 7.37353 19.0856 11.2495" stroke="${Colours.neutral.n800}" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Hospital Stay",
    question:
      "For the issues you had that were not on the list(s), have you required an overnight stay in hospital in the last 2 years?",
    children: [
      {
        type: "markdown",
        text: "You can ignore hospitalisation due to pregnancy.",
      },
    ],
    firstButton: { label: "No", actionId: FIB_SYMPTOMS_RESOLVED_SCREEN_ID },
    secondButton: {
      label: "Yes",
      actionId: FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID,
      answersIdToInvalidate: [FIB_SYMPTOMS_RESOLVED_SCREEN_ID, FIB_CONDITION_STABLE_SCREEN_ID],
    },
    previousButton: { actionId: FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID },
  },
  {
    id: FIB_SYMPTOMS_RESOLVED_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_SYMPTOMS_RESOLVED_SCREEN_ID,
    category: "fib_medical_journey",
    dependsOnOtherResponses: [{ id: FIB_HOSPITAL_STAY_SCREEN_ID, answer: "No" }],
    heading: "Medical",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.4116 21.9998C6.36231 18.4895 6.50855 17.9044 6.50855 17.9044C8.33687 20.8297 11.2621 21.561 11.2621 21.561C19.4529 23.9743 25.5228 12.4195 20.1111 6.64212C15.65 2.54675 11.9203 6.3496 11.9203 6.3496C9.06818 6.3496 10.1651 1.81543 10.1651 1.81543H7.09361C7.09361 1.81543 4.60713 8.39728 11.0427 10.0793C11.0427 10.0793 11.9934 12.8583 9.79948 15.8567C9.79948 15.8567 5.77726 12.0539 3.36389 16.2224C3.36389 16.2224 2.12067 18.6357 1.82812 21.9998H4.60713H5.4116Z" stroke="${Colours.neutral.n800}" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6484 7.73919C15.6484 7.73919 19.0125 7.37353 19.0856 11.2495" stroke="${Colours.neutral.n800}" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Symptoms Resolved",
    question: "Are these conditions or symptoms fully resolved?",
    firstButton: { label: "No", actionId: FIB_CONDITION_STABLE_SCREEN_ID },
    secondButton: {
      label: "Yes",
      actionId: FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID,
      answersIdToInvalidate: [FIB_CONDITION_STABLE_SCREEN_ID],
    },
    previousButton: { actionId: FIB_HOSPITAL_STAY_SCREEN_ID },
  },
  {
    id: FIB_CONDITION_STABLE_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_CONDITION_STABLE_SCREEN_ID,
    category: "fib_medical_journey",
    dependsOnOtherResponses: [{ id: FIB_SYMPTOMS_RESOLVED_SCREEN_ID, answer: "No" }],
    heading: "Medical",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.41064 1.2334V19.0003H20.5895" stroke="${Colours.neutral.n800}" stroke-width="1.59823" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.41016 16.8162L5.8053 5.229L7.80309 10.4233H19.3903" stroke="${Colours.neutral.n800}" stroke-width="1.59823" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Condition Stable?",
    question: "Are these conditions stable (no increasing symptoms or complications)?",
    firstButton: { label: "No", actionId: FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID },
    previousButton: { actionId: FIB_SYMPTOMS_RESOLVED_SCREEN_ID },
  },
  {
    id: FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID,
    category: "fib_medical_journey",
    dependsOnOtherResponses: [
      {
        id: FIB_DIGESTIVE_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_EARS_NOSE_THROAT_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_EYE_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_KIDNEYS_BLADDER_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_LUNGS_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_MUSCLES_JOINTS_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_PREGNANCY_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,
        answer: "No",
      },
      {
        id: FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID,
        answer: "No",
      },
    ],
    heading: "Medical",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 20.5C15.7467 20.5 20 16.2467 20 11C20 5.75329 15.7467 1.5 10.5 1.5C5.25329 1.5 1 5.75329 1 11C1 16.2467 5.25329 20.5 10.5 20.5Z" stroke="${Colours.neutral.n800}" stroke-width="1.80952" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.5193 4.6665L4.16797 18.0179" stroke="${Colours.neutral.n800}" stroke-width="1.80952" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Daily Activity Rescrictons",
    question: "Do you have restrictions of your daily activities, tasks or occupation?",
    children: [
      {
        type: "markdown",
        text:
          "E.g. currently unable to work, altered work duties or hours, 4 or more consecutive weeks off work, mobility issues, inability to perform household tasks",
      },
    ],
    firstButton: { label: "No", actionId: FIB_MEDICAL_OUTSTANDING_MEDICAL_INVESTIGATIONS_SCREEN_ID },
    secondButton: {
      label: "Yes",
      actionId: FIB_MEDICAL_OUTSTANDING_MEDICAL_INVESTIGATIONS_SCREEN_ID,
    },
    previousButton: { actionId: FIB_CONDITION_STABLE_SCREEN_ID },
  },
  {
    id: FIB_MEDICAL_OUTSTANDING_MEDICAL_INVESTIGATIONS_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_OUTSTANDING_MEDICAL_INVESTIGATIONS_SCREEN_ID,
    heading: "Medical",
    icon: OUTSTANDING_MEDICAL_INVESTIGATIONS_ICON,
    title: "Outstanding Medical Investigations",
    question: "Are you awaiting any investigations/tests (including their results) or any surgery?",
    firstButton: { label: "No", actionId: FIB_MEDICAL_OTHER_SYMPTOMS_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_MEDICAL_OTHER_SYMPTOMS_SCREEN_ID },
    previousButton: { actionId: FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID },
    children: [
      {
        type: "markdown",
        text: `You can answer "No" if they relate to any of the following: cuts, broken bones, dislocation, muscle injury, repetitive strain injury, sprains, strains or whiplash`,
      },
    ],
  },
  {
    id: FIB_MEDICAL_OTHER_SYMPTOMS_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_OTHER_SYMPTOMS_SCREEN_ID,
    heading: "Medical",
    icon: CIRCLE_WITH_ELLIPSES_ICON,
    title: "Other Symptoms",
    question:
      "In the last 6 months have you noticed any symptoms for which you have not yet received an exact diagnosis, that you continue to experience and for which you expect to consult a doctor?",
    firstButton: { label: "No", actionId: FIB_MEDICAL_COVID_ISOLATION_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_MEDICAL_COVID_ISOLATION_SCREEN_ID },
    previousButton: { actionId: FIB_MEDICAL_OUTSTANDING_MEDICAL_INVESTIGATIONS_SCREEN_ID },
    children: [
      {
        type: "markdown",
        text: "e.g. bleeding, weight loss, lump or growth, mole, dizziness, persistent cough, headaches",
      },
    ],
  },
  {
    id: FIB_MEDICAL_COVID_ISOLATION_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_COVID_ISOLATION_SCREEN_ID,
    heading: "Medical",
    icon: PERSON_FACEMASK_ICON,
    title: "Covid Isolation",
    question: "In the last 12 months have you been hospitalised for COVID-19?",
    firstButton: { label: "No", actionId: FIB_MEDICAL_COVID_SYMPTOMS_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_MEDICAL_COVID_SYMPTOMS_SCREEN_ID },
    previousButton: { actionId: FIB_MEDICAL_OTHER_SYMPTOMS_SCREEN_ID },
  },
  {
    id: FIB_MEDICAL_COVID_SYMPTOMS_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_MEDICAL_COVID_SYMPTOMS_SCREEN_ID,
    heading: "Medical",
    icon: PERSON_FACEMASK_ICON,
    title: "Covid Symptoms",
    question: "In the last 30 days have any of the following applied to you:",
    firstButton: { label: "No", actionId: FIB_FINANCIAL_QUESTIONS_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_FINANCIAL_QUESTIONS_SCREEN_ID },
    previousButton: { actionId: FIB_MEDICAL_COVID_ISOLATION_SCREEN_ID },
    children: [
      {
        type: "markdown",
        text:
          "- Tested positive for COVID-19?\n\n\n- Had direct contact with someone diagnosed with, or suspected of having, COVID-19?\n\n\n- Experienced symptoms of a cough, high temperature or fever, breathing difficulties or a loss or change in smell or taste?",
      },
    ],
  },
  {
    id: FIB_FINANCIAL_QUESTIONS_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_FINANCIAL_QUESTIONS_SCREEN_ID,
    category: "fib_financial",
    heading: "Financial",
    icon: FINANCIAL_QUESTIONS_ICON,
    title: "Financial Questions",
    reviewAnswerTitle: "Total Life Insurance Exceed £20,000,000?",
    question:
      "Almost done! Will the total amount of life insurance on your life (including any amount to be replaced and any other applied for) when added together exceed £20,000,000?",
    firstButton: {
      label: "No",
      actionId: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
      answersIdToInvalidate: [FIB_FINANCIAL_COVER_LIST_SCREEN_ID],
    },
    secondButton: { label: "Yes", actionId: FIB_FINANCIAL_COVER_LIST_SCREEN_ID },
    previousButton: { actionId: FIB_MEDICAL_COVID_SYMPTOMS_SCREEN_ID },
  },
  {
    id: FIB_FINANCIAL_COVER_LIST_SCREEN_ID,
    accumulatedProgress: ACCUMULATED_PROGRESS.FIB_FINANCIAL_COVER_LIST_SCREEN_ID,
    category: "fib_financial",
    heading: "Financial",
    icon: FINANCIAL_QUESTIONS_ICON,
    title: "Cover Details",
    question: "Okay! Please add or remove your existing life insurance products below.",
    firstButton: { label: "Continue", actionId: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID },
    secondButton: { label: "Add cover", actionId: FIB_FINANCIAL_QUESTIONS_SCREEN_ID },
    previousButton: { actionId: FIB_FINANCIAL_QUESTIONS_SCREEN_ID },
  },
];

export type OrderedUnderwritingJourneyScreen = UnderwritingJourneyScreen & { order: number };

function getData(): OrderedUnderwritingJourneyScreen[] {
  const ROUTES_WITHOUT_PROGRESS = [FIB_ENTER_YOUR_DATE_OF_BIRTH, FIB_ENTER_YOUR_NAME];

  let progressCounter = 0;

  return _data.map((item) => {
    if (!ROUTES_WITHOUT_PROGRESS.includes(item.id)) {
      progressCounter++;
    }

    return {
      ...item,
      order: progressCounter,
    };
  });
}

export const data = getData();
