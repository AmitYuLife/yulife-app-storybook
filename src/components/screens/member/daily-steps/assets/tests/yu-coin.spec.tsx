import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import YuCoin from "../yu-coin";

describe("YuCoin", () => {

    it("should render", () => {

        const actual = shallow(<YuCoin />);

        expect(actual).toMatchSnapshot();
    });
});
