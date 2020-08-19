import moment from "moment";
import { CalculatorItems } from "@components/screens/products/fib/browse-packages/subcomponents/payout-calculator/subcomponents/calculator";
import { OrderedUnderwritingJourneyScreen } from "./data/underwriting-journey-data";

type FibButtonType = "firstButton" | "secondButton" | "previousButton";

export const FIB_HIGH_CHOLESTEROL_BLOOD_SCREEN_ID = [
  "fib_medical_journey_high_blood_pressure",
  "fib_medical_journey_high_cholesterol",
];
export const FIB_HIGH_CHOLESTEROL_BLOOD_EXTRA_SCREENS = ["fib_medical_journey_readings_satisfactory"];
export const FIB_DIGESTIVE_SCREEN_ID = "fib_medical_journey_digestive";
export const FIB_DIGESTIVE_EXTRA_SCREENS = [
  "fib_medical_journey_digestive_hospital_stay",
  "fib_medical_journey_digestive_hospital_stay",
  "fib_medical_journey_daily_activity_restrictions",
  "fib_medical_journey_digestive_symptoms_resolved",
  "fib_medical_journey_condition_stable",
];

export function formatPrice(price: number | null) {
  if (!price) {
    return `£0.00`;
  }

  return `£${price.toFixed(2)}`;
}

export const calculatePayoutCalculatorItems = (
  userDateOfBirth: string,
  deceaseAgeIndexYear: number
): CalculatorItems => {
  const momentDateOfBirth = moment(userDateOfBirth);
  const customerAge = moment().diff(momentDateOfBirth, "years");
  const monthsTillBirthday = getMonthsTillBirthday(momentDateOfBirth);

  const maxAge = customerAge + 40 < 70 ? customerAge + 40 : 70;
  const maxMonth = maxAge === 70 ? 11 : moment().month(); // month index starts in 0

  const defaultPayoutEstimatorItems = {
    years: Array.from({ length: 40 })
      .map((_, i) => i + customerAge)
      .filter((y) => y < 71),
    months: Array.from({ length: 12 }).map((_, i) => i),
    max: {
      year: maxAge,
      month: maxMonth,
    },
    min: {
      year: customerAge,
      month: 12 - monthsTillBirthday,
    },
  };

  if (defaultPayoutEstimatorItems.min.year === defaultPayoutEstimatorItems.years[deceaseAgeIndexYear]) {
    const months = !monthsTillBirthday
      ? defaultPayoutEstimatorItems.months.slice(0)
      : defaultPayoutEstimatorItems.months.slice(defaultPayoutEstimatorItems.min.month);
    const newItems = { ...defaultPayoutEstimatorItems, months };
    return newItems;
  }

  if (defaultPayoutEstimatorItems.max.year === defaultPayoutEstimatorItems.years[deceaseAgeIndexYear]) {
    const months = defaultPayoutEstimatorItems.months.filter((month) => month <= defaultPayoutEstimatorItems.max.month);
    const newItems = { ...defaultPayoutEstimatorItems, months };
    return newItems;
  }

  return defaultPayoutEstimatorItems;
};

function getMonthsTillBirthday(dateOfBirth: moment.Moment) {
  const monthOfBirth = dateOfBirth.month();
  const now = moment();
  const currentMonth = now.month();

  const addExtraMonth = dateOfBirth.date() > now.date() ? 1 : 0;
  if (monthOfBirth < currentMonth) {
    return 12 - (currentMonth - monthOfBirth) + addExtraMonth;
  }

  if (monthOfBirth === currentMonth) {
    // Same month case
    return addExtraMonth;
  }

  return monthOfBirth - currentMonth + addExtraMonth;
}

export const findQuestion = (
  data: OrderedUnderwritingJourneyScreen[],
  buttonType: FibButtonType,
  currentQuestion: OrderedUnderwritingJourneyScreen,
  medicalHistory: Record<string, boolean>
): OrderedUnderwritingJourneyScreen => {
  const question = data.find((element) => currentQuestion[buttonType].actionId === element.id);
  const activeChips = Object.entries(medicalHistory)
    .map((entry) => {
      return entry[1] ? entry[0] : null;
    })
    .filter((e) => !!e);

  // TODO: Add and check answers to complete the logic
  const showQuestion = question.id.includes("medical_journey") ? activeChips.includes(question.id) : true;
  if (!showQuestion) {
    return findQuestion(data, buttonType, question, medicalHistory);
  }

  return question;
};
