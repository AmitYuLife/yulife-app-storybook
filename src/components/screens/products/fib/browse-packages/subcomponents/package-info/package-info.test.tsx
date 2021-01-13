import React from "react";
import { render } from "@testing-library/react-native";
import PackageInfo, { Props } from "./package-info";
import { Package } from "@components/screens/products/fib/browse-packages/fib.browse.types";

const renderComponent = (props: Props) => {
  return render(<PackageInfo {...props} />);
};

const packageCommonInfo = {
  title1: "Chest of",
  title2: "Life Insurance",
  symbol: "%",
  salaryCover: "of salary covered",
  yuCoin: "YuCoin Power",
};

const doubleChest = {
  id: "double_chest",
  title: "Double Chest",
  description: "Increase your chances of getting a double chest on a quest.",
  icon: "",
};

const streak = {
  id: "streak",
  title: "Increased Streak Bounty",
  description: "Have an additional streak when taking challenges",
  icon: "",
};

const shoe = {
  id: "daily_step_limit",
  title: "Increased Daily Step Limit",
  description: "Increases the number of daily steps for which you earn YuCoin.",
  icon: "",
};

const selectedPackage: Package = {
  newEarnRate: 0,
  earnRate: 20,
  salaryPercentageCovered: 75,
  id: "common",
  label: "Common",
  descriptionHeading: "some header",
  term: 10,
  title: "Chest of Life Insurance",
  powers: [doubleChest, streak, shoe],
};

describe("PackageInfo", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render PackageInfo", () => {
    const { queryByText, rerender } = renderComponent({ selectedPackage });
    expect(queryByText("common")).toBeTruthy();
    expect(queryByText(packageCommonInfo.title1)).toBeTruthy();
    expect(queryByText(packageCommonInfo.title2)).toBeTruthy();
    expect(queryByText("75")).toBeTruthy();
    expect(queryByText(packageCommonInfo.symbol)).toBeTruthy();
    expect(queryByText(packageCommonInfo.salaryCover)).toBeTruthy();
    expect(queryByText("20")).toBeTruthy();
    expect(queryByText(packageCommonInfo.yuCoin)).toBeTruthy();
    expect(queryByText(doubleChest.title)).toBeTruthy();
    expect(queryByText(doubleChest.description)).toBeTruthy();
    expect(queryByText(streak.title)).toBeTruthy();
    expect(queryByText(streak.description)).toBeTruthy();
    expect(queryByText(shoe.title)).toBeTruthy();
    expect(queryByText(shoe.description)).toBeTruthy();

    rerender(<PackageInfo selectedPackage={selectedPackage} packagePrice="100" />);
    expect(queryByText("£100/month")).toBeTruthy();
  });
});
