import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Mail from "../mail";

describe("Mail SVG", () => {

    it("should render without props", () => {
        const actual = shallow(
            <Mail />
        );

        expect(actual).toMatchSnapshot();
    });
});
