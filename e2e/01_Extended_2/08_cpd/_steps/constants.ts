import moment from "moment"
import { QuizDetails } from "./types"

export const cpdModule1Copy = ["In this module, we will be helping you get to grips with the value of group risk and why it is becoming increasingly important. We’ll also dive into how it can benefit your clients and your business, plus taking a look at wider trends in wellbeing and the workplace.", "This Yuniversity module is accredited by The Chartered Insurance Institute (CII). By completing this module you can claim up to 0.5 CPD hours towards the CII member CPD scheme.", "Learning objectives", "By the end of this module, Yuniversity students will be able to:", "Describe the benefits of group risk products to employers and their employees", "List ways that advisers can benefit from advising on group risk products", "Summarise key trends relating to mental and physical wellbeing in the workplace"]
export const module1QuizAnswers = [2, 3, 0, 3, 1, 1]
export const module2QuizAnswers = []
export const module3QuizAnswers = []

export const module1Quiz: QuizDetails = [{
  question: "In a 2021 poll, what percentage of UK organisations were seeing a rising demand for mental health support from their staff?",
  options: ['60%', '70%', '80%', '90%']
},
{
  question: "According to a 2019 survey, what percentage of businesses have experienced an employee being diagnosed or living with a serious illness such as cancer, heart disease or stroke?",
  options: ["10%", "26%", "38%", "44%"]
},
{
  question: "Some group risk policies can be treated as a business expense.",
  options: ["True", "False"]
},
{
  question: "Which of the following is an advantage of group risk cover for the employee?",
  options: [
      "Employees generally need to answer fewer medical questions when compared to individual insurance products",
      "Policy enrolment may be automatic",
      "Policies sometimes offer value added services alongside the insurance cover",
      "All of the above",
  ],
},
{
  question: "By what percentage did the number of employees insured by a group risk policy increase between 2016 and 2020?",
  options: ["5.6%", "10.2%", "14.8%", "17.4%"]
},
{
  question: "Intermediaries play a smaller role in advising on group risk compared to some other lines of business. ",
  options: ["True", "False"]
},
]

export const module2Quiz: QuizDetails = [
  {
      question: "Which group risk insurance product is described below?",
      options: [
          "Group income protection",
          "Group critical illness insurance",
          "Group life insurance",
          "Private medical insurance",
      ],
  },
  {
      question: "Which of the following is not another name for group income protection?",
      options: [
          "Group medical insurance",
          "Group permanent health insurance",
          "Group income replacement",
          "Long-term disability cover",
      ],
  },
  {
      question: "How much did employee engagement with value added services on group risk products increase between 2019 and 2020?",
      options: ["22.4%", "38.5%", "51.8%", "86.5%"],
  },
  {
      question: "What is the industry term used for the employees covered by a group risk scheme?",
      options: ["Participants", "Members", "Beneficiaries", "Employees"],
  },
  {
      question: "What is the correct definition for the term ‘automatic acceptance limit’?",
      options: [
          "The amount of information that an employee would need to provide to their employer in order to receive automatic group risk insurance cover",
          "The predetermined age at which the insurer will no longer offer the cover to an employee",
          "The amount of cover that all employees can get, without any need for medical evidence or underwriting",
      ],
  },
  {
      question: "Which of the following does not fall under the responsibility of the insurer when setting up a group risk scheme?",
      options: [
          "Assessing the risk",
          "Conducting a market review",
          "Providing ongoing administration for the cover",
          "Handling any claims promptly and fairly",
      ],
  },
]

export const module3Quiz: QuizDetails = [
  {
      question: "In which year did the basic state pension come into effect as part of the National Insurance Act?",
      options: ["1911", "1935", "1948", "1965"],
  },
  {
      question: "In which decade was the first tax relief on an employee benefit introduced?",
      options: ["1970s", "1980s", "1990s", "2000s"],
  },
  {
      question: "Which of the following is a statutory benefit?",
      options: ["Childcare contributions", "Paternity pay", "Dental insurance", "Additional paid holiday"],
  },
  {
      question: "Approximately what percentage of a person’s weekly wage would be replaced by statutory sick pay?",
      options: ["15-20%", "30-35%", "40-45%", "55-60%"],
  },
  {
      question: "Private medical insurance will pay out towards private medical treatment for what type(s) of condition?",
      options: [
          "Acute conditions",
          "Chronic conditions",
          "Acute and chronic conditions",
          "Neither acute nor chronic conditions",
      ],
  },
  {
      question: "Which of the following is the most common type of underwriting for group PMI?",
      options: [
          "Full medical underwriting",
          "Medical history disregarded (MHD)",
          "Moratorium underwriting",
          "Financial underwriting",
      ],
  },
]

export const twoDaysAgoDate = moment().subtract(2, 'days').format('DD')