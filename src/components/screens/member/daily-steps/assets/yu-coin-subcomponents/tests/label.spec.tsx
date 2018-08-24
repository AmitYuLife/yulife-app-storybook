import "react-native";
import * as React from "react";
import Label from "../label";
import { shallow } from "enzyme";

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
