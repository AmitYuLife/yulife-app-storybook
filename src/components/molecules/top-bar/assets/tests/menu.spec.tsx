import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Menu from "../menu";

describe("Menu", () => {

    it("should render", () => {

        const actual = shallow(<Menu />);

        expect(actual).toMatchSnapshot();
    });
});
