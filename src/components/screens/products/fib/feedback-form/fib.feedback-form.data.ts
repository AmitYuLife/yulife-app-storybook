export type IFeedbackFormData = TextInputData | RadioInputData;

interface TextInputData {
  id: string;
  title: string;
  type: "text";
}

interface RadioInputData {
  id: string;
  title: string;
  type: "radio";
  options: {
    label: string;
    value: string;
  }[];
}

const formInputsData: IFeedbackFormData[] = [
  {
    id: "information",
    title: "1. Do you feel this screen gave you enough information to make the decision to buy?",
    type: "radio",
    options: [
      {
        label: "Yes",
        value: "yes",
      },
      {
        label: "No",
        value: "no",
      },
    ],
  },
  {
    id: "improvements",
    title: "2. Are there any things that you would improve about the product or design?",
    type: "text",
  },
  {
    id: "layout",
    title: "3. How well do you feel this screen was laid out?",
    type: "radio",
    options: [
      {
        label: "Poor",
        value: "poor",
      },
      {
        label: "Fair",
        value: "fair",
      },
      {
        label: "Average",
        value: "average",
      },
      {
        label: "Good",
        value: "good",
      },
      {
        label: "Excellent",
        value: "excellent",
      },
    ],
  },
  {
    id: "interest_level",
    title: "4. Would you be interested in purchasing this type of insurance?",
    type: "radio",
    options: [
      {
        label: "Not at all interested",
        value: "not-at-all-interested",
      },
      {
        label: "Slightly interested",
        value: "slightly-interested",
      },
      {
        label: "Moderately interested",
        value: "moderately-interested",
      },
      {
        label: "Very interested",
        value: "very-interested",
      },
      {
        label: "Exteremely interested",
        value: "extremely-interested",
      },
    ],
  },
  {
    id: "product_choice",
    title: "5. If you wanted to choose a package today which one would you pick?",
    type: "radio",
    options: [
      {
        label: "25% of salary (Common)",
        value: "common",
      },
      {
        label: "50% of salary (Rare)",
        value: "rare",
      },
      {
        label: "75% of salary (Epic)",
        value: "epic",
      },
    ],
  },
  {
    id: "value_perception",
    title: "6. How would you rate the price of your preferred package?",
    type: "radio",
    options: [
      {
        label: "Much less than I expected",
        value: "much-less",
      },
      {
        label: "Less than I expected",
        value: "less",
      },
      {
        label: "Affordable",
        value: "affordable",
      },
      {
        label: "Expensive",
        value: "expensive",
      },
      {
        label: "Very expensive",
        value: "very-expensive",
      },
    ],
  },
  {
    id: "yumoji_improvements",
    title: "7. Is there anything you wanted to change about your Yumoji that you could not?",
    type: "text",
  },
  {
    id: "other",
    title: "8. Do you have any other comments or feedback?",
    type: "text",
  },
];

export default formInputsData;
