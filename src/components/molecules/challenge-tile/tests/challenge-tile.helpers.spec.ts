import { getImage, getImageStyle, getLockedImageStyle } from "../challenge-tile.helpers";
import { Images } from "../challenge-tile.types";

describe("getImage", () => {
  it("should return null for an undefined input", () => {
    expect(getImage(undefined)).toBeNull();
  });

  it("should be defined when given a known input", () => {
    expect(getImage("camel")).toBeDefined();
  });

  it("should render a camel image", () => {
    expect(getImage("camel")).toBeDefined();
  });
});

describe("getImageStyle", () => {
  it("should be defined when given a known input", () => {
    expect(getImageStyle("desertFox")).toBeDefined();
  });

  it("should return bottom & right of 0", () => {
    expect(getImageStyle("desertFox")).toHaveProperty("position", "absolute");
    expect(getImageStyle("desertFox")).toHaveProperty("bottom", 0);
    expect(getImageStyle("desertFox")).toHaveProperty("left", 0);
  });

  it("should return top & right of 0 when input is null", () => {
    expect(getImageStyle(null)).toHaveProperty("position", "absolute");
    expect(getImageStyle(null)).toHaveProperty("top", 0);
    expect(getImageStyle(null)).toHaveProperty("right", 0);
  });
});

describe("getLockedImageStyle", () => {
  it("should be defined when given a known input", () => {
    expect(getLockedImageStyle("wolf")).toBeDefined();
  });

  it("should return bottom of 0", () => {
    expect(getLockedImageStyle("" as Images)).toHaveProperty("position", "absolute");
    expect(getLockedImageStyle("" as Images)).toHaveProperty("bottom", 0);
  });

  it("should return bottom & right of 0", () => {
    expect(getLockedImageStyle("wolf")).toHaveProperty("position", "absolute");
    expect(getLockedImageStyle("wolf")).toHaveProperty("left", 0);
    expect(getLockedImageStyle("wolf")).toHaveProperty("bottom", 0);
  });
});
