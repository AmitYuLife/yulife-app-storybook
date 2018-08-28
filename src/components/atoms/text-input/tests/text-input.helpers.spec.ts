import "react-native";
import {
    getColour,
    getWrapperStyle
} from "../text-input.helpers";

describe("getWrapperStyle", () => {

    it("should cover all wrapper cases", () => {

        const a = getWrapperStyle({
            hasError: true,
            isFilled: false,
            isFocused: false
        });
        expect(a).toMatchSnapshot();

        const b = getWrapperStyle({
            hasError: false,
            isFilled: false,
            isFocused: true
        });
        expect(b).toMatchSnapshot();

        const c = getWrapperStyle({
            hasError: false,
            isFilled: true,
            isFocused: false
        });
        expect(c).toMatchSnapshot();

        const d = getWrapperStyle({
            hasError: true,
            isFilled: false,
            isFocused: true
        });
        expect(d).toMatchSnapshot();

        const e = getWrapperStyle({
            hasError: false,
            isFilled: true,
            isFocused: true
        });
        expect(e).toMatchSnapshot();

        const f = getWrapperStyle({
            hasError: true,
            isFilled: true,
            isFocused: true
        });
        expect(f).toMatchSnapshot();

        const g = getWrapperStyle({
            hasError: false,
            isFilled: false,
            isFocused: false
        });
        expect(g).toMatchSnapshot();
    });
});

describe("getColour", () => {

    it("should cover all colour cases", () => {
        const a = getColour({
            hasError: false,
            hasValue: false
        });
        expect(a).toMatchSnapshot();

        const b = getColour({
            hasError: true,
            hasValue: false
        });
        expect(b).toMatchSnapshot();

        const c = getColour({
            hasError: false,
            hasValue: true
        });
        expect(c).toMatchSnapshot();

        const d = getColour({
            hasError: true,
            hasValue: true
        });
        expect(d).toMatchSnapshot();
    });
});
