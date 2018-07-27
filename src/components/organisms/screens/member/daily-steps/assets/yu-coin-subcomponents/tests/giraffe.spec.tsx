import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Giraffe from "../giraffe";

describe("Giraffe", () => {

    it("should render", () => {

        const actual = shallow(<Giraffe />);

        expect(actual).toMatchSnapshot();
    });
});
