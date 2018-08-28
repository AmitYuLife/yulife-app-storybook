import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Close from "../close";

describe("Close", () => {

    it("should render the close button", () => {
        const actual = shallow(
            <Close />
        );

        expect(actual).toMatchSnapshot();
    });
});
