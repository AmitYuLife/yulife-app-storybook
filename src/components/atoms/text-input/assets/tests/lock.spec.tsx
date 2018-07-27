import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Lock from "../lock";

describe("Lock SVG", () => {

    it("should render without props", () => {

        const actual = shallow(<Lock />);

        expect(actual).toMatchSnapshot();
    });
});
