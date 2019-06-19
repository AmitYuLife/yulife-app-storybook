import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import RedCircle from "../red-circle";

describe("RedCircle", () => {
    it("should render", () => {
        const actual = shallow(<RedCircle />);

        expect(actual).toMatchSnapshot();
    });
});
