import { getCardBackgroundColor } from "../challenge-details.helpers";

describe("getCardBackgroundColor", () => {
  it("should return pink color for mountain world", () => {
    const actual = getCardBackgroundColor(3);
    expect(actual).toEqual("rgb(255, 239, 239)");
  });

  it("should return yellowish color for desert world", () => {
    const actual = getCardBackgroundColor(2);
    expect(actual).toEqual("rgb(255, 253, 231)");
  });

  it("should return light green color for forest world", () => {
    const actual = getCardBackgroundColor(0);
    expect(actual).toEqual("rgb(235, 255, 244)");
  });

  it("should return white color for ocean world", () => {
    const actual = getCardBackgroundColor(1);
    expect(actual).toEqual("rgb(237, 251, 248)");
  });
});
