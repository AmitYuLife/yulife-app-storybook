export const FIB_INTRO = "fib_intro";
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
export const FIB_INPUT_SALARY = "fib_input_salary";
export const FIB_LIFESTYLE_HEIGHT_SCREEN_ID = "fib_lifestyle_height";
export const FIB_LIFESTYLE_WEIGHT_SCREEN_ID = "fib_lifestyle_weight";
export const FIB_FINANCIAL_CUSTOM_COVER_FORM_SCREEN_ID = "fib_financial_custom_cover_form";

export const FIB_HOSPITAL_STAY_SCREEN_ID = "fib_medical_journey_hospital_stay";
export const FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID = "fib_medical_journey_daily_activity_restrictions";
export const FIB_SYMPTOMS_RESOLVED_SCREEN_ID = "fib_medical_journey_symptoms_resolved";
export const FIB_CONDITION_STABLE_SCREEN_ID = "fib_medical_journey_condition_stable";
export const FIB_GENDER_SCREEN_ID = "fib_gender";

export const FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID = "fib_review_screen";

export const FIB_MEDICAL_FOLLOW_UP_QUESTIONS = [
    FIB_HOSPITAL_STAY_SCREEN_ID,
    FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID,
    FIB_SYMPTOMS_RESOLVED_SCREEN_ID,
    FIB_CONDITION_STABLE_SCREEN_ID,
];

