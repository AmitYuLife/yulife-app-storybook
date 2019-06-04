import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import WegiftConfirmedScreen from "../wegift-confirmed.screen";

const defaultProps = {
    coins: 200,
    description: "test",
    imageUrl: "",
    isLoadingConfirmAction: false,
    purchaseDate: "29 May 2019",
    redeemInstructions: ["Test instruction1"],
    rewardName: "test reward",
    validDate: "29 May 2021",
    onPressCancel: jest.fn(),
    onPressConfirm: jest.fn(),
    onPressPolicy: jest.fn(),
    onPressTerms: jest.fn(),
    onPressTopBar: jest.fn()
};

describe("WegiftConfirmedScreen", () => {
    it("should render", () => {
        const actual = shallow(<WegiftConfirmedScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
