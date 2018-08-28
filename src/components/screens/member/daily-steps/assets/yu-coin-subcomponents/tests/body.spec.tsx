import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Body from "../body";

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
