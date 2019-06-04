import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Frame35 from "../35";

describe("Frame35", () => {
    it("should render", () => {
        const actual = shallow(<Frame35 />);

        expect(actual).toMatchSnapshot();
    });
});
