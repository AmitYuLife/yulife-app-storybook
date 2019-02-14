import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Lines from "../lines";

const colourScheme = { active: "#FFFFFF", inactive: "#DDDDDD", pressed: "#EEEEEE" };

describe("Lines", () => {
    it("should render for index 0", () => {
        const actual = shallow(<Lines colourScheme={colourScheme} activeIndex={0} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render for index 1", () => {
        const actual = shallow(<Lines colourScheme={colourScheme} activeIndex={1} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render for index 2", () => {
        const actual = shallow(<Lines colourScheme={colourScheme} activeIndex={2} />);

        expect(actual).toMatchSnapshot();
    });
});
