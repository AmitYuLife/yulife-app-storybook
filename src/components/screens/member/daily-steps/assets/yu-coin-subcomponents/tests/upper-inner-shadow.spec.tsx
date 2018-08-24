import "react-native";
import * as React from "react";
import UpperInnerShadow from "../upper-inner-shadow";
import { shallow } from "enzyme";

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
