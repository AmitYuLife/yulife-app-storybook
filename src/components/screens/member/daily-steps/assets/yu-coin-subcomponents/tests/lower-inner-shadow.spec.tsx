import "react-native";
import * as React from "react";
import LowerInnerShadow from "../lower-inner-shadow";
import { shallow } from "enzyme";

describe("LowerInnerShadow", () => {

    it("should render", () => {
        const actual = shallow(
            <LowerInnerShadow />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as grayscale", () => {
        const actual = shallow(
            <LowerInnerShadow
                isGrayScale={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
