import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Label from "../label";

describe("Label", () => {

    it("should render", () => {
        const actual = shallow(
            <Label />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as grayscale", () => {
        const actual = shallow(
            <Label
                isGrayScale={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
