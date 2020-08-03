import moment from "moment";
import { CalculatorItems } from "@components/screens/products/fib/browse-packages/subcomponents/payout-calculator/subcomponents/calculator";

export function formatPrice(price: number | null) {
  if (!price) {
    return `£0.00`;
  }

  return `£${price.toFixed(2)}`;
}

// TODO: Reset month when moving away of limits? setDeceaseAgeIndexMonth
export const calculatePayoutCalculatorItems = (
  userDateOfBirth: string,
  deceaseAgeIndexYear: number,
  setDeceaseAgeIndexMonth: (index: number) => void
): CalculatorItems => {
  const momentDateOfBirth = moment(userDateOfBirth);
  const customerAge = moment().diff(momentDateOfBirth, "year");
  const monthsTillBirthday = Math.ceil(Math.abs(moment().diff(momentDateOfBirth.year(moment().year()), "days") / 31));

  const defaultPayoutEstimatorItems = {
    years: Array.from({ length: 41 }).map((_, i) => i + customerAge),
    months: Array.from({ length: 12 }).map((_, i) => i + 1),
    max: {
      year: customerAge + 40,
      month: moment().month() + 1, // month index starts in 0
    },
    min: {
      year: customerAge,
      month: monthsTillBirthday,
    },
  };

  if (defaultPayoutEstimatorItems.min.year === defaultPayoutEstimatorItems.years[deceaseAgeIndexYear]) {
    const months = defaultPayoutEstimatorItems.months.slice(
      defaultPayoutEstimatorItems.months.length - monthsTillBirthday - 1
    );
    const newItems = { ...defaultPayoutEstimatorItems, months };
    return newItems;
  }

  if (defaultPayoutEstimatorItems.max.year === defaultPayoutEstimatorItems.years[deceaseAgeIndexYear]) {
    const months = defaultPayoutEstimatorItems.months.filter((month) => month <= defaultPayoutEstimatorItems.max.month);
    const newItems = { ...defaultPayoutEstimatorItems, months };
    return newItems;
  }

  if (setDeceaseAgeIndexMonth) {
    // Reset index?
  }

  return defaultPayoutEstimatorItems;
};
