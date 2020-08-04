import { getLabelAdjustment } from "../nav-bar.styles";

describe("getLabelAdjustment", () => {
  it("should return null with an unknown input", () => {
    expect(getLabelAdjustment(undefined)).toBeNull();
  });
});
