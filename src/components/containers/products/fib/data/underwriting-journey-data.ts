import { ChipProps } from "@atoms/chip/chip";
import {
  BIRTHDAY_ICON,
  HAZARDOUS_OCCUPATION_ICON,
  HEIGHT_WEIGHT_ICON,
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

export interface UnderwritingJourneyScreen {
  id: string;
  heading: string;
  icon: string;
  title: string;
  question: string;
  content?: React.ReactNode;
  firstButton: {
    label: string;
    actionId: string;
  };
  secondButton?: {
    label: string;
    actionId: string;
  };
  previousButton?: {
    actionId: string;
  };
  children?: UnderwritingJourneyChild[];
  order?: number;
}

export interface UnderwritingJourneyChild {
  type: string;
  text?: string;
  icon?: string;
  title?: string;
  description?: string;
  showDelimiter?: boolean;
  chips?: ChipProps[];
}

export const FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID = "fib_medical_journey_high_blood_pressure";
export const FIB_HIGH_CHOLESTEROL_SCREEN_ID = "fib_medical_journey_high_cholesterol";
export const FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN = "fib_medical_journey_blood_pressure_readings_satisfactory";
export const FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN = "fib_medical_journey_cholesterol_readings_satisfactory";
export const FIB_DIGESTIVE_SCREEN_ID = "fib_medical_journey_digestive";
export const FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID = "fib_medical_journey_three_year_medical_history";
export const FIB_ENTER_YOUR_NAME = "fib_enter_your_name";
export const FIB_ENTER_YOUR_DATE_OF_BIRTH = "fib_enter_your_date_of_birth";
export const FIB_LIFESTYLE_HEIGHT_SCREEN_ID = "fib_lifestyle_height";
export const FIB_LIFESTYLE_WEIGHT_SCREEN_ID = "fib_lifestyle_weight";

const FIB_DIGESTIVE_HOSPITAL_STAY_SCREEN_ID = "fib_medical_journey_digestive_hospital_stay";
const FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID = "fib_medical_journey_daily_activity_restrictions";
const FIB_DIGESTIVE_SYMPTOMS_RESOLVED_SCREEN_ID = "fib_medical_journey_digestive_symptoms_resolved";
const FIB_CONDITION_STABLE_SCREEN_ID = "fib_medical_journey_condition_stable";

export const FIB_DIGESTIVE_EXTRA_SCREENS = [
  FIB_DIGESTIVE_HOSPITAL_STAY_SCREEN_ID,
  FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID,
  FIB_DIGESTIVE_SYMPTOMS_RESOLVED_SCREEN_ID,
  FIB_CONDITION_STABLE_SCREEN_ID,
];

const _data: UnderwritingJourneyScreen[] = [
  {
    id: "fib_your_name",
    heading: "About You",
    icon: NAME_ICON,
    title: "Name",
    question: "Is this your name?",
    firstButton: { label: "No", actionId: FIB_ENTER_YOUR_NAME },
    secondButton: { label: "Yes", actionId: "fib_your_date_of_birth" },
    children: [
      {
        type: "copyFullName",
      },
    ],
  },
  {
    id: FIB_ENTER_YOUR_NAME,
    heading: "About You",
    icon: NAME_ICON,
    title: "Name",
    question: "Please enter your name",
    firstButton: { label: "Continue", actionId: "fib_your_date_of_birth" },
    children: [{ type: "inputFullName" }],
  },
  {
    id: "fib_your_date_of_birth",
    heading: "About You",
    icon: BIRTHDAY_ICON,
    title: "Birthday",
    question: "Is this your\ndate or birth?",
    firstButton: { label: "No", actionId: FIB_ENTER_YOUR_DATE_OF_BIRTH },
    secondButton: { label: "Yes", actionId: "fib_uk_resident" },
    previousButton: { actionId: "fib_your_name" },
    children: [
      {
        type: "copyBirthday",
      },
    ],
  },
  {
    id: FIB_ENTER_YOUR_DATE_OF_BIRTH,
    heading: "About You",
    icon: BIRTHDAY_ICON,
    title: "Birthday",
    question: "Please enter your date of birth",
    children: [
      {
        type: "inputBirth",
      },
    ],
    firstButton: { label: "Continue", actionId: "fib_uk_resident" },
  },
  {
    id: "fib_uk_resident",
    heading: "About You",
    icon: UK_FLAG_ICON,
    title: "UK Residency",
    question: "Are you a UK resident?",
    firstButton: { label: "No", actionId: "fib_member_of_armed_forces" },
    secondButton: { label: "Yes", actionId: "fib_member_of_armed_forces" },
    previousButton: { actionId: "fib_your_date_of_birth" },
    children: [
      {
        type: "markdown",
        text:
          "A UK resident is defined as a person who has their main home in the United Kingdom, and who has been resident in the UK for 6 months out of the last 12.",
      },
    ],
  },
  {
    id: "fib_member_of_armed_forces",
    heading: "About You",
    icon: HAZARDOUS_OCCUPATION_ICON,
    title: "Hazardous occupation",
    question:
      "Are you a member of the armed forces, territorial army or reservists or employed in any of the following hazardous occupations:",
    firstButton: { label: "No", actionId: "fib_lifestyle_height_and_weight" },
    secondButton: { label: "Yes", actionId: "fib_lifestyle_height_and_weight" },
    previousButton: { actionId: "fib_uk_resident" },
    children: [
      {
        type: "markdown",
        text: `- Commercial diving;\n- Commercial aviation (as pilot or crew);\n- Offshore work (including gas or oil platforms);\n- Offshore fishing; or\n- Working with explosives.`,
      },
    ],
  },
  {
    id: "fib_lifestyle_height_and_weight",
    heading: "Lifestyle",
    icon: HEIGHT_WEIGHT_ICON,
    title: "Height and weight",
    question: "We need to know your height and weight to calculate your Body Mass Index (BMI).",
    firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_HEIGHT_SCREEN_ID },
    previousButton: { actionId: "fib_member_of_armed_forces" },
    children: [
      {
        type: "markdown",
        text: `BMI is a measure used by healthcare professionals, to find out whether you are at a healthy weight for your height. If you are pregnant, please enter your pre-pregnancy weight.`,
      },
    ],
  },
  {
    id: FIB_LIFESTYLE_HEIGHT_SCREEN_ID,
    heading: "Lifestyle",
    icon: HEIGHT_ICON,
    title: "Height",
    question: "Please input your height",
    firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_WEIGHT_SCREEN_ID },
    previousButton: { actionId: "fib_lifestyle_height_and_weight" },
    children: [
      {
        type: "markdown",
        text: "We need this to figure out your BMI.",
      },
      {
        type: "inputHeight",
      },
    ],
  },
  {
    id: FIB_LIFESTYLE_WEIGHT_SCREEN_ID,
    heading: "Lifestyle",
    icon: WEIGHT_ICON,
    title: "Weight",
    question: "Please input your weight",
    firstButton: { label: "Continue", actionId: "fib_lifestyle_smoking" },
    previousButton: { actionId: FIB_LIFESTYLE_HEIGHT_SCREEN_ID },
    children: [
      {
        type: "markdown",
        text: "We need this to figure out your BMI. If you are pregnant this is your pre-pregnancy weight.",
      },
      {
        type: "inputWeight",
      },
    ],
  },
  {
    id: "fib_lifestyle_smoking",
    heading: "Lifestyle",
    icon: SMOKING_ICON,
    title: "Smoking",
    question:
      "In the last 12 months have you smoked cigarettes, cigars, pipes, or shisha or used nicotine replacements? Vaping counts.",
    firstButton: { label: "No", actionId: "fib_lifestyle_alcohol" },
    secondButton: { label: "Yes", actionId: "fib_lifestyle_alcohol" },
    previousButton: { actionId: FIB_LIFESTYLE_WEIGHT_SCREEN_ID },
  },
  {
    id: "fib_lifestyle_alcohol",
    heading: "Lifestyle",
    icon: ALCOHOL_ICON,
    title: "Alcohol",
    question: "How much do you drink in an average week? ",
    firstButton: { label: "Continue", actionId: "fib_lifestyle_drugs" },
    previousButton: { actionId: "fib_lifestyle_smoking" },
    children: [
      {
        type: "markdown",
        text: "1 drink is a small glass of wine, 1 pint of beer or cider, or a shot.",
      },
      {
        type: "inputAlcohol",
      },
    ],
  },
  {
    id: "fib_lifestyle_drugs",
    heading: "Lifestyle",
    icon: DRUGS_ICON,
    title: "Drugs",
    question:
      "In the last 5 years have you used class A, B or C drugs like, but not restricted to heroin, cocaine, ecstasy, spice, LSD, anabolic steroids and legal highs?",
    firstButton: { label: "No", actionId: "fib_lifestyle_drugs_councelling" },
    secondButton: { label: "Yes", actionId: "fib_lifestyle_drugs_councelling" },
    previousButton: { actionId: "fib_lifestyle_alcohol" },
    children: [
      {
        type: "markdown",
        text: "We won’t count cannabis if it's no more than 1 or 2 tobacco free joints a week.",
      },
    ],
  },
  {
    id: "fib_lifestyle_drugs_councelling",
    heading: "Lifestyle",
    icon: DRUGS_COUNSELLING_ICON,
    title: "Drugs Councelling",
    question:
      "Have you ever been advised to receive treatment, counselling, or attend a support group to manage your alcohol or drugs use?",
    firstButton: { label: "No", actionId: "fib_medical_history" },
    secondButton: { label: "Yes", actionId: "fib_medical_history" },
    previousButton: { actionId: "fib_lifestyle_drugs" },
  },
  {
    id: "fib_medical_history",
    heading: "Medical",
    icon: MEDICAL_HISTORY_ICON,
    title: "Medical History",
    question: "Have you been diagnosed with one of the following?",
    firstButton: { label: "No", actionId: "fib_medical_three_or_more_consultation" },
    secondButton: { label: "Yes", actionId: "fib_medical_three_or_more_consultation" },
    previousButton: { actionId: "fib_lifestyle_drugs_councelling" },
    children: [
      {
        type: "markdown",
        text: "Just answer yes/no at the bottom of the page.",
      },
      {
        type: "medicalHistory",
        showDelimiter: false,
        icon: DIABETES_ICON,
        title: "Diabetes",
        description: "Description Goes Here ",
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
        description: "Description Goes here",
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
        description: "Description Goes Here",
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
    id: "fib_medical_three_or_more_consultation",
    heading: "Medical",
    icon: MEDICAL_HISTORY_PAST_CONSULTATIONS_ICON,
    title: "Three Or More Consultations In Last 3 Years",
    question:
      "Have you required 3 or more consultations in the last 3 years from a healthcare professional for a medical or mental health condition, symptom, illness or injury? ",
    firstButton: { label: "No", actionId: "fib_medical_outstanding_medical_investigations" },
    secondButton: { label: "Yes", actionId: FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID },
    previousButton: { actionId: "fib_medical_history" },
  },
  {
    id: FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID,
    heading: "Medical",
    icon: `<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.89124 13.3275H19.9968V6.7169H15.4686L13.1218 4.37012H6.89124V13.3275Z" stroke="#828284" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.9928 4.91602H19.9995V6.55422" stroke="#828284" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.4381 7.64258V11.4272" stroke="#828284" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.336 9.54297H11.5514" stroke="#828284" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.38372 8.85271C4.97679 7.31891 2.87805 6.6705 2.87805 4.00336V1.09375H11.9099V3.98132C11.8894 6.6705 10.0263 6.99127 7.38372 8.85271Z" fill="white" stroke="#828284" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.38552 8.89648C10.0281 10.9226 11.8912 11.0787 11.8912 13.7458V16.6334H2.85938V13.7679C2.85938 11.0787 5.27559 10.595 7.38552 8.89648Z" fill="white" stroke="#828284" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0.996094 1.09375H13.7144" stroke="#828284" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0.996094 16.6553H13.7144" stroke="#828284" stroke-width="1.31056" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Three Year Medical History",
    question: "Please select all the conditions for which you required these consultations from the list below.",
    children: [
      {
        type: "chiplist",
        chips: [
          {
            id: FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID,
            active: false,
            label: "High Blood Pressure",
            icon: "blood_pressure_cholest",
            iconType: "image",
          },
          {
            id: FIB_HIGH_CHOLESTEROL_SCREEN_ID,
            active: false,
            label: "High Cholesterol",
            icon: "condition_stable",
            iconType: "image",
          },
          {
            id: "fib_medical_journey_ears_nose_throat",
            active: false,
            label: "Ear, nose, throat",
            icon: "ears_nose_throat",
            iconType: "image",
          },
          {
            id: FIB_DIGESTIVE_SCREEN_ID,
            active: false,
            label: "Digestive",
            icon: "digestive",
            iconType: "image",
          },
          {
            id: "fib_medical_journey_kidneys_bladder",
            active: false,
            label: "Kidneys & bladder",
            icon: "kidneys_bladder",
            iconType: "image",
          },
          {
            id: "fib_medical_journey_eye",
            active: false,
            label: "Eye",
            icon: "eye",
            iconType: "image",
          },
          {
            id: "fib_medical_journey_minor_injuries",
            active: false,
            label: "Minor injuries",
            icon: "minor_injuries",
            iconType: "image",
          },
          {
            id: "fib_medical_journey_lungs",
            active: false,
            label: "Lungs",
            icon: "lungs",
            iconType: "image",
          },
          {
            id: "fib_medical_journey_pregnancy",
            active: false,
            label: "Pregnancy",
            icon: "pregnancy",
            iconType: "image",
          },
          {
            id: "fib_medical_journey_muscles_joints",
            active: false,
            label: "Muscles & Joints",
            icon: "muscles_joints",
            iconType: "image",
          },
          {
            id: "fib_medical_journey_skin",
            active: false,
            label: "Skin",
            icon: "skin",
            iconType: "image",
          },
          {
            id: "fib_medical_journey_other",
            active: false,
            label: "Other",
            icon: "other",
            iconType: "image",
          },
        ],
      },
    ],
    firstButton: { label: "Continue", actionId: FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID },
    previousButton: { actionId: "fib_medical_three_or_more_consultation" },
  },
  {
    id: FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID,
    heading: "Medical",
    title: "Blood Pressure",
    icon: `<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.1887 6.72559H5.2688V15.2398H17.1887V6.72559Z" stroke="#828284" stroke-width="1.44741" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.90136 2.35107H4.84382C2.62461 2.35107 0.808885 4.25356 0.808885 6.57881C0.808885 8.90407 2.62461 10.8066 4.84382 10.8066" stroke="#828284" stroke-width="1.44741" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.9299 19.4966H17.6127C19.7534 19.4966 21.5049 17.5809 21.5049 15.2395C21.5049 12.8981 19.7534 10.9824 17.6127 10.9824" stroke="#828284" stroke-width="1.44741" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.082 4.1713C13.0224 4.1713 13.7848 3.40892 13.7848 2.46846C13.7848 1.52801 13.0224 0.765625 12.082 0.765625C11.1415 0.765625 10.3792 1.52801 10.3792 2.46846C10.3792 3.40892 11.1415 4.1713 12.082 4.1713Z" stroke="#828284" stroke-width="1.44741" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.162 19.4146C12.162 20.2954 11.4895 21 10.6489 21H7.82446V17.7939H10.6489C11.4895 17.7939 12.162 18.5338 12.162 19.4146Z" stroke="#828284" stroke-width="1.44741" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.8729 9.61634C12.4209 9.1676 11.6736 9.1676 11.2216 9.61634L10.8914 9.84071L10.6654 9.61634C10.2135 9.1676 9.46614 9.1676 9.01423 9.61634C8.56232 10.0651 8.56232 10.79 8.99685 11.2387L10.6654 12.9474C10.8219 13.1027 11.0652 13.1027 11.2043 12.9474L12.8902 11.2387C13.3248 10.79 13.3248 10.0651 12.8729 9.61634Z" fill="white" stroke="#828284" stroke-width="1.44741" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    question: "Has your blood pressure been checked by a medical professional in the last 12 months?",
    firstButton: { label: "No", actionId: FIB_HIGH_CHOLESTEROL_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN },
    previousButton: { actionId: FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID },
  },
  {
    id: FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN,
    heading: "Medical",
    icon: `<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5799 21.0001H2.94479C2.17846 21.0001 1.54297 20.3957 1.54297 19.6265V3.94882C1.54297 3.19791 2.15977 2.5752 2.94479 2.5752H15.5986C16.3649 2.5752 17.0004 3.17959 17.0004 3.94882V19.6448C16.9817 20.3957 16.3649 21.0001 15.5799 21.0001Z" stroke="#828284" stroke-width="1.66667" stroke-miterlimit="10"/>
    <path d="M12.1791 3.58242H6.2728V2.35531C6.2728 1.6044 6.8896 1 7.65593 1H10.8147C11.581 1 12.1978 1.6044 12.1978 2.35531V3.58242H12.1791Z" fill="white" stroke="#828284" stroke-width="1.66667" stroke-miterlimit="10"/>
    <path d="M9.87909 14.333H4.87909V17.6663H9.87909V14.333Z" stroke="#828284" stroke-width="1.41667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.87891 10.9369V11.8332H4.87891V7.6665H7.37891" stroke="#828284" stroke-width="1.41667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.96094 9.33301L7.78125 10.1663L9.8776 8.08301" stroke="#828284" stroke-width="1.41667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Blood Pressure Readings Satisfactory?",
    question: "Were your last blood pressure readings normal or satisfactory?",
    firstButton: { label: "No", actionId: FIB_HIGH_CHOLESTEROL_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_HIGH_CHOLESTEROL_SCREEN_ID },
    previousButton: { actionId: FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID },
  },
  {
    id: FIB_HIGH_CHOLESTEROL_SCREEN_ID,
    heading: "Medical",
    title: "Cholesterol Check",
    icon: `<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.1887 6.72559H5.2688V15.2398H17.1887V6.72559Z" stroke="#828284" stroke-width="1.44741" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.90136 2.35107H4.84382C2.62461 2.35107 0.808885 4.25356 0.808885 6.57881C0.808885 8.90407 2.62461 10.8066 4.84382 10.8066" stroke="#828284" stroke-width="1.44741" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.9299 19.4966H17.6127C19.7534 19.4966 21.5049 17.5809 21.5049 15.2395C21.5049 12.8981 19.7534 10.9824 17.6127 10.9824" stroke="#828284" stroke-width="1.44741" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.082 4.1713C13.0224 4.1713 13.7848 3.40892 13.7848 2.46846C13.7848 1.52801 13.0224 0.765625 12.082 0.765625C11.1415 0.765625 10.3792 1.52801 10.3792 2.46846C10.3792 3.40892 11.1415 4.1713 12.082 4.1713Z" stroke="#828284" stroke-width="1.44741" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.162 19.4146C12.162 20.2954 11.4895 21 10.6489 21H7.82446V17.7939H10.6489C11.4895 17.7939 12.162 18.5338 12.162 19.4146Z" stroke="#828284" stroke-width="1.44741" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.8729 9.61634C12.4209 9.1676 11.6736 9.1676 11.2216 9.61634L10.8914 9.84071L10.6654 9.61634C10.2135 9.1676 9.46614 9.1676 9.01423 9.61634C8.56232 10.0651 8.56232 10.79 8.99685 11.2387L10.6654 12.9474C10.8219 13.1027 11.0652 13.1027 11.2043 12.9474L12.8902 11.2387C13.3248 10.79 13.3248 10.0651 12.8729 9.61634Z" fill="white" stroke="#828284" stroke-width="1.44741" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    question: "Has your cholesterol been checked by a medical professional in the last 12 months?",
    firstButton: { label: "No", actionId: FIB_DIGESTIVE_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN },
    previousButton: { actionId: FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN },
  },
  {
    id: FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN,
    heading: "Medical",
    icon: `<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5799 21.0001H2.94479C2.17846 21.0001 1.54297 20.3957 1.54297 19.6265V3.94882C1.54297 3.19791 2.15977 2.5752 2.94479 2.5752H15.5986C16.3649 2.5752 17.0004 3.17959 17.0004 3.94882V19.6448C16.9817 20.3957 16.3649 21.0001 15.5799 21.0001Z" stroke="#828284" stroke-width="1.66667" stroke-miterlimit="10"/>
    <path d="M12.1791 3.58242H6.2728V2.35531C6.2728 1.6044 6.8896 1 7.65593 1H10.8147C11.581 1 12.1978 1.6044 12.1978 2.35531V3.58242H12.1791Z" fill="white" stroke="#828284" stroke-width="1.66667" stroke-miterlimit="10"/>
    <path d="M9.87909 14.333H4.87909V17.6663H9.87909V14.333Z" stroke="#828284" stroke-width="1.41667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.87891 10.9369V11.8332H4.87891V7.6665H7.37891" stroke="#828284" stroke-width="1.41667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.96094 9.33301L7.78125 10.1663L9.8776 8.08301" stroke="#828284" stroke-width="1.41667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Cholesterol Readings Satisfactory?",
    question: "Were your last cholesterol readings normal or satisfactory?",
    firstButton: { label: "No", actionId: FIB_DIGESTIVE_SCREEN_ID },
    secondButton: { label: "Yes", actionId: FIB_DIGESTIVE_SCREEN_ID },
    previousButton: { actionId: FIB_HIGH_CHOLESTEROL_SCREEN_ID },
  },
  {
    id: FIB_DIGESTIVE_SCREEN_ID,
    heading: "Medical",
    title: "Digestive",
    icon: `<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.4116 21.9998C6.36231 18.4895 6.50855 17.9044 6.50855 17.9044C8.33687 20.8297 11.2621 21.561 11.2621 21.561C19.4529 23.9743 25.5228 12.4195 20.1111 6.64212C15.65 2.54675 11.9203 6.3496 11.9203 6.3496C9.06818 6.3496 10.1651 1.81543 10.1651 1.81543H7.09361C7.09361 1.81543 4.60713 8.39728 11.0427 10.0793C11.0427 10.0793 11.9934 12.8583 9.79948 15.8567C9.79948 15.8567 5.77726 12.0539 3.36389 16.2224C3.36389 16.2224 2.12067 18.6357 1.82812 21.9998H4.60713H5.4116Z" stroke="#828284" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    question: "Did you have or still have any of the following issues?",
    firstButton: { label: "No", actionId: FIB_DIGESTIVE_HOSPITAL_STAY_SCREEN_ID },
    secondButton: { label: "Yes", actionId: "fib_medical_journey_ears_nose_throat" },
    previousButton: { actionId: FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN },
    children: [
      {
        type: "markdown",
        text:
          "Appendicitis, constipation, dyspepsia, food poisoning, gallbladder stones, hernia, indigestion, irritable bowel syndrome, rectal / anal abscess.",
      },
    ],
  },
  {
    id: FIB_DIGESTIVE_HOSPITAL_STAY_SCREEN_ID,
    heading: "Medical",
    icon: `<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.4116 21.9998C6.36231 18.4895 6.50855 17.9044 6.50855 17.9044C8.33687 20.8297 11.2621 21.561 11.2621 21.561C19.4529 23.9743 25.5228 12.4195 20.1111 6.64212C15.65 2.54675 11.9203 6.3496 11.9203 6.3496C9.06818 6.3496 10.1651 1.81543 10.1651 1.81543H7.09361C7.09361 1.81543 4.60713 8.39728 11.0427 10.0793C11.0427 10.0793 11.9934 12.8583 9.79948 15.8567C9.79948 15.8567 5.77726 12.0539 3.36389 16.2224C3.36389 16.2224 2.12067 18.6357 1.82812 21.9998H4.60713H5.4116Z" stroke="#828284" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6484 7.73919C15.6484 7.73919 19.0125 7.37353 19.0856 11.2495" stroke="#828284" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Digestive Hospital Stay",
    question:
      "For the digestive issues you had that were not on the list, have you required an overnight stay in hospital in the last 2 years?",
    children: [
      {
        type: "markdown",
        text: "You can ignore hospitalisation due to pregnancy.",
      },
    ],
    firstButton: { label: "No", actionId: FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID },
    secondButton: { label: "Yes", actionId: "fib_medical_journey_ears_nose_throat" },
    previousButton: { actionId: FIB_DIGESTIVE_SCREEN_ID },
  },
  {
    id: FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID,
    heading: "Medical",
    icon: `<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 20.5C15.7467 20.5 20 16.2467 20 11C20 5.75329 15.7467 1.5 10.5 1.5C5.25329 1.5 1 5.75329 1 11C1 16.2467 5.25329 20.5 10.5 20.5Z" stroke="#828284" stroke-width="1.80952" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.5193 4.6665L4.16797 18.0179" stroke="#828284" stroke-width="1.80952" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
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
    firstButton: { label: "No", actionId: FIB_DIGESTIVE_SYMPTOMS_RESOLVED_SCREEN_ID },
    secondButton: { label: "Yes", actionId: "fib_medical_journey_ears_nose_throat" },
    previousButton: { actionId: FIB_DIGESTIVE_HOSPITAL_STAY_SCREEN_ID },
  },
  {
    id: FIB_DIGESTIVE_SYMPTOMS_RESOLVED_SCREEN_ID,
    heading: "Medical",
    icon: `<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.4116 21.9998C6.36231 18.4895 6.50855 17.9044 6.50855 17.9044C8.33687 20.8297 11.2621 21.561 11.2621 21.561C19.4529 23.9743 25.5228 12.4195 20.1111 6.64212C15.65 2.54675 11.9203 6.3496 11.9203 6.3496C9.06818 6.3496 10.1651 1.81543 10.1651 1.81543H7.09361C7.09361 1.81543 4.60713 8.39728 11.0427 10.0793C11.0427 10.0793 11.9934 12.8583 9.79948 15.8567C9.79948 15.8567 5.77726 12.0539 3.36389 16.2224C3.36389 16.2224 2.12067 18.6357 1.82812 21.9998H4.60713H5.4116Z" stroke="#828284" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6484 7.73919C15.6484 7.73919 19.0125 7.37353 19.0856 11.2495" stroke="#828284" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Digestive Symptoms Resolved",
    question: "Are your digestive condition(s) or symptom(s) fully resolved?",
    firstButton: { label: "No", actionId: FIB_CONDITION_STABLE_SCREEN_ID },
    secondButton: { label: "Yes", actionId: "fib_medical_journey_ears_nose_throat" },
    previousButton: { actionId: FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID },
  },
  {
    id: FIB_CONDITION_STABLE_SCREEN_ID,
    heading: "Medical",
    icon: `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.41064 1.2334V19.0003H20.5895" stroke="#828284" stroke-width="1.59823" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.41016 16.8162L5.8053 5.229L7.80309 10.4233H19.3903" stroke="#828284" stroke-width="1.59823" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Digestive Condition Stable?",
    question: "Are these condition(s) stable (no increasing symptoms or complications)?",
    firstButton: { label: "No", actionId: "fib_medical_journey_ears_nose_throat" },
    secondButton: { label: "Yes", actionId: "fib_medical_journey_ears_nose_throat" },
    previousButton: { actionId: FIB_DIGESTIVE_SYMPTOMS_RESOLVED_SCREEN_ID },
  },
  {
    id: "fib_medical_journey_ears_nose_throat",
    heading: "Medical",
    title: "Ears, Nose, Throat",
    icon: `<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.6892 16.22C14.7952 17.3637 16.1898 21.2596 16.1898 21.2596H7.69668C7.69668 21.2596 7.5894 18.9185 6.24838 19.0078C4.90735 19.1151 3.35177 19.2044 3.65573 17.4173C3.72725 16.9527 3.74513 16.5595 3.70937 16.2557C3.69149 15.9698 3.63785 15.7375 3.56633 15.5766C3.42329 15.1835 3.24449 15.0405 3.24449 15.0405L3.17296 14.2899L3.1372 13.9861C3.1372 13.9861 3.08356 13.8253 2.85112 13.7002C2.70808 13.6287 2.36835 13.5036 2.06439 13.3785C1.18825 13.039 1.43858 12.4313 1.97498 11.788C2.63656 11.0017 3.88818 10.0009 2.79748 8.58909C2.79748 8.58909 1.65314 -1.23993 13.6687 1.10117C13.6687 1.10117 20.6063 2.35213 18.6573 10.8766C18.6752 10.8766 18.1388 13.2713 15.6892 16.22Z" stroke="#828284" stroke-width="1.45342" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    question: "Did you have any of the following issues?",
    firstButton: { label: "No", actionId: "fib_medical_journey_eye" },
    secondButton: { label: "Yes", actionId: "fib_medical_journey_eye" },
    previousButton: { actionId: FIB_CONDITION_STABLE_SCREEN_ID },
    children: [
      {
        type: "markdown",
        text:
          "Deafness, earache, grommets, laryngitis, nasal polyp, pharyngitis, rhinitis, sinusitis, throat infection, tonsillitis.",
      },
    ],
  },
  {
    id: "fib_medical_journey_eye",
    heading: "Medical",
    icon: `<svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 6.99984C19 10.517 15.25 12.8332 11 12.8332C6.75 12.8332 3 10.517 1 6.99984C3 3.48268 6.75 1.1665 11 1.1665C15.25 1.1665 18.9167 3.48268 21 6.99984Z" stroke="#828284" stroke-width="1.41667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.9987 11.1663C13.2999 11.1663 15.1654 9.30086 15.1654 6.99967C15.1654 4.69849 13.2999 2.83301 10.9987 2.83301C8.69751 2.83301 6.83203 4.69849 6.83203 6.99967C6.83203 9.30086 8.69751 11.1663 10.9987 11.1663Z" stroke="#828284" stroke-width="1.41667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Eye",
    question: "Did you have any of the following issues?",
    firstButton: { label: "No", actionId: "fib_medical_journey_kidneys_bladder" },
    secondButton: { label: "Yes", actionId: "fib_medical_journey_kidneys_bladder" },
    previousButton: { actionId: "fib_medical_journey_ears_nose_throat" },
    children: [
      {
        type: "markdown",
        text: "Blindness, cataract, conjunctivitis, detached retina, glaucoma, stye.",
      },
    ],
  },
  {
    id: "fib_medical_journey_kidneys_bladder",
    heading: "Medical",
    icon: `<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.90466 4.42048C4.82171 4.07726 4.93203 3.71451 5.16641 3.45042C5.74014 2.80397 6.12087 1.85003 4.73959 1.23613C2.59652 0.283652 0.929688 2.42672 0.929688 3.85544C0.929688 5.28415 1.64404 7.66534 3.78711 7.42722C5.24321 7.26543 5.18782 5.59215 4.90466 4.42048Z" stroke="#828284" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.09697 3.9165C7.24004 4.63086 8.43041 5.58317 8.01363 7.24984C7.59691 8.9165 4.32315 8.91634 3.84691 10.5832C3.46592 11.9166 4.38261 12.3331 5.09697 12.6665" stroke="#828284" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.3595 7.42722C19.5026 7.66534 20.2169 5.28415 20.2169 3.85544C20.2169 2.42672 18.5501 0.283652 16.407 1.23613C15.0386 1.84431 15.3995 2.78621 15.9642 3.43225C16.2043 3.70695 16.3113 4.08605 16.2215 4.43966C15.9243 5.61032 15.9113 7.26631 17.3595 7.42722Z" stroke="#828284" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6929 12.9038C16.4072 12.5704 17.5605 11.9166 17.1795 10.5832C16.7033 8.91634 13.8462 8.9165 13.4295 7.24984C13.065 5.79185 13.7865 4.63086 15.9295 3.9165" stroke="#828284" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.26162 21V16.4758C7.73766 16.571 4.73736 16.2376 4.73736 14.3327C4.73736 11.9515 8.30914 10.2847 9.97597 10.2847C11.6428 10.2847 15.9289 10.999 15.9289 14.3327C15.9289 16.0471 13.2144 16.4758 11.8809 16.4758V21" stroke="#828284" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Kidneys & Bladder",
    question: "Did you have any of the following issues?",
    firstButton: { label: "No", actionId: "fib_medical_journey_lungs" },
    secondButton: { label: "Yes", actionId: "fib_medical_journey_lungs" },
    previousButton: { actionId: "fib_medical_journey_eye" },
    children: [
      {
        type: "markdown",
        text: "Bladder stone(s), kidney stone(s), urine infection, cystitis.",
      },
    ],
  },
  {
    id: "fib_medical_journey_lungs",
    heading: "Medical",
    title: "Lungs",
    icon: `<svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.94376 5.32998C7.94376 5.32998 5.47675 4.19426 2.13902 11.2215C-0.763351 17.8228 3.66276 18.8875 5.9121 18.5326C8.16144 18.1777 9.32239 16.971 8.81447 13.4219C8.16144 9.9438 10.3382 6.46569 7.94376 5.32998Z" stroke="#828284" stroke-width="1.52647" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.1998 5.32998C15.1998 5.32998 17.6668 4.19426 21.0046 11.2215C23.9069 17.8228 19.4808 18.8875 17.2315 18.5326C14.9821 18.1777 13.8212 16.971 14.3291 13.4219C14.9096 9.9438 12.7328 6.46569 15.1998 5.32998Z" stroke="#828284" stroke-width="1.52647" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.81592 13.5709C8.81592 13.5709 10.9913 11.5763 11.4992 8.4531V1" stroke="#828284" stroke-width="1.52647" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.329 13.4928C14.329 13.4928 11.7894 11.7183 11.4991 8.45312" stroke="#828284" stroke-width="1.52647" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    question: "Did you have any of the following issues?",
    children: [
      {
        type: "markdown",
        text:
          "Asthma treated with inhalers only or no treatment, hay fever, single attack of bronchitis, chest infection.",
      },
    ],
    firstButton: { label: "No", actionId: "fib_medical_journey_minor_injuries" },
    secondButton: { label: "Yes", actionId: "fib_medical_journey_minor_injuries" },
    previousButton: { actionId: "fib_medical_journey_kidneys_bladder" },
  },
  {
    id: "fib_medical_journey_minor_injuries",
    heading: "Medical",
    title: "Minor Injuries",
    icon: `<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.83519 14.3072L6.83519 3.09396C6.83519 2.14299 7.60611 1.37207 8.55708 1.37207V1.37207C9.50805 1.37207 10.279 2.14299 10.279 3.09396L10.279 9.62454C10.279 9.62454 17.1875 9.77153 16.9985 14.3072C16.8096 18.843 15.5916 20.6278 15.5916 20.6278L6.83519 20.6278L1.42909 13.9235C1.17172 13.6043 1.1964 13.1425 1.48632 12.8525L1.58955 12.7493C2.47673 11.8621 3.89661 11.8053 4.85192 12.6186L6.83519 14.3072Z" stroke="#828284" stroke-width="1.36395" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.39514 2.57556V6.98834H9.80211V2.57556C9.80211 1.91089 9.26329 1.37207 8.59863 1.37207C7.93396 1.37207 7.39514 1.91089 7.39514 2.57556Z" fill="#828284" stroke="#828284" stroke-width="1.36395"/>
    </svg>
    `,
    question: "Did you have any of the following issues?",
    children: [
      {
        type: "markdown",
        text:
          "Cuts, broken bones, dislocation, muscle injury, repetitive strain injury, sprains and strains, whiplash.",
      },
    ],
    firstButton: { label: "No", actionId: "fib_medical_journey_muscles_joints" },
    secondButton: { label: "Yes", actionId: "fib_medical_journey_muscles_joints" },
    previousButton: { actionId: "fib_medical_journey_lungs" },
  },
  {
    id: "fib_medical_journey_muscles_joints",
    heading: "Medical",
    icon: `<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.6276 14.0036C15.6276 14.0036 13.5583 8.35818 7.75194 11.6461C7.75194 11.6461 5.86797 9.10262 3.21187 10.2503C0.555779 11.398 1.42055 18.8424 4.47815 19.2457C6.03916 19.5788 8.21521 18.9045 8.21521 18.9045C8.21521 18.9045 12.4773 20.8587 16.7703 19.0906C21.0633 17.3225 21.9898 15.3994 21.9898 15.3994C21.9898 15.3994 22.421 10.9567 17.913 6.40401C16.8178 5.18968 15.9787 4.27741 15.3384 3.59353C14.073 2.24201 12.4553 1.34136 10.6713 0.846099V0.846099C9.98164 0.654633 9.24201 0.803297 8.67988 1.24637L8.40239 1.46509C7.64211 2.06435 7.3413 3.07727 7.65126 3.99436V3.99436C8.03263 5.12273 9.0446 5.95534 10.2274 5.8155C10.8813 5.7382 11.5968 5.57669 12.1994 5.25632C12.1994 5.25632 16.2453 6.7142 14.2995 11.9873" stroke="#828284" stroke-width="1.46574" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    title: "Muscles & Joints",
    question: "Did you have any of the following issues?",
    children: [
      {
        type: "markdown",
        text:
          "Arthritis in one joint only, back problems, bunion, bursitis, carpal tunnel syndrome, cartilage, ligament muscle or tendon trouble, chronic fatigue syndrome, fibrositis/fibromyalgia, frozen shoulder, sciatica, slipped disc, tennis elbow.",
      },
    ],
    firstButton: { label: "No", actionId: "fib_medical_journey_pregnancy" },
    secondButton: { label: "Yes", actionId: "fib_medical_journey_pregnancy" },
    previousButton: { actionId: "fib_medical_journey_minor_injuries" },
  },
  {
    id: "fib_medical_journey_pregnancy",
    heading: "Medical",
    icon: `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.36 9.81622C17.36 5.29854 13.6977 1.63623 9.17999 1.63623C4.66231 1.63623 1 5.29854 1 9.81622C1 14.3339 4.66231 17.9962 9.17999 17.9962C11.7444 17.9962 14.0331 16.8162 15.5329 14.9696" stroke="#828284" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.3925 11.6521C13.317 11.6521 14.0663 11.1203 14.0663 10.4642C14.0663 9.80819 13.317 9.27637 12.3925 9.27637C11.4681 9.27637 10.7188 9.80819 10.7188 10.4642C10.7188 11.1203 11.4681 11.6521 12.3925 11.6521Z" stroke="#828284" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.0664 10.4639C14.0664 10.4639 15.0653 10.5719 15.7132 11.8138C16.3611 13.0556 18.7638 13.2446 19.2498 10.7879C19.5 9.13601 20.5 9.63603 21 9.63609" stroke="#828284" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.0737 8.81732C4.43154 8.81732 4.72162 8.52724 4.72162 8.1694C4.72162 7.81157 4.43154 7.52148 4.0737 7.52148C3.71586 7.52148 3.42578 7.81157 3.42578 8.1694C3.42578 8.52724 3.71586 8.81732 4.0737 8.81732Z" fill="#828284" stroke="#828284" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.26059 6.38764C7.61843 6.38764 7.90851 6.09755 7.90851 5.73972C7.90851 5.38188 7.61843 5.0918 7.26059 5.0918C6.90276 5.0918 6.61267 5.38188 6.61267 5.73972C6.61267 6.09755 6.90276 6.38764 7.26059 6.38764Z" fill="#828284" stroke="#828284" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.52683 14.7568C8.88466 14.7568 9.17475 14.4667 9.17475 14.1089C9.17475 13.751 8.88466 13.4609 8.52683 13.4609C8.16899 13.4609 7.87891 13.751 7.87891 14.1089C7.87891 14.4667 8.16899 14.7568 8.52683 14.7568Z" fill="#828284" stroke="#828284" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.4409 6.6308C13.7987 6.6308 14.0888 6.34072 14.0888 5.98288C14.0888 5.62504 13.7987 5.33496 13.4409 5.33496C13.0831 5.33496 12.793 5.62504 12.793 5.98288C12.793 6.34072 13.0831 6.6308 13.4409 6.6308Z" fill="#828284" stroke="#828284" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    `,
    title: "Pregnancy",
    question: "Did you have any of the following issues?",
    children: [
      {
        type: "markdown",
        text:
          "Regular pregnancy check ups/scans, abortion, eclampsia, fertility treatment, any complications from which you have fully recovered.",
      },
    ],
    firstButton: { label: "No", actionId: "fib_medical_journey_skin" },
    secondButton: { label: "Yes", actionId: "fib_medical_journey_skin" },
    previousButton: { actionId: "fib_medical_journey_muscles_joints" },
  },
  {
    id: "fib_medical_journey_skin",
    heading: "Medical",
    icon: `<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5488 16.0878C14.6774 17.2027 16.0368 21 16.0368 21H7.75844C7.75844 21 7.65387 18.7181 6.34676 18.8052C5.03964 18.9097 3.5234 18.9968 3.81967 17.2549C3.88939 16.802 3.90681 16.4188 3.87196 16.1227C3.85453 15.844 3.80225 15.6175 3.73253 15.4607C3.59311 15.0775 3.41883 14.9382 3.41883 14.9382L3.34911 14.2066L3.31426 13.9105C3.31426 13.9105 3.26197 13.7537 3.03541 13.6317C2.89598 13.5621 2.56485 13.4401 2.26857 13.3182C1.41459 12.9872 1.65858 12.395 2.18143 11.7679C2.82627 11.0015 4.04624 10.026 2.98312 8.64991C2.98312 8.64991 1.86772 -0.930564 13.5794 1.35133C13.5794 1.35133 20.3416 2.57066 18.4419 10.8795C18.4593 10.8795 17.9365 13.2137 15.5488 16.0878Z" stroke="#828284" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9869 12.3957C11.5539 12.24 11.0765 12.4648 10.9207 12.8979C10.765 13.331 10.9898 13.8083 11.4229 13.9641C11.856 14.1198 12.3333 13.895 12.4891 13.4619C12.6448 13.0289 12.42 12.5515 11.9869 12.3957Z" fill="#828284" stroke="#828284" stroke-width="0.416667"/>
    <path d="M8.68615 14.6643C8.25307 14.5085 7.77573 14.7334 7.61996 15.1664C7.4642 15.5995 7.68901 16.0769 8.12209 16.2326C8.55517 16.3884 9.03252 16.1636 9.18828 15.7305C9.34404 15.2974 9.11923 14.8201 8.68615 14.6643Z" fill="#828284" stroke="#828284" stroke-width="0.416667"/>
    <path d="M8.75305 12.03C8.31997 11.8743 7.84262 12.0991 7.68686 12.5322C7.5311 12.9652 7.75591 13.4426 8.18899 13.5983C8.62207 13.7541 9.09941 13.5293 9.25517 13.0962C9.41094 12.6631 9.18613 12.1858 8.75305 12.03Z" fill="#828284" stroke="#828284" stroke-width="0.416667"/>
    <path d="M6.61584 13.0344C6.18276 12.8787 5.70541 13.1035 5.54965 13.5365C5.39389 13.9696 5.6187 14.447 6.05178 14.6027C6.48486 14.7585 6.96221 14.5337 7.11797 14.1006C7.27373 13.6675 7.04892 13.1902 6.61584 13.0344Z" fill="#828284" stroke="#828284" stroke-width="0.416667"/>
    <path d="M6.96276 9.61547C6.52969 9.45971 6.05234 9.68452 5.89658 10.1176C5.74082 10.5507 5.96563 11.028 6.3987 11.1838C6.83178 11.3396 7.30913 11.1147 7.46489 10.6817C7.62065 10.2486 7.39584 9.77124 6.96276 9.61547Z" fill="#828284" stroke="#828284" stroke-width="0.416667"/>
    </svg>
    `,
    title: "Skin",
    question: "Did you have any of the following issues?",
    children: [
      {
        type: "markdown",
        text: "Acne, athlete's foot, dermatitis, eczema, fungal infections, herpes, psoriasis, verruca, vitiligo.",
      },
    ],
    firstButton: { label: "No", actionId: "fib_medical_journey_other" },
    secondButton: { label: "Yes", actionId: "fib_medical_journey_other" },
    previousButton: { actionId: "fib_medical_journey_pregnancy" },
  },
  {
    id: "fib_medical_journey_other",
    heading: "Medical",
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.9 18.9997C14.9258 18.9997 19 14.9255 19 9.89976C19 4.87399 14.9258 0.799805 9.9 0.799805C4.87424 0.799805 0.800049 4.87399 0.800049 9.89976C0.800049 14.9255 4.87424 18.9997 9.9 18.9997Z" stroke="#828284" stroke-width="1.50412"/>
    <path d="M5.54131 10.6642C5.96365 10.6642 6.30601 10.3218 6.30601 9.89947C6.30601 9.47713 5.96365 9.13477 5.54131 9.13477C5.11898 9.13477 4.77661 9.47713 4.77661 9.89947C4.77661 10.3218 5.11898 10.6642 5.54131 10.6642Z" stroke="#828284" stroke-width="1.50412"/>
    <path d="M9.89996 10.6642C10.3223 10.6642 10.6647 10.3218 10.6647 9.89947C10.6647 9.47713 10.3223 9.13477 9.89996 9.13477C9.47762 9.13477 9.13525 9.47713 9.13525 9.89947C9.13525 10.3218 9.47762 10.6642 9.89996 10.6642Z" stroke="#828284" stroke-width="1.50412"/>
    <path d="M14.4881 10.6642C14.9104 10.6642 15.2528 10.3218 15.2528 9.89947C15.2528 9.47713 14.9104 9.13477 14.4881 9.13477C14.0658 9.13477 13.7234 9.47713 13.7234 9.89947C13.7234 10.3218 14.0658 10.6642 14.4881 10.6642Z" stroke="#828284" stroke-width="1.50412"/>
    </svg>
    `,
    title: "Other",
    question: "Did you have any of the following issues?",
    children: [
      {
        type: "markdown",
        text:
          "Normal cervical smear not requiring any treatment, allergic reactions, common cold, cosmetic surgery, epilepsy diagnosed more than 1 year ago, ganglion, glandular fever, hyperthyroidism, hypothyroidism, influenza (flu), migraine, piles (haemorrhoids), sebaceous cyst, shingles, thrush, varicose veins.",
      },
    ],
    firstButton: { label: "No", actionId: "fib_medical_outstanding_medical_investigations" },
    secondButton: { label: "Yes", actionId: "fib_medical_outstanding_medical_investigations" },
    previousButton: { actionId: "fib_medical_journey_skin" },
  },
  {
    id: "fib_medical_outstanding_medical_investigations",
    heading: "Medical",
    icon: OUTSTANDING_MEDICAL_INVESTIGATIONS_ICON,
    title: "Outstanding Medical Investigations",
    question: "Are you awaiting any investigations/tests (including their results) or any surgery?",
    firstButton: { label: "No", actionId: "fib_medical_other_symptoms" },
    secondButton: { label: "Yes", actionId: "fib_medical_other_symptoms" },
    previousButton: { actionId: "fib_medical_journey_other" },
    children: [
      {
        type: "markdown",
        text:
          "You can answer NO if they relate to any of the following: cuts, broken bones, dislocation, muscle injury, repetitive strain injury, sprains, strains or whiplash",
      },
    ],
  },
  {
    id: "fib_medical_other_symptoms",
    heading: "Medical",
    icon: CIRCLE_WITH_ELLIPSES_ICON,
    title: "Other Symptoms",
    question:
      "In the last 6 months have you noticed any symptoms for which you have not yet received an exact diagnosis, that you continue to experience and for which you expect to consult a doctor?",
    firstButton: { label: "No", actionId: "fib_medical_covid_isolation" },
    secondButton: { label: "Yes", actionId: "fib_medical_covid_isolation" },
    previousButton: { actionId: "fib_medical_outstanding_medical_investigations" },
    children: [
      {
        type: "markdown",
        text: "e.g. bleeding, weight loss, lump or growth, mole, dizziness, persistent cough, headaches",
      },
    ],
  },
  {
    id: "fib_medical_covid_isolation",
    heading: "Medical",
    icon: PERSON_FACEMASK_ICON,
    title: "Covid Isolation",
    question: "In the last 30 days have you been self-isolating for any of the reasons below:",
    firstButton: { label: "No", actionId: "fib_medical_covid_symptoms" },
    secondButton: { label: "Yes", actionId: "fib_medical_covid_symptoms" },
    previousButton: { actionId: "fib_medical_other_symptoms" },
    children: [
      {
        type: "markdown",
        text:
          "As a precaution because of an existing medical condition\n\nbecause you have had direct contact with someone diagnosed with, or suspected of having, coronavirus/COVID-19\n\nbecause you have experienced symptoms of coronavirus/COVID-19\n\nPlease answer no if you are following general government social-distancing advice and/or working from home to avoid spread of the virus",
      },
    ],
  },
  {
    id: "fib_medical_covid_symptoms",
    heading: "Medical",
    icon: PERSON_FACEMASK_ICON,
    title: "Covid Symptoms",
    question: "In the last 30 days have either of the following applied to you?",
    firstButton: { label: "No", actionId: "fib_financial_questions" },
    secondButton: { label: "Yes", actionId: "fib_financial_questions" },
    previousButton: { actionId: "fib_medical_covid_isolation" },
    children: [
      {
        type: "markdown",
        text:
          "- Tested positive for coronavirus / COVID-19\n- Had a new or unexplained continuous cough, fever or high temperature?",
      },
    ],
  },
  {
    id: "fib_financial_questions",
    heading: "Financial",
    icon: FINANCIAL_QUESTIONS_ICON,
    title: "Financial Questions",
    question:
      "Will the total amount of life insurance on your life (including any amount to be replaced and any other applied for) when added together exceed £20,000,000?",
    firstButton: { label: "No", actionId: "fib_review_screen" },
    secondButton: { label: "Yes", actionId: "fib_financial_other_cover" },
    previousButton: { actionId: "fib_medical_covid_symptoms" },
  },
  {
    id: "fib_financial_other_cover",
    heading: "Financial",
    icon: FINANCIAL_QUESTIONS_ICON,
    title: "Financial Questions",
    question: "Do you have, or have you applied for any more life insurance products?",
    firstButton: { label: "No", actionId: "fib_review_screen" },
    secondButton: { label: "Yes", actionId: "fib_financial_cover_list" },
    previousButton: { actionId: "fib_financial_questions" },
  },
  {
    id: "fib_financial_cover_list",
    heading: "Financial",
    icon: FINANCIAL_QUESTIONS_ICON,
    title: "Cover Details",
    question: "Add or remove your existing life insurance products below.",
    firstButton: { label: "Continue", actionId: "fib_review_screen" },
    secondButton: { label: "Add cover", actionId: "fib_financial_custom_cover_form" },
    previousButton: { actionId: "fib_financial_other_cover" },
  },
  {
    id: "fib_financial_custom_cover_form",
    heading: "Financial",
    icon: FINANCIAL_QUESTIONS_ICON,
    title: "Cover Details",
    question: "Please enter your cover details below.",
    firstButton: { label: "Continue", actionId: "fib_financial_cover_list" },
    previousButton: { actionId: "fib_financial_other_cover" },
  },
];

export type OrderedUnderwritingJourneyScreen = UnderwritingJourneyScreen & { order: number };

function getData(): OrderedUnderwritingJourneyScreen[] {
  const ROUTES_WITHOUT_PROGRESS = [
    "fib_enter_your_date_of_birth",
    "fib_enter_your_name",
    "fib_financial_custom_cover_form",
  ];

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
