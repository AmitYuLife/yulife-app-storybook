import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import NoAccessScreen from "../no-access.screen";

describe("NoAccessScreen", () => {
    it("should render", () => {
        const actual = shallow(<NoAccessScreen />);

        expect(actual).toMatchSnapshot();
    });
});
