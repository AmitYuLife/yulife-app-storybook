import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Mountain from "../mountain";

describe("Mountain", () => {
    it("should render", () => {
        const actual = shallow(<Mountain />);

        expect(actual).toMatchSnapshot();
    });
});
