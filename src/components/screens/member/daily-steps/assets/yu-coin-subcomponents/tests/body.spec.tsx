import "react-native";
import * as React from "react";
import Body from "../body";
import { shallow } from "enzyme";

describe("Body", () => {

    it("should render", () => {
        const actual = shallow(
            <Body />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as grayscale", () => {
        const actual = shallow(
            <Body
                isGrayScale={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
