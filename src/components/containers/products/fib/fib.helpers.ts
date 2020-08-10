import moment from "moment";
import { CalculatorItems } from "@components/screens/products/fib/browse-packages/subcomponents/payout-calculator/subcomponents/calculator";

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
      month: monthsTillBirthday,
    },
  };

  if (defaultPayoutEstimatorItems.min.year === defaultPayoutEstimatorItems.years[deceaseAgeIndexYear]) {
    const months = !monthsTillBirthday
      ? defaultPayoutEstimatorItems.months.slice(0)
      : defaultPayoutEstimatorItems.months.slice(defaultPayoutEstimatorItems.months.length - monthsTillBirthday);
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
  if (monthOfBirth < currentMonth) {
    return currentMonth - monthOfBirth;
  }

  if (monthOfBirth === currentMonth) {
    // Same month case
    if (dateOfBirth.dayOfYear() >= now.dayOfYear()) {
      // Before birthday
      return 1;
    }

    // After birthday
    return 0;
  }

  return 12 - (currentMonth - monthOfBirth);
}