export const fibDataDetox = [
    {
        id: FIB_INTRO,
        heading: "Intro",
        
        title: "Intro",
        question: "",
        firstButton: { label: "Continue", actionId: FIB_ENTER_YOUR_NAME },
        children: [{ type: "copyIntro" }],
        
    },
    {
        id: FIB_ENTER_YOUR_NAME,
        heading: "About You",
        
        title: "Name",
        question: "Okay! Let’s start with the easy stuff: is this your name?",
        firstButton: { label: "Continue", actionId: FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID },
        previousButton: { actionId: FIB_INTRO },
        children: [{ type: "inputFullName" }],
        
    },
    {
        id: FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID,
        heading: "About You",
        
        title: "Birthday",
        question: "And is this your birthday?",
        firstButton: { label: "Yes", actionId: FIB_INPUT_SALARY },
        previousButton: { actionId: FIB_ENTER_YOUR_NAME },
        children: [
            {
                type: "inputBirth",
            },
        ],
        
    },
    {
        id: FIB_INPUT_SALARY,
        heading: "Input Salary",
        
        title: "Salary",
        question: "What is your current annual salary?",
        firstButton: { label: "Continue", actionId: FIB_UK_RESIDENT_SCREEN_ID },
        previousButton: { actionId: FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID },
        children: [
            {
                type: "markdown",
                text:
                    "Your premiums and payouts are based on your current annual gross salary.  This is your base salary before taxes, excluding bonuses and commission.",
            },
            {
                type: "inputSalary",
            },
        ],
        
    },
    {
        id: FIB_UK_RESIDENT_SCREEN_ID,
        heading: "About You",
        
        title: "UK Residency",
        question: "Are you a British Citizen or Resident in the UK?",
        firstButton: { label: "No", actionId: FIB_MEMBER_OF_ARMED_FORCES_SCREEN_ID },
        secondButton: { label: "Yes", actionId: FIB_MEMBER_OF_ARMED_FORCES_SCREEN_ID },
        previousButton: { actionId: FIB_INPUT_SALARY },
        children: [
            {
                type: "markdown",
                text:
                    "You are considered a resident if: \n\n- You have indefinite leave to remain in the UK, Channel Islands, Isle of Man or Gibraltar; or\n\n- You are an EU or EEA national living permanently in the UK, Channel Islands, Isle of Man or Gibraltar; or\n\n- You have resided in the UK, Channel Islands, Isle of Man or Gibraltar for the last 12 months, live there permanently and will continue to do so.",
            },
        ],
        
    },
    {
        id: FIB_MEMBER_OF_ARMED_FORCES_SCREEN_ID,
        heading: "About You",
        
        title: "Hazardous occupation",
        question:
            "Are you a member of the armed forces, territorial army or reservists, or employed in any of the following hazardous occupations:",
        firstButton: { label: "No", actionId: FIB_LIFESTYLE_HEIGHT_SCREEN_ID },
        secondButton: { label: "Yes", actionId: FIB_LIFESTYLE_HEIGHT_SCREEN_ID },
        previousButton: { actionId: FIB_UK_RESIDENT_SCREEN_ID },
        children: [
            {
                type: "markdown",
                text: `- Commercial diving;\n- Commercial aviation (as pilot or crew);\n- Offshore work (including gas or oil platforms);\n- Offshore fishing; or\n- Working with explosives.`
            },
        ],
        
    },
    {
        id: FIB_LIFESTYLE_HEIGHT_SCREEN_ID,
        heading: "Lifestyle",
        
        title: "Height",
        question: "Getting a bit more personal now... I’m a whopping 16ft 4in tall, what about you?",
        firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_WEIGHT_SCREEN_ID },
        previousButton: { actionId: FIB_MEMBER_OF_ARMED_FORCES_SCREEN_ID },
        children: [
            {
                type: "inputHeight",
            },
        ],
        
    },
    {
        id: FIB_LIFESTYLE_WEIGHT_SCREEN_ID,
        heading: "Lifestyle",
        
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
        
    },
    {
        id: FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID,
        heading: "Lifestyle",
        category: "fib_lifestyle_smoking_cigarettes",
        
        title: "Smoking",
        reviewAnswerTitle: "Smoking cigarettes",
        question: "When was the last time you smoked a cigarette?",
        firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID },
        previousButton: { actionId: FIB_LIFESTYLE_WEIGHT_SCREEN_ID },
        nextQuestionBeforeQuit: FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID,
        
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
        
        title: "Smoking",
        category: "fib_lifestyle_smoking_cigarettes",
        reviewAnswerTitle: "Smoking cigarettes amount",
        question: "How many cigarettes do you or did you smoke per day?",
        firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID },
        previousButton: { actionId: FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID },
        
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
        
        title: "Smoking",
        reviewAnswerTitle: "Smoking cigars, pipes or shisha",
        question: "When was the last time you smoked cigars, pipes or shisha?",
        firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_SMOKING_VAPES_SCREEN_ID },
        previousButton: { actionId: FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID },
        
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
        
        title: "Smoking",
        reviewAnswerTitle: "Smoking e-cigarettes, vapes or another nicotine substitute",
        question:
            "When was the last time you used e-cigarettes, vapes or another nicotine substitutes such as nicotine gum or patches?",
        firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_ALCOHOL_SCREEN_ID },
        previousButton: { actionId: FIB_LIFESTYLE_SMOKING_CIGARS_SCREEN_ID },
        
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
        
        title: "Alcohol",
        question: "Cheers! How much do you drink in an average week?",
        firstButton: { label: "Continue", actionId: FIB_LIFESTYLE_DRUGS_SCREEN_ID },
        previousButton: { actionId: FIB_LIFESTYLE_SMOKING_VAPES_SCREEN_ID },
        
        children: [
            {
                type: "markdown",
                text:
                    "1 drink is a glass of wine, pint of beer or cider, or a double measure of spirits (for a human, anyway). As a reminder, these answers will not be shared with your employer.",
            },
            {
                type: "inputAlcohol",
            },
        ],
    },
    {
        id: FIB_LIFESTYLE_DRUGS_SCREEN_ID,
        heading: "Lifestyle",
        
        title: "Drugs",
        question: "Have you used recreational drugs in the last 5 years?",
        firstButton: { label: "No", actionId: FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID },
        secondButton: { label: "Yes", actionId: FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID },
        previousButton: { actionId: FIB_LIFESTYLE_ALCOHOL_SCREEN_ID },
        
        children: [
            {
                type: "markdown",
                text:
                    "Examples of recreational drugs include ecstasy, cocaine, heroin, amphetamines and anabolic steroids. As a reminder, these answers will not be shared with your employer.\n\nI won’t count cannabis if it's no more than 1 or 2 tobacco-free joints a week. I’m not like those other giraffes. I’m a cool giraffe.",
            },
        ],
    },
    {
        id: FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID,
        heading: "Lifestyle",
        
        title: "Drugs Councelling",
        question:
            "Have you ever been advised to receive treatment, counselling, or attend a support group to manage your alcohol or drug use?",
        firstButton: { label: "No", actionId: FIB_GENDER_SCREEN_ID },
        secondButton: { label: "Yes", actionId: FIB_GENDER_SCREEN_ID },
        previousButton: { actionId: FIB_LIFESTYLE_DRUGS_SCREEN_ID },
    },
    {
        id: FIB_GENDER_SCREEN_ID,
        heading: "Medical",
        title: "Gender",
        question: "Now I’ll need a bit of your medical history. What is your sex?",
        children: [
            {
                type: "markdown",
                text: "Please select your biological sex at birth.",
            },
            {
                type: "gender",
            },
        ],
        firstButton: { label: "Continue", actionId: FIB_MEDICAL_HISTORY_SCREEN_ID },
        previousButton: { actionId: FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID },
    },
    {
        id: FIB_MEDICAL_HISTORY_SCREEN_ID,
        heading: "Medical",
        
        title: "Medical Diagnosis",
        question: "Have you ever been diagnosed with one of the following?",
        firstButton: { label: "No", actionId: FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID },
        secondButton: { label: "Yes", actionId: FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID },
        previousButton: { actionId: FIB_LIFESTYLE_DRUGS_COUNCELLING_SCREEN_ID },
        
        children: [
            {
                type: "medicalHistory",
                showDelimiter: false,
                title: "Cancer",
                description: "Cancer including leukaemia, Hodgkin’s lymphoma, brain or spinal tumours",
            },
            {
                type: "medicalHistory",
                showDelimiter: false,
                title: "Diabetes",
                description:
                    "You can ignore pregnancy related Diabetes as long as you’ve made a full recovery and are no longer under review",
            },
            {
                type: "medicalHistory",
                showDelimiter: false,
                title: "Heart Disease / Disorder",
                description: "Heart attack, angina, heart valve disorder, irregular heartbeat or cardiomyopathy",
            },
            {
                type: "medicalHistory",
                showDelimiter: false,
                title: "Stroke",
                description: "Stroke, TIA (sometimes called a mini stroke) or brain haemorrhage",
            },
            {
                type: "medicalHistory",
                showDelimiter: false,
                title: "Liver / Kidney disease",
                description:
                    "Cirrhosis of the liver or impaired liver function, Polycystic Kidney Disease or impaired kidney function",
            },
            {
                type: "medicalHistory",
                showDelimiter: false,
                title: "Neurological disorders",
                description: "Multiple sclerosis, Huntington’s disease, motor neurone disease",
            },
            {
                type: "medicalHistory",
                showDelimiter: false,
                title: "Mental illness",
                description: "A mental illness which has resulted in any suicide attempt, overdose or overnight inpatient stay",
            },
            {
                type: "medicalHistory",
                showDelimiter: false,
                title: "HIV / AIDS",
            },
        ],
    },
    {
        id: FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID,
        heading: "Medical",
        
        title: "Three Or More Consultations In Last 3 Years",
        question:
            "Have you required 3 or more consultations in the last 3 years from a healthcare professional for a medical or mental health condition, symptom, illness or injury? ",
        firstButton: { label: "No", actionId: FIB_MEDICAL_OUTSTANDING_MEDICAL_INVESTIGATIONS_SCREEN_ID },
        secondButton: { label: "Yes", actionId: FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID },
        nextQuestionBeforeQuit: FIB_MEDICAL_OUTSTANDING_MEDICAL_INVESTIGATIONS_SCREEN_ID,
        previousButton: { actionId: FIB_MEDICAL_HISTORY_SCREEN_ID },
        
    },
    {
        id: FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID,
        category: "fib_medical_journey",
        heading: "Medical",
        title: "Three Year Medical History",
        reviewAnswerTitle: "Three Year Medical History Detail",
        question: "Select all the conditions for which you required consultations",
        
        children: [
            {
                type: "chiplist",
                chips: [
                    {
                        id: FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID,
                        active: false,
                        label: "High Blood Pressure",
                        
                    },
                    {
                        id: FIB_HIGH_CHOLESTEROL_SCREEN_ID,
                        active: false,
                        label: "High Cholesterol",
                        
                    },
                    {
                        id: FIB_MEDICAL_JOURNEY_EARS_NOSE_THROAT_SCREEN_ID,
                        active: false,
                        label: "Ear, nose, throat",
                        
                    },
                    {
                        id: FIB_DIGESTIVE_SCREEN_ID,
                        active: false,
                        label: "Digestive",
                        
                    },
                    {
                        id: FIB_MEDICAL_JOURNEY_KIDNEYS_BLADDER_SCREEN_ID,
                        active: false,
                        label: "Kidneys & bladder",
                        
                    },
                    {
                        id: FIB_MEDICAL_JOURNEY_EYE_SCREEN_ID,
                        active: false,
                        label: "Eye",
                        
                    },
                    {
                        id: FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID,
                        active: false,
                        label: "Minor injuries",
                        
                    },
                    {
                        id: FIB_MEDICAL_JOURNEY_LUNGS_SCREEN_ID,
                        active: false,
                        label: "Lungs",
                        
                    },
                    {
                        id: FIB_MEDICAL_JOURNEY_PREGNANCY_SCREEN_ID,
                        active: false,
                        label: "Pregnancy",
                        
                        relatedIds: [...FIB_MEDICAL_FOLLOW_UP_QUESTIONS],
                    },
                    {
                        id: FIB_MEDICAL_JOURNEY_MUSCLES_JOINTS_SCREEN_ID,
                        active: false,
                        label: "Muscles & Joints",
                        
                    },
                    {
                        id: FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,
                        active: false,
                        label: "Skin",
                        
                    },
                    {
                        id: FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID,
                        active: false,
                        label: "Other",
                        
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
        question: "Has your blood pressure been checked by a medical professional in the last 12 months?",
        firstButton: {
            label: "No",
            actionId: FIB_HIGH_CHOLESTEROL_SCREEN_ID,
            answersIdToInvalidate: [FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN],
        },
        
        secondButton: { label: "Yes", actionId: FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN },
        previousButton: { actionId: FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID },
    },
    {
        id: FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN,
        category: "fib_medical_journey_high_blood",
        heading: "Medical",    
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
        question: "Has your cholesterol been checked by a medical professional in the last 12 months?",
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
        title: "Cholesterol Readings Satisfactory?",
        question: "Were your last cholesterol readings normal or satisfactory?",
        firstButton: { label: "No", actionId: FIB_DIGESTIVE_SCREEN_ID },
        secondButton: { label: "Yes", actionId: FIB_DIGESTIVE_SCREEN_ID },
        previousButton: { actionId: FIB_HIGH_CHOLESTEROL_SCREEN_ID },
    },
    {
        id: FIB_DIGESTIVE_SCREEN_ID,
        
        category: "fib_medical_journey",
        heading: "Medical",
        title: "Digestive",
        reviewAnswerTitle: "Digestive Issues",
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
        
        category: "fib_medical_journey",
        heading: "Medical",
        title: "Ears, Nose, Throat",
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
        
        category: "fib_medical_journey",
        heading: "Medical",
        
    
    
    
    
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
        
        category: "fib_medical_journey",
        heading: "Medical",
        
    
    
    
    
    
    
    
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
        
        category: "fib_medical_journey",
        heading: "Medical",
        title: "Lungs",
        reviewAnswerTitle: "Lungs Issues",
        
    
    
    
    
    
    
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
        
        category: "fib_medical_journey",
        heading: "Medical",
        title: "Minor Injuries",
        
    
    
    
    
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
        
        category: "fib_medical_journey",
        heading: "Medical",
        
    
    
    
    
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
            actionId: FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,
            actionIdReview: FIB_HOSPITAL_STAY_SCREEN_ID,
        },
        secondButton: {
            label: "Yes",
            actionId: FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,
            actionIdReview: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
        },
        previousButton: { actionId: FIB_MEDICAL_JOURNEY_MINOR_INJURIES_SCREEN_ID },
    },
    {
        id: FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,
        
        category: "fib_medical_journey",
        heading: "Medical",
        
    
    
    
    
    
    
    
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
        previousButton: { actionId: FIB_MEDICAL_JOURNEY_MUSCLES_JOINTS_SCREEN_ID },
    },
    {
        id: FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID,
        
        category: "fib_medical_journey",
        heading: "Medical",
        
    
    
    
    
    
    
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
                id: FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,
                answer: "No",
            },
            {
                id: FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID,
                answer: "No",
            },
        ],
        heading: "Medical",
        
    
    
    
    
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
        
        category: "fib_medical_journey",
        dependsOnOtherResponses: [{ id: FIB_HOSPITAL_STAY_SCREEN_ID, answer: "No" }],
        heading: "Medical",
        
    
    
    
    
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
        
        category: "fib_medical_journey",
        dependsOnOtherResponses: [{ id: FIB_SYMPTOMS_RESOLVED_SCREEN_ID, answer: "No" }],
        heading: "Medical",
        
    
    
    
    
        title: "Condition Stable?",
        question: "Are these conditions stable (no increasing symptoms or complications)?",
        firstButton: { label: "No", actionId: FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID },
        secondButton: { label: "Yes", actionId: FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID },
        previousButton: { actionId: FIB_SYMPTOMS_RESOLVED_SCREEN_ID },
    },
    {
        id: FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID,
        
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
                id: FIB_MEDICAL_JOURNEY_SKIN_SCREEN_ID,
                answer: "No",
            },
            {
                id: FIB_MEDICAL_JOURNEY_OTHER_SCREEN_ID,
                answer: "No",
            },
        ],
        heading: "Medical",
        
    
    
    
    
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
        
        heading: "Medical",
        
        title: "Outstanding Medical Investigations",
        question: "Are you awaiting any investigations/tests (including their results) or any surgery?",
        firstButton: { label: "No", actionId: FIB_MEDICAL_OTHER_SYMPTOMS_SCREEN_ID },
        secondButton: { label: "Yes", actionId: FIB_MEDICAL_OTHER_SYMPTOMS_SCREEN_ID },
        previousButton: { actionId: FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID },
        children: [
            {
                type: "markdown",
                text: `You can answer "No" if they relate to any of the following: cuts, broken bones, dislocation, muscle injury, repetitive strain injury, sprains, strains or whiplash`
            },
        ],
    },
    {
        id: FIB_MEDICAL_OTHER_SYMPTOMS_SCREEN_ID,
        
        heading: "Medical",
        
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
        
        heading: "Medical",
        
        title: "Covid Isolation",
        question: "In the last 12 months have you been hospitalised for COVID-19?",
        firstButton: { label: "No", actionId: FIB_MEDICAL_COVID_SYMPTOMS_SCREEN_ID },
        secondButton: { label: "Yes", actionId: FIB_MEDICAL_COVID_SYMPTOMS_SCREEN_ID },
        previousButton: { actionId: FIB_MEDICAL_OTHER_SYMPTOMS_SCREEN_ID },
    },
    {
        id: FIB_MEDICAL_COVID_SYMPTOMS_SCREEN_ID,
        
        heading: "Medical",
        
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
        
        category: "fib_financial",
        heading: "Financial",
        
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
        
        category: "fib_financial",
        heading: "Financial",
        
        title: "Cover Details",
        question: "Okay! Please add or remove your existing life insurance products below.",
        firstButton: { label: "Continue", actionId: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID },
        secondButton: { label: "Add cover", actionId: FIB_FINANCIAL_QUESTIONS_SCREEN_ID },
        previousButton: { actionId: FIB_FINANCIAL_QUESTIONS_SCREEN_ID },
    },
];
