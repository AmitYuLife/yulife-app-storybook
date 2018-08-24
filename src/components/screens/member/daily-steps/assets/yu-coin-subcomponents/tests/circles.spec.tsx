import "react-native";
import * as React from "react";
import Circles from "../circles";
import { shallow } from "enzyme";

describe("Circles", () => {

    it("should render", () => {
        const actual = shallow(
            <Circles />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as grayscale", () => {
        const actual = shallow(
            <Circles
                isGrayScale={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
