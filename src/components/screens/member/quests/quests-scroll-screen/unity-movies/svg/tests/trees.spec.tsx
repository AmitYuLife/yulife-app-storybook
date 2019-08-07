import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Trees from "../trees";

describe("Trees", () => {
    it("should render", () => {
        const actual = shallow(<Trees />);

        expect(actual).toMatchSnapshot();
    });
});
