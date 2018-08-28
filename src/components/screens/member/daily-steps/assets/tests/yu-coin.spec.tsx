import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import YuCoin from "../yu-coin";

describe("YuCoin", () => {

    it("should render as default", () => {
        const actual = shallow(
            <YuCoin />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as grayscale", () => {
        const actual = shallow(
            <YuCoin
                isGrayScale={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when loading", () => {
        const actual = shallow(
            <YuCoin
                isLoading={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
