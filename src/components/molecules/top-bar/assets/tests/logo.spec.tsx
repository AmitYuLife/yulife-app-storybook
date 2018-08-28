import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Logo from "../logo";

describe("Logo", () => {

    it("should render", () => {
        const actual = shallow(
            <Logo />
        );

        expect(actual).toMatchSnapshot();
    });
});
