import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Blurb from "../blurb";

describe("Blurb", () => {

    it("should render", () => {
        const actual = shallow(
            <Blurb
                label="test"
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
