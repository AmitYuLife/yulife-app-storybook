import "react-native";
import { IProps } from "../progress-bar";
import { renderProgressBar, renderProgressLabel } from "../progress-bar.helpers";

const defaultProps = {
  amount: 0,
  styleType: "mountain-pink",
  type: "steps",
} as IProps;

describe("renderProgressBar", () => {
  it("should return null", () => {
    const actual = renderProgressBar({ ...defaultProps, goals: [0, 1, 2, 3, 4, 5, 6] });

    expect(actual).toBeNull();
  });
});

describe("renderProgressLabel", () => {
  it("should return null", () => {
    const actual = renderProgressLabel({ ...defaultProps, type: "test" });

    expect(actual).toBeNull();
  });
});
