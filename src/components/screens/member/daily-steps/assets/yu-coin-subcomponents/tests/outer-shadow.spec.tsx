import "react-native";
import * as React from "react";
import OuterShadow from "../outer-shadow";
import { shallow } from "enzyme";

describe("OuterShadow", () => {

    it("should render", () => {
        const actual = shallow(
            <OuterShadow />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as grayscale", () => {
        const actual = shallow(
            <OuterShadow
                isGrayScale={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
