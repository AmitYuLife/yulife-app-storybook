import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Plus from "../plus";

describe("Plus SVG", () => {

    it("should render without props", () => {
        const actual = shallow(
            <Plus />
        );

        expect(actual).toMatchSnapshot();
    });
});
