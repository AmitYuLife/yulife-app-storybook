import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Corals from "../corals";

describe("Corals", () => {
    it("should render", () => {
        const actual = shallow(<Corals />);

        expect(actual).toMatchSnapshot();
    });
});
