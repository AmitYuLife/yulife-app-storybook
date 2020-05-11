import "react-native";
import { IProps } from "../progress-bar";
import { renderProgressLabel } from "../progress-bar.helpers";

const defaultProps = {
  amount: 0,
  styleType: "mountain-pink",
  type: "steps",
} as IProps;

describe("renderProgressLabel", () => {
  it("should return null", () => {
    const actual = renderProgressLabel({ ...defaultProps, type: "test" });

    expect(actual).toBeNull();
  });
});
