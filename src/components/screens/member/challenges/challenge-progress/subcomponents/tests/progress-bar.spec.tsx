import React from "react";
import { render } from "@testing-library/react-native";
import ProgressBar from "../progress-bar";

function renderComponent() {
  const props = {
    showCounter: true,
    goals: [1000, 2000, 3000, 4000],
    amount: 100,
    type: "walk",
  };

  return render(<ProgressBar {...props} />);
}

describe("ProgressBar component", () => {
  it("should display a max limit of 3 goals", () => {
    const { queryByText } = renderComponent();

    expect(queryByText(/1000/)).toBeTruthy();
    expect(queryByText(/2000/)).toBeTruthy();
    expect(queryByText(/3000/)).toBeTruthy();
    expect(queryByText(/4000/)).toBeNull();
  });
});
