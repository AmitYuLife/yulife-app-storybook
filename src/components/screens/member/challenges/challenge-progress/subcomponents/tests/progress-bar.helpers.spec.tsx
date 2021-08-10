import "react-native";
import { IProps } from "../progress-bar";
import { renderProgressLabel } from "../progress-bar.helpers";

const defaultProps = {
  amount: 0,
  styleType: {
    name: "black",
    barColor: "rgb(233, 233, 233)",
    goalTextColor: "black",
    progressColor: "black",
    progressGoalEmpty: "rgb(233, 233, 233)",
    progressGoalFilled: "#000",
    progressStarEmpty: "#FFF",
    progressStarFilled: "#F1AF00",
    progressTextColor: "black",
  },
  type: "steps",
} as IProps;

describe("renderProgressLabel", () => {
  it("should return null", () => {
    const actual = renderProgressLabel({ ...defaultProps, type: "test" });

    expect(actual).toBeNull();
  });
});
