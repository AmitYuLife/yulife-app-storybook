import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Pyramid from "../pyramid";

describe("Pyramid", () => {
    it("should render", () => {
        const actual = shallow(<Pyramid />);

        expect(actual).toMatchSnapshot();
    });
});
