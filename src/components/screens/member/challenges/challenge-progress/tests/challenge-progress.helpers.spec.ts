import { ChallengeType } from "../challenge-progress.screen";
import { getWorldStyle } from "../challenge-progress.screen.helpers";

describe("getWorldStyle", () => {
  it("should return an object with navBarType & topBarType", () => {
    const actual = getWorldStyle("short stroll", 0);

    expect(actual).toHaveProperty("topBarType", "default");
  });

  it("should return an object with source of null", () => {
    const actual = getWorldStyle("test" as ChallengeType, 0);

    expect(actual).toHaveProperty("source", null);
  });
});
