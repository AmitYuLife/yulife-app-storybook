import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { Delivered, Failed, Pending } from "../card-states";

describe("Delivered", () => {
    it("should render ", () => {
        const actual = shallow(<Delivered />);

        expect(actual).toMatchSnapshot();
    });
});

describe("Failed", () => {
    it("should render ", () => {
        const actual = shallow(<Failed />);

        expect(actual).toMatchSnapshot();
    });
});

describe("Failed", () => {
    it("should render ", () => {
        const actual = shallow(<Pending />);

        expect(actual).toMatchSnapshot();
    });
});
