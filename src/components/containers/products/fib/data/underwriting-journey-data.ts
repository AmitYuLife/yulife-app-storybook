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
}

const _data = [
  {
    id: "your_name",
    heading: "About You",
    icon: NAME_ICON,
    title: "Name",
    question: "Is this your name?",
    firstButton: { label: "No", actionId: "enter_your_name" },
    secondButton: { label: "Yes", actionId: "your_date_of_birth" },
    children: [
      {
        type: "copyFullName",
      },
    ],
  },
  {
    id: "enter_your_name",
    heading: "About You",
    icon: NAME_ICON,
    title: "Name",
    question: "Please enter your name",
    firstButton: { label: "Continue", actionId: "your_date_of_birth" },
    children: [{ type: "inputFullName" }],
  },
  {
    id: "your_date_of_birth",
    heading: "About You",
    icon: BIRTHDAY_ICON,
    title: "Birthday",
    question: "Is this your\ndate or birth?",
    firstButton: { label: "No", actionId: "enter_your_date_of_birth" },
    secondButton: { label: "Yes", actionId: "uk_resident" },
    previousButton: { actionId: "your_name" },
    children: [
      {
        type: "copyBirthday",
      },
    ],
  },
  {
    id: "enter_your_date_of_birth",
    heading: "About You",
    icon: BIRTHDAY_ICON,
    title: "Birthday",
    question: "Please enter your date of birth",
    children: [
      {
        type: "inputBirth",
      },
    ],
    firstButton: { label: "Continue", actionId: "uk_resident" },
  },
  {
    id: "uk_resident",
    heading: "About You",
    icon: UK_FLAG_ICON,
    title: "UK Residency",
    question: "Are you a UK resident?",
    firstButton: { label: "No", actionId: "member_of_armed_forces" },
    secondButton: { label: "Yes", actionId: "member_of_armed_forces" },
    previousButton: { actionId: "your_date_of_birth" },
    children: [
      {
        type: "markdown",
        text:
          "A UK resident is defined as a person who has their main home in the United Kingdom, and who has been resident in the UK for 6 months out of the last 12.",
      },
    ],
  },
  {
    id: "member_of_armed_forces",
    heading: "About You",
    icon: HAZARDOUS_OCCUPATION_ICON,
    title: "Hazardous occupation",
    question:
      "Are you a member of the armed forces, territorial army or reservists or employed in any of the following hazardous occupations:",
    firstButton: { label: "No", actionId: "lifestyle_height_and_weight" },
    secondButton: { label: "Yes", actionId: "lifestyle_height_and_weight" },
    previousButton: { actionId: "uk_resident" },
    children: [
      {
        type: "markdown",
        text: `- Commercial diving;\n- Commercial aviation (as pilot or crew);\n- Offshore work (including gas or oil platforms);\n- Offshore fishing; or\n- Working with explosives.`,
      },
    ],
  },
  {
    id: "lifestyle_height_and_weight",
    heading: "Lifestyle",
    icon: HEIGHT_WEIGHT_ICON,
    title: "Height and weight",
    question: "We need to know your height and weight to calculate your Body Mass Index (BMI).",
    firstButton: { label: "Continue", actionId: "lifestyle_height" },
    previousButton: { actionId: "member_of_armed_forces" },
    children: [
      {
        type: "markdown",
        text: `BMI is a measure used by healthcare professionals, to find out whether you are at a healthy weight for your height. If you are pregnant, please enter your pre-pregnancy weight.`,
      },
    ],
  },
  {
    id: "lifestyle_height",
    heading: "Lifestyle",
    icon: HEIGHT_ICON,
    title: "Height",
    question: "Please input your height",
    firstButton: { label: "Continue", actionId: "lifestyle_weight" },
    previousButton: { actionId: "lifestyle_height_and_weight" },
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
    id: "lifestyle_weight",
    heading: "Lifestyle",
    icon: WEIGHT_ICON,
    title: "Weight",
    question: "Please input your weight",
    firstButton: { label: "Continue", actionId: "lifestyle_smoking" },
    previousButton: { actionId: "lifestyle_height" },
    children: [
      {
        type: "inputWeight",
      },
    ],
  },
  {
    id: "lifestyle_smoking",
    heading: "Lifestyle",
    icon: SMOKING_ICON,
    title: "Smoking",
    question:
      "In the last 12 months have you smoked cigarettes, cigars, pipes, or shisha or used nicotine replacements? Vaping counts.",
    firstButton: { label: "No", actionId: "lifestyle_alcohol" },
    secondButton: { label: "Yes", actionId: "lifestyle_alcohol" },
    previousButton: { actionId: "lifestyle_weight" },
  },
  {
    id: "lifestyle_alcohol",
    heading: "Lifestyle",
    icon: ALCOHOL_ICON,
    title: "Alcohol",
    question: "How much do you drink in an average week? ",
    firstButton: { label: "Continue", actionId: "lifestyle_drugs" },
    previousButton: { actionId: "lifestyle_smoking" },
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
    id: "lifestyle_drugs",
    heading: "Lifestyle",
    icon: DRUGS_ICON,
    title: "Drugs",
    question:
      "In the last 5 years have you used class A, B or C drugs like, but not restricted to heroin, cocaine, ecstasy, spice, LSD, anabolic steroids and legal highs?",
    firstButton: { label: "No", actionId: "lifestyle_drugs_councelling" },
    secondButton: { label: "Yes", actionId: "lifestyle_drugs_councelling" },
    previousButton: { actionId: "lifestyle_alcohol" },
    children: [
      {
        type: "markdown",
        text: "We won’t count cannabis if it's no more than 1 or 2 tobacco free joints a week.",
      },
    ],
  },
  {
    id: "lifestyle_drugs_councelling",
    heading: "Lifestyle",
    icon: DRUGS_COUNSELLING_ICON,
    title: "Drugs Councelling",
    question:
      "Have you ever been advised to receive treatment, counselling, or attend a support group to manage your alcohol or drugs use?",
    firstButton: { label: "No", actionId: "medical_history" },
    secondButton: { label: "Yes", actionId: "medical_history" },
    previousButton: { actionId: "lifestyle_drugs" },
  },
  {
    id: "medical_history",
    heading: "Medical",
    icon: MEDICAL_HISTORY_ICON,
    title: "Medical History",
    question: "Have you been diagnosed with one of the following?",
    firstButton: { label: "No", actionId: "medical_three_or_more_consultation" },
    secondButton: { label: "Yes", actionId: "medical_three_or_more_consultation" },
    previousButton: { actionId: "lifestyle_drugs_councelling" },
    children: [
      {
        type: "markdown",
        text: "Just answer yes/no at the bottom of the page.",
      },
      {
        type: "medicalHistory",
        showDelimiter: true,
        icon: DIABETES_ICON,
        title: "Diabetes",
        description: "Description Goes Here ",
      },
      {
        type: "medicalHistory",
        showDelimiter: true,
        icon: HEART_DISEASE_ICON,
        title: "Heart disease",
        description: "A disease or disorder of the heart or arteries",
      },
      {
        type: "medicalHistory",
        showDelimiter: true,
        icon: STROKE_ICON,
        title: "Stroke",
        description: "Stroke (including mini stroke), or TIA brain haemorrhage",
      },
      {
        type: "medicalHistory",
        showDelimiter: true,
        icon: LIVER_KIDNEY_DISEASE_ICON,
        title: "Liver & kidney disease",
        description:
          "Cirrhosis of the liver or impaired liver function, Polycystic Kidney Disease or impaired kidney function",
      },
      {
        type: "medicalHistory",
        showDelimiter: true,
        icon: MULTIPLE_SCLEROSIS_ICON,
        title: "Multiple sclerosis",
        description: "Description Goes here",
      },
      {
        type: "medicalHistory",
        showDelimiter: true,
        icon: NEUROLOGICAL_DISORDERS_ICON,
        title: "Neurological disorders",
        description: "Motor Neurone Disease, Huntington’s",
      },
      {
        type: "medicalHistory",
        showDelimiter: true,
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
    id: "medical_three_or_more_consultation",
    heading: "Medical",
    icon: MEDICAL_HISTORY_PAST_CONSULTATIONS_ICON,
    title: "Three Or More Consultations In Last 3 Years",
    question:
      "Have you required 3 or more consultations in the last 3 years from a healthcare professional for a medical or mental health condition, symptom, illness or injury? ",
    firstButton: { label: "No", actionId: "medical_outstanding_medical_investigations" },
    secondButton: { label: "Yes", actionId: "medical_outstanding_medical_investigations" },
    previousButton: { actionId: "medical_history" },
  },
  {
    id: "medical_outstanding_medical_investigations",
    heading: "Medical",
    icon: OUTSTANDING_MEDICAL_INVESTIGATIONS_ICON,
    title: "Outstanding Medical Investigations",
    question: "Are you awaiting any investigations/tests (including their results) or any surgery?",
    firstButton: { label: "No", actionId: "medical_other_symptoms" },
    secondButton: { label: "Yes", actionId: "medical_other_symptoms" },
    previousButton: { actionId: "medical_three_or_more_consultation" },
    children: [
      {
        type: "markdown",
        text:
          "You can answer NO if they relate to any of the following: cuts, broken bones, dislocation, muscle injury, repetitive strain injury, sprains, strains or whiplash",
      },
    ],
  },
  {
    id: "medical_other_symptoms",
    heading: "Medical",
    icon: CIRCLE_WITH_ELLIPSES_ICON,
    title: "Other Symptoms",
    question:
      "In the last 6 months have you noticed any symptoms for which you have not yet received an exact diagnosis, that you continue to experience and for which you expect to consult a doctor?",
    firstButton: { label: "No", actionId: "medical_covid_isolation" },
    secondButton: { label: "Yes", actionId: "medical_covid_isolation" },
    previousButton: { actionId: "medical_outstanding_medical_investigations" },
    children: [
      {
        type: "markdown",
        text: "e.g. bleeding, weight loss, lump or growth, mole, dizziness, persistent cough, headaches",
      },
    ],
  },
  {
    id: "medical_covid_isolation",
    heading: "Medical",
    icon: PERSON_FACEMASK_ICON,
    title: "Covid Isolation",
    question: "In the last 30 days have you been self-isolating for any of the reasons below:",
    firstButton: { label: "No", actionId: "medical_covid_symptoms" },
    secondButton: { label: "Yes", actionId: "medical_covid_symptoms" },
    previousButton: { actionId: "medical_other_symptoms" },
    children: [
      {
        type: "markdown",
        text:
          "As a precaution because of an existing medical condition\n\nbecause you have had direct contact with someone diagnosed with, or suspected of having, coronavirus/COVID-19\n\nbecause you have experienced symptoms of coronavirus/COVID-19\n\nPlease answer no if you are following general government social-distancing advice and/or working from home to avoid spread of the virus",
      },
    ],
  },
  {
    id: "medical_covid_symptoms",
    heading: "Medical",
    icon: PERSON_FACEMASK_ICON,
    title: "Covid Symptoms",
    question: "In the last 30 days have either of the following applied to you?",
    firstButton: { label: "No", actionId: "financial_questions" },
    secondButton: { label: "Yes", actionId: "financial_questions" },
    previousButton: { actionId: "medical_covid_isolation" },
    children: [
      {
        type: "markdown",
        text:
          "- Tested positive for coronavirus / COVID-19\n- Had a new or unexplained continuous cough, fever or high temperature?",
      },
    ],
  },
  {
    id: "financial_questions",
    heading: "Financial",
    icon: FINANCIAL_QUESTIONS_ICON,
    title: "Financial Questions",
    question:
      "Will the total amount of life insurance on your life (including any amount to be replaced and any other applied for) when added together exceed £20,000,000?",
    firstButton: { label: "No", actionId: "your_name" },
    secondButton: { label: "Yes", actionId: "financial_other_cover" },
    previousButton: { actionId: "medical_covid_symptoms" },
  },
  {
    id: "financial_other_cover",
    heading: "Financial",
    icon: FINANCIAL_QUESTIONS_ICON,
    title: "Financial Questions",
    question: "Do you have, or have you applied for any more life insurance products?",
    firstButton: { label: "No", actionId: "your_name" },
    secondButton: { label: "Yes", actionId: "financial_cover_list" },
    previousButton: { actionId: "financial_questions" },
  },
  {
    id: "financial_cover_list",
    heading: "Financial",
    icon: FINANCIAL_QUESTIONS_ICON,
    title: "Cover Details",
    question: "Add or remove your existing life insurance products below.",
    firstButton: { label: "Continue", actionId: "your_name" },
    secondButton: { label: "Yes", actionId: "financial_custom_cover_form" },
    previousButton: { actionId: "financial_other_cover" },
  },
  {
    id: "financial_custom_cover_form",
    heading: "Financial",
    icon: FINANCIAL_QUESTIONS_ICON,
    title: "Cover Details",
    question: "Please enter your cover details below.",
    firstButton: { label: "Continue", actionId: "financial_cover_list" },
    previousButton: { actionId: "financial_other_cover" },
  },
];

const getData = () => {
  const ROUTES_WITHOUT_PROGRESS = ["enter_your_date_of_birth", "enter_your_name", "financial_custom_cover_form"];

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
};

export const data = getData();
