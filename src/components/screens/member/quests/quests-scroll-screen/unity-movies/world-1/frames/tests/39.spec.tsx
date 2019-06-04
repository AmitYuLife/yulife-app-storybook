import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Frame39 from "../39";

describe("Frame39", () => {
    it("should render", () => {
        const actual = shallow(<Frame39 />);

        expect(actual).toMatchSnapshot();
    });
});
