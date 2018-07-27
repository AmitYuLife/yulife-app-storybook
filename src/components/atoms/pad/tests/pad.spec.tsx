import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Pad from "../pad";

describe("Pad", () => {

    it("should render without props", () => {

        const actual = shallow(<Pad />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with only a height prop", () => {

        const actual = shallow(<Pad height={50} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with only a width prop", () => {

        const actual = shallow(<Pad width={100} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with both height and width props", () => {

        const actual = shallow(
            <Pad height={50} width={50} />
        );

        expect(actual).toMatchSnapshot();
    });
});
