import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Back from "../back";

describe("Back", () => {
    it("should render ", () => {
        const actual = shallow(<Back />);

        expect(actual).toMatchSnapshot();
    });
});
