import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Notification from "../notification";

describe("Notification", () => {
    it("should render", () => {
        const actual = shallow(<Notification isVisible={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should not render when not visible", () => {
        const actual = shallow(<Notification isVisible={false} />);

        expect(actual).toMatchSnapshot();
    });
});
