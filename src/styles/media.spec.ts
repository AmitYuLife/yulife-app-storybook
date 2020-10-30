import media from "./media";
import Style from "./style";

describe("media queries", () => {
  it("should return the value of the first condition passed", () => {
    const result = media.select(
      [
        {
          condition: false,
          value: 2,
        },
        {
          condition: true,
          value: 3,
        },
        {
          condition: true,
          value: 6,
        },
      ],
      5
    );
    expect(result).toBe(3);
  });

  it("should return the default value if no conditions passed", () => {
    const result = media.select(
      [
        {
          condition: false,
          value: 2,
        },
        {
          condition: false,
          value: 3,
        },
        {
          condition: false,
          value: 6,
        },
      ],
      5
    );
    expect(result).toBe(5);
  });

  it("should return the value of the last item in the array if no conditions passed and no default value given", () => {
    const result = media.select([
      {
        condition: false,
        value: 2,
      },
      {
        condition: false,
        value: 3,
      },
      {
        condition: false,
        value: 6,
      },
    ]);
    expect(result).toBe(6);
  });

  it("should throw an error if given empty array", () => {
    expect(() => {
      media.select([]);
    }).toThrow();
  });

  it("should throw an error if not given an array", () => {
    expect(() => {
      media.select(null);
    }).toThrow();
  });

  it("should return the right value for a given device dimension", () => {
    Style.DEVICE_HEIGHT = 812;
    Style.DEVICE_WIDTH = 375;

    const result = media.select(
      [
        {
          condition: Style.DEVICE_HEIGHT >= media.DEVICES.iPhone12.height,
          value: 1,
        },
        {
          condition: Style.DEVICE_HEIGHT >= media.DEVICES.iPhone8.height,
          value: 2,
        },
        {
          condition: Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
          value: 3,
        },
      ],
      5
    );
    expect(result).toBe(2);
  });
});
