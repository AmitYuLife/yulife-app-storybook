import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Static from "../static";

describe("Static", () => {

    it("should render", () => {
        const actual = shallow(
            <Static />
        );

        expect(actual).toMatchSnapshot();
    });
});
