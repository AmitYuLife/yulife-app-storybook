import moment from "moment";
import { CalculatorItems } from "@components/screens/products/fib/browse-packages/subcomponents/payout-calculator/subcomponents/calculator";
import { OrderedUnderwritingJourneyScreen } from "./data/underwriting-journey-data";

type FibButtonType = "firstButton" | "secondButton" | "previousButton";

export const FIRST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID = "medical_three_year_medical_history";
export const LAST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID = "medical_outstanding_medical_investigations";
export const BUILD_MEDICAL_JOURNEY_ID = "build_medical_history_journey";

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

export const buildMedicalHistoryJourney = (
  data: OrderedUnderwritingJourneyScreen[],
  medicalHistory: Record<string, boolean>,
  currentQuestion: OrderedUnderwritingJourneyScreen,
  setMedicalHistoryData: React.Dispatch<OrderedUnderwritingJourneyScreen[]>
) => {
  const activeChips = Object.entries(medicalHistory)
    .map((entry) => {
      return entry[1] ? entry[0] : null;
    })
    .filter((e) => !!e);

  let satisfactoryReadingsScreen: OrderedUnderwritingJourneyScreen;
  // Select extra screen for blood pressure or cholesterol question
  if (activeChips.includes("medical_high_blood_pressure") || activeChips.includes("medical_high_cholesterol")) {
    // activeChips.push("medical_readings_satisfactory");
    satisfactoryReadingsScreen = data.find((screen) => screen.id === "medical_readings_satisfactory");
  }

  // Make medical_high_blood_pressure && medical_high_cholesterol last question before last screen to simplify journey
  const orderedChips = activeChips.sort((a, z) => {
    if (a === "medical_high_blood_pressure" || a === "medical_high_cholesterol") {
      return 1;
    }

    if (z === "medical_high_blood_pressure" || z === "medical_high_cholesterol") {
      return -1;
    }

    return 0;
  });

  // Push last screen to the medical journey
  orderedChips.push(LAST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID);

  const rawMedicalData = data
    .filter((data) => orderedChips.includes(data.id))
    .sort((a, z) => {
      return orderedChips.indexOf(a.id) - orderedChips.indexOf(z.id);
    });

  let previousScreen = currentQuestion.id;
  // Remove first element
  let nextScreen = orderedChips.shift();

  const medicalHistoryData = rawMedicalData.map((screen) => {
    // Do not overwrite out journey question next screen
    if (screen.id === LAST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID) {
      screen.previousButton.actionId = previousScreen;
      return screen;
    }

    // Add satisfactory screen if need it
    if (screen.id === "medical_high_blood_pressure" || screen.id === "medical_high_cholesterol") {
      screen.secondButton.actionId = satisfactoryReadingsScreen.id;
      // Last medical history question, point out to exit screen
      nextScreen = LAST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID;
      screen.firstButton.actionId = nextScreen;
      screen.previousButton.actionId = previousScreen;

      previousScreen = screen.id;
      return screen;
    }

    nextScreen = orderedChips.shift();
    if (!nextScreen) {
      nextScreen = LAST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID;
    }

    screen.firstButton.actionId = nextScreen;
    screen.secondButton.actionId = nextScreen;
    screen.previousButton.actionId = previousScreen;

    previousScreen = screen.id;
    return screen;
  });

  // Add satisfactory screen if need it
  if (satisfactoryReadingsScreen) {
    medicalHistoryData.push(satisfactoryReadingsScreen);
  }

  setMedicalHistoryData(medicalHistoryData);
  return medicalHistoryData;
};

export const findQuestion = (
  data: OrderedUnderwritingJourneyScreen[],
  buttonType: FibButtonType,
  currentQuestion: OrderedUnderwritingJourneyScreen
) => data.find((element) => currentQuestion[buttonType].actionId === element.id);
