import { renderExchange, renderValue } from "../unlocked-overlay.helpers";

describe("renderValue", () => {

    it("should return a value for Avios", () => {
        const actual = renderValue(150, "AVIOS");

        expect(actual).toBe("150 avios");
    });

    it("should return a value for Link", () => {
        const actual = renderValue(150, "LINK");

        expect(actual).toBe("free trial");
    });

    it("should return a value for other types", () => {
        const actual = renderValue(150.5, "NOTHING");

        expect(actual).toBe("£150.50 voucher");
    });
});

describe("renderExchange", () => {

    it("should return a value for Avios", () => {
        const actual = renderExchange(151, "AVIOS");

        expect(actual).toBe("yucoin x 151 up");
    });

    it("should return a value for Link", () => {
        const actual = renderExchange(151, "LINK");

        expect(actual).toBe("");
    });

    it("should return a value for other types", () => {
        const actual = renderExchange(151, "NOTHING");

        expect(actual).toBe("yucoin x 151");
    });
});
