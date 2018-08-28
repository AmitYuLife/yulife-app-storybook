import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import UpperInnerShadow from "../upper-inner-shadow";

describe("UpperInnerShadow", () => {

    it("should render", () => {
        const actual = shallow(
            <UpperInnerShadow />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as grayscale", () => {
        const actual = shallow(
            <UpperInnerShadow
                isGrayScale={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
