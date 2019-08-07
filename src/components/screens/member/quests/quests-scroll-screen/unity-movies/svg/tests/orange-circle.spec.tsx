import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import OrangeCircle from "../orange-circle";

describe("OrangeCircle", () => {
    it("should render", () => {
        const actual = shallow(<OrangeCircle />);

        expect(actual).toMatchSnapshot();
    });
});
