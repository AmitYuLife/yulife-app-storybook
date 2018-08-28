import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import OuterShadow from "../outer-shadow";

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
