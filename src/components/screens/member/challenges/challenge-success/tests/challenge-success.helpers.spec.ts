import { getStyle } from "../challenge-success.helpers";

describe("getStyle", () => {
  it("should return with image & style for mountain world ", () => {
    const actual = getStyle(3);
    expect(actual).toEqual({
      backgroundImage: "challenge_mountain",
      backgroundStyle: { backgroundColor: "rgb(255, 226, 230)" },
    });
  });

  it("should return backgroundStyle of null", () => {
    const actual = getStyle(1);
    expect(actual).toHaveProperty("backgroundStyle", null);
  });
});
